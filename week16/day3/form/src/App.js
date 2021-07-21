import './App.css';
import Form from './Form';
let inputs = [
  {
    labelText :"Title",
    type :"text",
    name :"Title",
  },
  {
    labelText :"Author",
    type :"text",
    name :"Author",
  },
  {
    labelText :"Genre",
    type :"text",
    name :"Genre",
  },
  {
    labelText :"Year Published",
    type :"text",
    name :"YearRealeased",
  },
  {
    type :"submit",
    value :"submit",
  }
]
function App() {
  return (
    <>
      <h1>New Book</h1>
      <Form inputs= {inputs}/>
    </>
  );
}

export default App;
