import moment from 'moment'

export function toDate(stamp) {
  return moment(stamp).format('YYYY-MM-DD')
}
