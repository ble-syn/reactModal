import React from "react";
import{ BsArrowLeftRight, BsCheckCircle }from "react-icons/bs";
import { SiIntercom } from "react-icons/si";
import { MdCastConnected } from "react-icons/md";
import {FiCopy, FiPlayCircle} from "react-icons/fi";

function Modal({openModal, showModal}) {
  const [copy , setCopy] = React.useState(false);

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText("app.untitledui.com/integrations/intercom");
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  }
  return (
    <div className="modal">
      {!showModal && (
        <div className="modal-content">
          <div className="icon-cont content">
            <MdCastConnected className="icon" />
            <BsArrowLeftRight className="grey" />
            <SiIntercom className="icon purple" />
          </div>
          
          <h2 className="content center">Connect Linear to Intercom</h2>
          <p className="center">
            Prioritize work based on customer needs and build a tighter feedback
            loop with your customers
          </p>
          <div className="copy-cont content">
            <div>
              <input className="link-copy" value="app.untitledui.com/integrations/intercom"  />
            </div>
            
            <div>
              
            <button onClick={copyToClipboard} className="btn cen-item"> <span><FiCopy /></span> Copy link</button>
            {copy ? <span className="copy-msg">Copied!!</span> : null}
            </div>
            
          </div>

          <div className="content">
            <h3>Untitled would like to</h3>
            <p className="cen-item"> <span><BsCheckCircle className="green" /></span> Access basic company information and details</p>
            <p className="cen-item"> <span><BsCheckCircle className="green" /></span> Access and edit bug report and cfeate new issues</p>
            <p className="cen-item"> <span><BsCheckCircle className="green" /></span> Change issue status and assignee of issues</p>
            <p className="cen-item"> <span><BsCheckCircle className="green" /></span> Open and resolve intercom conversations</p>
            <p className="cen-item"> <span><BsCheckCircle className="green" /></span> Add or remove users and change user roles</p>
          </div>
          <p className="content">
            We care about your privacy in our{" "}
            <a href="www.com">Privacy Policy.</a> By clicking allow access, you
            authorize Untitled to access your information.
          </p>
          <div className="content btm-btn">
            <button className="btn cen-item"><span><FiPlayCircle /></span>How it works</button>
            <div>
              <button className="btn" onClick={openModal}>Cancel</button>

              <button className="alw-acs btn">Allow access</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
