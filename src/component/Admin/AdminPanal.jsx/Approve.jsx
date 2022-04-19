import React, { useEffect, useState } from "react";
import Navber from "../../Navber";
import axios from "axios";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Modal, Table } from "antd";
import "antd/dist/antd.css";
import "D:/V2_Project/QuizApp-main/src/App.css";

const Approve = () => {
  // const [userData, setUserData] = useState([]);
  // useEffect(() => {
  //     console.log('lsdkflsdk');
  //   axios
  //     .get("http://localhost:4000/users/approved-users")
  //     .then((res) => {
  //       console.log('HELLO',res);
  //       setUserData(res.data.message);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  // return (
  //   <div >
  //             <Navber />

  //     <h1>User Data</h1>
  //       {userData.length > 0 ?
  //       userData.map((el) => (
  //         <div className="Data_Show" key={el.id}>
  //           <h4 className="first_row">id : {el.id}</h4>
  //           <h4 className="second_row">Email : {el.email}</h4>
  //           <h4 className="third_row">Status : {el.status}</h4>
  //         </div>
  //       ))
  //        : (
  //       <h1>Data not found</h1>
  //     )}
  //   </div>
  // );

  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    console.log("lsdkflsdk");
    axios
      .get("https://nano-quiz-api.herokuapp.com/users/approved-users", {
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
}
export default Approve;