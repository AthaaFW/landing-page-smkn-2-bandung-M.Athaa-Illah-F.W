import Image from "next/image";
import Logo from '../asset/lskk 1.svg'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const Navbar = () => {
    return ( 
        <div className="absolute  top-0 left-0 w-screen min-w-full flex flex-row items-center justify-between px-10 py-[10px] bg-blueMain text-white">
            <div className="flex flex-row items-center space-x-2">
            <Image src={Logo} alt="logo" width={25}/>
            <h1 className="text-xl font-bold text-white">SEMS</h1>
            </div>
            <div className="flex flex=row items-center space-x-5">
                <div className="flex flex-row items-center space-x-[5px]">
                <BsFillTelephoneFill className="text-white" size={13}/>
                <h1 className="text-sm">(022) 7351 6650</h1>
                </div>
                <div className="flex flex-row items-center space-x-[5px]">
                <MdEmail className="text-white" size={13}/>
                <h1 className="text-sm">pt.lskk@gmail.com</h1>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;