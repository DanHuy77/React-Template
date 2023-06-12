import StartGame from "./Components/StartGame";
import Lobby from "./Components/Lobby";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee)


function App() {
  return (
    <>
      <StartGame />
    </>
  );
}

export default App;
