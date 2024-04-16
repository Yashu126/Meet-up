import './App.css'
import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import Context from './context/Context'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class App extends Component {
  state = {
    isRegisterd: false,
    personName: '',
    topic: 'Arts and Culture',
    isError: false,
  }

  changeStatus = () => {
    this.setState(prev => ({isRegisterd: !prev.isRegisterd}))
  }

  inputName = n => {
    this.setState({personName: n})
  }

  changeTopic = topic => {
    const selectTopic = topicsList.filter(each => each.id === topic)
    this.setState({topic: selectTopic[0].displayText})
  }

  showError = () => {
    this.setState({isError: true})
  }

  render() {
    const {isRegisterd, isError, personName, topic} = this.state
    return (
      <Context.Provider
        value={{
          isRegisterd,
          personName,
          inputName: this.inputName,
          changeStatus: this.changeStatus,
          topic,
          changeTopic: this.changeTopic,
          isError,
          showError: this.showError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Context.Provider>
    )
  }
}
export default App
