interface IFruit {
  _id: string;
  fruitName: string;
  fruitColor: string;
  fruitShape: string;
  fruitStatus: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface IFruitProps {
  fruit: IFruit;
}

type ApiDataType = {
  message: string;
  status: string;
  fruits: IFruit[];
  fruit?: IFruit;
};
