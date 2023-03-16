import getTimelineData from "./getTimelineData";
import Timeline from "./TimelineDynamic";
import {workData, educationData} from "../components/data/timedata";



const TimeLineFactory = (data) => {

  const timelineMetaData = data.map((obj => getTimelineData(obj)));
  const timelineRender = timelineMetaData.map((obj) => (
    <Timeline key={obj.company} {...obj} />
    
    // ... is the spread operator. It takes all the properties of the object and spreads them out as props.
    // This is the same as: <PostPreview title={post.title} subtitle={post.subtitle} date={post.date} slug={post.slug} />
    // key is a special prop that React uses to identify which items have changed, are added, or are removed. It must be unique.
  ));
  return (
<div className="timeline col-span-2">
        <div>{timelineRender}   </div>
        </div>
  );
};

export const WorkTimeline = () => TimeLineFactory(workData);
export const EducationTimeline = () => TimeLineFactory(educationData)

// export default TimeLine; 