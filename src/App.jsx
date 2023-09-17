import "./App.css";
import PriceOptions from "./components/PriceOptions/PriceOptions";
// import Nav from "./components/nav/Nav";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="container mx-auto px-5 lg:px-0">
      {/* <Nav></Nav> */}
      <NavBar></NavBar>
      <h1 className="text-4xl">Vite + React</h1>
      <PriceOptions></PriceOptions>
    </div>
  );
}

export default App;
