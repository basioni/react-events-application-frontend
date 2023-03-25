import React, { useState , useEffect } from 'react';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import { BreadCrumb } from 'primereact/breadcrumb';

// import react Big Calendar  
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";



// Load CSS
// import './.css';

// import { Calendar } from 'primereact/calendar';
const TasksCalendar = () => {
    // Set BreadCrum options

    const items = [
        { label: 'Dashboard', label: 'Calendar' }
    ];

    const home = { icon: 'pi pi-home', url: 'http://localhost:3000' };

    const [events , setEvents] = useState([]);
    // const [events , setEvents] = useState({});

    // Inizialize BigCalendar Localizer
    const localizer = momentLocalizer(moment) // or globalizeLocalizer

    useEffect(() => {
        fetchEvents();
        //  console.log(events);
    }, [])


    const fetchEvents = async () => {

        try {
            const data = await fetch("http://localhost:4000/viewTasks");
            const posts = await data.json();
            //setEvents(posts.data);
            // const unfilteredPosts = posts.data;
            const eventslist = await posts.map((event) => {
            
            const unfilteredStartDate = new Date(event.startDate);
            const unfilteredEndDate = new Date(event.endDate);
            // console.log(unfilteredStartDate.getDay());
            // console.log(unfilteredStartDate.getMonth());
            // console.log(unfilteredStartDate.getFullYear());
            return {
                    title: event.title,
                    start: new Date(unfilteredStartDate.getFullYear(), unfilteredStartDate.getMonth(), unfilteredStartDate.getDay()),
                    end:   new Date(unfilteredEndDate.getFullYear(), unfilteredEndDate.getMonth(), unfilteredEndDate.getDay()),
                    allDay: event.allDay
                }
            });
              
            setEvents(eventslist);
            console.log(eventslist)
            // console.log(events);

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="container">

            <div className="grid ">
                <div className="col-12 md:col-12 lg:col-12">
                    <BreadCrumb model={items} home={home} />
                </div>

                <div className="col-12 md:col-12 lg:col-12  h-30rem ">
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                    />
                </div>
            </div>
        </div>
    );
};

export default TasksCalendar;