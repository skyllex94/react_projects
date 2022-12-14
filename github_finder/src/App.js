import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Alert from "./components/layout/Alert";
import User from "./pages/User";
import Sandbox from "./pages/Sandbox";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between ">
            <Navbar />
          </div>
          <main className="container mx-auto px-3 pb-12">
            <Alert />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:login" element={<User />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
              <Route path="/sandbox" element={<Sandbox />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
