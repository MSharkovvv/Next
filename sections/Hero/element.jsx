
function HeroElement() {
const imageUrl = './public/heroimg.png';

return(
    <>
    <div className="hero">
    <h1> Managed agency selection</h1>
     <p> Strengthen your onboarding process </p>
     
    <img className="hero-image" src= {imageUrl} alt="hero image"  />
    
        
    </div>
   </>

);

}
export default HeroElement