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
import Instagram from "./pages/Instagram";
import KeluargaPria from "./pages/KeluargaPria";
import KeluargaWanita from "./pages/KeluargaWanita";
import Jadwal from "./pages/Jadwal";
import LokasiPernikahan from "./pages/LokasiPernikahan";
import Rekening from "./pages/Rekening";
import JumlahTamu from "./pages/JumlahTamu";
import Source from "./pages/Source";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/masuk" element={<Registration isRegistered={true} />} />
      <Route path="/daftar" element={<Registration isRegistered={false} />} />
      <Route path="/nama-pria" element={<NamaPria firstPage={true} />} />
      <Route path="/nama-wanita" element={<NamaWanita firstPage={false} />} />
      <Route path="/instagram" element={<Instagram firstPage={false} />} />
      <Route
        path="/keluarga-pria"
        element={<KeluargaPria firstPage={false} />}
      />
      <Route
        path="/keluarga-wanita"
        element={<KeluargaWanita firstPage={false} />}
      />
      <Route path="/jadwal" element={<Jadwal firstPage={false} />} />
      <Route
        path="/lokasi-pernikahan"
        element={<LokasiPernikahan firstPage={false} />}
      />
      <Route path="/rekening" element={<Rekening firstPage={false} />} />
      <Route path="/jumlah-tamu" element={<JumlahTamu firstPage={false} />} />
      <Route path="/source" element={<Source firstPage={false} />} />
    </Routes>
  );
}

export default App;
