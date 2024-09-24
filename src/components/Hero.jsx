import { Link } from "react-router-dom";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <div className="hero bg-base-200 bg-blend-overlay">
    <div className="hero-content text-center">
      <div className="max-w-xl">
        <h1 className="text-6xl font-bold max-md:text-4xl text-accent-content">Best Food Delivery Of The Year!</h1>
        <p className="py-6 text-2xl max-md:text-lg text-accent-content">
        With easy ordering, fast delivery, and convenient payment options, we make sure your dining experience is seamless and satisfying. Whether you're craving comfort food, healthy options, or indulgent treats, we've got you covered. 
        </p>
        <Link to="/dishes" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white">Order Now</Link>
      </div>
    </div>
  </div>
  )
}

export default Hero