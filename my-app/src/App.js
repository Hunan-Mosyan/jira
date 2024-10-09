import Header from "./components/global/Header";
import Register from "./pages/register";
import Login from "./pages/login";

const App = () => {
  return (
    <div id="divContainer">
      <Header />
      <Register />
      <hr />
      <Login />
    </div>
  );
};
export default App;