import React, { Fragment, useState } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import {Button , MenuItem, Grid } from '@material-ui/core';

import imageG from  '../../images/greenimg.png'
import imageP from '../../images/purpleimg.png'
import imageB from '../../images/blueimg.png'

import imageBg from '../../images/fondo_2.png'
import { makeStyles } from '@material-ui/core/styles';

import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const useStyles = makeStyles({
    container: {
        height: 1080,
        width: '100%',
        overflow: 'hidden'
    },
    media: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom:0,
        height: 1080,
        width: "100%"
    },
    form: {
        background: "#fff",
        width: 434
    },
    select:{
        width: '100%'
    },
    formControl: {
        width: '100%'   
    },
    button: {
        width: '100%'
    },
    floatingform:{
        display: 'flex',
        position: 'absolute',
        bottom: 120,
        left: 80
    },
    imagecolor: {
        width: 324,
        height: 184
    }
  });

  function valuetext(value) {
    return `${value}°C`;
  }

export default function PrimaryBanner()  {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [selectedDate, handleDateChange] = useState(new Date());
    const handleChange = (event) => {
      setAge(event.target.value);
    };


    return (  
        <Fragment>
            <Box position="relative" className={ classes.container } >
                <img alt="bannersinger" src={imageBg} height="1080" />
                <div  className={ classes.floatingform } >
                    <Box p={5}  className={ classes.form }  >
                        <Box mb={3} >
                            <TextField
                                    label="¿ Qué buscas hoy ?"
                                    placeholder="Guitarrista , solita , dúo"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                            />
                        </Box>
                        <Box mb={3} >
                            <TextField
                                    label="Experiencia Músical"
                                    placeholder="Boda, cumple, quince"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                            />
                        </Box>
                        <Box mb={3} >
                            <TextField
                                    label="Lugar"
                                    placeholder="Jiron Natalio Sanchez 125 - Cercado de Lima"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                            />
                        </Box>
                        <Box mb={3} >
                            <Typography variant="subtitle2" >Precio</Typography>
                            <Slider
                                defaultValue={30}
                                getAriaValueText={valuetext}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={10}
                                marks
                                min={10}
                                max={110}
                            />
                        </Box>
                        <Box mb={3} >
                          <FormControl className={classes.formControl}>
                              <InputLabel  id="demo-simple-select-label">Generos</InputLabel>
                              <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={age}
                                  onChange={handleChange}
                              >
                              <MenuItem value={10}>Género 1</MenuItem>
                              <MenuItem value={20}>Género 2</MenuItem>
                              <MenuItem value={30}>Género 3</MenuItem>
                              </Select>
                          </FormControl>
                        </Box>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <Grid container >
                            <Grid item sm={7}>
                                <DatePicker value={selectedDate} onChange={handleDateChange} />
                            </Grid>
                            <Grid item sm={5} >
                                <TimePicker value={selectedDate} onChange={handleDateChange} />
                            </Grid>
                          </Grid>
                        </MuiPickersUtilsProvider>
                        <Box mt={5} >
                            <Button className={classes.button} variant="contained" color="primary"> Buscar </Button>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="column" >
                        <CardMedia  className={ classes.imagecolor }  image={imageG} />
                        <CardMedia  className={ classes.imagecolor }  image={imageB} />
                        <CardMedia  className={ classes.imagecolor }  image={imageP} />
                    </Box>

           
                
                </div>
               
            </Box>
        </Fragment>
    );
}