import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeletion from "../components/Skeletion";
import { getCommentsById } from "../utils/getapis";

const Postdetails = () => {
  const [comments, setComments] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getCommentsById(id,setComments,setLoading);
  }, []);
  console.log(comments);

  return (
    <>
    <h1 className="text-lg font-bold text-center">Comments</h1>
     <div>
      {
         loading?
         new Array(9).fill(0).map((el,i)=>{
          return <Skeletion key={i}></Skeletion>
         }) :
      comments?.map((el, i) => {
        return (
          <div key={i} className="max-w-md m-auto shadow-md p-2 mt-3 rounded-lg">
            <div className="flex gap-6">
              <div>
                <img
                  width={"20px"}
                  height={"20px"}
                  src={
                    el.image
                      ? el.image
                      : "https://cdn.pixabay.com/photo/2014/04/03/11/56/avatar-312603_1280.png"
                  }
                  alt="User"
                  className="user-image"
                />
              </div>
              <div >
                <h1 className="text-sm font-md">{el.name}</h1>
              </div>
            </div>
            <p className="font-light">{el.body}</p>
          </div>
        );
      })}
    </div>
    </>
   
  );
};

export default Postdetails;
