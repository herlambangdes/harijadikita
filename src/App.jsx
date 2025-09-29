//Top Application
import { Routes, Route } from "react-router";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//component list
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import NamaPria from "./pages/NamaPria";
import NamaWanita from "./pages/NamaWanita";
import KeluargaPria from "./pages/KeluargaPria";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/masuk" element={<Registration isRegistered={true} />} />
      <Route path="/daftar" element={<Registration isRegistered={false} />} />
      <Route path="/nama-pria" element={<NamaPria firstPage={true}/>} />
      <Route path="/nama-wanita" element={<NamaWanita firstPage={false}/>} />
      <Route path="/keluarga-pria" element={<KeluargaPria firstPage={false}/>} />
    </Routes>
  );
}

export default App;
