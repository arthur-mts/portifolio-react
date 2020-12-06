import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Basic ${process.env.GITHUB_AUTH_PERSONAL_TOKEN}`,
    Accept: "application/vnd.github.inertia-preview+json",
  },
});

export async function getUserRepos(user = "arthur-mts"): Promise<any> {
  try {
    const res = await axiosClient.request({
      url: `/users/${user}/repos`,
      method: "GET",
    });
    return res.data;
  } catch (e) {
    return null;
  }
}
