const Navbar = () => {
  return (
    <div className="navbar bg-light">
      <div className="nav-flex">
        <ul className="nav-ol">
          <li className="nav-li">
            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </a>
          </li>
          <li className="nav-li">
            <a href="/Repos" style={{ textDecoration: "none", color: "black" }}>
              Repositories
            </a>
          </li>
          <li className="nav-li">
            <a
              href="/ErrorBoundary"
              style={{ textDecoration: "none", color: "black" }}
            >
              Error Boundary
            </a>
          </li>
          <li className="nav-li">
            <a
              href="/NotFound"
              style={{ textDecoration: "none", color: "black" }}
            >
              Not Found
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
