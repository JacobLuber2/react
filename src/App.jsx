import { useState } from "react";
import FilmsList from "./components/filmslist";
function App(props) {
const [list, setList] = useState(["ready", "set", "GO"]);
const [text, setText] = useState("");

  function onSubmit(e) {
    let newList = [...list, text];
    e.preventDefault();
    setList(newList);
    setText("");
    }
    return (
      <div>
        <form type="submit" onSubmit={onSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <button type="submit">Add</button>
        </form>
        <ul>
          {list.map((item, idx) => {
            return <li key={item + idx}>{item}</li>;
          })}
        </ul>
        <FilmsList />
      </div>
    );
        }


export default App;
