import './hero.css';
import heroimg from './../../assets/img/heroimg.png'

const Hero = () => {
  return (
    <div className='div hero'>
      <div className = 'hero_img_container'>
        <img src={heroimg} />
      </div>
      <div className='hero_heading_container'>
        <h3>Welcome To</h3>
        <h1>Kharche</h1>
      </div>
      <div className='hero_btn_container'>
        <button className='selected'>Register</button>
        <button>Sign In</button>
      </div>
    </div>
  )
}



export default Hero;
