import * as functions from 'firebase-functions';
import * as admin from "firebase-admin"; admin.initializeApp();

const db = admin.firestore();

const sendResponse = (response: functions.Response, statusCode: number, body: any) => {
  response.send({
    statusCode,
    body: JSON.stringify(body);
  })
};

//外部からcloud-function使う場合はexport
export const addDataset = functions.https.onRequest( async(req: any, res: any) => {

})