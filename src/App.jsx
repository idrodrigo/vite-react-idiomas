import "./App.css";
import Provider from "./context/Provider";
import Idiomas from "./Idiomas";
import Pagina from "./Pagina";

function App() {
  return (
    <Provider>
      <div className="flags">
        <Idiomas />
      </div>

      <div className="container">
        <Pagina />
      </div>
    </Provider>
  );
}

export default App;
