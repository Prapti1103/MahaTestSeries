import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import AnnouncementBar from "./components/AnnouncementBar";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import ExamInfo from "./pages/ExamInfo";
import Syllabus from "./pages/Syllabus";
import AboutUs  from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import ScrollToTop from "./pages/Scrolltop";
import Login from "./pages/Login";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
     
      <Navbar />
      <AnnouncementBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/exam-info" element={<ExamInfo />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/faq" element={<FAQ/>} />
         <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
         <Route path="/terms" element={<Terms />} />
         <Route path="/login" element={<Login />} />
      </Routes>
      <FloatingButtons/>
      <Footer/>
    </>
  );
}

export default App;
