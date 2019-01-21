
import firebase from 'firebase/app';
import 'firebase/database';

export const getAllMatches = async () => {
  console.log(firebase.database());
  return firebase.database().ref('/matches')
    .once('value')
    .then(snapshot => {
      return snapshot.val();
    })
};
