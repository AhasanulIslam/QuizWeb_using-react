import axios from "axios";
import produce from "immer";
import React, { useState } from "react";
import NavberTutor from "../../NavberTutor";
import Validation from "../Validation";
const QuizFrom = () => {
  const [values, setValues] = useState({
    quiz_name: "",
    total_question: "",
    time: "",
    marks: "",
    questionlist: [],
    question1: "",
    incorrect1: [],
    answer1: "",
    question2: "",
    incorrect2: [],
    answer2: "",
    question3: "",
    incorrect3: [],
    answer3: "",
    question4: "",
    incorrect4: [],
    answer4: "",
    question5: "",
    incorrect5: [],
    answer5: "",
  });

  //   const [newValue, setNewValue] = useState({
  //     question1: "",
  //     incorrect1: [],
  //     answer1: "",
  //     question2: "",
  //     incorrect2: [],
  //     answer2: "",
  //     question3: "",
  //     incorrect3: [],
  //     answer3: "",
  //     question4: "",
  //     incorrect4: [],
  //     answer4: "",
  //     question5: "",
  //     incorrect5: [],
  //     answer5: "",
  //   })

  const [errors, setErrors] = useState({});

  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handlequestion = (event, id) => {
    setValues(
      produce(values, (draftState) => {
        draftState.questionlist[id].question = event.target.value;
        return draftState;
      })
    );
  };

  const handleFromSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrors(Validation(values));
    setDataIsCorrect(true);
    console.log(values);

    const token = localStorage.getItem("user-info");
    console.log(token);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    values.questionlist.push({
      id: 1,
      question: values.question1,
      incorrect: values.incorrect1.split(","),
      answer: values.answer1,
    });
    values.questionlist.push({
      id: 2,
      question: values.question2,
      incorrect: values.incorrect2.split(","),
      answer: values.answer2,
    });
    values.questionlist.push({
      id: 3,
      question: values.question3,
      incorrect: values.incorrect3.split(","),
      answer: values.answer3,
    });
    values.questionlist.push({
      id: 4,
      question: values.question4,
      incorrect: values.incorrect4.split(","),
      answer: values.answer4,
    });
    values.questionlist.push({
      id: 5,
      question: values.question5,
      incorrect: values.incorrect5.split(","),
      answer: values.answer5,
    });

    console.log(values);
    const ggwp = {
      quiz_name: values.quiz_name,
      total_question: values.total_question,
      time: values.time,
      marks: values.marks,
      questionlist: values.questionlist,
    };
    console.log(ggwp);

    console.log(localStorage.getItem("user-info"));

    await axios
      .post("https://nano-quiz-api.herokuapp.com/quiz/create-quiz", ggwp, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));

    //     axios.post(`https://nano-quiz-api.herokuapp.com/exam-history/create-quiz-details`,
    //  values, {
    //     headers: { Authorization: `Bearer ${token}` },
    //   })
    //     .then(res => console.log(res.data))
    //     .catch(e => console.log(e))
  };

  // useEffect(() => {
  //     axios.get(url, headers).then(res => {setValues(res.data)})
  //     .catch(e => console.log(e))
  // }, [])

  return (
    <div>
      <NavberTutor />
      <div className="container">
        <div className=" app-wrapper">
          <div>
            <h2 className="title"> Create Quiz </h2>
          </div>

          <form className="from-wrapper">
            {/* <div className='name'>
                <label className='label'>Username</label>
                <input className='input' type="text" name='fullname' value={values.fullname} onChange={handleChange}/>
                {errors.fullname && <p className='error'>{errors.fullname}</p>}
            </div> */}

            <div className="email">
              <label className="label">Quiz Name</label>
              <input
                className="input"
                type="text"
                name="quiz_name"
                value={values.quiz_name}
                onChange={handleChange}
              />

              {errors.quiz_name && <p className="error">{errors.quiz_name}</p>}
            </div>

            <div className="email">
              <label className="label">Total Question</label>
              <input
                className="input"
                type="number"
                name="total_question"
                value={values.total_question}
                onChange={handleChange}
              />

              {errors.total_question && (
                <p className="error">{errors.total_question}</p>
              )}
            </div>

            <div className="email">
              <label className="label">Time</label>
              <input
                className="input"
                type="number"
                name="time"
                value={values.time}
                onChange={handleChange}
              />

              {errors.time && <p className="error">{errors.time}</p>}
            </div>

            <div className="email">
              <label className="label">Marks</label>
              <input
                className="input"
                type="number"
                name="marks"
                value={values.marks}
                onChange={handleChange}
              />

              {errors.marks && <p className="error">{errors.marks}</p>}
            </div>

            <div className="email">
              <label className="label">Question1</label>
              <input
                className="input"
                name="question1"
                type="text"
                value={values.question1}
                onChange={handleChange}
              />
              {errors.question1 && <p className="error">{errors.question1}</p>}
            </div>

            <div className="email">
              <label className="label">Options </label>
              <input
                className="input"
                type="text"
                name="incorrect1"
                value={values.incorrect1}
                onChange={handleChange}
              />
              {errors.incorrect1 && (
                <p className="error">{errors.incorrect1}</p>
              )}
            </div>

            <div className="email">
              <label className="label">Answer</label>
              <input
                className="input"
                type="text"
                name="answer1"
                value={values.answer1}
                onChange={handleChange}
              />
              {errors.answer1 && <p className="error">{errors.answer1}</p>}
            </div>

            <div className="email">
              <label className="label">Question2</label>
              <input
                className="input"
                type="text"
                name="question2"
                value={values.question2}
                onChange={handleChange}
              />
              {errors.question2 && <p className="error">{errors.question2}</p>}
            </div>

            <div className="email">
              <label className="label">Options</label>
              <input
                className="input"
                type="text"
                name="incorrect2"
                value={values.incorrect2}
                onChange={handleChange}
              />
              {errors.incorrect2 && (
                <p className="error">{errors.incorrect2}</p>
              )}
            </div>

            <div className="email">
              <label className="label">Answer</label>
              <input
                className="input"
                type="text"
                name="answer2"
                value={values.answer2}
                onChange={handleChange}
              />
              {errors.answer2 && <p className="error">{errors.answer2}</p>}
            </div>

            <div className="email">
              <label className="label">Question3</label>
              <input
                className="input"
                type="text"
                name="question3"
                value={values.question3}
                onChange={handleChange}
              />
              {errors.question3 && <p className="error">{errors.question3}</p>}
            </div>

            <div className="email">
              <label className="label">Options</label>
              <input
                className="input"
                type="text"
                name="incorrect3"
                value={values.incorrect3}
                onChange={handleChange}
              />
              {errors.incorrect3 && (
                <p className="error">{errors.incorrect3}</p>
              )}
            </div>

            <div className="email">
              <label className="label">Answer</label>
              <input
                className="input"
                type="text"
                name="answer3"
                value={values.answer3}
                onChange={handleChange}
              />
              {errors.answer3 && <p className="error">{errors.answer3}</p>}
            </div>

            <div className="email">
              <label className="label">Question4</label>
              <input
                className="input"
                type="text"
                name="question4"
                value={values.question4}
                onChange={handleChange}
              />
              {errors.question4 && <p className="error">{errors.question4}</p>}
            </div>

            <div className="email">
              <label className="label">Options</label>
              <input
                className="input"
                type="text"
                name="incorrect4"
                value={values.incorrect4}
                onChange={handleChange}
              />
              {errors.incorrect4 && (
                <p className="error">{errors.incorrect4}</p>
              )}
            </div>

            <div className="email">
              <label className="label">Answer</label>
              <input
                className="input"
                type="text"
                name="answer4"
                value={values.answer4}
                onChange={handleChange}
              />
              {errors.answer4 && <p className="error">{errors.answer4}</p>}
            </div>

            <div className="email">
              <label className="label">Question5</label>
              <input
                className="input"
                type="text"
                name="question5"
                value={values.question5}
                onChange={handleChange}
              />
              {errors.question5 && <p className="error">{errors.question5}</p>}
            </div>

            <div className="email">
              <label className="label">Options</label>
              <input
                className="input"
                type="text"
                name="incorrect5"
                value={values.incorrect5}
                onChange={handleChange}
              />
              {errors.incorrect5 && (
                <p className="error">{errors.incorrect5}</p>
              )}
            </div>

            <div className="email">
              <label className="label">Answer</label>
              <input
                className="input"
                type="text"
                name="answer5"
                value={values.answer5}
                onChange={handleChange}
              />
              {errors.answer5 && <p className="error">{errors.answer5}</p>}
            </div>

            <div>
              <button
                className="submit"
                disabled={loading}
                onClick={handleFromSubmit}
              >
                Create Quiz
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuizFrom;
