
const Randomizer = ({ items }) => {
  
  return items[Math.floor(Math.random()*items.length)]

}

export default Randomizer