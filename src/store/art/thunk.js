import {
  getTechiniques,
  getSpecificTechnique,
  getImages,
  getDateImages,
  getNextURL,
  getMaxPages,
  getClassification,
  getNextURLClassification,
  getImageByClassification,
  getSearchClassification,
  getMaxPagesClassification,
} from "./actions";

import axios from "axios";

const URL_BASE = "https://api.harvardartmuseums.org";
const API_KEY = "7cf4de9a-61e5-40ea-b95e-a45370bc3439";

export const getTechiniquesThunk = (setLoad, setError) => (dispatch) => {
  axios
    .get(`${URL_BASE}/technique?apikey=${API_KEY}`)
    .then((res) => {
      dispatch(getTechiniques(res.data.records));
      setLoad(true);
    })
    .catch((err) => {
      setError(true);
    });
};

export const getSpecificTechniqueThunk = (value) => async (dispatch) => {
  axios
    .get(`${URL_BASE}/technique?apikey=${API_KEY}&q=name:${value}`)
    .then((res) => {
      dispatch(getSpecificTechnique(res.data.records));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getImagesThunk = (setLoad) => (dispatch) => {
  axios
    .get(`${URL_BASE}/image?apikey=${API_KEY}`)
    .then((res) => {
      dispatch(getImages(res.data.records));
      dispatch(getMaxPages(res.data.info.pages));

      setLoad(true);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDateImagesThunk = (date) => (dispatch) => {
  axios
    .get(`${URL_BASE}/image?apikey=${API_KEY}&q=date:${date}`)
    .then((res) => {
      dispatch(getDateImages(res.data.records));

      console.log(res.data.info);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getPaginationThunk = (page, setLoad) => (dispatch) => {
  axios
    .get(`${URL_BASE}/image?apikey=${API_KEY}&page=${page}`)
    .then((res) => {
      dispatch(getNextURL(res.data.info.next));
      dispatch(getImages(res.data.records));
      setLoad(true);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getClassificationThunk = (currentURL, setLoad) => (dispatch) => {
  axios.get(currentURL).then((res) => {
    dispatch(getClassification(res.data.records));
    dispatch(getNextURLClassification(res.data.info.next));
    setLoad(true);
  });
};

export const getMaxPagesClassificationThunk =
  (classificationSearch, setLoad) => (dispatch) => {
    axios
      .get(
        `${URL_BASE}/object?classification=${classificationSearch}&apikey=${API_KEY}`
      )
      .then((res) => {
        dispatch(getSearchClassification(classificationSearch));
        dispatch(getMaxPagesClassification(res.data.info.pages));
        setLoad(true);
      });
  };

export const getPaginationClassificationThunk =
  (page, classificationSearch) => (dispatch) => {
    axios
      .get(
        `${URL_BASE}/object?classification=${classificationSearch}&apikey=${API_KEY}&page=${page}`
      )
      .then((res) => {
        dispatch(getImageByClassification(res.data.records));
      })
      .catch((err) => {
        console.log(err);
      });
  };
