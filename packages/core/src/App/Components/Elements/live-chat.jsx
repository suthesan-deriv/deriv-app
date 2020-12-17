import React from 'react';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import { connect } from 'Stores/connect';
import { Popover, Icon } from '@deriv/components';
import { localize } from '@deriv/translations';
import { livechat_license_id } from '@deriv/shared';

const LiveChat = ({ is_mobile_drawer, has_cookie_account }) => {
    // Initialization code provided by Livechat
    const liveChatInitialization = () =>
        new Promise(resolve => {
            window.__lc = window.__lc || {}; // eslint-disable-line no-underscore-dangle
            window.__lc.license = livechat_license_id; // eslint-disable-line no-underscore-dangle
            (function (n, t, c) {
                // eslint-disable-next-line no-shadow
                function i(n) {
                    // eslint-disable-next-line no-underscore-dangle
                    return e._h ? e._h.apply(null, n) : e._q.push(n);
                }
                // eslint-disable-next-line
                var e = {
                    _q: [],
                    _h: null,
                    _v: '2.0',
                    on() {
                        // eslint-disable-next-line prefer-rest-params
                        i(['on', c.call(arguments)]);
                    },
                    once() {
                        // eslint-disable-next-line prefer-rest-params
                        i(['once', c.call(arguments)]);
                    },
                    off() {
                        // eslint-disable-next-line prefer-rest-params
                        i(['off', c.call(arguments)]);
                    },
                    get() {
                        if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load."); // eslint-disable-line no-underscore-dangle
                        // eslint-disable-next-line prefer-rest-params
                        return i(['get', c.call(arguments)]);
                    },
                    call() {
                        // eslint-disable-next-line prefer-rest-params
                        i(['call', c.call(arguments)]);
                    },
                    init() {
                        // eslint-disable-next-line
                        var n = t.createElement('script');
                        // eslint-disable-next-line no-unused-expressions
                        (n.async = !0), // eslint-disable-line no-sequences
                            (n.type = 'text/javascript'),
                            (n.src = 'https://cdn.livechatinc.com/tracking.js'),
                            t.head.appendChild(n);
                    },
                };
                // eslint-disable-next-line no-unused-expressions
                !n.__lc.asyncInit && e.init(); // eslint-disable-line no-underscore-dangle
                n.LiveChatWidget = n.LiveChatWidget || e;
            })(window, document, [].slice); //eslint-disable-line
            resolve();
        });

    const [is_livechat_interactive, setLiveChatInteractive] = React.useState(false);
    const [reload, setReload] = React.useState(false);
    const history = useHistory();

    React.useEffect(() => {
        history.listen(handleHistoryChange);
        if (window.LiveChatWidget) {
            window.LiveChatWidget.on('ready', () => {
                setLiveChatInteractive(true);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        if (has_cookie_account) {
            liveChatSetup(true);
        } else {
            liveChatSetup(false);
        }
    }, [has_cookie_account]);

    React.useEffect(() => {
        if (reload === true) {
            if (has_cookie_account) {
                liveChatSetup(true);
            } else {
                liveChatSetup(false);
            }
            setReload(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reload]);

    const liveChatSetup = is_logged_in => {
        if (window.LiveChatWidget) {
            window.LiveChatWidget.on('ready', () => {
                let session_variables = {
                    loginid: '',
                    landing_company_shortcode: '',
                    currency: '',
                    residence: '',
                    email: '',
                };
                if (is_logged_in) {
                    // client logged in
                    const domain = window.location.hostname.includes('deriv.com') ? 'deriv.com' : 'binary.sx';
                    const client_information = Cookies.get('client_information', {
                        domain,
                    });
                    if (client_information) {
                        const {
                            loginid,
                            email,
                            landing_company_shortcode,
                            currency,
                            residence,
                            first_name,
                            last_name,
                        } = JSON.parse(client_information) || {};
                        session_variables = {
                            ...(loginid && { loginid }),
                            ...(landing_company_shortcode && { landing_company_shortcode }),
                            ...(currency && { currency }),
                            ...(residence && { residence }),
                            ...(email && { email }),
                        };
                        // prefill name and email fields
                        window.LiveChatWidget.call('set_session_variables', session_variables);
                        window.LiveChatWidget.call('set_customer_email', email);
                        window.LiveChatWidget.call('set_customer_name', `${first_name} ${last_name}`);
                        // prefill name and email fields after chat has ended
                        window.LC_API.on_chat_ended = () => {
                            window.LiveChatWidget.call('set_customer_email', email);
                            window.LiveChatWidget.call('set_customer_name', `${first_name} ${last_name}`);
                        };
                    }
                } else {
                    // client not logged in
                    // clear name and email fields
                    window.LiveChatWidget.call('set_customer_email', ' ');
                    window.LiveChatWidget.call('set_customer_name', ' ');
                    // clear name and email fields after chat has ended
                    window.LC_API.on_chat_ended = () => {
                        window.LiveChatWidget.call('set_customer_email', ' ');
                        window.LiveChatWidget.call('set_customer_name', ' ');
                    };
                }
            });
        }
    };

    const handleHistoryChange = () => {
        if (window.LiveChatWidget) {
            window.LiveChatWidget.on('ready', () => {
                if (window.LiveChatWidget.get('customer_data').status !== 'chatting') {
                    setLiveChatInteractive(false);
                    window.LiveChatWidget.call('destroy');
                    liveChatInitialization().then(() => {
                        setReload(true);
                        setLiveChatInteractive(true);
                        setReload(false);
                    });
                }
            });
        }
    };

    return (
        <>
            {is_livechat_interactive && (
                <>
                    {is_mobile_drawer ? (
                        <div
                            className='livechat gtm-deriv-livechat'
                            onClick={() => {
                                window.LiveChatWidget.call('maximize');
                            }}
                        >
                            <div className='livechat__icon-wrapper'>
                                <Icon icon='IcLiveChat' className='livechat__icon' />
                            </div>
                            <p className='livechat__title'>{localize('Live chat')}</p>
                        </div>
                    ) : (
                        <Popover
                            className='footer__link'
                            classNameBubble='help-centre__tooltip'
                            alignment='top'
                            message={localize('Live chat')}
                        >
                            <Icon
                                icon='IcLiveChat'
                                className='footer__icon gtm-deriv-livechat'
                                onClick={() => {
                                    window.LiveChatWidget.call('maximize');
                                }}
                            />
                        </Popover>
                    )}
                </>
            )}
        </>
    );
};

export default connect(({ client }) => ({
    has_cookie_account: client.has_cookie_account,
}))(LiveChat);
