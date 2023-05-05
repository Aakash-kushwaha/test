import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Skeletion from "../components/Skeletion";
import { getUsers } from "../utils/getapis";

const User = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getUsers(setData, setLoading);
  }, []);

  return (
    <>
    <h1 className="text-lg font-bold text-center mb-4">Users</h1>
      <div className="grid grid-cols-1 sm-grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
      {loading
        ? new Array(9).fill(0).map((el, i) => {
            return <Skeletion key={i}></Skeletion>;
          })
        : data?.map((el, i) => {
            return (
              <div
                key={i}
                className="shadow-md"
                onClick={() => navigate(`/posts/${el.id}`)}
              >
                <div className="flex flex-col items-center pb-8">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src="https://cdn.pixabay.com/photo/2014/04/03/11/56/avatar-312603_1280.png"
                    alt="Bonnie image"
                  />
                  <div className="flex gap-4">
                    <ul>
                    <li>ID</li>
                      <li>Name</li>
                      <li>UserName</li>
                      <li>Email</li>
                      <li>Phone</li>
                      <li>Website</li>
                    </ul>
                    <ul>
                    <li>{el.id}</li>
                      <li>{el.name}</li>
                      <li>{el.username}</li>
                      <li>{el.email}</li>
                      <li>{el.phone}</li>
                      <li><a href={el.website}>{el.website}</a></li>
                    </ul>
                  </div>
                </div>
                <div className="w-10 m-auto mb-2">
                <Link to={`/posts/${el.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Posts
        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </Link>
                </div>
     
              </div>
            );
          })}
    </div>
    </>
  
  );
};

export default User;
