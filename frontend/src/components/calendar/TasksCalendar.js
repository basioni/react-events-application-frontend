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
            // const eventslist = await posts.map((event) => {
            // //console.log(event);
            // return {
            //         title: event.title,
            //         startDate: new Date(event.startDate),
            //         endDate: new Date(event.endDate),
            //         allDay: event.allDay
            //     }
            // });
              
            setEvents(posts);
            console.log(events)
            // console.log(events);

        } catch (error) {
            console.log(error)
        }

    }

    // const events = [
    //     {
    //         'title': 'All Day Event very long title',
    //         'allDay': true,
    //         'start': new Date(2023, 0, 0),
    //         'end': new Date(2023, 0, 1)
    //     },
    //     {
    //         'title': 'Long Event',
    //         'start': new Date(2023, 0, 7),
    //         'end': new Date(2023, 0, 10)
    //     },

    //     {
    //         'title': 'DTS STARTS',
    //         'start': new Date(2023, 0, 13, 0, 0, 0),
    //         'end': new Date(2023, 0, 20, 0, 0, 0)
    //     }
    // ];


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