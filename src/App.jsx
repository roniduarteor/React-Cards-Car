import Card from "./Cards/Cards"
import "./App.css"

import sedansImage from "../images/icon-sedans.svg"
import suvsImage from '../images/icon-suvs.svg'
import luxuryImage from '../images/icon-luxury.svg'

const App = () => {
  return(
    <>
    <section>
  <div className="cardsBox">
      <Card
      imageCar={sedansImage}
      title="SEDANS"
      text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      textButton="Learn More"
      color="hsl(31, 77%, 52%)"
      />

      <Card
      imageCar={suvsImage}
      title="SUVS"
      text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
      textButton="Learn More"
      color="hsl(184, 100%, 22%)"
      />

      <Card
      imageCar={luxuryImage}
      title="LUXURY"
      text="Cruise in the best car brands without the bloated prices. Enjoy the comfort of a luxury rental and arrive in style"
      textButton="Learn More"
      color="hsl(179, 100%, 13%)"
      />
</div>
</section>
    </>
  )
}

export default App