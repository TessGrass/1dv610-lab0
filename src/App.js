import { useState } from 'react'
import StartPage from './pages/StartPage'
import GeneratePage from './pages/GeneratePage'
import './App.css';

function App() {
const [userFirstName, setUserFirstName] = useState('')
const [userLastName, setUserLastName] = useState('')
const [isUserNameValid, setIsUserNameValid] = useState(false)

const userNameHandler = (lastName, firstName) => {
  setUserFirstName(firstName)
  setUserLastName(lastName)
  setIsUserNameValid(true)
}


  return (
    <div>
      {isUserNameValid ? <GeneratePage firstName={userFirstName} lastName={userLastName} /> : <StartPage fullName={userNameHandler}/>}
    </div>
  );
}

export default App;
