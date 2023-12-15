import "./App.css";
import Home from "./pages/home/homePage";
import {Routes,Route} from "react-router-dom"


function Test(){
  return <p>TEST</p>
}
function App() {
  return (
    <div className="App ">
        <Routes>
          <Route path="/" element={<Home/>} />
        <Route path="/challenge" element={<Test/>} />

        </Routes>
    </div>
  );
}

export default App;
