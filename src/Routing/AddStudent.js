import React,{ useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { StudentContext } from './StudentContext'

const AddStudent = () => {
    const [stdData,setStdData,count,setCount]= useContext(StudentContext)
    const navigate = useNavigate()
    const [std,setStd] = useState({
        name:"",
        age:"",
        course:"",
        batch:""
    }) 

      const getDetails = (e) =>{
      e.preventDefault();
      setStdData([...stdData,{...std,id:count}])
      setCount(count+1);
      console.log(stdData);
      setStd({name:"",age:"",course:"",batch:""})
      navigate('/student')
  }
  return (
      <div className='form'>
        <br/>
        <h1>Add Student</h1>
        <br/>
        <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={std.name} onChange={(e)=>setStd({...std,name:e.target.value})} autoComplete="off" className='text-field' spellCheck="false"/>  <br/>  <br/>
        <label htmlFor="age">Age</label>
        <input type="number" name="age" value={std.age} onChange={(e)=>setStd({...std,age:e.target.value})} autoComplete="off" className='text-field' spellCheck="false"/>  <br/>  <br/>
        <label htmlFor="course">Course</label>
        <input type="text" name="course" value={std.course} onChange={(e)=>setStd({...std,course:e.target.value})} autoComplete="off" className='text-field' spellCheck="false"/>  <br/>  <br/>
        <label htmlFor="batch">Batch</label>
        <input type="text" name="batch" value={std.batch} onChange={(e)=>setStd({...std,batch:e.target.value})} autoComplete="off" className='text-field' spellCheck="false"/><br/>  <br/>
        <button className='btn btn-success addBtn btnz' onClick={getDetails}>Add</button> 
        </form>
        <br/>
        <button className='btn btn-danger backBtn btnz' onClick={()=>navigate('/student')}>Back</button> 
      </div>
  )
}

export default AddStudent
