import { EMAIL_CHANGED } from './types';

export const emailChange = (text) => {
  console.log('action:emailChange:text::', text)
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}
