import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from './types';

export const emailChange = (text) => {
  console.log('action:emailChange:text::', text)
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChange = (text) => {
  console.log('action:passwordChange:text::', text)
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}
