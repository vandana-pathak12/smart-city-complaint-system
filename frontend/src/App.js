import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import ComplaintForm from "./pages/ComplaintForm"
import ComplaintsList from "./pages/ComplaintsList"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

function App() {
  return (

<Router>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/complaint" element={<ComplaintForm/>}/>

<Route path="/admin" element={<ComplaintsList/>}/>

</Routes>

</Router>

  )
}

export default App