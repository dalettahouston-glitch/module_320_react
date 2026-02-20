import { useState } from 'react';
import SearchBar from "./SearchBar";
import "./HomePage.css";

function HomePage({ employees, onSelect }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter((emp) => {
    const fullName = `${emp.firstName} ${emp.lastName}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>Employee Directory</h1>

      <SearchBar
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />

      <ul className="employee-list">
        {filteredEmployees.map((emp, index) => (
          <li
            key={index}
            className="employee-item"
            onClick={() => onSelect(emp)}
          >
            <img
              src={emp.picture}
              alt={emp.firstName}
              className="employee-photo"
            />

            <div className="employee-info">
              <strong>{emp.firstName} {emp.lastName}</strong>
              <span>{emp.title}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;//     import { useState } from 'react';
// import SearchBar from "./SearchBar";
// import "./HomePage.css";
    
//     function HomePage({ employees, onSelect }) {
//        const [searchTerm, setSearchTerm] = useState("");
        
//        const filteredEmployees = employees.filter((emp) => {
//     const fullName = `${emp.firstName} ${emp.lastName}`.toLowerCase();
//     return fullName.includes(searchTerm.toLowerCase());
//   });
     
//       return(
//          <div> 
//           <h1>Employee Directory</h1>

//           <SearchBar
//             searchTerm={searchTerm}
//             onSearch={setSearchTerm}
//             />

//             <ul className="employee-list">
//         {filteredEmployees.map((emp, index) => (
//           <li
//             key={index}
//             className="employee-item"
//             onClick={() => onSelect(emp)}
//           >
//             <img
//               src={emp.picture}
//               alt={emp.firstName}
//               className="employee-photo"
//             />

//             <div className="employee-info">
//               <strong>{emp.firstName} {emp.lastName}</strong>
//               <span>{emp.title}</span>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }  
          

         
//             {/* //  type="text"
//             //  placeholder="Search"
//             //  className="search-bar" */}
             
    
      

//       {/* <ul className="employee-list card">
//         {filteredEmployees.map((emp, index) => (
//           <li
//             key={index}
//             className="employee-item"
//             onClick={() => onSelect(emp)}
//           >
//             <img src={emp.picture} alt={emp.firstName} className="employee-photo" />
//             <div className="employee-info">
      
//                {emp.firstName} {emp.lastName} – {emp.title}
//                </div>
//           </li>
//         ))}
//       </ul>
//     </div>

//     <div className="right-panel">
//       <h2>Select an employee</h2>
//       </div>

//     </div>
//   );
// } */}

// export default HomePage;




// //   return (
// //     <div className="home">
// //       <h1>Welcome to the Employee Directory</h1>
// //       <p>Select a team member to view their details.</p>
// //     </div>
// //   );
// // }

// // export default HomePage;
