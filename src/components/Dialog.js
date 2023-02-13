import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const agree = () => {
        props.onClickDelete();
        setOpen(false);
    };

    const disagree = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Delete
            </Button>
            <Dialog
                open={open}
                onClose={disagree}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>
                    {"Are you sure you want to remove this item?"}
                </DialogTitle>

                <DialogActions>

                    <Button onClick={agree}>Yes</Button>
                    <Button onClick={disagree} autoFocus>No</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}