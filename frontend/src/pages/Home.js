import { Link } from "react-router-dom"

function Home(){

return(

<div>

<h1>Smart City Complaint Management System</h1>

<p>Report city problems easily</p>

<Link to="/complaint">
<button>Submit Complaint</button>
</Link>

<br/><br/>

<Link to="/admin">
<button>Admin Dashboard</button>
</Link>

</div>

)

}

export default Home