import React from 'react'
import styled from "styled-components"
import bg from "../assets/bg.png"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';
import { useForm, Controller } from 'react-hook-form';
import logo from '../assets/Astrakash.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUser } from '../actions/creators/AuthAction';
import { useDispatch } from 'react-redux';


const defaultValues = { email: "", password: "" };




const Login = () => {
  const dispatch = useDispatch()
    const history = useHistory()
    const {
        handleSubmit,
        reset,
        control,
        formState: { errors }
      } = useForm({ defaultValues });

    const notify = () => {
        toast("You're Signed in!")
        setTimeout(() => {
            history.push('/dashboard')
        }, 3000);
   }

      const onSubmit = (data) => {
        console.log(data);
        dispatch(getUser(data))
          notify()
        // api call with data here
        reset(null);
      };
    console.log(errors, "errors");
    return (
        <Container>
        <BackDrop>
        <Logo>
                    <Astra>
                        <img src={logo} alt="Astra Logo" width="100px" height="100px"/>
                    </Astra>
                    <Welcome><p>Welcome to Astrakash Limited</p>
                        <span style={{fontSize: 11, display:'flex', width:200, justifyContent:'space-between'}}>
                            <small style={{marginTop:30}}>Powered by AstraPolaris MFB</small>
                            <img src={logo} alt="Astra Logo" width="50px" height="50px"/>
                    </span>
                    </Welcome>
        </Logo>
         <FormContent>
                    <FormInput>
                        <SignIn>Sign in</SignIn>
                    <p style={{marginTop: 20}}>
                    Astrkash backend management platform.
                        </p>
                        <div style={{width:250, height:2, background:'#1742D9', marginTop:20}}>
                        </div><br /><br />
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
          control={control}
          name="email"
          rules={{
            required: true,
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/
          }}
          render={({ field }) => (
            <TextField
              label="Email address"
              variant="outlined"
              {...field}
              helperText={
                <>
                  {errors.email?.type === "required" && (
                    <span className="error">Email is required</span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="error">Email is invalid</span>
                  )}
                </>
              }
              style={{ width: '100%' }}/>
          )}
        />
        <br /><br />
        <Controller
          control={control}
          name="password"
          rules={{ required: true, minLength: 5 }}
          render={({ field }) => (
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              {...field}
              helperText={
                <>
                  {errors.password?.type === "required" && (
                    <span className="error">Password is required</span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="error">
                      Password should be length of 5 or above
                    </span>
                  )}
                </>
              }
              style={{ width: '100%' }}/>
          )}
        />
            <Button disableElevation type="submit" variant="contained" style={{width:'100%', height: 50, marginTop: 60}}>Sign In</Button>
            </form>
        </FormInput>
         </FormContent>
            </BackDrop>
            <ToastContainer />
        </Container>
    )
}

//onClick={()=>history.push('/dashboard')}
const SignIn = styled.div`
font-size: 20px;
color:#1742D9;
font-weight: bold;
font-size: 24px;
`;

const FormInput = styled.div`
width: 500px;
height: 600px;
background:#ffffff;
border-radius: 24px;
padding: 60px 40px 30px 40px;
`;

const Container = styled.div`
background-position: 0 0;
background-repeat: no-repeat;
width: 100%;
background-image: url(${bg});
background-size: cover;
`;


const BackDrop = styled.div`
width: 100%;
background: rgba(23, 66, 217, 0.7);
display:flex;
justify-content: space-around;
align-items: center;
`;


const Logo = styled.div`
width: 35%;
height:700px;
display:flex;
flex-direction:column;
justify-content:space-between;
`;

const FormContent = styled.div`
width: 45%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
`;


const Astra = styled.div`
font-size: 32px;
font-weight:700;
color:#ffffff;
`;

const Welcome = styled.div`
font-size: 48px;
font-weight:700;
color:#ffffff;
`;
export default Login