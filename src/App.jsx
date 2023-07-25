import "./App.css";
import UserForm from "./components/UserForm";

function App() {
  const user = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    website: "https://johndoe.com",
    country: "United States",
  };

  const handleSave = (values) => {
    console.log(values);
  };

  return (
    <div className="App">
      <h1>React Forms</h1>
      <div className="form">
        <UserForm onSave={handleSave} user={user} />
      </div>
    </div>
  );
}

export default App;
