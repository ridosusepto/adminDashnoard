import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/add/add";
import DataTabel from "../../components/dataTabel/dataTabel";
import "./products.scss"
import {useState} from "react"
import { products } from "../../data";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: "img",
        headerName: "Image",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt='' />
        },
    },

    {
        field: "title",
        headerName: "Title",
        width: 200,
        type: "string"
    },
    {
        field: 'color',
        headerName: 'Color',
        width: 100,
        type: "string",
    },
    {
        field: 'producer',
        headerName: 'Producer',
        width: 100,
        type: "string",
    },
    {
        field: 'price',
        headerName: 'Price',
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
        field: 'inStock',
        headerName: 'In Stock',
        width: 150,
        type: "boolean",

    },
];

const Products = () =>{
    const [open,setOpen] = useState(false)
    return (
        <div className="products">
            <div className="info">
                <h1>Products</h1>
                <button onClick={()=>setOpen(true)}>Add New Products</button>
            </div>
            <DataTabel slug="Products" columns={columns} rows={products} />
            {open && <Add slug="Product" columns={columns} setOpen={setOpen}/>}
        </div>
    )
}

export default Products;