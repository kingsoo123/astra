import React, {useState, useEffect} from 'react'
// import AdminInfo from '../components/AdminInfo';
// import PrivacyAndSec from '../components/PrivacyAndSec'
// import UserRole from '../components/UserRole';
import styled from "styled-components"
import axios from 'axios'
import { useSelector } from "react-redux";



const Dashboard = () => {
    // const [comp, setComp] = useState(null)
    // const [isClicked, setIsClicked] = useState(false)

    // const showAdmin = () => {
    //     setComp(<AdminInfo/>)
    //     setIsClicked(true)
    // }

    // const showPrivacy = () => {
    //     setComp(<PrivacyAndSec/>)
    //     setIsClicked(true)
    // }

//     const showUser = () => {
//         setComp(<UserRole/>)
//         setIsClicked(true)
// }
const auth = useSelector(state => state.auth)
const [user, setUser]  = useState()

    
    
useEffect(() => {
    if (auth?.user?.access_token !== '') {
      axios.get('http://adminservice-env.eba-ubpbf6se.us-east-2.elasticbeanstalk.com/index.php/api/v1/dashboard', {
        headers: {
          "Authorization": `Bearer ${auth?.user?.access_token}`
        }
      }).then(res => {
          console.log(res?.data?.message, 'from headers')
          setUser(res?.data?.message)
      })
    }
  }, [auth?.user?.access_token])
    return (
        <div className="dashboard_wrapper">
                Hi {user}
            <Cards>
                <div style={{ background: '#9694FF', width: 220, height: 170, padding: 15, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                    <div>
                    <p style={{ fontSize:16, color:'#fff'}}>Total Clients</p>
                    <h4 style={{ fontSize:24, color:'#fff'}}>1077</h4>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>
                        <p style={{ fontSize:10, color:'#fff'}}>Total Active Clients</p>
                        <p style={{fontSize:14, color:'#fff'}}>1000</p>
                        </span>
                        <div style={{ width:1, height:30, background:'#fff'}}></div>
                        <span>
                        <p style={{ fontSize:10, color:'#fff'}}>Total Active Clients</p>
                        <p style={{fontSize:14, color:'#fff'}}>1000</p>
                        </span>
                    </div>
                </div>
                <div style={{background:'#57CAEA', width:220, height:170, padding: 15, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <div>
                    <p style={{ fontSize:16, color:'#fff'}}>Total Disbursed Loan </p>
                    <h4 style={{ fontSize:24, color:'#fff'}}>N 10,277,000.00</h4>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>
                        <p style={{ fontSize:10, color:'#fff'}}>Total Active Clients</p>
                        <p style={{fontSize:14, color:'#fff'}}>1000</p>
                        </span>
                        <div style={{ width:1, height:30, background:'#fff'}}></div>
                        <span>
                        <p style={{ fontSize:10, color:'#fff'}}>Total Active Clients</p>
                        <p style={{fontSize:14, color:'#fff'}}>1000</p>
                        </span>
                    </div>
                </div>
                <div style={{background:'#5DD9B4', width:220, height:170, padding: 15, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <div>
                    <p style={{ fontSize:16, color:'#fff'}}>Total Merchants</p>
                    <h4 style={{ fontSize:24, color:'#fff'}}>1077</h4>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>
                        <p style={{ fontSize:10, color:'#fff'}}>Total Active Clients</p>
                        <p style={{fontSize:14, color:'#fff'}}>1000</p>
                        </span>
                        <div style={{ width:1, height:30, background:'#fff'}}></div>
                        <span>
                        <p style={{ fontSize:10, color:'#fff'}}>Total Active Clients</p>
                        <p style={{fontSize:14, color:'#fff'}}>1000</p>
                        </span>
                    </div>
                </div>
                <div style={{background:'#C83835', width:220, height:170, padding: 15, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <div>
                    <p style={{ fontSize:16, color:'#fff'}}>Total Clients</p>
                    <h4 style={{ fontSize:24, color:'#fff'}}>1077</h4>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>
                        <p style={{ fontSize:10, color:'#fff'}}>Total Active Clients</p>
                        <p style={{fontSize:14, color:'#fff'}}>1000</p>
                        </span>
                        <div style={{ width:1, height:30, background:'#fff'}}></div>
                        <span>
                        <p style={{ fontSize:10, color:'#fff'}}>Total Active Clients</p>
                        <p style={{fontSize:14, color:'#fff'}}>1000</p>
                        </span>
                    </div>
                </div>
            </Cards>
        </div>
    )
}




const Cards = styled.div`
display:flex;
width:100%;
justify-content: space-between;
margin-top: 30px;
`;

export default Dashboard;