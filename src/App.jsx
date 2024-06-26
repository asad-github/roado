import Dashboard from "./components/Dashboard/Dashboard";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className=" bg-blue-50 min-h-screen flex justify-between">
      <Nav />
      <Dashboard />
      <Sidebar />
    </div>
  );
}

export default App;
