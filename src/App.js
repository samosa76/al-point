import { Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Home from "./Pages/Home";
import Violation from "./Pages/Violation";
import Reward from "./Pages/Reward";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import HomeAdmin from "./Component/Admin/Component/HomeAdmin/HomeAdmin";
import List from "./Pages/List";
import Listreward from "./Component/List/ListReward/Listreward";

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
          <Route path="/Admin" element={<HomeAdmin />}></Route>
          <Route path="/List" element={<List />}></Route>
          <Route path="/Listreward" element={<Listreward/>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
