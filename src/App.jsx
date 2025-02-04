import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layouts from "./Components/Layouts.jsx";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Pages/Dashboard.jsx";
import UserManagement from "./Pages/userManagement.jsx";
import Rating from "./Pages/Rating.jsx";
import Setting from "./Pages/Setting.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user"    element={
            <Layouts>
              <UserManagement/>
            </Layouts>
          }/>
        <Route
       path="/rating-review"    element={
            <Layouts>
              <Rating/>
            </Layouts>
          }>

          </Route>
          <Route
       path="/setting"    element={
            <Layouts>
              <Setting/>
            </Layouts>
          }>

          </Route>
        <Route
       
          path="/*"
          element={
            <Layouts>
              <h1 className="text-2xl font-bold py-2">Welcome to Dashboard</h1>
              <Dashboard/>
            </Layouts>
          }
        />
        
      </Routes>
    </Router>
  );
}

export default App;
