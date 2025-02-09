import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`./about`)
  }
  return (
    <div>This is Home Component
      <br />
      <button onClick={handleClick}>Go to About</button>
    </div>
  )
}

export default Home