// import React, { Component } from 'react';
// import Pagination from 'react-bootstrap/Pagination'
//
//
// let prev  = 0;
// let next  = 0;
// let last  = 0;
// let first = 0;
// export class Pages extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','T','v','u','w','x','y','z'],
//       currentPage: 1,
//       todosPerPage: 3,
//
//     };
//     this.handleClick = this.handleClick.bind(this);
//     this.handleLastClick = this.handleLastClick.bind(this);
//     this.handleFirstClick = this.handleFirstClick.bind(this);
//   }
//
//   handleClick(event) {
//     event.preventDefault();
//     this.setState({
//       currentPage: Number(event.target.id)
//     });
//   }
//
//   handleLastClick(event) {
//     event.preventDefault();
//     this.setState({
//       currentPage:last
//     });
//   }
//   handleFirstClick(event) {
//     event.preventDefault();
//     this.setState({
//       currentPage:1
//     });
//   }
//   render() {
//     let { todos, currentPage, todosPerPage } = this.state;
//
//     // Logic for displaying current todos
//     let indexOfLastTodo = currentPage * todosPerPage;
//     let indexOfFirstTodo = indexOfLastTodo - todosPerPage;
//     let currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
//     prev  = currentPage > 0 ? (currentPage -1) :0;
//     last = Math.ceil(todos.length/todosPerPage);
//     next  = (last === currentPage) ?currentPage: currentPage +1;
//
//     // Logic for displaying page numbers
//     let pageNumbers = [];
//     for (let i = 1; i <=last; i++) {
//       pageNumbers.push(i);
//     }
//
//     return (
//       <div>
//         <ul>
//           {
//             currentTodos.map((todo,index) =>{
//               return <li key={index}>{todo}</li>;
//             })
//           }
//         </ul><ul id="page-numbers">
//         <nav>
//           <Pagination>
//             <Pagination.Item>
//               { prev === 0 ? <Pagination.Item disabled>First</Pagination.Item> :
//                 <Pagination.Item onClick={this.handleFirstClick} id={prev} href={prev}>First</Pagination.Item>
//               }
//             </Pagination.Item>
//             <Pagination.Item>
//               { prev === 0 ? <Pagination.Item disabled>Prev</Pagination.Item> :
//                 <Pagination.Item onClick={this.handleClick} id={prev} href={prev}>Prev</Pagination.Item>
//               }
//             </Pagination.Item>
//             {
//               pageNumbers.map((number,i) =>
//                 <Pagination key= {i}>
//                   <Pagination.Item active = {pageNumbers[currentPage-1] === (number) ? true : false} >
//                     <Pagination.Item onClick={this.handleClick} href={number} key={number} id={number}>
//                       {number}
//                     </Pagination.Item>
//                   </Pagination.Item>
//                 </Pagination>
//               )}
//
//             <Pagination.Item>
//               {
//                 currentPage === last ? <Pagination.Item disabled>Next</Pagination.Item> :
//                   <Pagination.Item onClick={this.handleClick} id={pageNumbers[currentPage]} href={pageNumbers[currentPage]}>Next</Pagination.Item>
//               }
//             </Pagination.Item>
//
//             <Pagination.Item>
//               {
//                 currentPage === last ? <Pagination.Item disabled>Last</Pagination.Item> :
//                   <Pagination.Item onClick={this.handleLastClick} id={pageNumbers[currentPage]} href={pageNumbers[currentPage]}>Last</Pagination.Item>
//               }
//             </Pagination.Item>
//           </Pagination>
//         </nav>
//       </ul>
//       </div>
//     );
//   }
// }
