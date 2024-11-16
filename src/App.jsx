import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";

import LandingPage from './pages/LandingPage'
import FaqsPage from "./pages/FaqsPage";
import DesignPage from "./pages/DesignPage";
import AcademyPage from "./pages/AcademyPage";
import Gallery from "./pages/Gallery";
import Header from './Components/Header';
import Footer from './Components/Footer';


// import PageTop from "./components/PageTop"; utils

// Layout Component
const Layout = () => {
  return (
      <>
          <div className="fixed z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          <Header />
          <main>
              <Outlet /> {/* This renders the child routes */}
          </main>
          <Footer />
      </>
  );
};

function App() {
    

  return (
    <Router>
        <Routes>
            {/* Apply the layout to all child routes */}
            <Route element={<Layout />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/faqs" element={<FaqsPage />} />
                <Route path="/design" element={<DesignPage />} />
                <Route path="/academy" element={<AcademyPage />} />
                <Route path="/gallery" element={<Gallery />} />

            </Route>
        </Routes>
    </Router>
  )
}

export default App