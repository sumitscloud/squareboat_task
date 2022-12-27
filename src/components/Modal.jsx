import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "../Modal.css";
import { getOneJobCandidate } from "../services/service";
const Modal = (props) => {
  const [list, setList] = useState();
  useEffect(() => {
    if (props.id) {
      getOneJobCandidate(props.id)
        .then((res) => {
            if(res.data.code){
          setList(res.data.data);}
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, [props.id]);
  const close = (e) => {
    e.preventDefault();

    if (props.onClose) {
      props.onClose();
    }

    if (props.onToggle) {
      props.onClose();
    }
  };

  if (props.isOpen === false) return null;

  return (
    <div>
      <div className="custom-modal">
        <div className="modal-title">
          Applications for this job
          <hr />
        </div>
        {list?.length ?`Total ${list?.length} applications` : "No any Applications"}
        <div className="modal_main">
          {list
            ? list.map((item, i) => {
                return (
                <Card key={i} className="modal_card">
                    <div>{item.name}<br/>
                    {item.email}</div>
                    <div>
                        <label> Skills </label><br/>
                        {item.skills}
                    </div>
                    </Card>);
              })
            : "NO ANY CANDIDATE"}
        </div>
      </div>
      <div className="bg" onClick={(e) => close(e)} />
    </div>
  );
};

export default Modal;
