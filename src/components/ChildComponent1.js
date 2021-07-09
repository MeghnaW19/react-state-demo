import React from 'react';
class ChildComponent1 extends React.Component {

  constructor(props) {
    super(props);
    this.handleValChange = this.handleValChange.bind(this);
  
  }
  handleValChange({target}){
    console.log("Inside handleValChange");
    this.props.handleChangeRef(target.value);
}
  render()  {return (
    <div className="ChildComponent1">
      <h3>I am the Child Component 1</h3>
      <p>State value: {this.props.input}</p> 
      
      <form onSubmit={this.onSubmit}>
          <div>    
              <label>Input: </label>
              <input type="text"  onChange={this.handleValChange} />
            
          </div>
        </form>
    </div>
  );
}
}
export default ChildComponent1;