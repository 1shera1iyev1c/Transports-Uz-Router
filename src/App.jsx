import { Route, Routes } from "react-router-dom";
import {
  Hero,
  Header,
  FooterBottom,
  Main,
  AboutPage,
  Footer,
  ServicePage,
  ShopPage,
  CompanyPage,
  ContactPage,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <FooterBottom />
    </>
  );
}

export default App;

const Home = () => {
  return (
    <>
      <Hero />
      <Main />
      
    </>
  );
};
const About = () => {
  return (
    <>
      <AboutPage />
      
    </>
  );
};
const Service = () => {
  return (
    <>
      <ServicePage />
      
    </>
  );
};
const Shop = () => {
  return (
    <>
      <ShopPage />
      
    </>
  );
};
const Company = () => {
  return (
    <>
      <CompanyPage />
      
    </>
  );
};
const Contact = () => {
  return (
    <>
      <ContactPage />
      
    </>
  );
};
