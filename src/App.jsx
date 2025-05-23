import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import ChatIcon from "./components/ChatIcon";
import ServiceDetail from "./components/ServiceDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/services/:serviceTitle" element={<ServiceDetail />} />
        </Route>
      </Routes>
      <ChatIcon />
    </>
  );
}

export default App;
