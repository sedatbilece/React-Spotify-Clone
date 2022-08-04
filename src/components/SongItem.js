import { NavLink } from "react-router-dom";
import {Icon } from 'Icons';
import {useDispatch,useSelector} from 'react-redux';     
import {setCurrent} from 'stores/player'

function SongItem ({item}){


    const dispatch = useDispatch();
    const {current} = useSelector(state=>state.player);
     const updateCurrent =()=>{
           dispatch(setCurrent(item));
     }


    return (
        <NavLink  
        to='/' 
        key={item.id}
        className='bg-footer p-4 hover:bg-active rounded group'
        >
            <div className=" relative">
            <img src={item.image} className='aspect-square rounded  '></img>

              <button 
              onClick={updateCurrent}
              className="w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2  items-center justify-center hidden group-hover:flex  group-focus:flex ">
                <Icon name={current.id==item.id?'pause':'play'} size={16} />
                  </button>
            </div>

              <div className="font-semibold mt-2">
              {item.title}
              </div>

              <div className="text-xs mt-2 text-link">
                {item.desc}
              </div>
        </NavLink>
    )
}


export default SongItem;