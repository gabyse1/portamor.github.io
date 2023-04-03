import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import CourseDetail from "./Components/CourseDetail/CourseDetail";
import Home from "./Components/Home/Home"
import ClassDetail from "./Components/ClassDetail/ClassDetail";
import DownloadCertificate from "./Components/Certificate/DownaldCertificate"

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route exact path="/" Component={Home}  />
          <Route exact path="/detalle-curso/:id" Component={CourseDetail} />
          <Route exact path="/clase/:id" Component={ClassDetail} />     
          <Route exact path="/certificadown" Component={DownloadCertificate} />          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;