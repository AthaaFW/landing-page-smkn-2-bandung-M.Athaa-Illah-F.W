const Fitur = ({icon, para}) => {
    return ( 
        <div className="w-[20%] relative rounded-xl p-6 pt-12 flex flex-col gap-12 border-gray-400 border-2 shadow-lg items-center self-stretch h-[196px]">
                {icon} 
            <h1>{para}</h1>
        </div>
     );
}
 
export default Fitur;