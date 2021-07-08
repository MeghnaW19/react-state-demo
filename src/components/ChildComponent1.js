import GrandChildComponent1 from './GrandChildComponent1';
import GrandChildComponent2 from './GrandChildComponent2';

function ChildComponent1(props) {
  return (
    <div className="ChildComponent1">
      <h3>I am the Child Component 1</h3>
      <p>{props.input}</p>
      <GrandChildComponent1></GrandChildComponent1>
      <GrandChildComponent2></GrandChildComponent2>
    </div>
  );
}

export default ChildComponent1;
