import React from 'react';
import classNames from 'classnames';
import { Formik, Form, Field } from 'formik';
import {
    Timeline,
    Input,
    Button,
    Table,
    Icon,
    Modal,
    ThemedScrollbars,
    DesktopWrapper,
    MobileWrapper,
    Clipboard,
    Loading,
} from '@deriv/components';
import ObjectUtils from '@deriv/shared/utils/object';
import DateUtils from '@deriv/shared/utils/date';
import { localize } from '@deriv/translations';
import { WS } from 'Services/ws-methods';
import { connect } from 'Stores/connect';
import DemoMessage from 'Components/demo-message';
import LoadErrorMessage from 'Components/load-error-message';
import Article from './article.jsx';
import Card from './card.jsx';

class ApiToken extends React.Component {
    state = {
        api_tokens: [],
        is_loading: true,
        is_success: false,
        error_message: '',
        show_delete: false,
        dispose_token: '',
        is_delete_loading: false,
        is_delete_success: false,
    };

    initial_form = {
        token_name: '',
        read: true,
        trade: false,
        payments: false,
        admin: false,
        trading_information: false,
    };

    validateFields = (values) => {
        const errors = {};

        const token_name = values.token_name && values.token_name.trim();

        if (!token_name) {
            errors.token_name = localize('Please enter a token name.');
        } else if (token_name.length < 2 || token_name.length > 32) {
            errors.token_name = localize('Length of token name must be between 2 and 32 characters.');
        } else if (!/^[A-Za-z0-9\s_]+$/g.test(token_name)) {
            errors.token_name = localize('Only letters, numbers, and underscores are allowed.');
        }

        return errors;
    };

    formatTokenScopes = (str) => {
        const string = str || '';
        const replace_filter = string.replace(/-|_/g, ' ');
        const sentenced_case = replace_filter[0].toUpperCase() + replace_filter.slice(1).toLowerCase();

        return sentenced_case;
    };

    getScopeValue = (token) => {
        const titled_scopes = token.scopes.map((scope) => this.formatTokenScopes(scope));
        const mapped_scopes = titled_scopes.length === 5 ? localize('All') : titled_scopes.join(', ');
        const date_format = token.last_used ? DateUtils.formatDate(token.last_used, 'DD/MM/YYYY') : localize('Never');

        return {
            display_name: token.display_name,
            scopes: mapped_scopes,
            last_used: date_format,
            token: token.token,
        };
    };

    handleSubmit = async (values, { setSubmitting, setFieldError, resetForm }) => {
        const new_token_scopes = Object.keys(values).filter((item) => item !== 'token_name' && values[item]);
        if (new_token_scopes.length) {
            const request = {
                api_token: 1,
                new_token: values.token_name,
                new_token_scopes,
            };

            const token_response = await WS.apiToken(request);
            if (token_response.error) {
                setFieldError('token_name', token_response.error.message);
            } else {
                this.setState({
                    is_success: true,
                    api_tokens: ObjectUtils.getPropertyValue(token_response, ['api_token', 'tokens']),
                });
                setTimeout(() => {
                    this.setState({ is_success: false });
                }, 500);
            }
            resetForm();
        } else {
            setFieldError('token_name', localize('Must choose at least one scope'));
        }

        setSubmitting(false);
    };

    populateTokenResponse = (response) => {
        if (response.error) {
            this.setState({
                is_loading: false,
                error_message: ObjectUtils.getPropertyValue(response, ['error', 'message']),
            });
        } else {
            this.setState({
                is_loading: false,
                api_tokens: ObjectUtils.getPropertyValue(response, ['api_token', 'tokens']),
            });
        }
    };

    getApiTokens = async () => {
        const token_response = await WS.authorized.apiToken({ api_token: 1 });
        this.populateTokenResponse(token_response);
    };

    deleteToken = async (token) => {
        this.setState({ is_delete_loading: true });
        const token_response = await WS.authorized.apiToken({ api_token: 1, delete_token: token });
        this.populateTokenResponse(token_response);
        this.setState({ is_delete_loading: false, is_delete_success: true });
        setTimeout(() => {
            this.closeDialog();
            this.setState({ is_delete_success: false });
        }, 500);
    };

    showDialog = (token) => {
        this.setState({ dispose_token: token, show_delete: true });
    };

    closeDialog = () => {
        this.setState({ dispose_token: '', show_delete: false });
    };

