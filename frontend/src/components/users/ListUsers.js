import React from "react";
import { useState, useEffect } from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from "axios";

import './ListUsers.css';
const ListUsers = () => {

       
    const breadcrumbsItems = [
        { label: 'Users' }
    ];
    
    const home = { icon: 'pi pi-home', url: 'http://localhost:3000' }
    
    const [posts , setPosts]= useState([]);

    useEffect(()=>{
        fetchUsers();
    },[])    
    
    
    const fetchUsers = async() => {
        
        try {
            const data = await fetch("http://localhost:4000/viewUsers");
            const posts = await data.json();
            setPosts(posts.data);
        } catch (error) {
            console.log(error)
        }
        

        // const readPosts = posts.map(usersFilter);
        
        //setPosts(posts.concat([{"actions" : "Edit - Delete"}]));
        // console.log(readPosts);
 
        
    }
   
    const [first, setFirst] = useState(1);

    return (
        <div className="container">
            <div className="container">
            <BreadCrumb model={breadcrumbsItems} home={home}/>
            </div>
            <div className="container" >
            <DataTable value={posts}  
            responsiveLayout= "scroll"
            paginatorTemplate="firstPageLink PrevPageLink NextPageLink CurrentPageReport RowsPerPageDrop"
            dataKey='id' 
            paginator 
            emptyMessage= "No Users Found"
            className='datable-responsive'
            currentPageReportTemplate='Showing {first} to {last} of {totalRecords} users'
            rows={12} 
            >
            <Column field="id" header="ID" sortable style={{ width: '5%' }}></Column>
            <Column field="name" header="Name" sortable  style={{ width: '15%' }}></Column>
            <Column field="email" header="Email" sortable  style={{ width: '15%' }}></Column>
            <Column field="password" header="Password" sortable  style={{ width: '15%' }}></Column>
            </DataTable>
            </div>
        </div>
    );
};

export default ListUsers;