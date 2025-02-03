import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/userManagement";
import Rating from "./pages/Rating";
import Setting from "./pages/Setting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user"    element={
            <Layout>
              <UserManagement/>
            </Layout>
          }/>
        <Route
       path="/rating-review"    element={
            <Layout>
              <Rating/>
            </Layout>
          }>

          </Route>
          <Route
       path="/setting"    element={
            <Layout>
              <Setting/>
            </Layout>
          }>

          </Route>
        <Route
       
          path="/*"
          element={
            <Layout>
              <h1 className="text-2xl font-bold py-2">Welcome to Dashboard</h1>
              <Dashboard/>
            </Layout>
          }
        />
        
      </Routes>
    </Router>
  );
}

export default App;
