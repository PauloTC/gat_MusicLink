import React from 'react';
import {Dialog, Button , Slide, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core"
export default function AlertDialog({ isOpen, onClose }) {

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
  })

  return (
      <Dialog
        open={isOpen} 
        onClose={onClose}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
      <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary">
            Disagree
          </Button>
          <Button color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
  );
}