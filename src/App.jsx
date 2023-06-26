import "./App.css";
import {
  Header,
  Projects,
  Footer,
  AboutMe,
} from "./containers";
import { ContactForm, Navbar } from "./components";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
