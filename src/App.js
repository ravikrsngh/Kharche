import './App.css';
import TestAuth from './components/testauth';
import Hero from './pages/hero/hero';
import Register from './pages/register/register';
import Login from './pages/login/login';
import SelectCategory from './pages/selectCategory/selectCategory';
import {AuthProvider} from './context/AuthContext';


function App() {
  const SubmitSignUp = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  }
  return (
    <div className="App">
      <AuthProvider>
      <SelectCategory />
      </AuthProvider>
    </div>
  );
}

export default App;
