import React, { useState , useContext } from 'react';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import { Fieldset } from 'primereact/fieldset';
import { BreadCrumb } from 'primereact/breadcrumb';

// Load Dashboard Widgets
import UsersRegisteredWidget from './widgets/UsersRegisteredWidget';
import EventsStatusWidget from './widgets/EventsStatusWidget.js';
import EventsInsightsWidget from './widgets/EventsInsightsWidget';

// Load Dashboards CSS
import './dashboard.css';

// Import Authentication Token
import { useAuth } from './context/AuthContext';
const Dashboard = () => {
    // Set BreadCrum options
    const auth = useAuth()

    const items = [
        { label: 'Dashboard' }
    ];
    
    const homeLink = { icon: 'pi pi-home', url: 'http://localhost:3000' }
 
   

    return (
        <div className="container">
            <div className="col">
            <BreadCrumb model={items} home={homeLink}/>
            </div>
            <div className="col">
                <div className="grid">
                    <div className="col-4 sm-12">
                        <Fieldset legend="Events Insights">
                        <EventsInsightsWidget />                  
                        </Fieldset>
                    </div>
                    <div className="col-4 sm-12">
                        <Fieldset legend="Registrations Insights">
                        <UsersRegisteredWidget />
                        </Fieldset>
                    </div>
                    <div className="col-4 sm-12">
                        <Fieldset legend="Events Status">
                        <EventsStatusWidget />
                        </Fieldset>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
