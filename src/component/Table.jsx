import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Modal, Table } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";

function CustomizedTables() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState();

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
  }, []);

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
      const { data } = await axios.get(
        `http://localhost:4000/users/reject/${id}`,
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
      <header className="App-header">
        <Table columns={columns} dataSource={dataSource}></Table>
      </header>
    </div>
  );
}

export default CustomizedTables;
