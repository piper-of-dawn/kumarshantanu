import Link from "next/link";


const Navbar = () => {
   return (
<div className="nav">


      <div className="navigation flex text-center flex-col text-slate-900 justify-center list-none uppercase font-mono font-semibold text-normal tracking-wide">       
                  <li className=" hover:text-sky-500 transition duration-300"><Link href="/">About</Link></li>
                  <li className=" hover:text-sky-500 transition duration-300"><Link href="#posts" scroll={false}>Meditations</Link></li>
                  <li className=" hover:text-sky-500 transition duration-300"><Link href="statics/temp">Blog</Link></li>
                  <li className=" hover:text-sky-500 transition duration-300"> <a href="#">Playground</a> </li>    
        
            </div> 
</div>)};

export default Navbar;