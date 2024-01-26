import "./App.css";
import Formation from "./pages/formation/formation";
import FormationHome from "./pages/formation/formationHome";
import FormationRecherche from "./pages/formation/formationRecherche";
import Home from "./pages/home/homePage";
import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <div className="App ">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/formation" element={<Formation/>} >
          <Route path="/formation/home" element={<FormationHome/>}/>
          <Route path="/formation/recherche" element={<FormationRecherche />} />
          </Route>
          <Route path="/challenge" element={<></>} />
        </Routes>
    </div>
  );
}

export default App;
