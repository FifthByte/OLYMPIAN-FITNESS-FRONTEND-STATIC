import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import { Navbar } from "./shared/Navbar";
import { Footer } from "./shared/Footer";

const Index = lazy(() => import("./pages/Index"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
