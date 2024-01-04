import "./App.css";
import Home from "./pages/home/homePage";
import {Routes,Route} from "react-router-dom"



function App() {
  return (
    <div className="App ">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/challenge" element={<></>} />

        </Routes>
    </div>
  );
}

export default App;
