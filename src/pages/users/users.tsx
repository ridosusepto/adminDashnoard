import { useState } from "react";
import DataTabel from "../../components/dataTabel/dataTabel";
import { UserRows } from "../../data";
import "./users.scss"
import { GridColDef } from '@mui/x-data-grid';
import Add from "../../components/add/add";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: "img",
        headerName: "Avatar",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt='' />
        },
    },

    {
        field: "firstName",
        headerName: "First Name",
        width: 150,
        type: "string"
    },
    {
        field: 'lastName',
        headerName: 'Last Name',
        width: 150,
        type: "string",
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 100,
        type: "string",
    },
    {
        field: 'phone',
        headerName: 'Phone',
        width: 100,
        type: "string",
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        width: 100,
        type: "string",

    },
    {
        field: 'verified',
        headerName: 'Verified',
        width: 150,
        type: "boolean",

    },
];

const Users = () => {
    const [open,setOpen] = useState(false)
 
    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button onClick={()=>setOpen(true)}>Add New User</button>
            </div>
            <DataTabel slug="users" columns={columns} rows={UserRows} />
            {open && <Add slug="user" columns={columns} setOpen={setOpen}/>}
        </div>
    )
}

export default Users;