


const SingleShow = ({singleCourse}) => {
    const {cover_title}=singleCourse;
    //console.log(time)
    return (
        <div className="bg-slate-100 p-4 m-2 rounded-xl">
          <ol className="custom-ol">
            <li>{cover_title}</li>
          </ol>
          
        </div>
       
        
      );
      
};

export default SingleShow;