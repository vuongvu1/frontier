
import firebase from 'firebase/app';
import 'firebase/database';

import { DEFAULT_PAGE_SIZE } from 'constants/firebase';

export const getAllMatchesApi = async () => {
  return firebase.database().ref('matches/')
    .once('value')
    .then(snapshot => {
      return snapshot.val();
    })
};

export const getMatchesForPageApi = async (page = 0) => {
  return firebase.database().ref('matches/')
    .limitToLast(DEFAULT_PAGE_SIZE)
    .once('value')
    .then(snapshot => {
      return snapshot.val();
    })
};
