import { useState } from "react";

function ComplaintForm(){

const [description,setDescription] = useState("")
const [location,setLocation] = useState("")

const handleSubmit = async(e)=>{
e.preventDefault()

const data = {description,location}

await fetch("http://localhost:5000/complaint",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
})

alert("Complaint Submitted Successfully")

// form clear karne ke liye
setDescription("")
setLocation("")
}

return(
<div>

<h2>Submit Complaint</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Enter Complaint"
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<br/><br/>

<input
type="text"
placeholder="Enter Location"
value={location}
onChange={(e)=>setLocation(e.target.value)}
/>

<br/><br/>

<button type="submit">Submit</button>

</form>

</div>
)

}

export default ComplaintForm