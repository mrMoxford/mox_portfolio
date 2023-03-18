import "./App.css";
import { Header, CTA, InteriorDesign, Onsen, Coffee, Footer } from "./containers";
import { ContactForm, Navbar } from "./components";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <CTA />
      <Coffee />
      <Onsen />
      <InteriorDesign />
      <Footer />
    </div>
  );
}

export default App;
