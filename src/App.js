import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
     super();
     this.state = {
        data: 
        [
           {
              "id":1,
              "name":"Foo",
              "age":"20"
           },
           {
              "id":2,
              "name":"Bar",
              "age":"30"
           },
           {
              "id":3,
              "name":"Baz",
              "age":"40"
           }
        ]
     }
  }
  render() {
     return (
        <div>
           <Header/>
           <table>
              <tbody>
                {
                  this.state.data.map(
                    (person, i) => <TableRow key = {i} data = {person} />
                  )
                }
              </tbody>
           </table>
        </div>
     );
  }
}
class Header extends React.Component {
  render() {
     return (
        <div>
           <h1>Header</h1>
        </div>
     );
  }
}
class TableRow extends React.Component {
  render() {
     return (
        <tr>           
           <td>Id: {this.props.data.id}</td>
           <td>Name: {this.props.data.name}</td>
           <td>Age: {this.props.data.age}</td>
        </tr>
     );
  }
}
export default App;