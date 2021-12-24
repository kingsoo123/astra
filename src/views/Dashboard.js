import React, {useState} from 'react'
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AdminInfo from '../components/AdminInfo';
import PrivacyAndSec from '../components/PrivacyAndSec'
import UserRole from '../components/UserRole';
const Settings = () => {
    const [comp, setComp] = useState(null)
    const [isClicked, setIsClicked] = useState(false)

    const showAdmin = () => {
        setComp(<AdminInfo/>)
        setIsClicked(true)
    }

    const showPrivacy = () => {
        setComp(<PrivacyAndSec/>)
        setIsClicked(true)
    }

    const showUser = () => {
        setComp(<UserRole/>)
        setIsClicked(true)
}
    return (
        <div className="dashboard_wrapper">
            {isClicked === false ? (
                <>
                Lectus tortor faucibus arcu ipsum nascetur enim nulla.<br /> Adipiscing congue enim id mattis velit.
            <div className="dash_info">
                <div className="dash_card" style={{cursor:'pointer'}} onClick={showAdmin}>
                    <div className="innerCard">
                        <PersonIcon className="person_icons"/>
                    </div>
                    <div>
                        <strong>Admin Information</strong>
                        <p>Adipiscing congue enim id mattis velit</p>
                    </div>
                </div>
                <div className="dash_card" style={{cursor:'pointer'}} onClick={showPrivacy}>
                    <div className="innerCard">
                        <WorkIcon className="person_icons"/>
                    </div>
                        <div>
                            <strong>Privacy and Security</strong>
                            <p>Adipiscing congue enim id mattis velit</p>
                        </div>
                </div>
                <div className="dash_card" style={{cursor:'pointer'}} onClick={showUser}>
                    <div className="innerCard">
                    <AssignmentIndIcon className="person_icons"/>
                </div>
                        <div>
                            <strong>User Permission</strong>
                            <p>Adipiscing congue enim id mattis velit</p>
                        </div>
                </div>
            </div>
                </>
            ) : (
                    <>
                        <div style={{cursor:'pointer', display:'flex', paddingBottom: 30}} onClick={()=>setIsClicked(false)}>
                            <ChevronLeftIcon/>
                            <strong style={{fontSize: 17, fontWeight: 'bold', marginLeft: 10}}>Back</strong>
                        </div>
                        {comp}
                    </>
            )}
        </div>
    )
}




export default Settings;