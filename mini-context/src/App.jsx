import Login from "./components/Login.jsx";
import "./App.css";
import Profile from "./components/Profile.jsx";
import UserContextProvider from "./context/UserConstextProvider.jsx";

function App() {
  return (
    <UserContextProvider>
      <h1>Context Login Page</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
