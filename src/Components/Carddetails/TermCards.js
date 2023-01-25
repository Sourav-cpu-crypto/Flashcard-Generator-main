import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const TermCards = (({
  groupcarddetails,
  
  termdetails,
  Previouscard,
  Nextcard,
  id1,
  id2,
  ref,
  popup,
}) => {
  return (
    <>
      <div ref={ref}>
        {groupcarddetails?.terms === "" ||
        groupcarddetails?.terms === undefined ? (
          ""
        ) : (
          <div className= 
          "grid sm:grid-rows md:grid-cols-2 items-center bg-white gap-2 p-4 justify-center flex ">
            <div className=" ">
              
            { groupcarddetails.terms[id2-1].img == "" || 
            groupcarddetails.terms[id2-1].img == undefined ||      
            groupcarddetails.terms[id2-1].img == null
? ""  :  
<img
className="h-60 w-full rounded-lg "
src={groupcarddetails.terms[id2-1].img}
alt=""
></img>
        }
            </div>
            <div className="bg-blue-700 h-60 flex-wrap overflow-hidden">
            {groupcarddetails.terms[id2-1].desc}      
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2 justify-center mt-3">
        <button onClick={()=>Previouscard(termdetails-1)}>
          <AiOutlineLeft />
        </button>
        <p>{id2 + "/" + groupcarddetails.terms.length}</p>
        <button
        onClick={()=>Nextcard(termdetails+1)}>

          <AiOutlineRight />
        </button>{" "}
      </div>
    </>
  );
});

export default TermCards;
