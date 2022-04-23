import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StudentContext } from './StudentContext'

const tableCellS = {
    color: "white",
    border: "1px solid #61dafb",
    fontSize:"19px"
  }
  const tableHead = {
    fontWeight: "Bold",
    color: "white",
    border: "1px solid #61dafb",
    fontSize:"21px"
  }

const Student = () => {

  const [stdData,setStdData]= useContext(StudentContext)
  const navigate = useNavigate();

  const goToUpdatePage = (index) =>{
    navigate(`/student/update/${index}`)
  }
  const del = (index) =>{
    let updateArr = stdData;
    updateArr.splice(index,1);
    setStdData([...updateArr])
  } 
  return (
        <>
          <div className='container top-div'>
            <div className='div1'>
              Student Details
            </div>
            <div className='div1 div2'>
            <button onClick={()=>navigate('/student/addStudent')} className='btn btn-primary add'><img src = "https://cdn-icons-png.flaticon.com/512/265/265674.png" alt="" className='i1'/> Add Student</button>
            </div>
        </div>

        <div className='container'>
                        <br/>
       <div className='tab'>
      <TableContainer style={{ backgroundColor: "black",  borderRadius:"5px"}}>
      <Table>
        <TableHead>
          <TableRow >
             <TableCell style={tableHead} align="center">Name</TableCell>
            <TableCell style={tableHead} align="center">Age</TableCell>
            <TableCell style={tableHead} align="center">Course</TableCell>
            <TableCell style={tableHead} align="center">Batch</TableCell>
            <TableCell style={tableHead} align="center">Change</TableCell>
            <TableCell style={tableHead} align="center">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
                stdData.map((current,index)=>{
                    return(
                        <TableRow key={index}>
                        <TableCell style={tableCellS} align="center">{current.name}</TableCell>
                        <TableCell style={tableCellS} align="center">{current.age}</TableCell>
                        <TableCell style={tableCellS} align="center">{current.course}</TableCell>
                        <TableCell style={tableCellS} align="center">{current.batch}</TableCell>
                        <TableCell style={tableCellS} align="center"><button className='edit' onClick={()=>{goToUpdatePage(index)}} ><img src="https://findicons.com/files/icons/2166/oxygen/48/edit.png" alt="" className='i2'/> Edit</button></TableCell>
                        <TableCell style={tableCellS} align="center"><button className='del' onClick={()=>{del(index)}} ><img src="https://img.icons8.com/glyph-neue/344/ffffff/trash.png" alt="" className='i3'/> Delete</button></TableCell>
                        </TableRow>
                    )
                })
            }
              </TableBody>
            </Table>
        </TableContainer>
        </div>
        </div></>
  )
}

export default Student
