import Form from './components/Form'
import './App.css';

function App() {
  return (
    <div className="App">
      <Form user={{name: 'John Doe', email: 'johndoe@server.com', bio: 'my message to you', role: 'editor'}} />
    </div>
  );
}

export default App;
