import React,{useState,useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';

let id=0;

for(id=0;id<=100;id++){
   
}
const columns = [
   
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'title', width: 130 },
    { field: 'body', headerName: 'body', width: 130 }
   ]
function Datatable() {

    const [ourdata,setOurdata]=useState([]);

    useEffect(()=>{
     
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>res.json()).then(data=>setOurdata(data));
    
      },[])
    return (
        <div>
            <h1>data table</h1>
           <DataGrid
          
            rows={ourdata}
            columns={columns}
            pageSize={10}
            checkboxSelection
            />
        </div>
    )
}

export default Datatable
