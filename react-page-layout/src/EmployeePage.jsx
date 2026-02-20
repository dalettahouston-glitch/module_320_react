function EmployeePage({ employee }) {
  return (
    <div className="employee-details">
<img
  src={employee.picture}
  alt={employee.firstName}
  className={`employee-large-photo ${employee.firstName === "Michael" ? "michael-fix" : ""}`}
/>

      <h2>{employee.firstName} {employee.lastName}</h2>
      <h4>{employee.title}</h4>

      <div className="contact-info">
        <p><strong>Call Office:</strong> {employee.phone}</p>
        <p><strong>Call Mobile:</strong> {employee.phone}</p>
        <p><strong>SMS:</strong> {employee.phone}</p>
        <p><strong>Email:</strong> {employee.email}</p>
      </div>
    </div>
  );
}

export default EmployeePage;// function EmployeePage({ employee }) {
//   return (
//     <div className="employee-page">
//       <h2>
//         {employee.firstName} {employee.lastName}
//       </h2>
//       <p>{employee.title}</p>

//       <img
//         src={employee.picture}
//         alt={employee.firstName}
//         className="employee-photo"
//       />

//       <ul className="details">
//         <li>Call Office: {employee.phone}</li>
//         <li>Call Mobile: {employee.phone}</li>
//         <li>SMS: {employee.phone}</li>
//         <li>Email: {employee.email}</li>
//       </ul>
//     </div>
//   );
// }

// // import Header from "../Header";

// // function EmployeePage({ employee }) {
// //   return (
// //     <div className="employee-page">
// //       <Header title="Employee" />

// //       <h2>
// //         {employee.firstName} {employee.lastName}
// //       </h2>
// //       <p>{employee.title}</p>

// //       <img
// //         src={employee.picture}
// //         alt={employee.firstName}
// //         className="employee-photo"
// //       />

// //       <ul className="details">
// //         <li>Call Office: {employee.phone}</li>
// //         <li>Call Mobile: {employee.phone}</li>
// //         <li>SMS: {employee.phone}</li>
// //         <li>Email: {employee.email}</li>
// //       </ul>
// //     </div>
// //   );
// // }



//  export default EmployeePage;