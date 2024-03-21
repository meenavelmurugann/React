import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Pricing from './Component/Pricing';
import Dashboard from './Component/Dashboard';
import Navbar from './Component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Component/Contact';
import Profile from './Component/Profile';
import Hooks from './Component/Hooks';
import Form from './Component/Form';
import Studentlist from './Component/Studentlist';
import { Toaster } from 'react-hot-toast';
import StudentDetails from './Component/StudentDetails';
import { UserProvider } from './Context/Context';

const toastOptions={
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
}


function App() {
  const data = { name: "Meena", place: "OMR" }
  return (
    <>
      <BrowserRouter>
      <UserProvider value={"Minion"}>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home parentData={data}/>}/>
          <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="Profile" element={<Profile/>}/>
          </Route>
          <Route path="/Pricing" element={ <Pricing/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Hooks" element={<Hooks/>}/>
          <Route path="/Form" element={<Form/>}/>
          <Route path="/Student" element={<Studentlist/>}/> 
          <Route path="/Student/detail/:id" element={<StudentDetails/>}/>           
        </Routes>
        </UserProvider>
        <Toaster  position="bottom-center" toastOptions = {toastOptions}/>
        </BrowserRouter>
      
     </>
  );
}

export default App;
