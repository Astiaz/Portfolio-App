import { useState } from "react";

export const useModal = () => {

    const [open, setOpen] = useState(false);
    const [img, setImg] = useState('');

    const handleOpen = (ref) => {
        setImg(ref);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return {
        open,
        img,
        handleOpen,
        handleClose,
    }
}
