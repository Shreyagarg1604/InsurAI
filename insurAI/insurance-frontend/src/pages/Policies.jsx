// import PolicyCard from "../components/PolicyCard";

// export default function Policies() {
//   const demoPolicies = [
//     {
//       id: 1,
//       name: "Health Shield",
//       description: "Covers hospital expenses up to ₹5 lakhs.",
//       premium: 799,
//       coverage: 500000,
//     },
//     {
//       id: 2,
//       name: "Term Life 50L",
//       description: "Life cover up to ₹50 lakhs.",
//       premium: 499,
//       coverage: 5000000,
//     },
//     {
//       id: 3,
//       name: "Car Protection",
//       description: "Covers damages for your vehicle.",
//       premium: 899,
//       coverage: 400000,
//     },
//   ];

//   return (
//     <>
//       <h2 className="mb-4 fw-bold">Available Policies</h2>
//       <div className="row g-4">
//         {demoPolicies.map((p) => (
//           <div className="col-md-4" key={p.id}>
//             <PolicyCard policy={p} />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
import PolicyCard from "../components/PolicyCard";

export default function Policies() {
  const policies = [
    {
      id: 1,
      name: "Health Shield",
      description: "Covers hospital expenses up to ₹5 lakhs.",
      premium: 799,
      coverage: 500000,
      icon: "/health.png",
    },
    {
      id: 2,
      name: "Term Life Cover",
      description: "Life cover up to ₹50 lakhs.",
      premium: 499,
      coverage: 5000000,
      icon: "/life.png",
    },
    {
      id: 3,
      name: "Car Protection",
      description: "Covers car accidental damages.",
      premium: 899,
      coverage: 400000,
      icon: "/car.png",
    },
    {
      id: 4,
      name: "Family Health Plus",
      description: "Full family protection including parents.",
      premium: 1199,
      coverage: 700000,
      icon: "/health.png",
    },
    {
      id: 5,
      name: "Travel Secure",
      description: "Covers international medical emergencies.",
      premium: 299,
      coverage: 1000000,
      icon: "/life.png",
    },
    {
      id: 6,
      name: "Bike Insurance",
      description: "Covers bike accidents & theft.",
      premium: 399,
      coverage: 200000,
      icon: "/car.png",
    },
  ];

  return (
    <div className="container">
      <h2 className="fw-bold mb-4">Explore Our Insurance Plans</h2>

      <div className="row g-4">
        {policies.map((p) => (
  <div className="col-md-4" key={p.id}>
    <PolicyCard policy={p} />
  </div>
))}

      </div>
    </div>
  );
}
