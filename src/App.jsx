import "./App.css";
import {
  Header,
  Projects,
  Footer,
  AboutMe,
} from "src/containers/";
import { Navbar } from "src/components/";
function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
