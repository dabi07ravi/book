import { FaCanadianMapleLeaf, FaSistrix, FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
    let user = false
  return (
    <nav>
      <div className="flex flex-row justify-around bg-slate-900 text-white font-bold py-5 font-sans">
        <div>
          <Link to="/"><FaCanadianMapleLeaf className="text-4xl" /></Link>
        </div>
        { user && (
            <div className="flex">
            <input
              placeholder="search a post..."
              className="rounded-full w-40 mr-5 pl-2"
            />
            <button>
              <FaSistrix className="text-2xl" />
            </button>
          </div>
        )
        }
      
        <div className="flex">
           {user ? <div className="mr-5 text-2xl"><Link to="/write">Write</Link></div> : <div className="mr-5 text-2xl"><Link to="/login">Login</Link></div>}
          {user ? <div className="text-2xl"> <Link to="/profile/123"><FaUserLarge className="rounded-full my-1 ml-1"/></Link></div> : <div className="text-2xl"> <Link to="/register">Register</Link></div>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
