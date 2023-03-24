
import React, { useRef } from "react";
import { Menubar } from 'primereact/menubar';
import { Navigate, useNavigate } from 'react-router-dom';

import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Badge } from 'primereact/badge'

import { TieredMenu } from 'primereact/tieredmenu';
import { Button } from 'primereact/button';

import logo from '../logo.svg';


const Menu = () => {
   const navigate = useNavigate();
   // Menu Items
   const menuItems = [
      {
         label: 'Dashboard',
         icon: 'pi pi-home',
         command: () => { navigate('/dashboard'); }
      },
      {
         label: 'Calendar',
         icon: 'pi pi-fw pi-calendar',
         command: () => { navigate('/calendar'); }
      },
      {
         label: 'Tasks',
         icon: 'pi pi-fw pi-calendar',
         items: [
            {
               label: 'All Tasks',
               icon: 'pi pi-fw pi-calendar',
               command: () => { navigate('/tasks'); }
            },
            {
               label: 'Add New',
               icon: 'pi pi-fw pi-calendar-plus',
               command: () => { navigate('/addtask'); }
            }
         ]
      },
      {
         label: 'Users',
         icon: 'pi pi-fw pi-users',
         items: [
            {
               icon: 'pi pi-fw pi-users',
               label: 'All Users',
               command: () => { navigate('/users'); }
            },
            {
               label: 'Add User',
               icon: 'pi pi-fw pi-user-plus',
               command: () => { navigate('/adduser'); }
            }
         ]
      }
   ];
   const menu = useRef(null);
   const accountMenuItems = [
      {
         label: 'Profile',
         icon: 'pi pi-fw pi-user'
      },
      {
         label: 'Settings',
         icon: 'pi pi-fw pi-wrench'
      },
      {
         separator: true
      },
      {
         label: 'Logout',
         icon: 'pi pi-fw pi-power-off'
      }
   ];
   const accountMenu =
      <div className="card flex justify-content-center">
         <TieredMenu model={accountMenuItems} popup ref={menu} />
         <Avatar image="https://avatars.githubusercontent.com/u/12942253?v=4" size="large" shape="circle" onClick={(e) => menu.current.toggle(e)} />
      </div>
      ;
   //  <img src="https://avatars.githubusercontent.com/u/12942253?v=4" height="40" shape="circle"></img>

   return (
      <Menubar model={menuItems}
         start={<img alt="logo" src={logo} height="45" className="mr-2"></img>}
         end={accountMenu}
      />
   )
};

export default Menu;