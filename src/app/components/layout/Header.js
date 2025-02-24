
import Link from 'next/link';
export default function Header(){

    return(

<header className='flex items-center justify-between '>  

 
  <nav className="flex items-center gap-10 font-semibold text-gray-500">
   
  <Link  className='text-2xl font-semibold text-primary' href="">
MyFood
  </Link>
    <Link href={""}>Home</Link>
    <Link href={""}>Menu</Link>
    <Link href={""}>About</Link>
    <Link href={""}>Contact</Link>
    
  </nav> 
  <nav className='flex items-center gap-10 font-semibold text-gray-500'>
    <Link href={"/login"}>Login</Link>
    <Link href={"/register"} className='px-8 py-2 text-white rounded-full bg-primary'>Register</Link>
  </nav>
 
  </header>
    );
}