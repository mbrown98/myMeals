import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = async (
  location = "37.7749295,-122.4194155"
) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("mock not found");
    }
    resolve(mock);
  });
};

const restaurantsTransform = (result) => {
  return camelize(result);
};
restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedRes) => console.log(transformedRes))
  .catch((e) => {
    console.log(e);
  });
