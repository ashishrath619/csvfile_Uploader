import logo from "./logo.svg";
import "./App.css";
import CsvUploader from "./Components/csv_uploader";
import "react-csv-importer/dist/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <CsvUploader />
    </div>
  );
}

export default App;
