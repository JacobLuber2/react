import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      list: ["ready", "set", "GO"],
      text: "",
    }
  }
  onSubmit(e) {
    let newList = [...this.state.list, this.state.text];
    e.preventDefault();
    this.setState({list: newList, text: ""})
    }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form type="submit" onSubmit={this.onSubmit}>Add
        <input value={this.state.text} onChange={(e) => this.setState({text: e.target.value})}></input>
        </form>
        <ul>{this.state.list.map((item, index) => <li key={index}>{item}</li>)}</ul>
      </div>
    );
    }
}


export default App;