    componentDidMount() {
        const { is_virtual } = this.props;
        if (is_virtual) {
            this.setState({ is_loading: false });
        } else {
            this.getApiTokens();
        }
    }

    componentWillUnmount() {
        this.setState({ dispose_token: '' });
    }

    render() {
        const {
            api_tokens,
            is_loading,
            is_success,
            error_message,
            show_delete,
            dispose_token,
            is_delete_loading,
            is_delete_success,
        } = this.state;
        const { is_virtual, is_switching } = this.props;

        if (is_virtual) return <DemoMessage />;

        if (is_loading || is_switching) return <Loading is_fullscreen={false} className='account___intial-loader' />;

        if (error_message) return <LoadErrorMessage error_message={error_message} />;

        return (
            <section className='api-token'>
                <Modal className='api_token__modal' is_open={show_delete} has_close_icon={false}>
                    <div className='api-token__popup'>
                        <Icon icon='IcRemoveToken' className='api-token__popup-image' />
                        <h4 className='api-token__popup-header'>{localize('Confirm delete token?')}</h4>
                        <div className='api-token__popup-buttons'>
                            <Button type='button' secondary large onClick={this.closeDialog}>
                                {localize('Back')}
                            </Button>
                            <Button
                                type='button'
                                is_loading={is_delete_loading}
                                is_submit_success={is_delete_success}
                                primary
                                large
                                text={localize('Confirm')}
                                onClick={() => this.deleteToken(dispose_token)}
                            />
                        </div>
                    </div>
                </Modal>
                <div className='api-token__wrapper'>
                    <ThemedScrollbars className='api-token__scrollbars'>
                        <MobileWrapper>
                            <Article />
                        </MobileWrapper>
                        <Formik
                            initialValues={this.initial_form}
                            onSubmit={this.handleSubmit}
                            validate={this.validateFields}
                        >
                            {({
                                values,
                                errors,
                                isValid,
                                touched,
                                handleChange,
                                handleBlur,
                                isSubmitting,
                                setFieldValue,
                            }) => (
                                <Form noValidate>
                                    <Timeline className='api-token__timeline'>
                                        <Timeline.Item title={localize('Select scopes based on the access you need.')}>
                                            <div className='api-token__checkbox-wrapper'>
                                                <Card
                                                    name='read'
                                                    value={values.read}
                                                    setFieldValue={setFieldValue}
                                                    display_name={localize('Read')}
                                                    description={localize(
                                                        'View account activity such as settings, limits, balance sheets, trade purchase history, and more.'
                                                    )}
                                                />
                                                <Card
                                                    name='trade'
                                                    value={values.trade}
                                                    display_name={localize('Trade')}
                                                    setFieldValue={setFieldValue}
                                                    description={localize(
                                                        'Buy and sell contracts, renew expired purchases, and top up demo accounts.'
                                                    )}
                                                />
                                                <Card
                                                    name='payments'
                                                    value={values.payments}
                                                    display_name={localize('Payments')}
                                                    setFieldValue={setFieldValue}
                                                    description={localize(
                                                        'Withdraw to payment agents, transfer funds between accounts, and set/clear cashier passwords.'
                                                    )}
                                                />
                                                <Card
                                                    name='admin'
                                                    value={values.admin}
                                                    display_name={localize('Admin')}
                                                    setFieldValue={setFieldValue}
                                                    description={localize(
                                                        'Open accounts, manage settings, manage token usage, and more.'
                                                    )}
                                                />
                                                <Card
                                                    name='trading_information'
                                                    value={values.trading_information}
                                                    display_name={localize('Trading information')}
                                                    setFieldValue={setFieldValue}
                                                    description={localize('View the trading history.')}
                                                />
                                            </div>
                                        </Timeline.Item>
                                        <Timeline.Item
                                            title={localize(
                                                "Name your token and click on 'Create' to generate your token."
                                            )}
                                        >
                                            <div className='api-token__input-group'>
                                                <Field name='token_name'>
                                                    {({ field }) => (
                                                        <Input
                                                            {...field}
                                                            data-lpignore='true'
                                                            type='text'
                                                            className='api-token__input'
                                                            label={localize('Token name')}
                                                            value={values.token_name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            hint={localize(
                                                                'Length of token name must be between 2 and 32 characters.'
                                                            )}
                                                            required
                                                            error={touched.token_name && errors.token_name}
                                                        />
                                                    )}
                                                </Field>
                                                <Button
                                                    className={classNames('api-token__button', {
                                                        'api-token__button--success': is_success,
                                                    })}
                                                    type='submit'
                                                    is_disabled={isSubmitting || !isValid}
                                                    has_effect
                                                    is_loading={isSubmitting}
                                                    is_submit_success={is_success}
                                                    text={localize('Create')}
                                                    primary
                                                    large
                                                />
                                            </div>
                                        </Timeline.Item>

                                        <Timeline.Item title={localize('Copy and paste the token into the app.')}>
                                            <DesktopWrapper>
                                                <Table>
                                                    <Table.Header>
                                                        <Table.Row className='api-token__table-row'>
                                                            <Table.Head>{localize('Name')}</Table.Head>
                                                            <Table.Head>{localize('Token')}</Table.Head>
                                                            <Table.Head>{localize('Scopes')}</Table.Head>
                                                            <Table.Head>{localize('Last used')}</Table.Head>
                                                            <Table.Head>{localize('Action')}</Table.Head>
                                                        </Table.Row>
                                                    </Table.Header>
                                                    <Table.Body>
                                                        {api_tokens.map((token_data, idx) => {
                                                            const token = this.getScopeValue(token_data);
                                                            return (
                                                                <Table.Row key={idx} className='api-token__table-row'>
                                                                    <Table.Cell>{token.display_name}</Table.Cell>
                                                                    <Table.Cell>
                                                                        <div className='api-token__clipboard-wrapper'>
                                                                            <span>{token.token}</span>
                                                                            <Clipboard
                                                                                text_copy={token.token}
                                                                                info_message={localize(
                                                                                    'Click here to copy token'
                                                                                )}
                                                                                success_message={localize(
                                                                                    'Token copied!'
                                                                                )}
                                                                                className='api-token__clipboard'
                                                                            />
                                                                        </div>
                                                                    </Table.Cell>
                                                                    <Table.Cell>{token.scopes}</Table.Cell>
                                                                    <Table.Cell>{token.last_used}</Table.Cell>
                                                                    <Table.Cell>
                                                                        <Button
                                                                            type='button'
                                                                            secondary
                                                                            small
                                                                            onClick={() => this.showDialog(token.token)}
                                                                        >
                                                                            {localize('Delete')}
                                                                        </Button>
                                                                    </Table.Cell>
                                                                </Table.Row>
                                                            );
                                                        })}
                                                    </Table.Body>
                                                </Table>
                                            </DesktopWrapper>
                                            <MobileWrapper>
                                                {api_tokens.map((token_data, idx) => {
                                                    const token = this.getScopeValue(token_data);
                                                    return (
                                                        <div key={idx} className='api-token__scope'>
                                                            <div className='api-token__scope-item'>
                                                                <div>
                                                                    <h5 className='api-token__scope--title'>
                                                                        {localize('Name')}
                                                                    </h5>
                                                                    <p className='api-token__scope--text'>
                                                                        {token.display_name}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className='api-token__scope-item'>
                                                                <div>
                                                                    <h5 className='api-token__scope--title'>
                                                                        {localize('Token')}
                                                                    </h5>
                                                                    <p className='api-token__scope--text'>
                                                                        <div className='api-token__clipboard-wrapper'>
                                                                            <span>{token.token}</span>
                                                                            <Clipboard token={token.token} />
                                                                        </div>
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <h5 className='api-token__scope--title'>
                                                                        {localize('Last Used')}
                                                                    </h5>
                                                                    <p className='api-token__scope--text'>
                                                                        {token.last_used}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className='api-token__scope-item'>
                                                                <div>
                                                                    <h5 className='api-token__scope--title'>
                                                                        {localize('Scope')}
                                                                    </h5>
                                                                    <p className='api-token__scope--text'>
                                                                        {token.scopes}
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <Button
                                                                        type='button'
                                                                        secondary
                                                                        small
                                                                        onClick={() => this.showDialog(token.token)}
                                                                    >
                                                                        {localize('Delete')}
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </MobileWrapper>
                                        </Timeline.Item>
                                    </Timeline>
                                </Form>
                            )}
                        </Formik>
                    </ThemedScrollbars>
                    <DesktopWrapper>
                        <Article />
                    </DesktopWrapper>
                </div>
            </section>
        );
    }
}

export default connect(({ client }) => ({
    is_virtual: client.is_virtual,
    is_switching: client.is_switching,
}))(ApiToken);
