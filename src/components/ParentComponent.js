import React from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';


class ParentComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  
  }

  /** State demonstrated on parent. */
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  
  render() {
    return (
      <div>
        <h2>I am the Parent component</h2>      
        <p>{this.state.inputMessage}</p>
        <form onSubmit={this.onSubmit}>
          <div>    
              <label>Input: </label>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <p>State value: {this.state.value}</p>         
          </div>
        </form>
       <table>
         <tr>
         <td width="30%"> <ChildComponent1/></td>
        {/* <td width="30%"> <ChildComponent1 input = {this.state.value}></ChildComponent1></td> */}
        <td width="40%"></td>
       <td> <ChildComponent2 /></td>
        {/* <td width="30%"><ChildComponent2 input = {this.state.value}></ChildComponent2></td> */}
        </tr>
        </table>
      </div >
    );
  }
}

export default ParentComponent;


