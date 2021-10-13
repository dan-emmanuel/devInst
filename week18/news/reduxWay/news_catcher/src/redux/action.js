import axios from "axios";
export const FETCH_NEWS = "FETCH_NEWS";

export const fetchNews = (media) => async (dispatch) => {
  try {
    let url = `https://newsapi.org/v1/articles?source=${media}&apiKey=40f2953a030341b08cc18aac46f682f9`;
    let res = await axios.get(url);
    let data = res.data.articles;
    dispatch({
      type: FETCH_NEWS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
