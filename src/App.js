import "./App.css";
import Formation from "./pages/formation/formation";
import Home from "./pages/home/homePage";
import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <div className="App ">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/formation" element={<Formation/>} />
          <Route path="/challenge" element={<></>} />
        </Routes>
    </div>
  );
}

export default App;
