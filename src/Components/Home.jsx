
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export const Homepage = () =>{
    return(
        <div className="containerHome"> 
            <div className="grad">
                <h1 className="homehead">Hi Welcome !!!</h1>
                <h4 className="homename">I'm Oyindamola</h4>
                <p className="homepara">Navigate to <button type="button" class="btn btn-outline-secondary"><Link to="/Repos" style={{
                     textDecoration:"none",
                     color:"green"
                }}> Repositories Page</Link></button> for a look at my projects</p>
            </div>
        </div>
    )
}


const Home = () => {


    return ( 
        <div className="Repos-list">
            < Navbar />
           <Homepage />
        </div>
     );
}
 
export default Home;