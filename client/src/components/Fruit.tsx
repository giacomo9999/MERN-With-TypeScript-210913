import React from "react";

type Props = FruitProps & {
  updateFruit: (fruit: IFruit) => void;
  deleteFruit: (_id: string) => void;
};

const FruitForm: React.FC<Props> = ({ fruit, updateFruit, deleteFruit }) => {
  const checkFruit: string = fruit.fruitInStock ? "In Stock" : "Out Of Stock";
  return (
    <div className="container-inner">
      <h1>{fruit.fruitName}</h1>
      <h4>{fruit.fruitColor + " " + fruit.fruitShape}</h4>
      <h4>{checkFruit}</h4>
      <button
        onClick={() => {
          updateFruit(fruit);
        }}
      >
        Toggle In-Stock Status
      </button>
      <button
        onClick={() => {
          deleteFruit(fruit._id);
        }}
      >
        Delete Fruit
      </button>
    </div>
  );
};

export default FruitForm;
