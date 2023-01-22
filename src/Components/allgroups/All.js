import React, { useEffect, useState } from "react";
import './All.css'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const All = () => {
  const [fgroup,setfgroup]=useState();
  
  const data = useSelector((state) => state.fcard);
  const [all,setall]=useState({showall:"false",mincards:"",maxcards:0})
  function mincardshow(){

  }
  useEffect(()=>{
    setfgroup([...data]);
    if(fgroup)
    {
      seeall();
    }

  },[])
  function seeall(){
    if(fgroup.length <=6)
    {
      let mincards1=[...fgroup].reverse();
      console.log("mincards1",data);
  setall({...all,mincards:[...fgroup].reverse(),maxcards:data.length})
    }
    else{
      let mincards2=fgroup.slice(-6).reverse();
      console.log("mincards2",mincards2)
      setall({...all,mincards:mincards2,maxcards:data.length})
    }
  }
  console.log("all",all);
  console.log("fetchdata", data);
  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="grid  mb-10  sm:grid-rows md:grid-cols-3 gap-1  ">
        {all?.maxcards > 6 &&  all?.showall ==="false" ? all?.mincards.map((card) => (
          <div className="border border-grey-400 drop-shadow-lg relative 
          grid justify-items-center bg-white mt-14">
       
            <img
              src={card.file}
              className="h-20  w-15 absolute top-[-2.5rem] img"
              alt=""
            />
            <strong className="pt-12 ">{card.gname}</strong>
            <p className="text-center line-clamp-2 h-12">{card.gdef}</p>
            <p className="text-center mt-2">{
            card.terms?card.terms.length===1?`${card.terms.length} 
            card`:`${card.terms.length} cards`:""}</p>
            <Link
              to={`/groupdetails/${card.gid}/1`}
              className="btn text-center mt-5 pt-1 pb-1 font-bold mb-3 text-red-600 border-2 border-red-600 pl-4 pr-4"
            >
              View Cards
            </Link>
          </div>
        )):
        fgroup?.reverse().map((card) => (
          <div className="border border-grey-400 drop-shadow-lg relative 
          grid justify-items-center bg-white mt-14">
       
            <img
              src={card.file}
              className="h-20  w-15 absolute top-[-2.5rem] img"
              alt=""
            />
            <strong className="pt-12 ">{card.gname}</strong>
            <p className="text-center line-clamp-2 h-12">{card.gdef}</p>
            <p className="text-center mt-2">{
            card.terms?card.terms.length===1?`${card.terms.length} 
            card`:`${card.terms.length} cards`:""}</p>
            <Link
              to={`/groupdetails/${card.gid}/1`}
              className="btn text-center mt-5 pt-1 pb-1 font-bold mb-3 text-red-600 border-2 border-red-600 pl-4 pr-4"
            >
              View Cards
            </Link>
          </div>
        ))}
      </div>
      {all.maxcards > 6 &&  all.showall ==="false" ?   
      <button onClick={()=>setall({...all,showall:"true"})}>
        see all</button>:
        all.maxcards > 6 &&  all.showall ==="true" ?

  <button onClick={()=>setall({...all,showall:"false"})}>
  show  less
  </button> :""
  }
    </div>
  );
};

export default All;


