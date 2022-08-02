import Navigaton from "./Navbar/Navigation";
import Auth from "./Navbar/Auth";
import {useMatch } from 'react-router-dom'
function Navbar (){

const issearch = useMatch('/search');
const ishome = useMatch('/');
const islibrary = useMatch('/collection');

    return (<nav className="h-[3.75rem] flex item-center justify-between px-8 ">
       <Navigaton/>
       
       {issearch && 
       <div>
            search
        </div>}

        {ishome && 
        <div>
            home
            </div>}

        {islibrary &&
         <div>
             collection
         </div>}

       <Auth />
       
       

    </nav>)

}

export default Navbar;