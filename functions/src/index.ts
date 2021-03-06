import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";


//Firebaseにデプロイする関数。外部から使用してFirestoreのデータ操作などを行う
admin.initializeApp();

const db = admin.firestore();


const sendResponse = (response: functions.Response, statusCode: number, body: any) => {
  response.send({
    statusCode,
    body: JSON.stringify(body)
  })
};

// Dataset
export const addDataset = functions.https.onRequest( async(req: any, res: any) => {
  // POST以外は受け付けない
  if(req.method !== 'POST') {
    sendResponse(res, 405, {error: 'Invalid Request'});
  } else {
    const dataset = req.body;
    for (const key of Object.keys(dataset)) {
      const data = dataset[key];
      await db.collection('questions').doc(key).set(data); // Firestorのデータ構造。collection - document - data の階層
    }
    sendResponse(res, 200, {message: 'Successfuly added dataset'});
  }
})

// Skillset
export const addSkillset = functions.https.onRequest( async(req: any, res: any) => {
  // POST以外は受け付けない
  if(req.method !== 'POST') {
    sendResponse(res, 405, {error: 'Invalid Request'});
  } else {
    const dataset = req.body;
    for (const key of Object.keys(dataset)) {
      const data = dataset[key];
      await db.collection('skillset').doc(key).set(data); // Firestorのデータ構造。collection - document - data の階層
    }
    sendResponse(res, 200, {message: 'Successfuly added dataset'});
  }
})