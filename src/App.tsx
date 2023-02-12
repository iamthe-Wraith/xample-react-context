import { BrowserRouter } from "react-router-dom";
import { UserSessionProvider } from "./contexts/user-session";
import { MainRouter } from "./routers/main";

function App() {
  return (
    <BrowserRouter>
      <UserSessionProvider>
        <MainRouter />
      </UserSessionProvider>
    </BrowserRouter>
  )
}

export default App
