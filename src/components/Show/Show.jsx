import SingleShow from "../Singleshow/SingleShow";


const Show = ({course,ctime,rtime,tprice}) => {
   
    return (
        <div className="w-full md:w-1/3  h-full m-2  bg-gray-200 rounded-xl p-4 mr-2">
            <h1 className="text-teal-600 font-bold border-b-2 border-red-500 mb-2 pb-4 md:text-xl">Creadit_hour_Reaming: {rtime} </h1>
            <h1 className="text-xl font-bold mb-4">Course Name: </h1>
            {
               course.map((x,idx)=><SingleShow key={idx} singleCourse={x}></SingleShow>)
            }
           <h1 className="text-teal-600 font-bold border-b-2 border-t-2 border-red-500 mb-2 mt-4 pb-4 pt-4 md:text-xl">Total_Creadit hour: {ctime} </h1>
            <h1 className="text-teal-500 font-bold  border-red-500 mb-2 pb-4 md:text-xl">Total_price: {tprice} </h1>
        </div>
    );
};

export default Show;