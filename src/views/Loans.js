import React, {useState} from 'react'
import styled from "styled-components"
import AllLoans from '../components/AllLoans'


const LoanComponent = () => {
    const [all, setAll] = useState('All')
    return (
        <div className="dashboard_wrapper">
            <div style={{ display: 'flex', width: '70%', height: 50,borderBottom:'1px solid gray' }}>
                <Tabs onClick={()=>setAll('All')}>All</Tabs>
                <Tabs>Approved</Tabs>
                <Tabs>Pending Approval</Tabs>
                <Tabs>Declined Approval</Tabs>
                <Tabs>New</Tabs>
            </div>

            {all === 'All' && <AllLoans/>}
            </div>
    )
}



const Tabs = styled.span`
margin-left: 2rem;
cursor:pointer;
height:50px;
display:flex;
align-items: center;
pading-left: 1rem;
&:hover{
border-bottom: 2px solid #140432;
}
`;

export default LoanComponent