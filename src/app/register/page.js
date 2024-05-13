"use client";
import Image from 'next/image';
import {useState} from 'react';
export default function RegisterPage(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    function handleFormSubmit(ev){
        ev.preventDefault();
        fetch('/api/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({email,password}),
        });}
return(
<section className="mt-8 " > 

<h1 className="mb-4 text-4xl text-center text-primary">

 register
</h1>
<form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
<input className="block w-full p-2 my-4 bg-gray-200 border border-gray-100 rounded-xl" type=" email" placeholder="email"
value={email} onChange={ev => setEmail(ev.target.value)}/>
<input className="block w-full p-2 my-4 bg-gray-200 border border-gray-100 rounded-xl" type=" password" placeholder="password"
value={password} onChange={ev => setPassword(ev.target.value)}/>
<button className="text-white border-0 bg-primary"
type="submit">register</button>
<div className="my-4 text-center text-gray-500 ">
     or login with provider</div>
<button className="flex justify-center gap-4"> 
<Image src={"/google.png"} alt={''} width={32} height={24}/>   
Login with google</button>
</form>




</section>
    
);
}