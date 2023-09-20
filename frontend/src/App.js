import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavgBar from './Components/NavgBar';
import Banner from './Components/Banner';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Simulation from './Components/Simulation';

function App() {

  let routes = (
    <Routes>
        {/* Specify the route path and the corresponding component */}
        <Route path="/" element={<Banner />} />
        {/*Simulation route*/}
        <Route path="/simulation" element={<Simulation />}></Route>
        {/* <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/auth" replace />} /> */}
      </Routes>
  )
  return (
    <Router className="App">
      <NavgBar />
      <main>
        {routes}
      </main>
    </Router>
  );
}

export default App;
