'use client';

import { useState } from 'react';
import Image from 'next/image'
import { Metadata } from 'next'
import Navbar from './components/Nav';
import hero1 from './asset/online-tech-talks-animate.svg';
import img1 from './asset/Picture2 2.png'
import Count from './components/count';
import Fitur from './components/fitur';
import { FaFacebookSquare, FaGlobe, FaLinkedin, FaPaperPlane, FaTwitterSquare } from 'react-icons/fa'
import logo from './asset/lskk.png'
import {  BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail, MdManageAccounts,  MdSecurity } from 'react-icons/md'
import { IoMdSchool } from 'react-icons/io'
import { AiOutlineArrowUp } from 'react-icons/ai'
import Link from 'next/link';


export const metadata: Metadata = {
  title: 'SEMS',
  description: 'SSEEEMMSS',
};

export default function Home() {

  const [change, setChange] = useState(false)

  const changeOnScroll=()=>{
    const scrollValue=document.documentElement.scrollTop;
    if(scrollValue>1000){
      setChange(true)
    }
    else{
      setChange(false)
    }
  }

  window.addEventListener('scroll', changeOnScroll);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Navbar />

      <div className='bg-[url(./asset/hero.png)] w-screen h-[100vh] bg-cover flex flex-row items-center justify-center' id='hero'>
        <div className='flex flex-col w-1/3 space-y-12'>
        <h1 className='text-6xl tracking-[2px] font-semibold text-orange-500 drop-shadow-md'>S E M S <br /> Education <br /> System</h1>
        <div>
          <button className='bg-blue-500 text-white font-semibold px-[25px] py-[10px] rounded-full border-blueMain border-2 shadow-md hover:bg-white hover:text-blueMain'>Bergabung Sekarang</button>
        </div>
        </div>
        <Image src={hero1} alt='hero' className='drop-shadow-lg' width={500}/>
      </div>

      <div className='flex flex-col md:flex-row items-center gap-12 py-24'>
      <h1 className='text-4xl text-blueMain font-bold uppercase w-1/2 pl-24'>
        Bergabung sekarang untuk mendapatkan kemudahan yang diberikan oleh SEMS
      </h1>
      <div className='flex flex-row items-center flex-wrap-reverse w-1/2 gap-4 justify-center'>
        <Count jumlah="20+" isi="Hour tersedia untuk diaskses"/>
        <Count jumlah="24h" isi="Layanan siap membantu"/>
        <Count jumlah="150+" isi="Sekolah telah bergabung"/>
      </div>
      </div>

      <div className='flex flex-col items-center gap-24 py-24'>
      <h1 className='text-4xl text-blueMain font-bold uppercase text-center'>
        Dengan berbagai fitur seperti
      </h1>
      <div className='flex flex-row items-stretch justify-center gap-12 p-6 px-12'>
        <Fitur icon={<FaGlobe size={70} className="bg-blueMain p-3 text-white rounded-full absolute self-center top-[-3rem]"/>} para="Management sekolah berbasis digital yang saling terkoneksi"/>
        <Fitur icon={<IoMdSchool size={70} className="bg-blueMain p-3 text-white rounded-full absolute self-center top-[-3rem]"/>} para="Pembelajaran digital yang memudahkan pengguna mengakses bahan ajar dan ujian"/>
        <Fitur icon={<MdManageAccounts size={70} className="bg-blueMain p-3 text-white rounded-full absolute self-center top-[-3rem]"/>} para="Smart system menerapkan IR 4.0 pada sistem manajemen pendidikan"/>
        <Fitur icon={<MdSecurity size={70} className="bg-blueMain p-3 text-white rounded-full absolute self-center top-[-3rem]"/>} para="Integrasi data untuk kemudahan dan kenyamanan dalam mengakses data dengan tingkat keamanan tinggi"/>
      </div>
      </div>

      <div className='flex flex-row items-center w-screen bg-blueMain h-fit'>
        <Image src={img1} alt='img' sizes="50vw"/>
        <div className='bg-blueMain text-white p-12 w-1/2 h-full space-y-5'>
          <h1 className='leading-[30px] text-lg'>Smart Education System merupakan sistem berbasi cloud yang menyediakan berbagai macam fitur sistem management dan administrasi sekolah, dengan menerapkan teknologi 4.0 sehingga memudahkan pengguna untuk memakai seluruh layanan dengan proses yang lebih terotomatisasi.</h1>
          <button className='bg-white text-blue-500 font-semibold px-[25px] py-[10px] rounded-full border-white border-2 hover:bg-blue-500 hover:text-white'>Bergabung Sekarang</button>
        </div>
      </div>
      <div className='flex flex-row bg-blue-800 text-white items-center justify-center w-screen py-8 gap-5'>
        <h1>Newsletter</h1>
        <div className='flex flex-row bg-white rounded-full px-3 py-2'>
          <input type="text" placeholder='Email Anda' className='focus:outline-none text-black px-4'/>
          <button className='bg-blue-800 rounded-full p-3'><FaPaperPlane size={15}/> </button>
        </div>  
      </div>

      <div className='flex flex-row justify-between items-start bg-blueMain bottom-0 left-0 w-screen text-white px-24 py-12'>

        <Image src={logo} alt="logo" width={150} className='drop-shadow-lg'/>

        <div className='flex flex-col gap-2 w-1/3'>
          <h1 className='font-semibold text-2xl mb-4'>Kantor Utama</h1>   
          <h1>Jl. Pelajar Pejuang 45 No.65,Lkr. Sel.,Lengkong,Kota Bandung,Jawa Barat 40263</h1>
          <div className="flex flex-row items-center space-x-[5px]">
            <BsFillTelephoneFill className="text-white" size={13}/>
            <h1>(022) 7351 6650</h1>
          </div>
          <div className="flex flex-row items-center space-x-[5px]">
            <MdEmail className="text-white" size={13}/>
            <h1>pt.lskk@gmail.com</h1>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='font-semibold text-2xl mb-4'>Social Media</h1>
          <div className='flex flex-row gap-2'>
            <a href="https://www.facebook.com/lskkgroup/"><FaFacebookSquare size={30} className='hover:opacity-80'/></a>
            <a href=""><FaTwitterSquare size={30} className='hover:opacity-80'/></a>
            <a href="https://id.linkedin.com/company/ptlskk"><FaLinkedin size={30} className='hover:opacity-80'/> </a>
          </div>
        </div>

        <button className={change?'fixed bottom-[5rem] right-[5rem] bg-orange-500 rounded-xl p-2':'hidden'} onClick={scrollToTop}><AiOutlineArrowUp size={25}/></button>

      </div>
    </main>
  )
}
