import logo from "./logo.svg";
import "./App.css";

import Sidebar from "./components/sidebar/sidebar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Footer></Footer>
    </div>
  );
}

export default App;
