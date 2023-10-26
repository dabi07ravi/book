import { Link } from "react-router-dom";
const HomePage = () => {
    return (
      <div className="flex">
        <div className="mx-8 my-8">
          <img
            src="https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4MXx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-56 w-96"
           ></img>
        </div>
        <div className="mx-8 my-8 flex flex-col space-y-2">
        <div >
          <h1 className="font-bold text-2xl"><Link to="/posts/post/fdsfkdsfkl">this is the title of the blog</Link></h1>
        </div>
        <div >
          <span>@ravindra</span>
        </div>
        <div className="flex">
          <span className="mr-4">22/10/2023</span>
          <span>11.00 am</span>
        </div>
        <div>
          <p>this is the description of the blog post</p>
        </div>
  
  
        </div>
      
      </div>
    );
  };
  
  export default HomePage;
  