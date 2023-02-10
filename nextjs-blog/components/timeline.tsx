import Image from 'next/image'

const Timeline = () => {
  return (

<div className="timeline-container">

<div className="content">
<div className="time">2014-Present</div>
<div className="event border-l-2 border-slate-400 pl-4">
  <Image src="ubs.svg" alt="UBS Logo" width="70" height="70"/>
  <h4>Mortgage Stress Loss Model Developer (for CECL / IFRS-9 models)</h4>
  <h5>Union Bank of Switzerland (UBS)</h5>
  <p className="description">
   Made significant contributions to the development of the University of Washington's new website. Coded the website using HTML, CSS, and JavaScript. Learnt how to use the Bootstrap framework to create a responsive website. Also used the jQuery library to create a carousel and a modal.
</p>
</div>
</div>



  <div className="content">
  <div className="time">2014-2015</div>

  <div className="event border-l-2 border-slate-400 pl-4">
    <Image src="citi.svg" alt="Citi Logo" width="70" height="70"/>
    <h4>Mortgage Stress Loss Model Developer (for CECL / IFRS-9 models)</h4>
    <h5>Citibank</h5>
    <p className="description">
     Made significant contributions to the development of the University of Washington's new website. Coded the website using HTML, CSS, and JavaScript. Learnt how to use the Bootstrap framework to create a responsive website. Also used the jQuery library to create a carousel and a modal.
 
  </p>
  </div>
  </div>
</div>


    )}
export default Timeline;