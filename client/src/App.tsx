import React, { useEffect, useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";
import { getFruits, addFruit, updateFruit, deleteFruit } from "./API";


const App: React.FC = () => {
  const [fruits, setFruits] = useState<IFruit[]>([]);
  useEffect(() => fetchFruits(), []);

  const fetchFruits = (): void => {
    getFruits()
      .then(({ data: { fruits } }: IFruit | any) => setFruits(fruits))
      .catch((err) => console.log(err));
  };

  const handleSaveFruit = (e: React.FormEvent, formData: IFruit): void => {
    e.preventDefault();
    addFruit(formData).then(({ status, data }) => {
      if (status !== 201) {
        throw new Error("Error...fruit not saved.");
      }
      setFruits(data.fruits);
    });
  };

  const handleUpdateFruit = (fruit: IFruit): void => {
    updateFruit(fruit).then(({ status, data }) => {
      if (status !== 200) {
        throw new Error("Error...fruit not updated.");
      }
      setFruits(data.fruits);
    });
  };

  const handleDeleteFruit = (_id: string): void => {
    deleteFruit(_id).then(({ status, data }) => {
      if (status !== 200) {
        throw new Error("Error...fruit not deleted");
      }
      setFruits(data.fruits);
    });
  };

  return (
    <div className="container-outer">
      <h1>Fruits</h1>
      {fruits.map((fruit: IFruit) => (
        <Fruit
          key={fruit._id}
          fruit={fruit}
          updateFruit={handleUpdateFruit}
          deleteFruit={handleDeleteFruit}
        />
      ))}
      <FruitForm saveFruit={handleSaveFruit} />
    </div>
  );
};

export default App;
