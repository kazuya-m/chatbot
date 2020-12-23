import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextInput from './TextInput';
import {SLACK_WEBHOOK} from '../../env/webhook_config';

const FormDialog = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const inputName = event => {
    setName(event.target.value);
  }

  const inputEmail = event => {
    setEmail(event.target.value);
  }

  const inputText = event => {
    setText(event.target.value);
  }

  const submitFrom = () => {
    const name1 = name;
    const email1 = email;
    const text1 = text;
    const payload = {
      text: 'お問い合わせがありました\n'
          + 'お名前: ' + name1 + '\n'
          + 'メールアドレス: ' + email1 + '\n'
          + '【問い合わせ内容】\n' + text1
    };

    fetch(SLACK_WEBHOOK, {
      method: 'POST',
      body: JSON.stringify(payload)
    }).then(() => {
      alert('送信が完了しました');
      setName("");
      setEmail("");
      setText("");

      return props.handleClickClose();
    })
  }

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClickClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"お問い合わせ"}</DialogTitle>
      <DialogContent>
        <TextInput 
          label={"お名前(必須)"} multiline={false} rows={1} 
          value={name} type={"text"} onChange={inputName} />
        <TextInput 
          label={"メールアドレス(必須)"} multiline={false} rows={1} 
          value={email} type={"email"} onChange={inputEmail} />
        <TextInput 
          label={"内容(必須)"} multiline={true} rows={5} 
          value={text} type={"text"} onChange={inputText} />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClickClose} color="primary">
          キャンセル
        </Button>
        <Button onClick={submitFrom} color="primary" autoFocus>
          送信
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormDialog;