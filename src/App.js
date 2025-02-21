import { Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home";
import Violation from "./Pages/Violation";
import Reward from "./Pages/Reward";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/violation" element={<Violation />}></Route>
          <Route path="/reward" element={<Reward />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
