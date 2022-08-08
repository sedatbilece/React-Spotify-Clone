


function Wideitem({item}){



    return(<div>

<div style={{
        backgroundColor:item.backcolor,
    }} className='rounded-md  relative overflow-hidden w-[27.5rem] h-[14.rem]'>
       
            <div className='absolute inset-0'>
            <h3 className='p-4 text-2xl tracking-tighter font-semibold'>
            {item.title}
            </h3>
            </div>
            <img src={item.cover} alt={item.title} 
            className='w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] 
            translate-y-[-2% ] absolute bottom-0 right-0 shadow-spotify'/>

    </div>

    </div>)
 


}
export default Wideitem;