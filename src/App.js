
import './App.css';
import AddNewTask from './components/AddNewTask';
import ListToDo from './components/ListToDo'

function App() {
  return (

    <div className="App" style={{height:"50px" , backgroundColor: "blueviolet"}}>
      <header className="App-header">
        Welcome to Redux checkpoint by Sirajeddine <br/>
        <h3 style={{height:"35px", color:"yellow",  backgroundColor: "turquoise"}}> Our project is: To Do App</h3>
      </header>

 <AddNewTask />
 <ListToDo />
    </div>
  );
}

export default App;
