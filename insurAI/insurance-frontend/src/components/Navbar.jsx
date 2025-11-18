
// import { Link, NavLink } from "react-router-dom";
// import "./Navbar.css";

// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
//       <div className="container">

//         <Link className="navbar-brand fw-bold" to="/">InsureAI</Link>


//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="nav">
//           <ul className="navbar-nav ms-auto">

//             <li className="nav-item">
//               <NavLink 
//                 className={({ isActive }) => 
//                   "nav-link px-3 fw-semibold " + (isActive ? "active-link" : "")
//                 } 
//                 to="/"
//               >
//                 Home
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink 
//                 className={({ isActive }) => 
//                   "nav-link px-3 fw-semibold " + (isActive ? "active-link" : "")
//                 } 
//                 to="/policies"
//               >
//                 Policies
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink 
//                 className={({ isActive }) => 
//                   "nav-link px-3 fw-semibold " + (isActive ? "active-link" : "")
//                 } 
//                 to="/login"
//               >
//                 Login
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink 
//                 className={({ isActive }) => 
//                   "nav-link px-3 fw-semibold " + (isActive ? "active-link" : "")
//                 } 
//                 to="/register"
//               >
//                 Register
//               </NavLink>
//             </li>

//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
//==================2nd
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    setIsLoggedIn(!!user); // converts to true/false
  }, []);

  function handleLogout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");
    setIsLoggedIn(false);
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">InsureAI</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  "nav-link px-3 fw-semibold " + (isActive ? "active-link" : "")
                } 
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  "nav-link px-3 fw-semibold " + (isActive ? "active-link" : "")
                } 
                to="/policies"
              >
                Policies
              </NavLink>
            </li>

            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <NavLink 
                    className={({ isActive }) => 
                      "nav-link px-3 fw-semibold " + (isActive ? "active-link" : "")
                    } 
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    className={({ isActive }) => 
                      "nav-link px-3 fw-semibold " + (isActive ? "active-link" : "")
                    } 
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink 
                    className={({ isActive }) =>
                      "nav-link px-3 fw-semibold " + (isActive ? "active-link" : "")
                    }
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>

                <li className="nav-item">
                  <button 
                    className="btn btn-danger ms-2" 
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

