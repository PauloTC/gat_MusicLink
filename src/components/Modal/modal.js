import React, { useEffect } from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import Slide from "@material-ui/core/Slide"
import { Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import felicitacionesImg from "../../images/felicitaciones.png"
import { Link } from 'gatsby'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const useStyles = makeStyles({
  button: {
    width: 160,
    textTransform: "capitalize",
  },
  wrapper: {
    textAlign: "right",
  },
  buttonModal: {
    width: 350,
    textTransform: "capitalize",
  },
  to: {
    color: "#fff !important",
    textDecoration: "none",
    textTransform: "capitalize",
    width: "100%",
  }
})

export default function AlertDialogSlide(props) {
  useEffect(() => {
    console.log(props)
  }, [])

  // const handleClickOpen = () => {
  // 	setOpen(true);
  // };

  const handleClose = () => {
    console.log("false")
  }
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <Dialog
        fullWidth
        open={props.openModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className={classes.dialog}
      >
        <Box overflow="hidden" py={10} textAlign="center">
          <Box mb={5}>
            <img alt="felcitaciones" src={felicitacionesImg} width="142" />
          </Box>
          <Typography>
            <Box
              lineHeight="100%"
              fontWeight={600}
              textAlign="center"
              fontSize={28}
            >
              ¡Felicidades! Tu postulación a{" "}
            </Box>
            <Box mb={1} fontWeight={600} textAlign="center" fontSize={28}>
              Musiclink está siendo evaluada.
            </Box>
          </Typography>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <Box textAlign="center">
                <Typography variant="subtitle2">
                  <Box> Pronto te escribiremos al correo: </Box>
                  <Box>dgventura@gmail.com. </Box>
                  <Box mt={1} mb={3}>
                    ¡Muchas vibras!
                  </Box>
                </Typography>
              </Box>
            </DialogContentText>
          </DialogContent>
          <Box textAlign="center">
            <Button
              className={classes.buttonModal}
              onClick={handleClose}
              variant="contained"
              color="primary"
            >
              <Link className={classes.to} to="subir-archivos">
                De acuerdo
              </Link>
            </Button>
          </Box>
        </Box>
      </Dialog>
    </div>
  )
}
