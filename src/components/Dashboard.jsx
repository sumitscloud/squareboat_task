import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { getPostedJobs } from "../services/service";
import Header from "./Header";
import Modal from "./Modal";
import NoJobs from "./NoJobs";
import Pagination from "./Pagination";

function Dashboard(props) {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(0);
  const [dataLength, setDataLength] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(null);
  const indexOfLastRecord = page * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const nPages = Math.ceil(dataLength / recordsPerPage)

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] =
      sessionStorage.getItem("token");
    getPostedJobs(page)
      .then((res) => {
        if(res.data.code === 200){
        setData(res.data.data.data);
        setRecordsPerPage(res?.data?.data?.metadata?.limit);
        setDataLength(res.data?.data.metadata?.count);
      }
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [page]);


  const openModal = (props) => {
    setIsModalOpen(true);
    setId(props);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setId(null);
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={() => closeModal()} id={id} />
      <Header />
      <div className="main">
        <div>
          <div style={{ color: "#ffffff" }}>Jobs posted by you</div>
          <div className="card_list">
            {data?.length ? (
              data.map((item) => {
                return (
                  <Card key={item.id} onClick={() => openModal(item.id)}>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>

                      <Card.Text>{item.description}</Card.Text>
                      <Card.Footer>
                        <p>{item.location}</p> <p>View Application</p>
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                );
              })
            ) : (
              <NoJobs />
            )}
            {data?.length >= 20 ? <Pagination
                nPages={nPages}
                currentPage={page}
                setCurrentPage={setPage}
            /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
