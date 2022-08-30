import { useState } from 'react'
import Coin from '../components/coin/Coin'
import Title from '../components/title/Title'
import PrimaryButton from '../components/primary-button/PrimaryButton'
import PirateFirstName from '../constants/PirateFirstName'
import PirateLastName from '../constants/PirateLastName'
import TaskOnBoard from '../constants/TaskOnBoard'
import Randomizer from '../components/randomizer/Randomizer'
import './GeneratePage.css'


const GeneratePage = ({ firstName, lastName }) => {
  const [firstNamePirate, setfirstNamePirate] = useState('')
  const [lastNamePirate, setLastNamePirate] = useState('')

  const firstLetter = firstName.charAt(0).toUpperCase()
  const lastLetter = lastName.charAt(0).toUpperCase()
  
  const buttonClickedHandler = (event) => {
    event.preventDefault()

    const getEntriesFirstName = PirateFirstName.entries()
    const getEntriesLastName = PirateLastName.entries()

    for (const [key, value] of getEntriesFirstName) {
      console.log(key)
      if (key === firstLetter) {
        setfirstNamePirate(value)
        for (const [key, value] of getEntriesLastName) {
          if (key === lastLetter) {
            setLastNamePirate(value)   
          }
        } 
       }
      }
    } 
  

  return (
    <div className="generate-page">  
        <Coin />
        <Title title={'Arrr! Welcome onboard the Drunken Squid ' + firstName + ' ' + lastName} />
          <p className="p-text-generate-page">There is a rumour saying that you want to sail with the most fearsome pirates that'll ever existed? 
            If this rumor is true you must change your sad landlubber name in order to conquer the Sea! (or die trying). Click on the button to generate 
            your new pirate name!
          </p>
    <div>
      {firstNamePirate ? 
        <p className="p-text-generate-page">{firstName}, you will from now on be known as: {''}
        {firstNamePirate} {lastNamePirate}.<br />Your roll onboard the Drunken Squid will be: <Randomizer items={TaskOnBoard} /></p> : null}
    </div>
    <form>
        <PrimaryButton buttonText={'Click to generate'} onClicked={buttonClickedHandler} />
    </form>
  </div>
  )
}

export default GeneratePage