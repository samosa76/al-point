import { Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Home from "./Pages/Home";
import Violation from "./Pages/Violation";
import Reward from "./Pages/Reward";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import HomeAdmin from "./Component/Admin/HomeAdmin/HomeAdmin";
import Classpage from "./Component/Classpage/Classpage";
import ListSantri from "./Component/ListSantri/ListSantri"

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
          <Route path="/Classpage" element={<Classpage />}></Route>
          <Route path="/ListSantri" element={<ListSantri />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
