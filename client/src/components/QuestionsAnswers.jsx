import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionsSearch from './Sub_Questions/QuestionSearch.jsx';
import QuestionList from './Sub_Questions/QuestionList.jsx';
import AskQuestion from './Sub_Questions/AskQuestion.jsx';
import AnswerQuestion from './Sub_Questions/AnswerQuestion.jsx';

export default function QuestionsAnswers({ productID }) {
  const tempId = 40355;
  const [questionList, setQuestionList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    axios.get(`/api/qa/questions?product_id=${tempId}&count=5&page=1`)
      .then((result) => {
        setQuestionList(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [tempId]);

  useEffect(() => {
    setFilteredList(questionList);
  }, [questionList]);

  return (
    <div>
      Hello from QnA
      <QuestionsSearch />
      <QuestionList questionList={filteredList} />
      <AskQuestion />
      <AnswerQuestion />
    </div>
  );
}
