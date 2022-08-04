import {Icon } from 'Icons'
import {useAudio} from 'react-use';
import { secondsToTime } from 'utils';
import CostumRange from './CostumRange';
import {useDispatch,useSelector} from 'react-redux';
import { useEffect } from 'react';
import {setControls} from 'stores/player';
import { fireEvent } from '@testing-library/react';

import aurora from 'sounds/aurora.mp3';
import dopamine from 'sounds/dopamine.mp3';
import fire from 'sounds/fire.mp3';
import shivers from 'sounds/shivers.mp3';
import sugar from 'sounds/sugar.mp3';


export default function Player(){

    const dispatch = useDispatch();
    const {current} = useSelector(state=>state.player);
     
    const getmp3 ={
        'aurora':aurora,
        'dopamine':dopamine,
        'fire':fire,
        'shivers':shivers,
        'sugar':sugar
    }


    const [audio, state, controls, ref] = useAudio({
        src:getmp3[current.src],
      });

      useEffect(()=>{
 
        controls.play();
    
    },[current])

useEffect(()=>{
 
    dispatch(setControls(controls));

},[])

    return (<div className="flex justify-between items-center h-full px-4">
        <div className="min-w-[11.25rem] w-[30%] flex item-center">
             
             {current && <div className='flex items-center'>
                          <div className='h-14 w-14 mr-2 '>
                               <img src={current.image}></img>
                          </div>
                          <div>
                             <h6 className='text-sm hover:underline'>{current.title}</h6>
                          </div>
             </div>}
        </div>

        <div className="flex flex-col items-center max-w-[45.125rem] w-[40%] ">
            <div className="flex item-center gap-x-2">
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon name='shuffle' size={16}/>
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon name='playerPrev' size={16}/>
                </button>
                <button className="w-8 h-8 flex items-center justify-center   bg-white rounded-full hover:scale-[1.06]"
                onClick={ controls[state?.playing?'pause':'play'] }>
                
                    <Icon name={state?.playing?'pause':'play'} size={16}/>
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon name='playerNext' size={16}/>
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon name='repeat' size={16}/>
                </button>
            </div>
            <div className='w-full flex item-center gap-x-2'>
                {audio}
                <div className='text-[0.7rem] text-white text-opacity-70 flex items-center justify-center'>
                {secondsToTime(state?.time)}
                </div>
                  
                  <CostumRange 
                   step ={0.1}
                   min={0}
                   max={state?.duration || 1 }
                   value={state?.time}
                   onChange={value => controls.seek(value )}

                  />
        <div className='text-[0.7rem] text-white text-opacity-70 flex items-center justify-center'>
                {secondsToTime(state?.duration)}
                </div>

            </div>
        </div>

        <div className="min-w-[11.25rem] w-[30%] flex justify-end item-center">
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon name='queue' size={16}/>
                </button>

                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon name='device' size={16}/>
                </button>

                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon name={state?.volume===0?'volumeMute':'volumeNormal'} size={16}/>
                </button>

                <div className='w-[5.8rem] max-w-full'>
                <CostumRange 
                   step ={0.01}
                   min={0}
                   max={1}
                   value={state?.volume}
                   onChange={value => controls.volume(value )}

                  /></div>
                  <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon name='fullScreen' size={16}/>
                </button>

                
        </div>

    </div>)
}

