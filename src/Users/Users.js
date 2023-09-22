import React, { useState,useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';

function Users() {

    const [users,setUsersList] = useState([])

    useEffect(() => {
        getAllUsers();
    }, []);
    

    const getAllUsers = async () =>{
        try{
            const response = await axios.get('http://localhost:4000/users');
            if(response){
                setUsersList(response.data);
            }
        }
        catch (e){

        }
    }

    const actionTemplae = (value)=>{
        return <span>{value.id}</span>
    }

    return (
        <div className='users-page'>
            <div className='container'>
                <h1>
                    Welcome to Crud Operations Crash Course.
                </h1>
                <h3>We will use React, Primereact, Json-server and Axios</h3>

                <div className='users-list'>
                    <DataTable value={users}>
                        <Column field="name" header="Name"></Column>
                        <Column field="username" header="Username"></Column>
                        <Column field="email" header="Email Adress"></Column>
                        <Column field="phone" header="Phone Number"></Column>
                        <Column field="website" header="Website"></Column>
                        <Column field="action" header="Action" body={actionTemplae}></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    )
}

export default Users