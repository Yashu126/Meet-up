import './index.css'
import {Link} from 'react-router-dom'
import Context from '../../context/Context'

const Home = () => (
  <Context.Consumer>
    {value => {
      const {personName, topic, isRegisterd} = value
      return (
        <div className="background-con">
          <nav className="nav-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </nav>
          <div className="home-con">
            {isRegisterd ? (
              <h1 className="hello-name">Hello {personName}</h1>
            ) : (
              <h1 className="welcome-head">Welcome to Meetup</h1>
            )}
            {isRegisterd ? (
              <p className="hello-topic">Welcome to {topic}</p>
            ) : (
              <p className="welcome-para">Please register for the topic</p>
            )}
            {isRegisterd ? null : (
              <Link to="/register">
                <button className="register-btn" type="button">
                  Register
                </button>
              </Link>
            )}
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
              className="meetup-img"
            />
          </div>
        </div>
      )
    }}
  </Context.Consumer>
)

export default Home
