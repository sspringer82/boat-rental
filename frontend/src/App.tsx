import './App.css';
import BoatProvider from './BoatContext';
import Form from './boatForm/Form';
import BoatList from './boatList/BoatList';

function App() {
  return (
    <BoatProvider>
      <BoatList />
      <Form />
    </BoatProvider>
  );
}

export default App;
