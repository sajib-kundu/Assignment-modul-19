import { toast, Toaster } from 'react-hot-toast';



class validationHelper {
    isEmpty(value) {
        if (value.length === 0) {
            return true;
        } else {
            return false;
        }

    }

    SuccessToast(msg) {
        toast.success(msg);

    }

    ErrorToast(msg) {
        toast.error(msg);
    }


}
export const {isEmpty,SuccessToast,ErrorToast} = new validationHelper();
