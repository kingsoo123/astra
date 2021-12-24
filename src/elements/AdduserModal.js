import React, {useState, useEffect} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import styled from "styled-components"
import CloseIcon from '@mui/icons-material/Close';
import CheckIcons from '../assets/checkIcon';
import StepOne from '../stepForm/StepOne';
import StepTwo from '../stepForm/StepTwo';
import StepThree from '../stepForm/StepThree';
import CheckIconsBack from '../assets/checkIconBack';


const style = {
  position: 'absolute',
  top: '50%',
    left: '50%',
    width: '90%',
    height: '90vh',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function AddUserModal({ handleOpen, open, setOpen }) {
    const [moveToStepTwo, setMoveToStepTwo] = useState(false)
    const [moveToStepThree, setMoveToStepThree] = useState(false)
    const [initialComp, setInitialComp] = useState(null)
    const [checkTwo, setCheck] = useState(<CheckIcons />)
    const [checkThree, setCheckThree] = useState(<CheckIcons/>)
  const handleClose = () => setOpen(false);

    
  const handleBack = () =>{
    setMoveToStepTwo(false)
    setInitialComp(<StepOne setMoveToStepTwo={setMoveToStepTwo} handleClose={handleClose}/>)
  }
    
    useEffect(() => {
        setInitialComp(<StepOne setMoveToStepTwo={setMoveToStepTwo} handleClose={handleClose}/>)
    }, [handleClose])

    useEffect(() => {
        if (moveToStepTwo === true) {
            setInitialComp(<StepTwo setMoveToStepThree={setMoveToStepThree} handleBack={ handleBack}/>)
            setCheck(<CheckIconsBack/>)
        }
    }, [moveToStepTwo, handleBack])

    useEffect(() => {
        if (moveToStepThree === true) {
            setInitialComp(<StepThree />)
            setCheckThree(<CheckIconsBack/>)
        }
    }, [moveToStepThree])


    // useEffect(() => {
        
    // }, )

    

    console.log(moveToStepTwo, 'from moveeeeeeee')
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
        <ModalWrap>
        <div style={{width: 30, height: 30, borderRadius: '50%', display:'flex', justifyContent:'center', alignItems:'center', border:'1px solid black', cursor:'pointer' }} onClick={handleClose}>
        <CloseIcon />
        </div>
                      </ModalWrap>
                <StepForm>
                          <div style={{ display: 'flex', justifyContent:'space-between', width: '30%', height: '100vh', padding: '0px 10px'  }}>
                              <div style={{width: '90%'}}>
                              <Typography variant="h6" component="h6" mt={2}>Add New User</Typography>
                                  <ShortHorLine/>

                                  <StepIndicator>
                                    <UserBasic>
                                          <CheckIconsBack />
                                          <Typography ml={2}>User Basics</Typography>
                                      </UserBasic>
                                      <ShorterVertLine />
                                      <UserRole>
                                          {checkTwo}
                                          <Typography ml={2}>User Role Configuration</Typography>
                                      </UserRole>
                                      <ShorterVertLine />
                                      <Finish>
                                      {checkThree}
                                          <Typography ml={2}>Finish Setup</Typography>
                                      </Finish>
                                  </StepIndicator>
                              </div>

                              <ShortVertLine/>
                         </div>
                          <FormStep>
                              {initialComp}
                        </FormStep>
                </StepForm>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}


const FormStep = styled.div`
width: 70%;
height: 100vh;
padding: 15px 57px;
`;

const ShorterVertLine = styled.div`
width: 2px;
height: 50px;
background:#EBEBEB;
margin-left: 15px;
margin-top: 10px;
margin-bottom: 10px;
`;


const UserBasic = styled.div`
display: flex;
align-items:center;
`;

const UserRole = styled.div`
display: flex;
align-items:center;
`;


const Finish = styled.div`
display: flex;
align-items:center;
`;
const StepIndicator = styled.div`
width: 100%;
height: 350px;
margin-top: 30px;
`;
const ShortHorLine = styled.div`
width: 50%;
height: 3px;
background:#1742D9;
`;

const ModalWrap = styled.div`
width: 100%;
 display:flex;
justify-content: end;
`;

const StepForm = styled.div`
width: 100%;
display:flex;
justify-content: space-around;
`;


const ShortVertLine = styled.div`
width: 1px;
height: 500px;
background:#EBEBEB;
margin-top: 100px;
`;