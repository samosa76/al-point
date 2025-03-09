import { Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Home from "./Pages/Home";
import Violation from "./Pages/Violation";
import Reward from "./Pages/Reward";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import List from "./Pages/List";
import Admin from "./Admin/Component/Pages/Admin";
import InputSiswa from "./Admin/Component/InputSiswa/InputSiswa";
import InputReward from "./Admin/Component/InputReward/InputReward";
import InputPelanggaran from "./Admin/Component/InputPelanggaran/InputPelanggaran";
import ListSantri from "./Admin/Component/ListSantri/ListSantri";
import Listreward from "./Component/ListReward/Listreward";
import Listviolation from "./Component/ListViolation/Listviolation";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-in" element={<Signin />}></Route>
          <Route path="/sign-up" element={<Signup />}></Route>
          <Route path="/violation" element={<Violation />}></Route>
          <Route path="/reward" element={<Reward />}></Route>
          <Route path="/Admin" element={<Admin />}></Route>
          <Route path="/List" element={<List />}></Route>
          <Route path="/Listreward" element={<Listreward/>}></Route>
          <Route path="/Inputsiswa" element={<InputSiswa />}></Route>
          <Route path="/Inputreward" element={<InputReward />}></Route>
          <Route path="/Inputpelanggaran" element={<InputPelanggaran />}></Route>
          <Route path="/Listsantri" element={<ListSantri />}></Route>
          <Route path="/list-reward" element={<Listreward/>}></Route>
          <Route path="/List-violation" element={<Listviolation/>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
