// //Imports
// import React from "react";
// import "../styles/table.css"
// import API from "./API"
// import Search from "./Search"

// //Table class
// class Table extends React.Component {

//   //States
//   state = {
//     sortOrder: "",
//     results: [],
//     search: ""
//   }


// //Handling input in search abr 
//   handleInputChange = event => {

//     if (event.target.name === "search") {
//       console.log("in handle search")
//       const searchTerm = event.target.value.toLowercase();
//       console.log(searchTerm)

//       const newList = this.state.results.filter(item => item.toLowercase().includes(searchTerm))

//       console.log(newList)
//     }
//     this.state({
//       [event.target.name]: event.target.value
//     })
//   }

//   //calling api
//   componentDidMount() {
//     API.ApiSearch()
//       .then(res => {
//         this.setState({ results: res.data.results })
//         console.log(this.state.results)
//       })
//   }

//   //Sort by first name
//   sortByFName = () => {
//     const sortedEmployees = this.state.results.sort((a, b) => {
//       if (b.name.first > a.name.first) {
//         return -1
//       }
//       if (a.name.first > b.name.first) {
//         return 1
//       }

//       return 0;
//     });

//     if (this.state.sortOrder === "DESC") {
//       sortedEmployees.reverse();
//       this.setState({ sortOrder: "ASC" });
//     } else {
//       this.setState({ sortOrder: "DESC" });
//     }
//     console.log(sortedEmployees)
//     this.setState({ results: sortedEmployees })
//   }

//   //Sort by last name 
//   sortByLName = () => {
//     const sortedEmployees = this.state.results.sort((a, b) => {
//       if (b.name.last > a.name.last) {
//         return -1
//       }
//       if (a.name.last > b.name.last) {
//         return 1
//       }

//       return 0;
//     });

//     if (this.state.sortOrder === "DESC") {
//       sortedEmployees.reverse();
//       this.setState({ sortOrder: "ASC" });
//     } else {
//       this.setState({ sortOrder: "DESC" });
//     }
//     console.log(sortedEmployees)
//     this.setState({ results: sortedEmployees })
//   }

//   // sortByAge = () => {
//   //   const sortedEmployees = this.state.results.sort((a, b) => {
//   //     if (b.name.dob.date > a.name.dob.date) {
//   //       return -1
//   //     }
//   //     if (a.name.dob.date > b.name.dob.date) {
//   //       return 1
//   //     }

//   //     return 0;
//   //   });

//     if (this.state.sortOrder === "DESC") {
//       sortedEmployees.reverse();
//       this.setState({ sortOrder: "ASC" });
//     } else if {
//       this.setState({ sortOrder: "DESC" });
//     }
//     console.log(sortedEmployees)
//     this.setState({ results: sortedEmployees })
//   }



//   //Render items on the page
//   render() {
//     return (
//       <div>
//         <Search handleInputChange={this.handleInputChange}/>

//         <div className="row tableHeadDiv">
//           <table>
//             <thead>
//               <tr>
//                 <th>Image</th>
//                 <th>F-Name <span className="downArrow" onClick={this.sortByFName}></span></th>
//                 <th onClick={sort}>
//                   L-Name <span className="downArrow" onClick={this.sortByLName}></span></th>
//                 <th>Phone</th>
//                 <th>Email</th>
//                 {/* <th>DOB <span className="downArrow" onClick={this.sortByAge}></span></th> */}
//                 <th>DOB </th>
//               </tr>
//             </thead>


//             {this.state.results && this.state.results.map(item =>
//               <tbody >
//                 <tr key={item.id.value}>
//                   <td ><img src={item.picture.thumbnail} alt="thumbnail" /></td>
//                   <td > {item.name.first} </td>
//                   <td > {item.name.last} </td>
//                   <td >{item.phone} </td>
//                   <td >{item.email}</td>
//                   <td >{item.dob.date}</td>
//                 </tr>
//               </tbody>
//             )}

//           </table>


//         </div>
//       </div>
//     )
//   }
// }

// export default Table;