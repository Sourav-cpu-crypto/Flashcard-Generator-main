
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
 
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

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

const Carddetails = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
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

  
  
  const { id,id1 } = useParams();
  const [groupcarddetails, setgroupcardetails] = useState('');
  const [termdetails, settermdetails] = useState(1);
  const data = useSelector((state) => state.fcard);
  useEffect(() => {
    const groupfcard = data.filter((groupfcard) => {
      return groupfcard.gid == id;
    });
    setgroupcardetails(groupfcard[0]);
  }, []);

const copyToClipboard = () => {
      copy(window.location.href);
      alert(`copied to clipboard`);
   }

  async function   Previouscard(p) {

       settermdetails(termdetails - 1);
   if ( p < 2) {
       settermdetails(1);
  
    navigate(`/groupdetails/${id}/${1}`,{replace:true})
    } else  if(p >= 2){
       
    navigate(`/groupdetails/${id}/${p}`,{replace:true})
       settermdetails(termdetails - 1);
     }
  }


  function readcarddetfromurl(index){

    
    navigate(`/groupdetails/${id}/${index+1}`,{replace:true})
  }
  const download=()=>{
const term =document.getElementById("term12");
html2canvas(term,{logging:true,letterRendering:1,useCors:1}).then(canvas=>{
const imgWidth=208;
const imgHeight=canvas.height * imgWidth / canvas.width;
const imgData=canvas.toDataURL('image/png');


const pdf = new jsPDF('p','mm','a4');

pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
pdf.save('download.pdf');
})
  }
  function Nextcard(id1) {

    if (id1 > groupcarddetails.terms.length - 1) {
      settermdetails(groupcarddetails.terms.length);
      navigate(`/groupdetails/${id}/${groupcarddetails.terms.length}`,{replace:true})
    } else {
      navigate(`/groupdetails/${id}/${id1}`,{replace:true})
      settermdetails(termdetails + 1);
    }
  }
  return (
    <div className="max-w-[1300px] mx-auto mt-7">
      <div className="grid sm:grid-rows md:grid-cols-4 mt-6 gap-2 bg-red-700">
        <div className=" bg-white">
          {groupcarddetails?.terms === '' ||
          groupcarddetails?.terms === undefined ? (
            ''
          ) : (
          
            <Groupcard
            id1={id}

              groupcarddetails={groupcarddetails}readcarddetfromurl={readcarddetfromurl}
              settermdetails={settermdetails}
            />
          )}
        </div>
        <div     id="term12" ref={componentRef}  className="col-span-2 rounded items-center">
          {groupcarddetails?.terms === '' ||
          groupcarddetails?.terms === undefined ? (
            ''
          ) : (
            <TermCards
          
              groupcarddetails={groupcarddetails}
              termdetails={termdetails}
              Previouscard={Previouscard}
              Nextcard={Nextcard}
              id1={id} id2={id1}
            />
          )}
        </div>
        <div>
          <div className="flex flex-col">
            <div>
              <button
                onClick={openModal}
                className=" flex flex-row bg-white text-blue rounded ml-2 mt-2 items-center pl-2 w-3/4"
              >
                <FaShare  />
                <span className="p-1 text-base leading-normal">Share</span>
                <input type="" className="hidden" />
              </button>
            </div>
            <div>
              
              <button onClick={download} className=" flex flex-row bg-white text-blue rounded ml-2 mt-2 items-center pl-2 w-3/4">
                <FiDownload   onClick={()=>download}/>
                <span className="p-1 text-base leading-normal">Download</span>
              </button>
            </div>
            <div>


        
   <button onClick={handlePrint} className=" flex flex-row bg-white text-blue rounded ml-2 mt-2 items-center pl-2 w-3/4">
            <FiPrinter />
            <span className="p-1 text-base leading-normal">Print</span>
          
          </button>
        
          
        
          
            </div>
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="w-96 rounded p-5">
            <h3 className="font-bold"> Share</h3>
            <div className="mt-3 flex gap-3 w-100">
              <h4 className="border border-black 
              overflow-scroll">
        
              {window.location.href}
          
              </h4>
        
              <BiCopy  onClick={copyToClipboard}/>
              <HiOutlineShare />
            </div>
            <div className="flex gap-3 mt-5 justify-around">
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={40} />
              </FacebookShareButton>
              <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={40} />
              </LinkedinShareButton>
              <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon size={40} />
              </WhatsappShareButton>
              <TwitterShareButton url={shareUrl}>
                <TwitterIcon size={40} />
              </TwitterShareButton>
              <EmailShareButton url={shareUrl}>
                <EmailIcon size={40} />
              </EmailShareButton>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Carddetails;
