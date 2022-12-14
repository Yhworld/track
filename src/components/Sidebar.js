import React from 'react'
import { SideBarData } from '../pages/SideBarData'
import { NavLink } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar({children, setUser}) {

   function handleLogoutClick() {
     fetch("/logout", { method: "DELETE" }).then((r) => {
       if (r.ok) {
         setUser(null);
       }
     });
   }

  return (
    <div className="Container">
      <div className="Sidebar">
        <ul className="Sidelist">
          {SideBarData.map((val, key) => {
            return (
              <>
                <NavLink
                  to={val.path}
                  key={key}
                  className="siderow"
                  activeclassName="active"
                >
                  <div id="icon">{val.icon}</div>
                  <div id="title">{val.title}</div>
                </NavLink>
              </>
            );
          })}
         <div class="btnlogout" onClick={handleLogoutClick}>
           <LogoutIcon />
           <p>Logout</p>
         </div>
        </ul>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar