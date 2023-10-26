import { FaPen,FaTrashCan } from "react-icons/fa6";

const Post = () => {
    return (
      <div className="flex flex-col items-start space-y-4 mx-8 mt-10">
        <div>
          <h1 className="text-3xl font-bold">this is the title of the blog</h1>
        </div>
        <div className="flex flex-row justify-start space-x-5">
          <div>
            <span className="text-sm">@ravindra</span>
          </div>
          <div className="space-x-5">
            <span className="text-sm">22/10/2023</span>
            <span className="text-sm">11.00 am</span>
          </div>
        </div>
        <div className="space-x-5" >
        <button><FaPen/></button>
        <button><FaTrashCan/></button>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1682686581427-7c80ab60e3f3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMTB8fHxlbnwwfHx8fHw%3D"
            alt="Blog Image"
            className="max-w-full"
          />
        </div>
  
        <div>
          <span className="text-sm">Categories : </span>
          <span className="text-sm mr-1">AI</span>
          <span className="text-sm">Tech</span>
        </div>
        <div>
          <p className="text-sm">this is the description of the blog post</p>
        </div>
      </div>
    );
  };
  
  export default Post;
  