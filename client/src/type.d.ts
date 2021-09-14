interface IFruit {
  _id: string;
  fruitName: string;
  fruitColor: string;
  fruitShape: string;
  fruitInStock: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface FruitProps {
  fruit: IFruit;
}

type ApiDataType = {
  message: string;
  inStock: string;
  fruits: IFruit[];
  fruit?: IFruit;
};
