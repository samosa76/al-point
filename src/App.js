import { Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Home from "./Pages/Home";
import Reward from "./Pages/Reward";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import List from "./Pages/List";
import Admin from "./Admin/Component/Pages/Admin";
import InputSiswa from "./Admin/Component/InputSiswa/InputSiswa";
import InputReward from "./Admin/Component/InputReward/InputReward";
import InputPelanggaran from "./Admin/Component/InputPelanggaran/InputPelanggaran";
import ListSantri from "./Admin/Component/ListSantri/ListSantri";
import Violation from "./Pages/Violation";
import Classpage from "./Component/Classpage/Classpage";
import ListSiswa from "./Pages/ListSiswa";
import ListRewardAndViolation from "./Component/ListRewardAndViolation/ListRewardAndViolation";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-in" element={<Signin />}></Route>
          <Route path="/sign-up" element={<Signup />}></Route>
          <Route path="/reward" element={<Reward />}></Route>
          <Route path="/Classpage" element={<Classpage />}></Route>
          <Route path="/Admin/ListSantri" element={<ListSantri />}></Route>
          <Route path="/Admin" element={<Admin />}></Route>
          <Route path="/List" element={<List />}></Route>
          <Route path="/Inputsiswa" element={<InputSiswa />}></Route>
          <Route path="/Inputreward" element={<InputReward />}></Route>
          <Route path="/input-pelanggaran" element={<InputPelanggaran />}></Route>
          <Route path="/Violation/:id" element={<Violation />}></Route>
          <Route path="/list-siswa/:kelas" element={<ListSiswa />}></Route>
          <Route path="/list-detail/:kategori" element={<ListRewardAndViolation />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
