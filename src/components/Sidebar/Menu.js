import {Icon} from 'Icons'
import { NavLink } from "react-router-dom";

function Menu(){
    let activeStyle = {
        backgroundColor: '#282828',
        color:'white'
      };

    return (<nav className="px-2">
        <ul className="flex flex-col">
            <li>
                <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined } 
              to={'/'} href="#" className="h-10  flex items-center gap-x-4 text-sm font-semibold text-link hover:text-white px-4 rounded  ">
                    <span>
                        <Icon name="home" size={24} />
                    </span>
                    Ana sayfa
                    </NavLink>
            </li>
            <li>
                <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined}
             to={'/search'}  href="#" className="h-10  flex items-center gap-x-4 text-sm font-semibold text-link hover:text-white px-4 rounded">
                <span>
                        <Icon name="search" size={24} />
                    </span>
                    Ara</NavLink>
            </li>
            <li>
                <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined}
            to={'/collection'}  href="#" className="h-10  flex items-center gap-x-4 text-sm font-semibold text-link hover:text-white px-4 rounded">
                <span>
                        <Icon name="library" size={24} />
                    </span>
                    Kitaplığın</NavLink>
            </li>
        </ul>
    </nav>)
}

export default Menu;