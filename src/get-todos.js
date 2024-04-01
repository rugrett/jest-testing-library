import axios from "axios";

export async function getTodos() {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}