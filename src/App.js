import React from 'react';
import DataGrid from "./DataGrid";

async function visitors(){
    let response = await fetch('http://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    console.log(data);
    return data;
}


export default function App(){
    const [users, setUsers]=React.useState([]);
    
    React.useEffect(
        async function(){
        let tempusers=await visitors();
        setUsers(tempusers);
    },
    [])
    return(
        <DataGrid users={users} />
    )
}
