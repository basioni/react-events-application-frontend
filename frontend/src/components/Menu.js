import React from "react";
import { Menubar } from 'primereact/menubar';
import { Navigate, useNavigate } from 'react-router-dom';

import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Badge } from 'primereact/badge'
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

   return (
      <Menubar model={menuItems}
         end={<div>end</div>}
      />
   )
};

export default Menu;