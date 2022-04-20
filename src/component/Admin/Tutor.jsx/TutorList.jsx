import { Card, Collapse } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NavberTutor from "../../NavberTutor";

const { Panel } = Collapse;

const TutorList = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    console.log("lsdkflsdk");
    axios
      .get("https://nano-quiz-api.herokuapp.com/quiz/view-quizlist", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user-info")}`,
        },
      })
      .then((res) => {
        console.log(res.data.quiz);
        setUserData(res.data.quiz);
        // console.log(
        //   "quiz",
        //   res.data.map((res) => {
        //     console.log(res.data)
        //   })
        // );
        // setUserData(res.data.quiz);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log("check", userData.data.quiz);

  return (
    <div className="full_div" style={{ marginTop: 16 }}>
      <NavberTutor/>

      {userData.length > 0 ? (
        userData.map(el => (
          // <h1>{el.quiz_name}</h1>



          <div className="Data_Show" key={el.id}>
          <h4 className="">Quizname : {el.quiz_name}</h4>
          <h4 className="">Total Question : {el.total_question}</h4>
          <h4 className="">Marks : {el.marks}</h4>
          <h4 className="">
            {" "}
            {el.questionlist.map((el) => (
              // <Card className="">
              //   Question : {el.question}
              //   <h4 className="">
              //     Correct Answer: {el.correct_answer}
              //     <h4 className="">
              //       Incorrect Answers :{" "}
              //       {el.incorrect_answers.map((ans) => (
              //         <h4>{ans}</h4>
              //       ))}
              //     </h4>
              //   </h4>
              // </Card>

              <Collapse accordion>
                <Panel header={`Question: ${el.id} `}>
                  {el.id}
                  <Card bordered={false}>
                    <h4>Question : {el.question}</h4>

                    <h4 className="">
                      Correct Answer: {el.answer}
                      <h4 className="">
                        Option :{" "}
                        {el.incorrect.map((ans) => (
                          <p className="position">{ans}</p>
                        ))}
                      </h4>
                    </h4>
                  </Card>
                </Panel>
              </Collapse>

              // <Row>
              //   <Col span={8} className="cal_1">
              //     <h4>Question : {el.id}</h4>

              //     <Card bordered={false}>
              //       <h4>Question : {el.question}</h4>

              //       <h4 className="">
              //         Correct Answer: {el.correct_answer}
              //         <h4 className="">
              //           Incorrect Answers :{" "}
              //           {el.incorrect_answers.map((ans) => (
              //             <h4>{ans}</h4>
              //           ))}
              //         </h4>
              //       </h4>
              //     </Card>
              //   </Col>
              //   <Col span={8} className="cal_2">
              //     <h4>Question : {el.id}</h4>

              //     <Card bordered={false}>
              //       <h4>Question : {el.question}</h4>

              //       <h4 className="">
              //         Correct Answer: {el.correct_answer}
              //         <h4 className="">
              //           Incorrect Answers :{" "}
              //           {el.incorrect_answers.map((ans) => (
              //             <h4>{ans}</h4>
              //           ))}
              //         </h4>
              //       </h4>
              //     </Card>
              //   </Col>
              //   <Col span={8} className="cal_3">
              //     <h4>Question No: {el.id}</h4>
              //     <Card bordered={false}>
              //       <h4>Question : {el.question}</h4>

              //       <h4 className="">
              //         Correct Answer: {el.correct_answer}
              //         <h4 className="">
              //           Incorrect Answers :{" "}
              //           {el.incorrect_answers.map((ans) => (
              //             <h4>{ans}</h4>
              //           ))}
              //         </h4>
              //       </h4>
              //     </Card>
              //   </Col>
              // </Row>
            ))}
          </h4>
          {/* <h4 className="">
            Correct Answer : {el.Questionlist.map((el) => el.correct_answer)}
          </h4> */}

          <br />
          <br />
          {/* <h4 className="third_row">Marks : {el.Marks}</h4>
          <h4 className="third_row">Marks : {el.Marks}</h4>
          <h4 className="third_row">Marks : {el.Marks}</h4> */}
        </div>


        ))
      ): <h1>Data not found</h1>}
    </div>
  );
};
export default TutorList;


