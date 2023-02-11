import { BrowserRouter } from "react-router-dom";
import { MainRouter } from "./routers/main";

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  )
}

export default App
