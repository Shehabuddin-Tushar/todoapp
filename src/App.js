import React,{useState,useEffect} from 'react'
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Pagination from "./Component/Pagination.js";
function App() {
  const [mydata,setMydata]=useState([]);
  const [showPerPage, setShowPerPage] = useState(4);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  

  useEffect(()=>{
     
    fetch(`https://staging-backend.esyms-api.com/esyms/website/product/front-condition?categoryId=&name=%20`)
    .then(res=>res.json()).then(data=>setMydata(data.results.docs));

  },[])

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };


  return (
    <div className="App">
     
           <TableHead>
              <TableRow>
                   <TableCell align="right">id</TableCell>
                   <TableCell align="right">price</TableCell>
                   <TableCell align="right">specialPrice</TableCell>
                </TableRow>
              </TableHead>
          {
            mydata.slice(pagination.start, pagination.end).map((data)=>{
              return(
               <>
               
              <TableRow
              key={data._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             >
              
              <TableCell align="right">{data.productId}</TableCell>
              <TableCell align="right">{data.price}</TableCell>
              <TableCell align="right">{data.specialPrice}</TableCell>
              
            </TableRow>
             </>  
              )
            })
          }
          <Pagination
            showPerPage={showPerPage}
            onPaginationChange={onPaginationChange}
            total={mydata.length}
         />
 
    </div>
  );
}

export default App;
