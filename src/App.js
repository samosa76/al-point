import { Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Home from "./Pages/Home";
import Violation from "./Pages/Violation";
import Reward from "./Pages/Reward";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import HomeAdmin from "./Admin/Component/HomeAdmin/HomeAdmin";
import List from "./Pages/List";
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
          <Route path="/Admin" element={<HomeAdmin />}></Route>
          <Route path="/List" element={<List />}></Route>
          <Route path="/list-reward" element={<Listreward/>}></Route>
          <Route path="/List-violation" element={<Listviolation/>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
