import React, { Component } from 'react'
import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import albumIcon from '../../images/add_album.png'

export default class UploadPhotoDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            files: []
        };
    }

    handleClose() {
        this.setState({
            open: false
        });
    }

    handleSave(files) {
        //Saving files to state for further use and closing Modal.
        this.setState({
            files: files,
            open: false
        });
    }

    handleOpen() {
        this.setState({
            open: true,
        });
    }

    render() {
        return (
            <div>
                <Box 
                  position="relative" 
                  padding={4}
                  flexDirection="column"  
                  borderRadius={16} 
                  bgcolor="#fff" 
                  width={320}  
                  display="flex" 
                  alignItems="center"
                  justifyContent="center" 
                  height={320} 
                  onClick={this.handleOpen.bind(this)}>
                  <img width={180} src={albumIcon} />
                  <Typography  variant="h6" >
                      <Box fontSize={18} fontWeight={600} >Agregar foto de perfil</Box>
                  </Typography>
                </Box>
                <DropzoneDialog
                    open={this.state.open}
                    onSave={this.handleSave.bind(this)}
                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                    showPreviews={true}
                    maxFileSize={5000000}
                    onClose={this.handleClose.bind(this)}
                />
            </div>
        );
    }
}