import { Icon } from "Icons"


export default function Navigaton (){


    return (<nav className="flex items-center gap-x-4">
        
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70" >
            <Icon name="prev" size={22} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70">
            <Icon name="next" size={22} />
        </button>
        </nav>)
}