import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, FormControl, Input } from "@material-ui/core";
import Service from "./services/getSimilar";
const service = new Service();

function App() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState();
  const handleChange = ({ target }) => setSearch(target.value);

  const handleSubmit = () => {
    service.getSimilar(search).then(elm => setResult(elm));
    console.log(result)
  };

  const classes = useStyles();

  return (
    <div className="App">
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
      <div>
        {result && (result.map(elm => (
          <h3>{elm.Name}</h3>
        )))}
      </div>
    </div>
  );
}

export default App;

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));
