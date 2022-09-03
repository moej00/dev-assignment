import NavBar from "./components/Navbar/Navbar";
import Nft from "./components/nft/nft";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Nft />
        <Footer />
      </header>
    </div>
  );
}

export default App;
