


const Course = ({course,handleCourse}) => {
    
    const {img,cover_title,description,price,time}=course;
  

    return (
        <div className="bg-gray-300 p-4 rounded-xl">
            <img src={img} alt=""  />
           <div className="">
            <h1 className="font-bold text-xl">{cover_title}</h1>
            <p>{description}</p>
           </div>
           <div className="flex justify-between mt-4 mb-2">
              <p> $ price: {price}</p>
              <p>Credit: {time} hr</p>
           </div>
           <button className="border-2 w-full bg-blue-500 text-white rounded-2xl"
             onClick={()=>handleCourse(course,time,price)}
           >Select</button>

           <button className="border-2 w-full bg-red-600 text-white rounded-2xl">Delete</button>
            
        </div>
    );
};

export default Course;