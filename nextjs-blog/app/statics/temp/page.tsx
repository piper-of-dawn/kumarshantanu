import Avatar from '../../../components/portrait'
import Navbar from "../../../components/navbar"
const about = () => {     
  return (
     

      
          <div className="container font-mono break-words text-justify">
  <div className="photo"><Avatar/></div>
  <div className="name font-sans font-thin">Kumar Shantanu</div>
  
  <Navbar/>
  <div className="about leading-6">   
   <p className='text-normal font-semibold text-slate-900 mb-auto mt-auto pb-4'>   I'm a design-loving nerd, navigating the intersection of technology, mathematics and art, on this wild ride of figuring out the ways to do something meaningful.</p>
          <p className='text-normal font-semibold text-slate-500 row-start-2'>  I weave stories with data and have learnt some Economics in college. I speak Hindi and English to humans, but when it comes to computers, I speak Python and Javascript fluently.  I am currently learning deep learning, financial engineering and to speak Polish and Rust. In my free time, I develop statistical/econometric models for credit loss forecasting at Union Bank of Switzerland (UBS).</p>
</div>
  
  <div className="timeline"></div>
</div>
    
)};
export default about;
