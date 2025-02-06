import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
// import { useEffect } from "react";
import CustomCursor from "./components/CustomCursor";
import ContactForm from "./pages/ContactForm";
import About from "./pages/About";

function App() {
  // useEffect(() => {
  //   if (window.matchMedia("(hover: hover)").matches) {
  //     document.body.classList.add("cursor-none");
  //   }
  // }, []);
  return (
    <>
      <CustomCursor />
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about" element={<About />} />
          {/* You can add more routes here */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
