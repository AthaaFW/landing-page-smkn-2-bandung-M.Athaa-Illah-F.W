const Count = ({jumlah, isi}) => {
    return ( 
        <div className="w-[35%] rounded-xl p-8 flex flex-col gap-12 border-gray-400 border-2 shadow-lg">
            <h1 className="text-blueMain text-4xl font-bold">{jumlah}</h1>
            <h1 className="font-semibold">{isi}</h1>
        </div>
     );
}
 
export default Count;