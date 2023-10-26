

const Login = () => {
    return (
        <div className="flex flex-col justify-center items-center my-5 h-[50vh]">
            <div className="font-sans text-4xl my-5">Login</div>
           <div>
           <input placeholder="email" className="rounded border-2 h-10 w-80 my-5 shadow-md border-black pl-1"/>
           </div>
           <div>
            <input placeholder="password" className="rounded border-2 h-10 w-80 shadow-md border-black pl-1"/>
           </div>
           <div>
            <button className="font-sans rounded border-2 h-10 w-80 my-5  bg-slate-900 text-white shadow-md">login</button>
           </div>
        </div>
    )
}


export default Login;