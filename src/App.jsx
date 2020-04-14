import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, FormControl, Input, Grid } from "@material-ui/core";
import Result from "./components/result";
import Service from "./services/getSimilar";

const service = new Service();

function App() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState();
  const handleChange = ({ target: { value } }) => setSearch(value);

  const handleSubmit = () => {
    service
      .getSimilar(search)
      .then(elm => setResult(elm))
      .catch(err => console.log(err));
    console.log(result);
  };

  const classes = useStyles();

  return (
    <div className={classes.main}>
      <form className={classes.root}>
        <FormControl fullWidth margin="normal">
          <Input
            id="Search"
            label="Search"
            value={search}
            onChange={handleChange}
          />
        </FormControl>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleSubmit()}
        >
          Send
        </Button>
      </form>
      <Grid container spacing={3}>
        {result && result.map(elm => <Result {...elm} />)}
      </Grid>
    </div>
  );
}

export default App;

const useStyles = makeStyles(theme => ({
  main: { margin: "100px" },
  root: {
    marginBottom: "50px",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));
