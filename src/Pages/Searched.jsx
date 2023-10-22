import React from "react";
import SearchArea from "./SearchArea";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Result from "../Components/Result";
import { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Button from "@mui/material/Button";
const Searched = ({ setSearch, search }) => {
  //eslint-disable-next-line
  const [type, setType] = useState("Academic");
  const navigate = useNavigate();
  return (
    <SearchArea setSearch={setSearch} search={search}>
      <div className="flex justify-between items-center mx-10 my-5">
        <button
          className="flex items-center text-xl gap-2 hover:text-green-600 transition-all"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack className="mt-1" />
          Back
        </button>
        <FormControlLabel
          value="start"
          control={<Switch color="success" />}
          label="Academic"
          labelPlacement="start"
          className="text-gray-400"
        />
      </div>
      <div className="w-full relative items-center flex gap-4 justify-center">
        <TextField
          color="success"
          id="outlined-basic"
          label="Search"
          variant="outlined"
          className="w-2/3"
        />
        <Button
          color="success"
          variant="contained"
          className="absolute right-[25vw] sm:right-[12vw] lg:right-[8vw] xl:right-[6vw] 2xl:right-[5vw]"
        >
          <BsFillArrowRightCircleFill className="text-base sm:text-3xl" />
        </Button>
      </div>
      <Result type={type} />
    </SearchArea>
  );
};

export default Searched;
