import React from 'react'
import Layout from '../components/layout'
import BgImage from '../images/fondo_1.png'
import { 
    Typography, 
    Box, 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem, 
    Chip, 
    Input, 
    CardMedia
} from '@material-ui/core'

import { Link } from 'gatsby'

import {
    makeStyles
  } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    title:{
        color: '#fff',
        fontWeight: 'bold'
    },
    formControl : {
        width: '100%',
    },
    button: {
        height: 40,
        cursor: 'pointer',
        padding: 0
    },
    to: {
        color: "#fff !important",
        textDecoration: "none",
        textTransform: "capitalize",
        width: '100%'
    },
    boxWhite: {
        transform: "translate(-50%, -57%)"
    }
});

const names = [
    'Solista',
    'Dúo',
    'Trio',
    'Banda',
  ];
const generos = [
    'Rock',
    'Cumbia',
    'Baladas',
    'Pop',
    'Instrumental'
  ];
const formatos = [
    'Cumpleaños',
    'Concierto',
    'Boda',
    'Matrimonio',
  ];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const MusicType = ()=> {
    const classes = useStyles();
    const [personName, setPersonName] = React.useState([]);
    const [format, setFormat] = React.useState([]);
    const [gender, setGender] = React.useState([]);

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };

    const handleFormat = (event) => {
        setFormat(event.target.value);
    };

    const handleGender = (event) => {
        setGender(event.target.value);
    };
    
    return (
        <Layout>
            <CardMedia  className="backgroundImg"  image={ BgImage } />
            <Container maxWidth="xl" >
               <Box  position="absolute" left="50%" top="50%" className={classes.boxWhite} >
                  <Typography  className={ classes.title } variant="h4" >
                      <Box textAlign="center" mb={6} >¿Qué tipo de música tocas?</Box>
                      <Box fontWeight={300} fontSize={24} textAlign="center" color="#fff">Llena tus géneros, tus formatos </Box>
                      <Box fontWeight={300} fontSize={24} textAlign="center"color="#fff">y los eventos dónde te gustaría tocar</Box>
                  </Typography> 
                  <Box mt={5} borderRadius={7} p={3} bgcolor="#fff" >
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-mutiple-chip-label">Géneros</InputLabel>
                        <Select
                        labelId="demo-mutiple-chip-label"
                        id="demo-mutiple-chip"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={(selected) => (
                            <div className={classes.chips}>
                            {selected.map((value) => (
                                <Chip  key={value} label={value} className={classes.chip} />
                            ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                        >
                        {generos.map((name) => (
                            <MenuItem key={name} value={name}>
                            {name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    <Box mt={3} >
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-mutiple-chip-label">Formato</InputLabel>
                            <Select
                            labelId="demo-mutiple-chip-label"
                            id="demo-mutiple-chip"
                            multiple
                            value={format}
                            onChange={handleFormat}
                            input={<Input id="select-multiple-chip" />}
                            renderValue={(selected) => (
                                <div className={classes.chips}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                ))}
                                </div>
                            )}
                            MenuProps={MenuProps}
                            >
                            {names.map((name) => (
                                <MenuItem key={name} value={name}>
                                {name}
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box mt={3} >
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-mutiple-chip-label">Eventos</InputLabel>
                            <Select
                            labelId="demo-mutiple-chip-label"
                            id="demo-mutiple-chip"
                            multiple
                            value={gender}
                            onChange={handleGender}
                            input={<Input id="select-multiple-chip" />}
                            renderValue={(selected) => (
                                <div className={classes.chips}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                ))}
                                </div>
                            )}
                            MenuProps={MenuProps}
                            >
                            {formatos.map((name) => (
                                <MenuItem key={name} value={name}>
                                {name}
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box mt={8} >
                        <Button fullWidth className={ classes.button  } variant="contained" color="primary"> 
                            <Link className={ classes.to } to="/experiencia" >Continuar</Link>
                        </Button>
                    </Box>
                  </Box>
               </Box>
            </Container>
        </Layout>
    )
}

export default MusicType