import React, {useState} from 'react'
import Header from "../components/Header"
import SideMenu, { menuItems } from "../components/SideMenu";
import { Route } from "react-router-dom";




const DashComponent = () => {
    const [inactive, setInactive] = useState(false);

    return (
        <>
             <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />
        <div className={`container ${inactive ? "inactive" : ""}`}>
          <Header/>
          {/* improvememt, not recorded in video, its just looping through menuItems
          instead of hard coding all the routes */}
          {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to} component={menu.component}/>
            </>
          ))}
        </div>
        </>
    )
}

export default DashComponent