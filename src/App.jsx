import { SingleData } from "./page/single-data";
import { Routes, Route, Link } from "react-router-dom";
import { UserPage } from "./page/user-page";
import { SingleUserData } from "./components/Usersingledata";
import Mainpage from './page/Mainpage';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/todo/:id" element={<SingleData />} />
        <Route path="/user/:id" element={<SingleUserData/>} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
