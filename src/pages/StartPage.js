import { useState } from 'react'
import PrimaryButton from '../components/primary-button/PrimaryButton'
import './StartPage.css'

const StartPage = ({ fullName }) => {
  const [userFirstName, setUserFirstName] = useState('')
  const [userLastName, setUserLastName] = useState('')

  const buttonClickHandler = (event) => {
    event.preventDefault()
    fullName(userFirstName, userLastName)

  }

  const userFirstNameHandler = (event) => {
    event.preventDefault()
    console.log(event.target.name)
    setUserFirstName(event.target.value)
  }

  const userLastNameHandler = (event) => {
    event.preventDefault()
    console.log(event.target.name)
    setUserLastName(event.target.value)
  }


  return (
    <div className="startpage">
      <div className="name-form">
        <form>
          <label>Firstname</label>
            <input type="text" id="first" name="firstname" onChange={userLastNameHandler} />
          <label>Lastname</label>
            <input type="text" id="last" name="lastname" onChange={userFirstNameHandler} />
              <PrimaryButton buttonText="Take me to the ship" onClicked={buttonClickHandler} />
        </form>
      </div>
    </div>
  )
}

export default StartPage