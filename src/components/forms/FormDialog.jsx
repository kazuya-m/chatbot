import React, {useState, useEffect, useCallback} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextInput from './TextInput';

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

    const url = "https://hooks.slack.com/services/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";

    fetch(url, {
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

// export default class FromDialog extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       text: ""
//     }
//     this.inputName = this.inputName.bind(this);
//     this.inputEmail = this.inputEmail.bind(this);
//     this.inputText = this.inputText.bind(this);
//   }

//   inputName = event => {
//     this.setState({name: event.target.value})
//   }

//   inputEmail = event => {
//     this.setState({email: event.target.value})
//   }

//   inputText = event => {
//     this.setState({text: event.target.value})
//   }

//   submitFrom = () => {
//     const name = this.state.name;
//     const email = this.state.email;
//     const text = this.state.text;
//     const payload = {
//       text: 'お問い合わせがありました\n'
//           + 'お名前: ' + name + '\n'
//           + 'メールアドレス: ' + email + '\n'
//           + '【問い合わせ内容】\n' + text
//     };

//     const url = "https://hooks.slack.com/services/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";

//     fetch(url, {
//       method: 'POST',
//       body: JSON.stringify(payload)
//     }).then(() => {
//       alert('送信が完了しました');
//       this.setState({
//         name: "",
//         email: "",
//         text: ""
//       })
//       return this.props.handleClickClose();
//     })
//   }

//   render() {
//     return (
//       <Dialog
//         open={this.props.open}
//         onClose={this.props.handleClickClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">{"お問い合わせ"}</DialogTitle>
//         <DialogContent>
//           <TextInput 
//             label={"お名前(必須)"} multiline={false} rows={1} 
//             value={this.state.name} type={"text"} onChange={this.inputName} />
//           <TextInput 
//             label={"メールアドレス(必須)"} multiline={false} rows={1} 
//             value={this.state.email} type={"email"} onChange={this.inputEmail} />
//           <TextInput 
//             label={"内容(必須)"} multiline={true} rows={5} 
//             value={this.state.text} type={"text"} onChange={this.inputText} />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={this.props.handleClickClose} color="primary">
//             キャンセル
//           </Button>
//           <Button onClick={this.submitFrom} color="primary" autoFocus>
//             送信
//           </Button>
//         </DialogActions>
//       </Dialog>
//     )
//   }
// }