
import Head from 'next/head';
import Link from 'next/link';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import HomeMenu from './components/layout/HomeMenu';
import SectionHeaders from './components/layout/SectionHeaders';

export default function Home() {
  return (
  <>
 
<Hero/>
<HomeMenu/>

<section className='my-16 text-center'>
  <SectionHeaders
   subHeader={'our atory'}
   mainHeader={'about us'} 
  />

  <div  className='flex-col max-w-md gap-4 mx-auto mt-4 text-gray-500 '>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    lorem ipsum dolor sit amet consectetur adipisicing elit.    
  </p>
  
  <p  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    lorem ipsum dolor sit amet consectetur adipisicing elit.    
  </p>
  <p  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    lorem ipsum dolor sit amet consectetur adipisicing elit.    
  </p>
  </div>
  </section>

  <section className='my-8 text-center'>
    <SectionHeaders subHeader={'don\'t hesitate'}
    mainHeader={'contact us'}/>
    <div  className='mt-8'>

      <a className='text-4xl text-gray-500 underline ' href='tel:+3543254678'>+325443566774</a>
    </div>

  </section>

  </>
  )
}
