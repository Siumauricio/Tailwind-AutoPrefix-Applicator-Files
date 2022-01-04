import "./App.css";
import {InputFile} from "./InputFile";
import {ListFiles} from "./ListFiles";

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <h1 className="text-center">Tailwind AutoPrefixer Applier</h1>
         </header>
         <h2 className="text-center ">Choose the files</h2>
         <InputFile />
      </div>
   );
}

export default App;
