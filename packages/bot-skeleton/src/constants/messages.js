export const unrecoverable_errors = [
    'InsufficientBalance',
    'CustomLimitsReached',
    'OfferingsValidationError',
    'InvalidCurrency',
    'ContractBuyValidationError',
    'NotDefaultCurrency',
    'PleaseAuthenticate',
    'FinancialAssessmentRequired',
    'PositiveNumberExpected',
    'OptionError',
    'IncorrectPayoutDecimals',
    'IncorrectStakeDecimals',
    'NoMFProfessionalClient',
    'AuthorizationRequired',
    'InvalidToken',
];

export const message_types = Object.freeze({
    ERROR: 'error',
    NOTIFY: 'notify',
    SUCCESS: 'success',
    COMPONENT: 'component',
});

export const error_types = Object.freeze({
    RECOVERABLE_ERRORS: 'recoverable_errors',
    UNRECOVERABLE_ERRORS: 'unrecoverable_errors',
});

export const log_types = Object.freeze({
    LOAD_BLOCK: 'block_loaded',
    PURCHASE: 'purchase',
    SELL: 'sell',
    NOT_OFFERED: 'not_offered',
    PROFIT: 'profit',
    LOST: 'lost',
});
