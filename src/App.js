import './App.css';
import ApplicationForm from './components/ApplicationForm';
import Dashboard from './components/Dashboard';
import Header from "./components/Header";
import HomePage from "./components/HomePage";
function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <ApplicationForm/>
      <Dashboard/>
    </div>
  );
}
export default App;
