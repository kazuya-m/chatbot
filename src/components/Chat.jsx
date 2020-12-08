import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoProfile from '../assets/img/no-profile.png'; 
import Profile from '../assets/img/profile.jpg';

const Chat = props => {
  const isQuestion = (props.type === 'question');
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";

  return (
    <ListItem alignItems="flex-start" className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="KazuyaMatsuo" src={Profile} />
        ) : (
          <Avatar alt="icon-question" src={NoProfile} />
        )}
      </ListItemAvatar>
      {isQuestion ? (
        <div className="p-chat__bubble p-chat__question">{props.text}</div>
      ) : (
        <div className="p-chat__bubble p-chat__answer">{props.text}</div>
      )}


    </ListItem>
  )
}

export default Chat;