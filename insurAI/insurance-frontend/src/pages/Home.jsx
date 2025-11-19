// import { Link } from "react-router-dom";
// import "./Home.css";

// export default function Home() {
//   return (
//     <div className="home-hero d-flex align-items-center">
//       <div className="container text-white">
//         <h1 className="fw-bold display-4">Your Trusted Insurance Partner</h1>
//         <p className="lead mt-3">
//           Protect your Health, Life, Vehicle & Future with smart insurance plans.
//         </p>

//         <div className="mt-4 d-flex gap-3">
//           <Link className="btn btn-warning btn-lg px-4 fw-bold" to="/policies">
//             Explore Policies
//           </Link>

//           <Link className="btn btn-light btn-lg px-4 fw-bold" to="/login">
//             Login
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
//=================2nd
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {

  return (
    <div className="home-hero d-flex align-items-center">
      <div className="container text-white">
        <h1 className="fw-bold display-4">Your Trusted Insurance Partner</h1>
        <p className="lead mt-3">
          Protect your Health, Life, Vehicle & Future with smart insurance plans.
        </p>

        <div className="mt-4 d-flex gap-3">
          <Link className="btn btn-warning btn-lg px-4 fw-bold" to="/policies">
            Explore Policies
          </Link>

          <Link className="btn btn-light btn-lg px-4 fw-bold" to="/login">
            Login
          </Link>

          <Link className="btn btn-outline-light btn-lg px-4 fw-bold" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}









