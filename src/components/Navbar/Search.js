import {Icon } from 'Icons'
import categories from 'data/categories';



function Search(){

    return (<div className="w-[58vw] flex items-center h-[3.75rem] relative">
        <label htmlFor='searchin ' className='w-10 h-10 flex items-center justify-center absolute top-2 left-0 '>
            <Icon  name='search' />
        </label>
        <input  type='text' id='searchin' className="h-10 pl-10 bg-white text-black rounded-3xl font-sm w-[22.75rem] outline-none" placeholder="Sanatçılar , şarkılar ve podcastler "/>

         
    </div>)
}


export default Search;