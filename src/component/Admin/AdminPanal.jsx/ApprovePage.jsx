import axios from "axios";
import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import { FcApprove, FcCancel } from "react-icons/fc";
import Navber from "../../Navber";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Modal, Table } from "antd";
import "antd/dist/antd.css";
import "D:/V2_Project/QuizApp-main/src/App.css";

const ApprovePage = () => {
//   const [userData, setUserData] = useState([]);
//   const [post, setPost] = useState();

//   useEffect(() => {
//     console.log("lsdkflsdk");
//     axios
//       .get("http://localhost:4000/users/pending-users")
//       .then((res) => {
//         console.log("HELLO", res);
//         setUserData(res.data.message);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [post]);

//   useEffect(() => {
//     console.log("zxc");
//     axios
//       .get("http://localhost:4000/users/reject")
//       .then((res) => {
//         console.log("HELLO", res);
//         setUserData(res.data.message);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [post]);

//   // useEffect(() => {
//   //   axios.get(`${baseURL}/1`).then((response) => {
//   //     setPost(response.data);
//   //   });
//   // }, []);

//   function refreshPage() {
//     window.location.reload(false);
//   }

//   async function approve(id) {
//     try {
//       const token = localStorage.getItem("user-info");
//       console.log(token);
//       const config = {
//         headers: { Authorization: `Bearer ${token}` },
//       };
//       console.log(id);

//       const result = await axios.patch(
//         `http://localhost:4000/users/approve/${id}`
//       );

//       console.log(result);
//       refreshPage();
//     } catch (error) {
//       console.log(error);
//     }
//   }

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


//   const columns = [
//     {
//       key: "1",
//       title: "ID",
//       dataIndex: "id",
//     },
//     {
//       key: "2",
//       title: "Name",
//       dataIndex: "name",
//     },
//     {
//       key: "3",
//       title: "Email",
//       dataIndex: "email",
//     },
//     {

//     },
//     // {
//     //   key: "4",
//     //   title: "Address",
//     //   dataIndex: "address",
//     // },
//     {
//       key: "5",
//       title: "Actions",
//       render: (id) => {
//         return (
//           <>
//             <EditOutlined
//               onClick={(el) => {
//                 approve(id);
//               }}
//             />
//             <DeleteOutlined
//               onClick={() => {
//                 reject(id);
//               }}
//               style={{ color: "red", marginLeft: 12 }}
//             />
      
//           </>
//         );
//       },
//     },
//   ];

//   return (
//     <div>
//       <Navber />
//       {/* <Table class="thead-light"> */}
//         {/* <th>Id</th>
//         <th>Email</th>
//         <th>Status</th>
//         <th>Approve</th>
//         <th>Reject</th>
//       <h1>User Data</h1> */}

//         {/* {userData.length > 0 ? (
//           userData.map((el) => (
//             <div className="Data_Show" key={el.id}>
//               <tr className="table"> */}
//                 {/* <td className="first_row">Id : {el.id}</td> */}
//                 {/* <td className="second_row">Email : {el.email}</td>
//                 <td className="third_row">Status : {el.status}</td>
//                 <td className="fourth_row"> */}
//                   {/* <Button
//                     block={true}
//                     size="lg"
//                     type="submit"
//                     // className="submit"
//                     onClick={(e) => approve(el.id)}
//                   >
//                     <FcApprove />
//                   </Button>
//                 </td>
//                 <td className="fith_row">
//                   <Button
//                     block={true}
//                     size="lg"
//                     type="submit"
//                     // className="submit"
//                     onClick={(e) => reject(el.id)}
//                   >
//                     <FcCancel />
//                   </Button>
//                 </td>
//               </tr>
//             </div>
//           ))
//         ) : (
//           <h1>Data not found</h1>
//         )}
//       </Table>
//      */
//      }

// <div className="App">
//       <header className="App-header">
//         {/* <Button onClick={onAddStudent}>Add a new Student</Button> */}
//         <Table columns={columns} post={post}></Table>
        
//       </header>
//     </div>
//      </div>
//   );

const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    console.log("lsdkflsdk");
    axios
      .get("http://localhost:4000/users/pending-users")
      .then((res) => {
        console.log("HELLO", res);
        setDataSource(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isEditing]);

  function refreshPage() {
    window.location.reload(false);
  }

  const approve = async (id)  => {
    console.log("Approved id", id);

    try {
      const { data } = await axios.get(
        `http://localhost:4000/users/approved/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user-info")}`,
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const reject = async (id) => {
    console.log("Rejected id", id);

    try {
      const { data, status } = await axios.get(
        `http://localhost:4000/users/reject/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user-info")}`,
          },
        }
      );
      
      console.log(data, status);
      // if( status == 200 )
      // {
      //   setDataSource(dataSource.map())
      // }

      setIsEditing(!isEditing)

    } catch (error) {
      console.log(error);
    }

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
  };

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
    {
      key: "5",
      title: "Actions",
      render: (info) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(info.id);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(info.id);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
            <Button
              // className="submit"
              onClick={() => reject(info.id)}
              
            >
              <DeleteOutlined style={{ color: "red", marginLeft: 12 }} />
            </Button>
          </>
        );
      },
    },
  ];

  //
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this Teacher record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };
  async function onEditStudent(id) {
    // setIsEditing(true);
    // setEditingStudent({ ...record });

    try {
      const token = localStorage.getItem("user-info");
      console.log(token);
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      console.log(id);

      const result = await axios.patch(
        `http://localhost:4000/users/approve/${id}`
      );

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };
  return (
    <div className="App">
          <Navber />

      <header className="App-header">
        <Table columns={columns} dataSource={dataSource}></Table>
      </header>
    </div>
  );
};

export default ApprovePage;


