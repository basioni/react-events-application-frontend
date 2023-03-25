
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Checkbox } from "primereact/checkbox";
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import './AddTask.css';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
const AddUser = () => {

    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {

    }, []);



    const formik = useFormik({
        initialValues: {
            title: '',
            startDate: '',
            endDate: '',
            allDay: true,
        },
        validate: (data) => {
            let errors = {};

            if (!data.title) {
                errors.title = 'Event Title is required.';
            }

            if (!data.startDate) {
                errors.startDate = 'Username is required.';
            }

            if (!data.endDate) {
                errors.endDate = 'Email is required.';
            }

            return errors;
        },
        onSubmit: async (data) => {
            setFormData(data);
            axios.post('http://localhost:4000/addtask', {
                // title: 'Long Event',
                // startDate: s1,
                // endDate: s2 ,
                // allDay: false,
                title: data.title,
                startDate: new Date(data.startDate),
                endDate: new Date(data.endDate),
                allDay: data.allDay,
            })
                .then(function (response) {
                    setShowMessage(true);
                })
                .catch(function (error) {
                    console.log(error);
                });
            //navigate('/users');
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;

    return (
        <div className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>Task added successfully!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        Task : <b>{formData.title}</b>
                    </p>
                </div>
            </Dialog>

            <div className="flex justify-content-center">
                <div className="card">
                    <h3 className="text-center">Add New Task</h3>
                    <form onSubmit={formik.handleSubmit} className="p-fluid">
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-text" />
                                <InputText id="title" name="title" value={formik.values.title} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('title') })} />
                                <label htmlFor="title" className={classNames({ 'p-error': isFormFieldValid('title') })}>title*</label>
                            </span>
                            {getFormErrorMessage('title')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-user" />
                                <Calendar id="startDate" value={formik.values.startDate} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('startDate') })} dateFormat="mm-dd-yy"  />
                                <label htmlFor="startDate" className={classNames({ 'p-error': isFormFieldValid('startDate') })}>startDate*</label>
                            </span>
                            {getFormErrorMessage('startDate')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />

                                <Calendar id="endDate" value={formik.values.endDate} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('endDate') })} dateFormat="mm-dd-yy" />
                                <label htmlFor="endDate" className={classNames({ 'p-error': isFormFieldValid('endDate') })}>endDate*</label>
                            </span>
                            {getFormErrorMessage('endDate')}
                        </div>
                        <div className="field">
                            <span >
                             
                                <Checkbox
                                    id="allDay"
                                    name="allDay"
                                    checked={formik.values.allDay}
                                    onChange={(e) => {formik.handleChange}}> </Checkbox>
                                <label htmlFor="allDay"> All Day Event? *</label>
                            </span>
                            {getFormErrorMessage('allDay')}
                        </div>
                        <Button type="submit" label="Submit" className="mt-2" />
                    </form>
                </div>
            </div>
        </div>
    );
}


export default AddUser;