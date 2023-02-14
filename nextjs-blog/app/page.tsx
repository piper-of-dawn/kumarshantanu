import Avatar from '../components/portrait'
import Navbar from '../components/navbar'
import Timeline from '../components/timeline'
import BlogPosts from '../components/blogPosts'
import aboutMetaData from '../components/aboutMetaData'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AOS from 'aos';


const about = (props: aboutMetaData) => {     
  return (
   <div className='grid grid-cols-1 xl:grid-cols-5 ml-auto mr-auto gap-9 pt-6 max-w-7xl'>

      <div className='sticky top-14 pr-4'>


      <div className="mr-0 w-50 h-50">        
        <Avatar/></div>
      <div className='pt-6'><Navbar/></div>
      </div>

      <div className='col-span-2'>
        <div className="name font-sans font-extralight text-huge">Kumar Shantanu</div>    
        
        <div className="about leading-6 pr-12">   
         <p className='text-normal font-semibold font-mono text-slate-900 mb-auto mt-auto pb-4 text-justify'> I'm a design-loving nerd, navigating the intersection of technology, mathematics and art, on this wild ride of figuring out the ways to do something meaningful. </p>
                <p className='text-normal font-semibold font-mono text-justify text-slate-500 row-start-2'>Econometrics and Time-Series Analysis are my craft and thus I hunt patterns and weave stories with data for a living. I speak Hindi and English to humans, while Python and Javascript to computers.  I am currently learning deep learning, financial engineering and to speak Polish and Rust. In my free time, I develop statistical/econometric models for credit loss forecasting at Union Bank of Switzerland (UBS).</p>

      </div></div>
     
      
      <div data-aos="fade-up"  className="timeline col-span-2">
      <div className="name font-mono font-bold text-normal uppercase tracking-wide pb-4 text-sky-900 ">Professional Journey</div>    
        
        <Timeline/></div>
      <div data-aos="fade-up" className='col-start-2 col-span-2 pr-12'>
      <div className="name font-sans text-big font-thin">Meditations</div> 
      <p className='text-normal font-semibold font-mono text-slate-500 mb-auto mt-auto pb-4 text-justify'>I'm a design-loving nerd, navigating the intersection of technology, mathematics and art, on this wild ride of figuring out the ways to do something meaningful.</p>
      

      </div>
      <div id="posts" className='col-span-2 col-start-2'> <BlogPosts/></div>
      </div>
    
   
  )}
 
export default about;

