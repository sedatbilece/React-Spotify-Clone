function Category({category}){



    return (<div style={{
        backgroundColor:category.backcolor,
    }} className='rounded-md before:pt-[100%] before:block relative overflow-hidden'>
       
            <div className='absolute inset-0'>
            <h3 className='p-4 text-2xl tracking-tighter font-semibold'>
            {category.title}
            </h3>
            </div>
            <img src={category.cover} alt={category.title} 
            className='w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] 
            translate-y-[-2% ] absolute bottom-0 right-0 shadow-spotify'/>

    </div>)
}


export default Category;