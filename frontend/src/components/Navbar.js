import { Link } from "react-router-dom"

function Navbar(){

return(

<div>

<Link to="/">Home</Link>

&nbsp;&nbsp;

<Link to="/complaint">Complaint</Link>

&nbsp;&nbsp;

<Link to="/admin">Admin</Link>

</div>

)

}

export default Navbar