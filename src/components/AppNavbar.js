import { Link } from "react-router-dom";
export default function AppNavbar({ currentUser }) {
 return (
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
 <Link className="navbar-brand" to="/">MyBlog</Link>
 <button
 className="navbar-toggler"
 type="button"
 data-bs-toggle="collapse"
 data-bs-target="#navbarNav"
 >
 <span className="navbar-toggler-icon"></span>
 </button>
 <div className="collapse navbar-collapse" id="navbarNav">
 <ul className="navbar-nav me-auto">
 <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
 <li className="nav-item"><Link className="nav-link"
to="/about">About</Link></li>
 <li className="nav-item"><Link className="nav-link"
to="/services">Blogs</Link></li>
 <li className="nav-item"><Link className="nav-link"
to="/contact">Contact</Link></li>
 </ul>
 <ul className="navbar-nav">
 {currentUser ? (
 <>
 <li className="nav-item"><span className="nav-link">Hi,
{currentUser}</span></li>
 <li className="nav-item"><Link className="nav-link"
to="/logout">Logout</Link></li>
 </>
 ) : (
 <>
 <li className="nav-item"><Link className="nav-link"
to="/login">Login</Link></li>
 <li className="nav-item"><Link className="nav-link"
to="/register">Register</Link></li>
 </>
 )}
 </ul>
 </div>
 </nav>
 );
}