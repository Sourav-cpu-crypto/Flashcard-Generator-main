import React, { useEffect, useState } from "react";
import './All.css'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createflashcard,deleteflashcard } from "../../state/actions/card.js";

const All = () => {
  const dispatch = useDispatch();
   const [fgroup,setfgroup]=useState("false");
  
  const data = useSelector((state) => state.fcard);
  console.log("data",data)
  const [all,setall]=useState({showall:"false",mincards:false,cardslength:0})
  function mincardshow(){

  }
  useEffect(()=>{

      seeall1(fgroup);

},[fgroup])
  useEffect(()=>{

  setfgroup(data);

},[])
  function deletecard(gid){
console.log("id",gid)
console.log("data",data)
    let filter=fgroup.filter(item=>item.gid !== gid)
    console.log("filter",filter)
    localStorage.setItem('fcard', JSON.stringify(filter));
    console.log(localStorage.getItem('fcard'));
    setfgroup(filter);
     dispatch(deleteflashcard(filter));

  }
  function seeall1(){
    console.log("fgroup",fgroup);
    if(fgroup.length <=6)
    {
      let mincards1=[...fgroup].reverse();
      console.log("mincards1",data);
   
  setall({...all,possiblecards:mincards1,cardslength:[...fgroup].length})
    }
    else{
      let mincards2=[...fgroup];
      console.log("mincards2",fgroup)
      setall({...all,possiblecards:[...fgroup].slice(-6).reverse(),
        cardslength:[...fgroup].length})
    }
  }
  console.log("all",all);
  console.log("fetchdata", fgroup);
  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="grid  mb-10  sm:grid-rows md:grid-cols-3 gap-1  ">
        {
        fgroup!=="false" ? all?.cardslength> 6 &&  all?.showall ==="false" ? 
       
        
        all.possiblecards.map((card) => (
          <div className="border border-grey-400 drop-shadow-lg relative 
          grid justify-items-center bg-white mt-14">
       
            <img
              src={card.file}
              className="h-20  w-15 absolute top-[-2.5rem] img"
              alt=""
            />
            <strong className="pt-12 ">{card.gname}</strong>
            <p className="text-center line-clamp-2 h-12 text-clip overflow-hidden">{card.gdef}</p>
            <p className="text-center mt-2">{
            card.terms?card.terms.length===1?`${card.terms.length} 
            card`:`${card.terms.length} cards`:""}</p>
            <Link
              to={`/groupdetails/${card.gid}/1`}
              className="btn text-center mt-5 pt-1 pb-1 font-bold mb-3 text-red-600 border-2 border-red-600 pl-4 pr-4"
            >
              View Cards
            </Link>
            <button onClick={(e)=>deletecard(card.gid)}>delete</button> 
          </div>
        )):
        all?.possiblecards ?
        all?.possiblecards.map((card) => (
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
           <button onClick={(e)=>deletecard(card.gid)}>delete</button> 
          </div>
        )):"":""
     
     
        
        }
      </div>
      {all?.cardslength > 6 &&  all?.showall ==="false" ?   
      <button onClick={()=>setall({...all,showall:"true",
      possiblecards:[...fgroup].reverse()})}>
        see all</button>:
        all?.cardslength
        > 6 &&  all?.showall ==="true" ?

  <button onClick={()=>setall({...all,showall:"false",
  possiblecards:[...fgroup].slice(-6).reverse()})}>
  see less
  </button> :""

  }


    </div>
  );
};

export default All;


