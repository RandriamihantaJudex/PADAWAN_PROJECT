import "./App.css";
import Formation from "./pages/formation/formation";
import FormationRecherche from "./pages/formation/formationRecherche";
import Home from "./pages/home/homePage";
import { Routes, Route } from "react-router-dom"
import GlobalProvider from "./context/globalContext";
import Connexion from "./pages/connexion/connexion";

function App() {
  let boole=localStorage.getItem('isConnected')
  return (
    <div className="App">
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
           {/* <Route path={"/formation"} element={ boole==='true'?<Formation />:<Connexion />} /> */}
          <Route path={"/formation"} element={ <Formation />} />
          <Route path="/formation/recherche" element={<FormationRecherche />} />
          <Route path="/challenge" element={<></>} />
          <Route path="/login" element={<Connexion />} />
        </Routes>
      </GlobalProvider>
    </div>


  );
}

export default App;
