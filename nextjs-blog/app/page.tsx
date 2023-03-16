import Avatar from '../components/portrait'
import SkillStack from '../components/skillstack'
import BlogPosts from '../components/blogPosts'
import Problems from '../components/problems'
import {WorkTimeline,EducationTimeline} from '../components/workTimeline'





const about = () => {     
  return (
    
    <div className='flex-col lg:grid grid-cols-5 ml-auto mr-auto gap-9 pt-6 max-w-7xl'>

   
      <div id="LeftSide" className='relative xl:sticky pr-4 mx-auto'>
        <Avatar />
        <div className='pl-8 pr-8 pt-4 hidden lg:flex'><SkillStack /></div>
      </div>

      <div id="AboutSection" className='pl-8 pr-8 md:col-span-2 md:pl-4 md:pr-4'>

        <div className="about leading-6 p-14 md:pr-8 pt-6 pl-8">
          <div> <div className="font-sans font-light text-center text-verylarge text-slate-700 xl:text-left">Hi I'm </div><p className='font-normal text-verylarge text-center text-slate-700 xl:text-left mt-5 mb-5'>Kumar Shantanu</p></div>
          <p className='text-normal font-semibold font-mono text-slate-900 mb-auto mt-auto pb-4 text-justify'> I'm a design-loving nerd, navigating the intersection of technology, mathematics and art, on this wild ride of figuring out the ways to do something meaningful. </p>
          <p className='text-normal font-semibold font-mono text-justify text-slate-500 row-start-2'>Econometrics and Time-Series Analysis are my craft and thus I hunt patterns and weave stories with data for a living. I speak Hindi and English to humans, while Python and Javascript to computers.  I am currently learning deep learning, financial engineering and to speak Polish and Rust. In my free time, I develop statistical/econometric models for credit loss forecasting at Union Bank of Switzerland (UBS).</p>
        </div>
     
      <div className='lg:pt-6 pl-8 pr-8'><Problems/></div>   
      
      </div>

      <div className='pl-8 pr-8 mb-6 md:hidden xl:sticky pt-6'><SkillStack/></div>  
 
      <div id="posts" className='mb-6 md:col-span-2'>
        <div className="ml-12 mr-12 font-mono font-medium text-normal text-center mx-auto uppercase tracking-wide p-4 text-sky-900 border-t border-b pt-6 dark:border-slate-800 mb-5">Meditations</div> 
        <BlogPosts/>
        </div>
     
 <div className="timeline col-span-2 col-start-2 pl-8 pr-8">
<div className="name font-mono font-medium text-normal text-center mx-auto uppercase tracking-wide p-4 text-sky-900 border-t border-b pt-6 dark:border-slate-800 mb-5">Professional Journey</div>    
  
  
   <WorkTimeline/></div>
 <div className="timeline col-span-2 pl-8 pr-8"> 
<div className="name font-mono font-medium text-normal text-center mx-auto uppercase tracking-wide p-4 text-sky-900 border-t border-b pt-6 dark:border-slate-800 mb-5">Formal Education</div>    
 
 <EducationTimeline/></div>
      </div>

  )}
 
export default about;

