import {
  DATE_IMAGES,
  IMAGES,
  NEXT_URL,
  SPECIFIC_TECHINIQUE,
  TECHINIQUES,
  MAX_PAGES,
  CLASSIFICATION,
  NEXT_URL_CLASSIFICATION,
  IMAGE_BY_CLASSIFICATION,
  SEARCH_CLASSIFICATION,
  MAX_PAGES_CLASSIFICATION,
} from "./actions-types";

const URL_BASE = "https://api.harvardartmuseums.org";
const API_KEY = "7cf4de9a-61e5-40ea-b95e-a45370bc3439";

const stateObj = {
  techiniques: [],
  techinique: "",
  images: [],
  date: [],
  nextURL: `${URL_BASE}/image?apikey=${API_KEY}`,
  pages: 0,
  allClassifications: [],
  nextURLClassification: `${URL_BASE}/classification?apikey=${API_KEY}`,
  imgClassification: [],
  searchClassification: "",
  maxPagesClassification: 0,
};

const getArtReducer = (state = stateObj, actions) => {
  switch (actions.type) {
    case TECHINIQUES:
      state.techiniques = [actions.techiniques];
      return state;

    case SPECIFIC_TECHINIQUE:
      state.techinique = actions.techinique;
      return state;

    case IMAGES:
      state.images = [actions.images];
      return state;

    case DATE_IMAGES:
      state.date = [actions.date];
      return state;

    case NEXT_URL:
      state.nextURL = actions.nextUrl;
      return state;

    case MAX_PAGES:
      state.pages = actions.maxPages;
      return state;

    case CLASSIFICATION:
      state.allClassifications = [
        ...state.allClassifications,
        ...actions.classification,
      ];
      return state;

    case NEXT_URL_CLASSIFICATION:
      state.nextURLClassification = actions.nextUrl;
      return state;

    case IMAGE_BY_CLASSIFICATION:
      state.imgClassification = [actions.imageClassification];
      return state;

    case SEARCH_CLASSIFICATION:
      state.searchClassification = actions.searchClassification;
      return state;

    case MAX_PAGES_CLASSIFICATION:
      state.maxPagesClassification = actions.maxPagesClassification;
      return state;

    default:
      return state;
  }
};

export default getArtReducer;
