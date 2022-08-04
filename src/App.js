import Sidebar from 'components/Sidebar';

import Content from 'components/Content';
import BottomBar from 'components/BottomBar';

import { BrowserRouter as Router, } from "react-router-dom";

function App() {
  return (
    < Router>
        <div className='wrapper' >
          <Sidebar />
          <Content />
        </div>
        <BottomBar />
   


    </Router>
  );
}

export default App;
