import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import descIcon from '../../images/add_desc.png'

export default function DescriptionModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box position="relative" padding={4}flexDirection="column"  borderRadius={16} bgcolor="#fff" width={320}  display="flex" alignItems="center" justifyContent="center" height={320} onClick={handleClickOpen}>
        <img width={180} src={descIcon} />
        <Typography  variant="h6" >
            <Box fontSize={18} fontWeight={600} >Agregar descripción</Box>
        </Typography>
      </Box>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Describe tu formato</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Ingresa un cover de tu perfil  "
            rows={6}
            fullWidth
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
