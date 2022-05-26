import axios from "axios";

const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

async function getUsers(page) {
  const API_URL = `https://api.github.com/search/users?q=followers:%3E=1000&per_page=20&page=${page}`;
    try {
      const response = await axios.get(`${API_URL}`, {
        "headers": { "Authorization": `${TOKEN}` },
    });
      return response.data.items;
    } catch (error) {
      console.log(error);
      throw new Error("something went wrong");
    }

}

export { getUsers };
