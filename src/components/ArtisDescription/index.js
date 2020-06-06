import React ,{ Fragment } from 'react';
// import { Input, Checkbox, Button } from 'element-react';
import Solista from '../../images/Solista.png'
import Duo from '../../images/Duo.png'
import Trio from '../../images/Trio.png'
import Grupo from '../../images/Grupo.png'
import { Typography, Grid , Box, TextareaAutosize, Button, TextField } from '@material-ui/core';
import {
    makeStyles
  } from '@material-ui/core/styles';
import { ScrollTo } from "react-scroll-to";
const useStyles = makeStyles({
    textarea : {
        width: '100%',
        padding: '10px 15px',
        border: '1px solid #b0c0ca'
    },
    item: {
      listStyle: 'none',
      textAlign: 'center'
    }
});

const text = "En medio de la vegetación de un intenso verde, característica de la selva de nuestro país, se grabó el último videoclip, de gran factura, del tema “Guerra”, de la cantante Andrea Martínez, estrenado hace unas semanas. Esta canción explora una de las aristas de las relaciones tormentosas. En medio de la vegetación de un intenso verde, característica de la selva de nuestro país, se grabó el último videoclip, de gran factura, del tema “Guerra”, de la cantante Andrea Martínez, estrenado hace unas semanas. Esta canción explora una de las aristas de las relaciones tormentosas."

const formats = [
    {
        text: 'Solista',
        image: Solista
    },
    {
        text: 'Duo',
        image: Duo
    },
    {
        text: 'Trio',
        image: Trio
    },
    {
        text: 'Banda',
        image: Grupo
    },
]
const multipleSelect = [ "1 Hora" ,"2 Horas", "3 Horas", "4 Horas"]

const ArtistDescription = () => {
    const classes = useStyles();
    const multipleHours = [ "11:00 - 12:00 PM" ,"13:00 - 14:00 PM", "14:00 - 12:00 PM", "15:00 - 16:00 PM"]
    const checkboxGroup1 =  ["1 Hora"]
    return (
        <Fragment className="profile_container" >
            <Box py={5} >
              <Typography variant="h5"  >
                  <Box mb={3} component="p"  fontWeight="bold"  >Descripción</Box>
              </Typography>
              <Typography variant="subtitle1" >
                  <Box my={1} >
                  Barrio Calavera es una banda peruana que debuta en junio de 2007. Su sonido se define con la fusión del ska y sonidos populares, como la cumbia amazónica o la chicha peruanas.
                  </Box>
                  <Box my={1}>
                    El grupo está conformado por 'Skanibal', ex bajista del grupo skapunk Psicosis; 'Winsho', en la voz, directamente desde Aguaytía; 'El Negro', trajinado baterista de grupos de rock subte de los 90’s; 'Rodro', en la guitarra y coros; Dr. Shakaman, tecladista de los principales grupos de reggae nacionales y 'Mr. Latin Slave' en los timbales, recorrido músico de bandas ska.
                  </Box>
              </Typography>
              {/* <TextField
                    id="filled-multiline-static"
                    label="Descripción"
                    multiline
                    rows={6}
                    fullWidth
                    variant="outlined"
                    placeholder="ingresa una descripcion"
                    rowsMax={6}
                  /> */}
            </Box>
            <Box py={5}>
                <Typography variant="h5"  >
                    <Box mb={4} component="p"  fontWeight="bold"  >¿Que nos brinda?</Box>
                </Typography>
                <Grid  container justify="space-between" >
                    {
                        formats.map((format, index) => {
                            return (
                                <ScrollTo>
                                    {({ scroll }) => (
                                    <li onClick={() => scroll({ y: 0, smooth: true })}  className={ classes.item } >
                                        <Box  mb={3} >
                                            <img width="100" alt={format.text} src={format.image}  />
                                        </Box>
                                        <Button color="primary" variant="outlined" >{format.text} </Button>
                                    </li>
                                    )}
                                </ScrollTo>
                            )
                        })
                    }
                </Grid>
            </Box>
            <Box py={5}>
                <Typography variant="h5"  >
                    <Box mb={4} component="p"  fontWeight="bold"  >Horas</Box>
                </Typography>
                <Grid container  spacing={3} >
                  { 
                      multipleSelect.map((e , index) => {
                          return (
                            <Grid item key={index} md={6} >
                                <Button fullWidth  variant="contained" color="primary" >{ e }</Button>
                            </Grid>
                          )
                      })
                  }
                    
                </Grid>
            </Box>
            <Box py={5} >
                <Typography variant="h5"  >
                    <Box mb={4} component="p"  fontWeight="bold"  >Horarios disponibles</Box>
                </Typography>
                <Grid container  spacing={3} >
                  { 
                      multipleHours.map((e , index) => {
                          return (
                            <Grid item key={index} md={6} >
                                <Button fullWidth  variant="contained" color="primary" >{ e }</Button>
                            </Grid>
                          )
                      })
                  }
                </Grid>
            </Box>
            <Box py={5}textAlign="left" >
                <Typography gutterBottom  variant="subtitle2" > DEJA UN COMENTARIO SOBRE ESTE MÚSICO</Typography>
                <TextareaAutosize placeholder="Escribe un mensaje para tu grupo" className={ classes.textarea }  rows={5}/>
            </Box>
       
        </Fragment>
    )
}

export default ArtistDescription