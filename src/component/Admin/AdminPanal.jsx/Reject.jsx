import React, { useEffect, useState } from "react";
import Navber from "../../Navber";
import axios from "axios";
import {  Table } from "antd";
import "antd/dist/antd.css";
import "../../../App.css"

const Reject = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    console.log("lsdkflsdk");
    axios
      .get("https://nano-quiz-api.herokuapp.com/users/rejected-users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user-info")}`,
        },
      })
      .then((res) => {
        console.log("HELLO", res);
        setDataSource(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {},
    // {
    //   key: "4",
    //   title: "Address",
    //   dataIndex: "address",
    // },
 
  ];

  
  return (
    <div className="App">
          <Navber />
          
      <header className="App-header">
        <Table columns={columns} dataSource={dataSource}></Table>
      </header>
    </div>
  );
};
export default Reject;

 // await axios
    //   .get(`http://localhost:4000/users/reject/${id}`, {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("user-info")}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  

  //   async function reject(id) {
  //     try {
  //       const token = localStorage.getItem("user-info");
  //       console.log(token);
  //       const config = {
  //         headers: { Authorization: `Bearer ${token}` },
  //       };
  //       console.log(id);

  //       const result = await axios.patch(
  //         `http://localhost:4000/users/reject/${id}`
  //       );
  //       refreshPage();
  //       console.log(result);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }