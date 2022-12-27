import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { getPostedJobs } from "../services/service";
import Header from "./Header";
import Modal from "./Modal";

function Dashboard(props) {
    const [data, setData] = useState();
    const [page, setPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setId] = useState(null);
    useEffect(()=>{
        axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
        getPostedJobs(page).then(res =>{
            setData(res.data.data.data);
        }).catch(err =>{
            console.log("error", err);
        })
    },[page])

    const openModal = (props) =>{
        setIsModalOpen(true)
        setId(props);
    }

    const closeModal = () =>{
        setIsModalOpen(false);
        setId(null);
    }

  return (
    <div>
        <Modal isOpen={isModalOpen} onClose={() => closeModal()} id={id}/>
      <Header />
      <div className="main">
        <div>
        <div style={{ color: "#ffffff" }}>Jobs posted by you</div>
        <div className="card_list">{
            data && data.map(item => {
                return(
          <Card  key={item.id} onClick={() =>openModal(item.id)} >
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              
              <Card.Text>
               {item.description}
              </Card.Text>
              <Card.Footer ><p>{item.location}</p>  <p>View Application</p></Card.Footer>
            </Card.Body>
          </Card>)})}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
