import {Icon } from 'Icons'
import {useAudio} from 'react-use';
import { secondsToTime } from 'utils';
import CostumRange from './CostumRange';
export default function Player(){

 
    

    const [audio, state, controls, ref] = useAudio({
        src: 'https://v1.api.audio/url/bf02e7/default.mp3'
      });
    

    return (<div className="flex justify-between items-center h-full px-4">
        <div className="min-w-[11.25rem] w-[30%] flex">
           sol
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

        <div className="min-w-[11.25rem] w-[30%] flex justify-end">
            sağ
        </div>

    </div>)
}

