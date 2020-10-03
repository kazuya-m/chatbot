import React, { createElement } from 'react';
import defaultDataset from './dataset';
import './assets/style/style.css';
import {AnswersList, Chats} from './components/index';
import { ChatSharp } from '@material-ui/icons';
import FromDialog from './components/forms/FormDialog';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
    this.selectAnswer = this.selectAnswer.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
  }

  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats;
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question'
    })

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId
    })
  }

  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) {
      case (nextQuestionId === 'init'):
        setTimeout( () => this.displayNextQuestion(nextQuestionId), 500); 
        break;
      case (/^https:*/.test(nextQuestionId)):
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = '_blank';
        a.click();
        break;
      case (nextQuestionId === 'contact'):
        this.handleClickOpen();
        break;
      default:
        const chats = this.state.chats;
        const chat = {
          text: selectedAnswer,
          type: 'answer'
        }
  
        chats.push(chat);
        this.setState({
          chats: chats
        })
        setTimeout( () => this.displayNextQuestion(nextQuestionId), 500); 
    }
  }

  handleClickOpen = () => {
    this.setState({open: true});
  }

  handleClickClose = () => {
    this.setState({open: false});
  }

  componentDidMount() {
    const initAnswer = "";
    this.selectAnswer(initAnswer, this.state.currentId);
  }

  componentDidUpdate() {
    // スクロール位置の頂点をスクロール領域の最下部に設定する
    const scrollArea = document.getElementById('scroll-area');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }

  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats} />
          <AnswersList
            answers={this.state.answers}
            select={this.selectAnswer}
          />
          <FromDialog open={this.state.open} handleClickClose={this.handleClickClose} />
        </div>
      </section>

    );
  }
}