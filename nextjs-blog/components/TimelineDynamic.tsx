import Image from 'next/image'
import { timeline } from './types/timelineInterface'

const Timeline = (props: timeline) => {
  return (

<div className="timeline-container">

<div className="content">
<div className="time">{props.period}</div>
<div className="event border-l-2 border-slate-400 pl-4">
  <div className="event-logo w-16 h-12 relative">
  <Image src={props.logo} alt= "Logo" fill={true} style={{objectFit: 'contain'}}/>
  </div>
  <h4>{props.title}</h4>
  <h5>{props.company}</h5>
  <p className="description">
{props.description}</p>
</div>
</div>
</div>
)}
export default Timeline;