import Footer from "./components/Footer";
// import Layout from "./components/layout/Layout";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <div className="flex-1"></div>
      <Footer />
    </div>
  );
};

export default App;
