import axios from "axios";

const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;


async function getOrganizations(url) {
    try {
      const response = await axios.get(`${url}`, {
        "headers": { 
          "Authorization": `${TOKEN}`,
          "Accept": "application/vnd.github.v3+json"
        },
      });
        return response.data;
      } catch (error) {
        console.log(error);
        throw new Error("something went wrong");
      }

}

export { getOrganizations };
