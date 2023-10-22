import React from "react";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import SearchArea from "./SearchArea";
import { FaRobot } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Search = ({ setSearch }) => {
  const navigate = useNavigate();
  return (
    <SearchArea setSearch={setSearch}>
      <div className="h-screen flex flex-col gap-2 md:gap-6 items-center justify-center">
        <div className="flex items-center gap-2">
          <FaRobot color="gray" className="text-[20vw] sm:text-6xl" />
          <p className="text-xl md:text-4xl text-gray-400 font-light">
            QuillBot
          </p>
          <p className="text-xl md:text-4xl text-gray-400 font-medium">
            Search
          </p>
        </div>
        <div className=" text-4xl relative">
          <TextField
            color="success"
            id="outlined-basic"
            label="Search"
            variant="outlined"
            className="w-[90vw]"
          />
          <div className="inline absolute right-4 top-1">
            <FormControlLabel
              value="start"
              control={<Switch color="success" />}
              label="Academic"
              labelPlacement="start"
              className="text-gray-400"
            />
          </div>
          <div className="flex items-center justify-center mt-10">
            <Button
              variant="contained"
              color="success"
              size="large"
              onClick={() => navigate("/search")}
            >
              Search the Web
            </Button>
          </div>
        </div>
      </div>
    </SearchArea>
  );
};

export default Search;
