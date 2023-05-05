import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Skeletion from "../components/Skeletion";
import { getPostById } from "../utils/getapis";

const Posts = () => {
  const [Posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getPostById(id, setPosts, setLoading, navigate);
  }, []);
  return (
    <>
      <h1 className="text-lg font-bold text-center">Posts</h1>
      <div>
        {loading
          ? new Array(9).fill(0).map((el, i) => {
              return <Skeletion key={i}></Skeletion>;
            })
          : Posts?.map((el, i) => {
              return (
                <div
                  key={i}
                  className="shadow-md max-w-md m-auto mt-8"
                  onClick={() => navigate(`/postdetails/${el.id}`)}
                >
                  <div className="flex flex-col items-center pb-10">
                    <img
                      className="w-full h-50 shadow-lg"
                      src="https://plus.unsplash.com/premium_photo-1683105756685-238b23c9b12d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=fohttps://plus.unsplash.com/premium_photo-1683105756685-238b23c9b12d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1389&q=80rmat&fit=crop&w=800&q=80"
                      alt="Bonnie image"
                    />
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-4">
                      {el.title}
                    </h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4">
                      {el.body}
                    </p>
                  </div>
                  <Link
                    to={`/postdetails/${el.id}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2"
                  >
                    Read Comments
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default Posts;
