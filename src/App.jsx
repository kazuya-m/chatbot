import React, {useState, useEffect, useCallback} from 'react';
import './assets/style/style.css';
import {AnswersList, Chats} from './components/index';
import FormDialog from './components/forms/FormDialog';
import InfoModal from './components/modal/InfoModal';
import { db, getCvRef, auth } from './firebase/index';


const App = () => {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState("init");
  const [dataset, setDataset] = useState({});
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); //modalのオープン状態
  const [modalId, setModalId] = useState(null);

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
      case (nextQuestionId === 'skills'):
        handleClickModalOpen(nextQuestionId);
        break;
      case (nextQuestionId === 'download'):
        handleClickPDFDownload();
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

  const handleClickModalOpen = id => {
    setModalOpen(true);
    setModalId(id);
  }

  const handleClickModalClose = () => {
    setModalOpen(false);  
  }

  const handleClickClose = useCallback (() => {
    setOpen(false)
  }, [setOpen]);

  const handleClickPDFDownload = () => {
    // download urlを取得
    getCvRef().child('mk_cv.pdf').getDownloadURL().then(url => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = event => {
        // ファイルの実体
        const blob = xhr.response;
        // ファイルデータに紐づくダウンロードリンクを設定
        const aDL = document.createElement('a');
        aDL.href = URL.createObjectURL(blob);
        aDL.download = 'MK(29歳)経歴書.pdf';
        aDL.click();
        aDL.remove();
      };
      xhr.open('GET', url);
      xhr.send();
    }).catch((error) => {
      window.alert(`DLに失敗しました。時間を空けて再度試してください。code=${error.error.code}`);
    });
  }
  
  // 最初の質問をチャットエリアに表示する
  useEffect(() => {
    (async() => {
      await auth.signInAnonymously()
      .then(() => {
        console.log("logged in");
      })
      .catch(error => {
        console.log(`code:${error.code} msg:${error.message}`);
      })
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
        <FormDialog open={open} handleClickClose={handleClickClose} />
        <InfoModal modalOpen={modalOpen} modalId={modalId} handleClickModalClose={handleClickModalClose} />
      </div>
    </section>
  );
}

export default App;