const handleLogout = async () => { 
    try { 
        await axios.post("http://localhost:3001/users/logout"); 
    } catch (error) { 
        console.error("Error logging out:", error); 
    } 
}; 
  <li><button onClick={handleLogout} className="text-
white">Logout</button></li> 
