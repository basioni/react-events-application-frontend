
import React, { useState, useEffect } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
// import { TaskService } from '../../services/tasks/TaskService';
import { Rating } from 'primereact/rating';
import './ListTasks.css';

import { BreadCrumb } from 'primereact/breadcrumb';

const ListTasks = () => {
    // Set BreadCrum options
    const breadcrumbItems = [
        { label: 'Tasks' },
        { label: 'All Tasks' },
    ];

    const homeLink = { icon: 'pi pi-home', url: 'http://localhost:3000' };

    const [tasks, setTasks] = useState(null);
    const [layout, setLayout] = useState('grid');
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortField, setSortField] = useState(null);
    const sortOptions = [
        { label: 'Price High to Low', value: '!price' },
        { label: 'Price Low to High', value: 'price' },
    ];


    useEffect(() => {
        // const dummyTasks = {
        //     "tasks": [
        //         { "_id": "1000", "title": "Bamboo Watch", "startDate": "Product Start Date", "endDate": "Product End Date", "image": "bamboo-watch.jpg", "allDay": false, "category": "Accessories", "inventoryStatus": "INSTOCK", "rating": 5 },
        //     ]
        // };
        fetchEvents();
        // taskService.getProducts().then(data => setProducts(data));
    }, []);
    const fetchEvents = async () => {

        try {
            const data = await fetch("http://localhost:4000/viewTasks");
            const posts = await data.json();
            setTasks(posts);
        } catch (error) {
            console.log(error)
        }
    }
    const onSortChange = (event) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        }
        else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    }

    const renderListItem = (data) => {
        return (
            <div className="col-12">
                <div className="product-list-item">
                    <img src={`images/product/${data.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                    <div className="product-list-detail">
                        <div className="product-name">{data.title}</div>
                        <div className="product-description">{data.startDate} to {data.endDate}</div>
                        {/* <Rating value={data.rating} readOnly cancel={false}></Rating>
                        <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span> */}
                    </div>
                    <div className="product-list-action">
                        {/* <span className="product-price">${data.price}</span> */}
                        <Button icon="pi pi-shopping-cart" label="Add to Cart"></Button>
                        {/* <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span> */}
                    </div>
                </div>
            </div>
        );
    }

    const renderGridItem = (data) => {
        return (
            <div className="col-12 md:col-4">
                <div className="product-grid-item card">
                    <div className="product-grid-item-top">
                        <div>
                            <i className="pi pi-tag product-category-icon"></i>
                            <span className="product-category">{data.category}</span>
                        </div>
                        {/* <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span> */}
                    </div>
                    <div className="product-grid-item-content">
                        <img src={`images/product/${data.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                        <div className="product-name">{data.title}</div>
                        <div className="product-description">{data.startDate} to {data.endDate}</div>
                    </div>
                    <div className="product-grid-item-bottom">
                        <Button icon="pi pi-shopping-cart" label="Cancel Event" ></Button>
                        <Button icon="pi pi-shopping-cart" label="Join" ></Button>
                    </div>
                </div>
            </div>
        );
    }

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        if (layout === 'list')
            return renderListItem(product);
        else if (layout === 'grid')
            return renderGridItem(product);
    }

    const renderHeader = () => {
        return (
            <div className="grid grid-nogutter text-center">
                <div className="col-6" style={{ textAlign: 'left' }}>
                    <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange} />
                </div>
                <div className="col-6" style={{ textAlign: 'right' }}>
                    <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
                </div>
            </div>
        );
    }

    const header = renderHeader();

    return (
        <div className="container dataview-demo">

            <div className="grid ">
                <div className="col-12 md:col-12 lg:col-12">
                    <BreadCrumb model={breadcrumbItems} home={homeLink} />
                </div>
                <div className="12 md:col-12 lg:col-12">
                    <div className="card ">
                        <DataView value={tasks} layout={layout} header={header}
                            itemTemplate={itemTemplate} paginator rows={9}
                            sortOrder={sortOrder} sortField={sortField} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListTasks;