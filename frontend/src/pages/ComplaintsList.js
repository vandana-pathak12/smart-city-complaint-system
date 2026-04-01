import {useEffect,useState} from "react"

function ComplaintsList(){

const [complaints,setComplaints] = useState([])

useEffect(()=>{

fetch("http://localhost:5000/complaints")
.then(res=>res.json())
.then(data=>setComplaints(data))

},[])

// Resolve complaint function
const resolveComplaint = (id)=>{
fetch(`http://localhost:5000/complaint/${id}`,{
method:"PUT"
})
.then(()=>window.location.reload())
}

return(

<div>

<h2>All Complaints</h2>

<table border="1">

<tr>
<th>ID</th>
<th>Description</th>
<th>Location</th>
<th>Status</th>
<th>Action</th>
</tr>

{complaints.map((c)=>(
<tr key={c.id}>
<td>{c.id}</td>
<td>{c.description}</td>
<td>{c.location}</td>
<td>{c.status}</td>

<td>
<button onClick={()=>resolveComplaint(c.id)}>
Resolve
</button>
</td>

</tr>
))}

</table>

</div>

)

}

export default ComplaintsList