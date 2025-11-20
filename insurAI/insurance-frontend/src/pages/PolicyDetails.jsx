// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

// import "./PolicyDetails.css";


// export default function PolicyDetails() {
//   const { id } = useParams();

//   // Dummy database of policies
//   const policies = [
//     {
//       id: 1,
//       name: "Health Insurance",
//       description: "Complete protection against medical emergencies.",
//       benefits: ["Hospitalization cover", "Cashless treatment", "OPD cover", "Ambulance support"],
//       premium: "₹799/month",
//       coverage: "₹5,00,000",
//     },
//     {
//       id: 2,
//       name: "Life Insurance",
//       description: "Secure your family’s future even in your absence.",
//       benefits: ["Tax benefits", "Large payout", "Critical illness cover", "Long-term savings"],
//       premium: "₹499/month",
//       coverage: "₹50,00,000",
//     },
//     {
//       id: 3,
//       name: "Vehicle Insurance",
//       description: "Protect your car/bike from accidents & damages.",
//       benefits: ["Accident cover", "Third-party cover", "Theft protection", "Zero depreciation"],
//       premium: "₹899/month",
//       coverage: "₹4,00,000",
//     },
//   ];

//   const policy = policies.find((p) => p.id === id);

//   return (
//     <div className="details-container">
//       <div className="details-card">
//         <h1 className="policy-title">{policy.name}</h1>
//         <p className="policy-desc">{policy.description}</p>

//         <h4>Coverage: <span>{policy.coverage}</span></h4>
//         <h4>Premium: <span>{policy.premium}</span></h4>

//         <h5 className="mt-4">Benefits:</h5>
//         <ul>
//           {policy.benefits.map((b, i) => <li key={i}>{b}</li>)}
//         </ul>

// <Link to={`/policy/${id}`} className="btn btn-outline-primary mt-2">
//   Know More
// </Link>
//       </div>
//     </div>
//   );
// }

//===============================================================
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./PolicyDetails.css";


export default function PolicyDetails() {
  const { id } = useParams();

  const policies = [
    {
      id: 1,
      name: "Health Insurance",
      description: "Complete protection against medical emergencies.",
      benefits: ["Hospitalization cover", "Cashless treatment", "OPD cover", "Ambulance support"],
      premium: "₹799/month",
      coverage: "₹5,00,000",
    },
    {
      id: 2,
      name: "Life Insurance",
      description: "Secure your family’s future even in your absence.",
      benefits: ["Tax benefits", "Large payout", "Critical illness cover", "Long-term savings"],
      premium: "₹499/month",
      coverage: "₹50,00,000",
    },
    {
      id: 3,
      name: "Vehicle Insurance",
      description: "Protect your car/bike from accidents & damages.",
      benefits: ["Accident cover", "Third-party cover", "Theft protection", "Zero depreciation"],
      premium: "₹899/month",
      coverage: "₹4,00,000",
    },
  ];

  const policy = policies.find((p) => p.id === Number(id));

  return (
    <div className="details-container">
      <div className="details-card">
        <h1 className="policy-title">{policy.name}</h1>
        <p className="policy-desc">{policy.description}</p>

        <h4>Coverage: <span>{policy.coverage}</span></h4>
        <h4>Premium: <span>{policy.premium}</span></h4>

        <h5 className="mt-4">Benefits:</h5>
        <ul>
          {policy.benefits.map((b, i) => <li key={i}>{b}</li>)}
        </ul>

        <Link to="/appointment" className="btn btn-primary w-100 mt-3">
  Book Appointment
</Link>


      </div>
    </div>
  );
}
