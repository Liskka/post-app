import { Backdrop, Box, Fade, Modal } from '@mui/material'
import React from 'react';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const ModalCreatePost = ({ children, visibleModal, setVisibleModal }) => {

  const handleClose = () => {
    setVisibleModal(false);
  }

  return (
    <Modal
      open={visibleModal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={visibleModal}>
        <Box sx={style}>

          {children}
        </Box>
      </Fade>
    </Modal>
  )
}

export default ModalCreatePost