// import React from "react";
// import "./index.css";
// import Axios from "axios";

// const testData = [
//   { head1: "Stock Number",
//   head2:"Stock name",
//   num1:"1",
//   num2:"2",
//   nm1:"Abel",
//   nm2:"John",
// },
  
// ];


// const TableList = (props) => (
//   <div>
//     {/* {Rest Parameters} */}
//     {props.profiles.map(profile => <Table {...profile}/>)}
//   </div>
// );

// class Table extends React.Component{
//   render() {
//     const profiles = this.props;
//     return(
//       <div>
      
//           <table>
//           <tr>
//              <th>{profiles.head1}</th>
//              <th>{profiles.head2}</th>             
//           </tr>
//           <tr>
//             <td>{profiles.num1}</td>
//             <td>{profiles.nm1}</td>
//           </tr>
//           <tr>
//             <td>{profiles.num2}</td>
//             <td>{profiles.nm2}</td>
//           </tr>
//           </table>
//       </div>
//     );
//   }
// }



// class App extends React.Component{
//     state = {
//       profiles: testData,
//     };
 
//  //class App extends React.Component{
//   render() {
//     return(
//       <div>        
//         <TableList profiles={this.state.profiles} />
//       </div>
//     );
//   }
// }

// export default App;