import moment from 'moment';

const DEFAULT_MATCH_DATE_FORMAT = 'dddd, MMMM DD, YYYY';

export const normalizeMatches = (matches) => (
  Object.keys(matches).map((key) => ({
    ...matches[key],
    key,
    time: moment(matches[key].time).format(DEFAULT_MATCH_DATE_FORMAT)
  }))
);
