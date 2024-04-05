import { useEffect, useState } from "react";
import { BrowserRouter as Router,Routes, Route, Navigate, useLocation} from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import Welcome from "./pages/welcome/Welcome";
import Registration from "./pages/register/Registration";
import Login from './pages/login/Login'
import Home from "./pages/home/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (userLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </NextUIProvider>
  );
}

export default App;
