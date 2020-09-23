import React from 'react';
import {Answer} from './index';

const AnswerList = props => {
  return (
    <div className="c-grid__answer">
      {props.answers.map((value, index) => {
        return <Answer content={value.content} id={index.toString()} />

      })}
    </div>
  )
}

export default AnswerList;