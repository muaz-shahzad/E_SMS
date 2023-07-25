import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle";
import {
  BrowserRouter,
  Routes, // Just Use Routes instead of "Switch"
  Route,
  Navigate
} from "react-router-dom";
import ScrollTop from './ScrollTop';
import Dashboard from '../src/Components/Pagess/Dashboard'
import QuickSend from '../src/Components/Pagess/QuickSend'
import Template from '../src/Components/Pagess/Template'
import Inbox from './Components/Pagess/Inbox';
import Schedule from './Components/Pagess/Schedule';
import MessageLog from './Components/Pagess/MessageLog';


function App() {
  return (
    <>
    
      <ScrollTop />
      {/* <MessageLog/> */}
      <Routes>
     <Route path="/" element={<Dashboard/>}></Route>
     <Route path="/inbox" element={<Inbox/>}></Route>
     <Route path="/quicksend" element={<QuickSend/>}></Route>
     <Route path="/template" element={<Template/>}></Route>
     <Route path="/schedule" element={<Schedule/>}></Route>
     <Route path="/message" element={<MessageLog/>}></Route>
     <Route path="*" element={<Navigate to="/" />}  />
     </Routes>
    </>
  )
}

export default App;