import React, { createContext,useState } from 'react'

export const StudentContext = createContext()

export const StudentProvider = (props) => {
  const [stdData,setStdData] = useState([
      {name:"Harvey",age:24,course:"MERN",batch:"August",id:0},
      {name:"Mike",age:22,course:"MERN",batch:"September",id:1},
      {name:"Ric",age:25,course:"MERN",batch:"October",id:2},
      {name:"Miguel",age:21,course:"MERN",batch:"November",id:3},
      {name:"Hawk",age:23,course:"MERN",batch:"December",id:4}
    ])  
  const [count,setCount] = useState(5)  
  return (
      <StudentContext.Provider value={[stdData,setStdData,count,setCount]}>
          {props.children}
      </StudentContext.Provider>
  )
}
