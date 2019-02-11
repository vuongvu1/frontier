
import firebase from 'firebase/app';
import 'firebase/database';

import { normalizeMatches } from 'utils/normalizeData';
import { DEFAULT_PAGE_SIZE } from 'constants/firebase';

export const getAllMatchesApi = async () =>
  normalizeMatches(
    firebase.database().ref('matches/')
      .once('value')
      .then(snapshot => {
        return snapshot.val();
      })
  );

const getMatchesByDefault = async () =>
  normalizeMatches(
    await firebase.database().ref('matches/')
      .orderByKey()
      .limitToLast(DEFAULT_PAGE_SIZE)
      .once('value')
      .then(snapshot => {
        return snapshot.val();
      })
  );

const getMatchesByKey = async (key) =>
  normalizeMatches(
    await firebase.database().ref('matches/')
      .orderByKey()
      .endAt(key)
      .limitToLast(DEFAULT_PAGE_SIZE + 1)
      .once('value')
      .then(snapshot => {
        return snapshot.val();
      })
  ).shift();

export const getMatchesByKeyApi = (key) =>
  key ? getMatchesByKey(key) : getMatchesByDefault();
