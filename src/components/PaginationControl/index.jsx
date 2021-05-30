import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { getPaginationClassificationThunk } from "../../store/art/thunk";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    margin: 20,
  },
}));

const PaginationControl = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const dispatch = useDispatch();
  const search = useSelector((state) => state.art.searchClassification);
  const maxPagesClassification = useSelector(
    (state) => state.art.maxPagesClassification
  );
  console.log(search);

  const handleNextPage = (value) => {
    dispatch(getPaginationClassificationThunk(value, search));
  };

  useEffect(() => {
    handleNextPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search]);

  return (
    <div className={classes.root}>
      <Pagination
        count={maxPagesClassification}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};

export default PaginationControl;
