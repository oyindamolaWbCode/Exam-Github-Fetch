//import axios from "axios";
//import { useEffect } from "react";
//import { useState } from "react";
import { Link } from "react-router-dom"
//import Result from "./Result";

// const url = 'https://api.github.com/users/oyindamolaWbCode/repos';

const Home = () => {
//     const [repos, setRepos] = useState([]);

//     useEffect(() =>{
//       const fetchRepos = async () =>{
//         const res = await fetch (url);
//         const repos = await res.json()
//         setRepos(repos)
//       }
//   fetchRepos();
//     },[]);
    return ( 
        <div className="Repos-list">
           <p>Navigate to <Link to="/Repos"> Repositories Page</Link></p>
       {/* <Result repos={repos} /> */}
        </div>
     );
}
 
export default Home;