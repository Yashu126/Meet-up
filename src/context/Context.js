import React from 'react'

const Context = React.createContext({
  isRegisterd: null,
  changeStatus: () => {},
  personName: '',
  inputName: () => {},
  topic: '',
  changeTopic: () => {},
  isError: false,
  showError: () => {},
})

export default Context
