import { useState } from 'react'
import './App.css'
import CourseS from './components/CourseS/CourseS'
import Header from './components/Header/Header'
import Show from './components/Show/Show'

function App() {
   const [course,setCourse]=useState([]);
   const [ctime,setCtime]=useState(0);// ctime=credit time
   const [rtime,setRtime]=useState(10);//rtime=Reaming time
   const [tprice,setTprice]=useState(0)

   
    const handleCourse=(cou_sig,time,price)=>{

    //  const newcourse=[...course,cou_sig]
    //  // setCourse(newcourse)
    // const isDuplicate = course.some(x => x.id === cou_sig.id); 
    // isDuplicate?alert('Duplicate not allow'):setCourse(newcourse);
    // //credit time added
    // const newtime=ctime+time;
    // newtime>10?alert('Creadit limit Exced'):setCtime(newtime);
    // //update reaming time                                           
    // const newReamingtime=rtime-time;
    // setRtime(newReamingtime)

    const newcourse=[...course,cou_sig]
    const isDuplicate = course.some(x => x.id === cou_sig.id); 
    const newCtime=ctime+time;
    const newReamingtime=rtime-time;
    const newTprice=tprice+price;
    if(!isDuplicate && newCtime<=10 && newReamingtime>=0)
    {
      setCourse(newcourse)
      setCtime(newCtime) 
      setRtime(newReamingtime)
      setTprice(newTprice)
    }
    else{
      alert('Duplicate or Credit Limit Exced')
    }
    

 }

 
 
  return (
    <>
       <Header></Header>
       <div className='flex flex-col-reverse md:flex-row  max-w-7xl mx-auto '>
          <CourseS 
          handleCourse={handleCourse}
          
          ></CourseS>
          <Show course={course} ctime={ctime} rtime={rtime} tprice={tprice}></Show>
       </div>
     
    </>
  )
}

export default App
