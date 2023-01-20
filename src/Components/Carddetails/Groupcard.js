import React from "react";
import { Navigate } from "react-router-dom";
import {useNavigate} from "react-router-dom";
const Groupcard = ({ groupcarddetails, settermdetails,id1,termdetails,readcarddetfromurl }) => {
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <p>Flashcards</p>
      <hr></hr>
      {groupcarddetails?.terms === "" || groupcarddetails?.terms === undefined
        ? ""
        : groupcarddetails.terms.map((allterm, index) => (
            <div className="flex flex-col rounded bg-white pt-1 sm:w-full">
              <button
                className="font-bold"
                onClick={() => {
                  readcarddetfromurl(index)
         
                }}
              >
 
                {allterm.term}
              </button>
            </div>
          ))}
    </div>
  );
};

export default Groupcard;

