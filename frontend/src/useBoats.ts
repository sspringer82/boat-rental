import { useContext } from 'react';
import { InputBoat } from './Boat';
import { BoatContext } from './BoatContext';

export default function useBoats() {
  const [boats, setBoats] = useContext(BoatContext);

  async function handleSave(values: InputBoat): Promise<boolean> {
    const response = await fetch('http://localhost:8080/boats', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(values),
    });
    if (response.ok) {
      const newBoat = await response.json();
      setBoats((prevBoats) => [...prevBoats, newBoat]);
      return true;
    } else {
      alert('Fehler beim Speichern');
      return false;
    }
  }

  async function deleteBoatById(id: number): Promise<void> {
    const response = await fetch(`http://localhost:8080/boats/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setBoats(boats.filter((boat) => boat.id !== id));
    }
  }

  return {
    boats,
    setBoats,
    handleSave,
    deleteBoatById,
  };
}
