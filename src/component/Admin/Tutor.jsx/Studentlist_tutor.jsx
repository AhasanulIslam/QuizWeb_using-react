import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import NavberTutor from '../../NavberTutor';

const Studentlist_tutor = () => {
   
const [isEditing, setIsEditing] = useState(false);
const [editingStudent, setEditingStudent] = useState(null);
const [dataSource, setDataSource] = useState([]);

useEffect(() => {
  console.log("lsdkflsdk");
  axios
    .get("https://nano-quiz-api.herokuapp.com/exam-history/view-all-quiz-details-tutor",{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user-info")}`,
      },
    }
  )
    .then((res) => {
      console.log("HELLO", res);
      setDataSource(res.data.quizDetailsTutor);
    })
    .catch((err) => {
      console.log(err);
    });
}, [isEditing]);

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
    {
      key: "4",
      title: "Quiz Name",
      dataIndex: "quiz_name",
    },
    {
      key: "5",
      title: "Total Question",
      dataIndex: "total_question",
    },
    {
      key: "6",
      title: "Time",
      dataIndex: "time",
    },
    {
      key: "7",
      title: "Marks",
      dataIndex: "marks",
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
         <NavberTutor/>
          
      <header className="App-header">
        <Table columns={columns} dataSource={dataSource}></Table>
      </header>
    </div>
  );
}

export default Studentlist_tutor