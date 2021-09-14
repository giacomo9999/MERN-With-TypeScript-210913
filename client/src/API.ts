import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:4000";

export const getFruits = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const fruits: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/fruits"
    );
    return fruits;
  } catch (error) {
    throw new Error();
  }
};

export const addFruit = async (
  formData: IFruit
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const fruit: Omit<IFruit, "_id"> = {
      fruitName: formData.fruitName,
      fruitColor: formData.fruitColor,
      fruitShape: formData.fruitShape,
      fruitInStock: formData.fruitInStock,
    };
    const newFruit: AxiosResponse<ApiDataType> = await axios.post(
      `${baseUrl}/add-fruit/`,
      fruit
    );
    return newFruit;
  } catch (error) {
    throw new Error();
  }
};

export const updateFruit = async (
  fruit: IFruit
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const fruitUpdate: Pick<IFruit, "fruitInStock"> = {
      fruitInStock: !fruit.fruitInStock,
    };
    const updatedFruit: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit-fruit/${fruit._id}`,
      fruitUpdate
    );
    return updatedFruit;
  } catch (error) {
    throw new Error();
  }
};

export const deleteFruit = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedFruit: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-fruit/${_id}`
    );
    return deletedFruit;
  } catch (error) {
    throw new Error();
  }
};
