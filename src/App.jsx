import React, {useState, useEffect, useCallback} from 'react';
import './assets/style/style.css';
import {AnswersList, Chats} from './components/index';
import FromDialog from './components/forms/FormDialog';
import {db} from './firebase/index';

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState("init");
  const [dataset, setDataset] = useState({});
  const [open, setOpen] = useState(false);

  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    addChats({
        text: nextDataset.question,
        type: 'question'
      })
    setAnswers(nextDataset.answers);
    setCurrentId(nextQuestionId);
  }

  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) {
      case (/^https:*/.test(nextQuestionId)):
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = '_blank';
        a.click();
        break;
      case (nextQuestionId === 'contact'):
        handleClickOpen();
        break;
      default:
        addChats({
          text: selectedAnswer,
          type: 'answer'
        });

        setTimeout( () => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]), 500); 
    }
  }

  const addChats = chat => {
    setChats(prevChat => {
      return [...prevChat, chat];
    })
  }

  const handleClickOpen = () => {
    setOpen(true);  
  }

  const handleClickClose = useCallback (() => {
    setOpen(false)
  }, [setOpen]);

    // 最初の質問をチャットエリアに表示する
    useEffect(() => {
      (async() => {
          const initDataset = {};

          // Fetch questions dataset from Firestore
          await db.collection('questions').get().then(snapshots => {
              snapshots.forEach(doc => {
                  initDataset[doc.id] = doc.data()
              })
          });

          // Firestoreから取得したデータセットを反映
          setDataset(initDataset);

          // 最初の質問を表示
          displayNextQuestion(currentId, initDataset[currentId])
      })();
  }, []);

  useEffect(() => {
    const scrollArea = document.getElementById('scroll-area');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  });

  return (
    <section className="c-section">
      <div className="c-box">
        <Chats chats={chats} />
        <AnswersList
          answers={answers}
          select={selectAnswer}
        />
        <FromDialog open={open} handleClickClose={handleClickClose} />
      </div>
    </section>
  );
}

export default App;