import React from 'react';
import { Button, Box, Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider';

const ArtistContract = () => (
    <Box mt={10} p={5} borderRadius={16} boxShadow=" 0 46px 113px -11px rgba(60, 89, 89, 0.22)" >
       <Typography variant="h5"  >
          <Box mb={4} component="p"  fontWeight="bold"  >Detalle del contrato</Box>
      </Typography>
        <Box py={3} >
            <Typography variant="h6" >
              <Box fontWeight="bold" >Día del evento</Box>
              <Box fontSize={14} fontWeight={300} >13 de Abril del 2020</Box>
            </Typography>
        </Box>
        <Divider />
        <Box py={3} display="flex" alignItems="flex-end" justifyContent="space-between"  >
            <Typography variant="h6" >
              <Box fontWeight="bold" >Horas de contrato</Box>
              <Box fontSize={14} fontWeight={300} >1 hora de contrato con Andrea Martinez</Box>
            </Typography>
            <Button color="primary" variant="outlined" >  11:00 - 12:00 PM</Button>
        </Box>
        <Divider />
        <Box py={3} display="flex" alignItems="flex-end" justifyContent="space-between"  >
            <Typography variant="h6" >
              <Box fontWeight="bold" >Precio Final</Box>
              <Box fontSize={14} fontWeight={300} >contrato con Andrea Martinez</Box>
            </Typography>
            <Typography variant="h5" >
              <Box fontWeight="bold" >S/.400.00</Box>
            </Typography>
        </Box>
        <Box display="flex" width={255} margin="auto" mt={8}  justifyContent="center" >
            <Button fullWidth variant="contained" color="primary" >Reservar grupo</Button>
        </Box>
    </Box>
)   

export default ArtistContract