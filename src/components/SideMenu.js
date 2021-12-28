import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import Settings from "../views/Dashboard";
import Dashboard from "../views/HomePageDash";

/**
 * @author
 * @function SideMenu
 **/



// added more menuItems for testing
export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/dashboard",
    iconClassName: "bi bi-speedometer2",
    component: Dashboard
  },
  // {
  //   name: "Content",
  //   exact: true,
  //   to: `/content`,
  //   iconClassName: "bi bi-speedometer2",
  //   subMenus: [
  //     { name: "Courses", to: "/content/courses" },
  //     { name: "Videos", to: "/content/videos" },
  //   ],
  // },
  // {
  //   name: "Content 2",
  //   exact: true,
  //   to: `/content-2`,
  //   iconClassName: "bi bi-speedometer2",
  //   subMenus: [
  //     { name: "Courses", to: "/content-2/courses" },
  //     { name: "Videos", to: "/content-2/videos" },
  //   ],
  // },
  // { name: "Loan Management", to: `/design-2`, iconClassName: "bi bi-vector-pen", component: Dashboard },
  // { name: "Funds Management", to: `/design-3`, iconClassName: "bi bi-vector-pen", component: Dashboard },
  { name: "Settings", to: `/settings`, iconClassName: "bi bi-sliders", component: Settings },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive, props]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <h3>AstraKash</h3>
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i className="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i className="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>
{/* 
      <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>

        <input type="text" placeholder="search" />
      </div> */}

      {/* <div className="divider"></div> */}

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
