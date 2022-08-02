import { NavLink } from "react-router-dom";
import {Icon } from 'Icons';

function Section ({title,more=false,items}){



    return (<section className="mt-8">
        <header className="flex items-center justify-between mb-4 ">
        <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline cursor-pointer"> {title}</h3>
        {more && <a className="text-link text-xs font-semibold hover:underline" href={more} >HEPSİNİ GÖR</a>}
        </header>

        <div className="grid grid-cols-5 gap-x-6">
          {items.map(item=>(
            <NavLink  
            to='/' 
            key={item.id}
            className='bg-footer p-4 hover:bg-active rounded group'
            >
                <div className=" relative">
                <img src={item.image} className='aspect-square rounded  '></img>

                  <button className="w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2  items-center justify-center hidden group-hover:flex  group-focus:flex ">
                    <Icon name="play" size={16} />
                      </button>
                </div>

                  <div className="font-semibold mt-2">
                  {item.title}
                  </div>

                  <div className="text-xs mt-2 text-link">
                    {item.desc}
                  </div>
            </NavLink>
          )) }
        </div>
    </section>)
}


export default Section;