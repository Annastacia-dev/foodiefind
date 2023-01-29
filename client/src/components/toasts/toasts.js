import { toast } from "react-toastify"

export const sucessToast = () => toast.success('You have successfully signed up!', {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
})