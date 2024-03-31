import { Component } from "react";
import { FilmsList } from "./components/filmslist";
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
        <form type="submit" onSubmit={this.onSubmit}>Add
        <input value={this.state.text} onChange={(e) => this.state.list.map((film) => {return <li key={film.id}>{film.title}</li>})}></input>
        </form>
        <ul>
          {this.state.list.map((item, idx) => {
            return <li key={item + idx}>{item}</li>;
          })}
        </ul>
        <FilmsList />
      </div>
    );
    }
}


export default App;
