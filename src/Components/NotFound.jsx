import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <header className="container">
        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-8"></div>
          <h1 className="text-danger">oops</h1>
          <p>404 - Page not found</p>
          <div className="redirect">
          <button><Link to ="/" style={{textDecoration: "none"}}>Homepage</Link></button>
          </div>
        </div>
      </header>
     );
}
 
export default NotFound;