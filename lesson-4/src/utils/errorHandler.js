let ErrorHandler;
let errorHandler;

async function loadErrorHandler () {
    const { default: errorHandler } = await import(/* webpackChunkName: "ErrorHanlder" */ 'entities/ErrorHandler.class');

    return errorHandler;
}

async function handleServerError (error) {
    const { status, code, message } = await error.json();

    if (status === 'error') {
        const error = { code, message };

        if (!ErrorHandler) {
            errorHandler = await loadErrorHandler();
        }

        errorHandler.error = error;
    }
}

export {
    handleServerError,
}
