export const emailChange = (text) => {
  console.log('action:emailChange:text::', text)
  return {
    type: 'email_change',
    payload: text
  }
}
