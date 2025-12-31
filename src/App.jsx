import EmployeeList from "./components/employee/EmployeeList.jsx";
import EmployeePopup from "./components/EmployeePopup/EmployeePopup";
import Footer from "./components/Footer";
// import Layout from "./components/layout/Layout";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <EmployeePopup />
      <
      <Navbar />
      <div className="flex-1">
        <EmployeeList />
      </div>
      <Footer />
    </div>
  );
};

export default App;
