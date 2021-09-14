import React, { useState } from "react";

type Props = {
  saveFruit: (e: React.FormEvent, formData: IFruit | any) => void;
};

const AddFruit: React.FC<Props> = ({ saveFruit }) => {
  const [formData, setFormData] = useState<IFruit | {}>();
  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.currentTarget.id]: e.currentTarget.value });
  };
  return (
    <form
      className="h-form"
      onSubmit={(e) => {
        saveFruit(e, formData);
      }}
    >
      <label className="h-label">Name</label>
      <input onChange={handleForm} type="text" id="fruitName" />
      <label className="h-label">Color</label>
      <input onChange={handleForm} type="text" id="fruitColor" />
      <label className="h-label">Shape</label>
      <input onChange={handleForm} type="text" id="fruitShape" />
      <button disabled={formData === undefined ? true : false}>
        Add Fruit
      </button>
    </form>
  );
};

export default AddFruit;
