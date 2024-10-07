import "./App.css";
import Body from "./components/Body";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardPage from "./components/CardPage";
import { Provider } from "react-redux";
import appStore from "./utils/store";

function App() {


  return (
    <Provider store={appStore}>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/card-page" element={<CardPage />} />
        </Routes>
      </Router>
    </div>
    </Provider>
  ); 
}

export default App;