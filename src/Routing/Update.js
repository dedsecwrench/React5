import React,{useState,useContext} from 'react'
import { useNavigate,useParams} from 'react-router-dom'
import { StudentContext } from './StudentContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
  
  const {id} = useParams()
  const navigate = useNavigate()
  const [stdData]= useContext(StudentContext)
  const selectedIndex = Number(id)

  //  const selectedIndex = stdData.findIndex(cur=>cur.id === ID)
   const [name,setName] = useState(stdData[selectedIndex].name)
   const [age,setAge] = useState(stdData[selectedIndex].age)
   const [course,setCourse] = useState(stdData[selectedIndex].course)
   const [batch,setBatch] = useState(stdData[selectedIndex].batch)

    const getEditDetails = (e) =>{
      // console.log(typeof(ID))
      e.preventDefault()
      const obj = {name,age,course,batch,id:selectedIndex}
      stdData[selectedIndex] = obj;
      navigate('/student')
      toast.success("Updated Succesfully!",{
        conid: 'u1',
        position:"top-center",
        autoClose:1500,
        closeButton:false
      })
    } 
  return (
    <> 
      <div className='form'>
        <br/>
        <h1>Edit</h1>
        <br/>
        <form>
        <label htmlFor="name">Name</label>&nbsp; 
        <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} autoComplete="off" className='text-field' spellCheck="false"/>  <br/>  <br/>
        <label htmlFor="age">Age</label>&nbsp; 
        <input type="number" name="age" value={age} onChange={(e)=>setAge(e.target.value)} autoComplete="off" className='text-field' spellCheck="false"/>  <br/>  <br/>
        <label htmlFor="course">Course</label>&nbsp; 
        <input type="text" name="course" value={course} onChange={(e)=>setCourse(e.target.value)} autoComplete="off" className='text-field' spellCheck="false"/>  <br/>  <br/>
        <label htmlFor="batch">Batch</label>&nbsp; 
        <input type="text" name="batch" value={batch} onChange={(e)=>setBatch(e.target.value)} autoComplete="off" className='text-field' spellCheck="false"/><br/>  <br/>
        <button className='btn btn-success addBtn btnz' onClick={getEditDetails}>Update</button> 
        </form>
        <br/>
        <button className='btn btn-danger backBtn btnz' onClick={()=>navigate('/student')} >Back</button> 
      </div>   </>    
  )
}

export default Update
