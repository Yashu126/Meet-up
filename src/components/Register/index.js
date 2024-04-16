import './index.css'
import Context from '../../context/Context'

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

const Register = props => (
  <Context.Consumer>
    {value => {
      const {
        personName,
        changeTopic,
        showError,
        isError,
        inputName,
        changeStatus,
      } = value
      const onChangeTopic = e => {
        changeTopic(e.target.value)
      }

      const onName = e => {
        inputName(e.target.value)
      }

      const submitForm = e => {
        e.preventDefault()
        if (personName === '') {
          showError()
        } else {
          changeStatus()
          const {history} = props
          history.replace('/')
        }
      }

      return (
        <div className="background-con">
          <nav className="nav-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </nav>
          <div className="register-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
              className="register-im"
            />
            <form className="form-con" onSubmit={submitForm}>
              <h1 className="from-head">Let us join</h1>
              <div className="label-input">
                <label className="label" htmlFor="name">
                  NAME
                </label>
                <input
                  className="inpt"
                  onChange={onName}
                  id="name"
                  type="text"
                  value={personName}
                  placeholder="Your name"
                />
              </div>
              <div className="label-input">
                <label className="label" htmlFor="topic">
                  TOPICS
                </label>
                <select className="inpt" onChange={onChangeTopic} id="topic">
                  {topicsList.map(each => (
                    <option key={each.id} value={each.id}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button className="register-btn" type="submit">
                Register Now
              </button>
              {isError && <p className="error">Please enter your name</p>}
            </form>
          </div>
        </div>
      )
    }}
  </Context.Consumer>
)

export default Register
