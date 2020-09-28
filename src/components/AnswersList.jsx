import React from 'react';
import {Answer} from './index';

const AnswerList = props => {
  return (
    <div className="c-grid__answer">
      {props.answers.map((value, index) => {
        return <Answer content={value.content} nextId={value.nextId} id={index.toString()} select={props.select}/>

      })}
    </div>
  )
}

export default AnswerList;