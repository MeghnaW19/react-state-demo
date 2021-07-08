import React from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';


class ParentComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  onSubmit(event) {
    alert(this.state.value);
  }

  render() {
    return (
      <div>
        <h2>I am the Parent component</h2>
        <p>{this.props.message}</p>
        <p>{this.state.inputMessage}</p>
        <form onSubmit={this.onSubmit}>
          <div>
            <div>
              <label>Input 1</label>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <p>State value: {this.state.value}</p>
            </div>
            <div>
              <button type="submit" value="Submit">Get Input</button>
            </div>
          </div>
        </form>
        <ChildComponent1 input = {this.state.value}></ChildComponent1>
        <ChildComponent2 input = {this.state.value}></ChildComponent2>
      </div >
    );
  }
}

export default ParentComponent;


