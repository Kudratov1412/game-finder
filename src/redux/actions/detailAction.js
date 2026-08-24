import axios from "axios";
import { GameDetailsURL, GameScreenshotsURL } from "../../api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(GameDetailsURL(id));
  const screenshotData = await axios.get(GameScreenshotsURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenshotData.data,
    },
  });
};
