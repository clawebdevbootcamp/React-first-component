// class Hello extends React.Component {
//   render() {
//     return <p>Hello, {this.props.name}</p>;
//   }
// }

function Hello(props) {
  return <p>Hello, {props.name}</p>;
}

const domContainer = document.querySelector('#container');
const root = ReactDOM.createRoot(domContainer);
root.render(<Hello name="Moe"/>);