import {
  TECHINIQUES,
  SPECIFIC_TECHINIQUE,
  IMAGES,
  DATE_IMAGES,
  NEXT_URL,
  MAX_PAGES,
  CLASSIFICATION,
  NEXT_URL_CLASSIFICATION,
  IMAGE_BY_CLASSIFICATION,
  SEARCH_CLASSIFICATION,
  MAX_PAGES_CLASSIFICATION,
} from "./actions-types";

export const getTechiniques = (techiniques) => ({
  type: TECHINIQUES,
  techiniques,
});

export const getSpecificTechnique = (techinique) => ({
  type: SPECIFIC_TECHINIQUE,
  techinique,
});

export const getImages = (images) => ({
  type: IMAGES,
  images,
});

export const getDateImages = (date) => ({
  type: DATE_IMAGES,
  date,
});

export const getNextURL = (nextUrl) => ({
  type: NEXT_URL,
  nextUrl,
});

export const getMaxPages = (maxPages) => ({
  type: MAX_PAGES,
  maxPages,
});

export const getClassification = (classification) => ({
  type: CLASSIFICATION,
  classification,
});

export const getNextURLClassification = (nextUrl) => ({
  type: NEXT_URL_CLASSIFICATION,
  nextUrl,
});

export const getImageByClassification = (imageClassification) => ({
  type: IMAGE_BY_CLASSIFICATION,
  imageClassification,
});

export const getSearchClassification = (searchClassification) => ({
  type: SEARCH_CLASSIFICATION,
  searchClassification,
});

export const getMaxPagesClassification = (maxPagesClassification) => ({
  type: MAX_PAGES_CLASSIFICATION,
  maxPagesClassification,
});
