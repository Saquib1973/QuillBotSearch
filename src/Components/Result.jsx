import React from "react";
import { BsThreeDotsVertical, BsBookmark } from "react-icons/bs";
import Button from "@mui/material/Button";
const Result = ({ type }) => {
  return (
    <div className="w-full px-5 sm:px-10 my-5 mb-20 sm:mt-10 gap-2 sm:gap-4 flex flex-col">
      <p className="text-2xl">{type} Result</p>
      <div className="flex flex-col gap-4 sm:gap-8">
        <Data type={type} />
        <Data type={type} />
      </div>
    </div>
  );
};
const Data = ({ type }) => {
  return (
    <div className="flex flex-col gap-4 px-4 py-5 rounded-xl drop-shadow-sm border-t-2 border-gray-50 shadow-gray-300 shadow-md">
      <div className="flex justify-end sm:justify-between gap-2">
        <p className="hidden sm:block text-gray-400">
          www.nyaylok.onrender.com
        </p>
        <div className="flex gap-2 items-center text-green-400 font-semibold text-lg">
          <Button color="success" className="flex gap-2">
            <BsBookmark />
            Bookmark
          </Button>
          <BsThreeDotsVertical className="cursor-pointer" />
        </div>
      </div>
      <div>
        <p className="text-2xl tracking-wider sm:tracking-widest">Heading</p>
        <p className="italic text-gray-400 text-xs sm:text-sm">SubHeading</p>
        <p className="text-sm sm:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          tenetur obcaecati, dignissimos iste, assumenda excepturi incidunt iure
          ipsam molestiae quaerat, laborum inventore expedita! Sequi
          reprehenderit itaque illo ea distinctio vel asperiores quia, culpa
          fuga dolores corrupti magnam architecto nobis veniam obcaecati
          quibusdam unde dignissimos aperiam ipsa? Eveniet dignissimos omnis
          voluptates ad, quae qui eos quo, nam nobis suscipit iure modi.
        </p>
      </div>
      <div className="flex justify-end sm:justify-between">
        <div className="hidden sm:flex  gap-1 sm:gap-2 text-base">
          {type === "Academic" ? (
            <>
              <p className="text-xs sm:text-base text-blue-600 cursor-pointer">
                Cited by All
              </p>
              <p className="text-xs sm:text-base text-blue-600 cursor-pointer">
                View all version
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="flex gap-1 sm:gap-2">
          {type === "Academic" ? (
            <>
              <Button variant="outlined" color="success">
                Cite
              </Button>
              <Button variant="contained" color="success">
                Explore
              </Button>
            </>
          ) : (
            <>
              <Button variant="contained" color="success">
                Get Content
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Result;
