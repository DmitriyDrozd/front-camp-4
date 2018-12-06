import errorHandlerPopup from "../components/ErrorHandlerPopup";

class ErrorHandler {
    constructor (error) {
        this.importPopup(error);
    }

    async importPopup (error) {
        import(/* webpackChunkName: "ErrorHandlerPopup" */ 'styles/_popup.scss');
        const { default: errorHandlerPopup } = await import(/* webpackChunkName: "ErrorHanlderPopup" */ 'components/ErrorHandlerPopup');

        this.errorPopup = errorHandlerPopup;
        this.errorPopup.error = error;
    }

    set error (data) {
        if (data) {
            this.errorPopup.error = data;
        } else {
            this.errorPopup.error = null;
        }
    }
}

const errorHandler = new ErrorHandler();
export default errorHandler;
