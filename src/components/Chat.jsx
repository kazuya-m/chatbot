import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const Chat = props => {
  const isQuestion = (props.type === 'question');
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";

  return (
    <ListItem alignItems="flex-start" className={classes}>
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <div className="p-chat__bubble">{props.text}</div>


    </ListItem>
  )
}

export default Chat;