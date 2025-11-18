// export default function PolicyCard({ policy }) {
//   return (
//     <div className="card shadow-sm h-100">
//       <div className="card-body">
//         <h5 className="card-title fw-bold">{policy.name}</h5>
//         <p className="text-muted">{policy.description}</p>

//         <p className="mb-1"><strong>Premium:</strong> ₹{policy.premium}/month</p>
//         <p><strong>Coverage:</strong> ₹{policy.coverage}</p>
//       </div>
//       <div className="card-footer bg-white">
//         <button className="btn btn-primary w-100">View Details</button>
//       </div>
//     </div>
//   );
// }
// --------------------------------------2nd
// import "./PolicyCard.css";

// export default function PolicyCard({ policy }) {
//   return (
//     <div className="policy-card shadow-lg">
//       <div className="icon-area">
//         <img src={policy.icon} alt="" className="policy-icon" />
//       </div>

//       <h4 className="fw-bold mt-3">{policy.name}</h4>
//       <p className="text-muted">{policy.description}</p>

//       <div className="mt-3 fw-semibold text-primary">
//         Premium: ₹{policy.premium}/month
//       </div>
//       <div className="fw-semibold text-success">
//         Coverage: ₹{policy.coverage}
//       </div>

//       <button className="btn btn-primary mt-4 w-100">View Details</button>
//     </div>
//   );
// }
// ---------------3rd
import { Link } from "react-router-dom";
import "./PolicyCard.css";

export default function PolicyCard({ policy }) {
  return (
    <div className="policy-card shadow-sm">
      <h4 className="fw-bold">{policy.name}</h4>
      <p className="text-muted">{policy.desc}</p>

      <p><b>Premium:</b> {policy.premium}</p>
      <p><b>Coverage:</b> {policy.coverage}</p>

      <Link 
        to={`/policy/${policy.id}`} 
        className="btn btn-primary w-100 mt-3"
      >
        View Details
      </Link>
    </div>
  );
}

