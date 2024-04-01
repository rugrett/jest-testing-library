import axios from "axios";
import {getTodos} from "../get-todos";

const axiosSpy = jest.spyOn(axios, 'get');
const errorSpy = jest.spyOn(console, "error");

describe('getTodos', () => {
  it("Вернет пустой массив, если ошибка", async () => {
    const errMsg = 'Произошла какая-то ошибка';
    // axiosSpy.mockImplementationOnce(() => Promise.reject(errMsg));
    /**
     * Если не писать mockRejectedValueOnce, далее в it изменятся errorSpy
     */
    axiosSpy.mockRejectedValueOnce(errMsg);

    const result = await getTodos();
    
    expect(errorSpy).toHaveBeenCalledWith(errMsg);
    expect(result).toEqual([]);
  });

  it("Вернет 200 ок", async () => {
    const result = await getTodos();
    
    expect(axiosSpy).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/todos")
    expect(result).toHaveLength(200);
  })
})