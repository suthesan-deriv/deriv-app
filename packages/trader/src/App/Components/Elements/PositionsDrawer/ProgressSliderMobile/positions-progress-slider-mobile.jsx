import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { CircularProgress } from '@deriv/components';
import { connect } from 'Stores/connect';
import ProgressTicksMobile from './progress-ticks-mobile.jsx';
import { getTimePercentage } from '../helpers';
import RemainingTime from '../../../../Containers/remaining-time.jsx';

const ProgressSliderMobile = ({
    className,
    current_tick,
    is_loading,
    start_time,
    expiry_time,
    server_time,
    ticks_count,
}) => {
    const percentage = getTimePercentage(server_time, start_time, expiry_time);
    return (
        <div className={classNames('positions-progress-slider-mobile', className)}>
            {ticks_count ? (
                <ProgressTicksMobile current_tick={current_tick} ticks_count={ticks_count} />
            ) : (
                <React.Fragment>
                    <span className='positions-modal-card__remaining-time'>
                        <RemainingTime end_time={expiry_time} />
                    </span>
                    {is_loading || percentage < 1 ? (
                        // TODO: Change this behavior in mobile
                        <div className='positions-progress-slider-mobile__infinite-loader'>
                            <div className='positions-progress-slider-mobile__infinite-loader--indeterminate' />
                        </div>
                    ) : (
                        <CircularProgress
                            className='positions-modal-card__timer'
                            danger_limit={20}
                            icon='IcClockOutline'
                            progress={percentage}
                            warning_limit={50}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

ProgressSliderMobile.propTypes = {
    className: PropTypes.string,
    current_tick: PropTypes.number,
    expiry_time: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    is_loading: PropTypes.bool,
    server_time: PropTypes.object,
    start_time: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ticks_count: PropTypes.number,
};

export default connect(({ common }) => ({
    server_time: common.server_time,
}))(ProgressSliderMobile);
