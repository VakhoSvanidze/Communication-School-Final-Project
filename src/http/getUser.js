import axios from "axios";

const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

async function getUser(API_URL) {
    try {
      const response = await axios.get(`${API_URL}`, {
        "headers": { "Authorization": `${TOKEN}` },
    });
      return response;
    } catch (error) {
      console.log(error);
      throw new Error("something went wrong");
    }

}

export { getUser };
