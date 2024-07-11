import {useState} from 'react'
export default function Home(){
    const [name,setName]=useState("");
    const [showName,setShowName]=useState("");
    const handleChange=(e)=>{setName(e.target.value);}
    const handleButton=()=>{
        setShowName(`Welcome,${name}`);
    }
    return(
        <div>
            <input type="text" placeholder="Enter name" value={name} onChange={handleChange}/>
            <button className="bg-blue border border-1-w-10" onClick={handleButton}>Submit</button>
           <p>{showName}</p>
        </div>
    )
}