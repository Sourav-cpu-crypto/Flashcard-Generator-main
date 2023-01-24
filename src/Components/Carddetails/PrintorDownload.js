import React, { useEffect, useState, useRef  } from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FiPrinter, FiDownload } from 'react-icons/fi';
import { HiOutlineShare } from 'react-icons/hi';
import { BiCopy } from 'react-icons/bi';
import { FaShare } from 'react-icons/fa';
import Groupcard from './Groupcard';
import TermCards from './TermCards';
import copy from "copy-to-clipboard"; 
import Modal from 'react-modal';
import ReactToPrint  from 'react-to-print';
import {useReactToPrint}  from 'react-to-print';
import html2canvas from "html2canvas";
import  jsPDF from "jspdf";
import {useNavigate} from "react-router-dom";
 


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const PrintorDownload = ({id}) => {
  const componentRef = useRef();
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });
  const navigate = useNavigate();
  let subtitle;
  let shareUrl =window.location.href;

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  

  const [groupcarddetails, setgroupcardetails] = useState('');
  const [termdetails, settermdetails] = useState(1);
  const data = useSelector((state) => state.fcard);
  useEffect(() => {
    const groupfcard = data.filter((groupfcard) => {
      return groupfcard.gid == id;
    });
    setgroupcardetails(groupfcard[0]);
  }, []);







  return (
    <div className="max-w-[1300px] mx-auto mt-7">
      <div className="grid sm:grid-rows md:grid-cols-4 mt-6 gap-2 bg-red-700">
        <div className=" bg-white">
          {groupcarddetails?.terms === '' ||
          groupcarddetails?.terms === undefined ? (
            ''
          ) : (
          
 <div></div>
          )}
        </div>
        <div     id="term12" ref={componentRef}  className="col-span-2 rounded items-center">
          {groupcarddetails?.terms === '' ||
          groupcarddetails?.terms === undefined ? (
            ''
          ) : (
         <div></div>
          )}
        </div>
   
        </div>
    </div>
  );
};

export default PrintorDownload;
