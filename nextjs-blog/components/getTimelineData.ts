// import timelineData from './data/timedata';

const getTimelineData = (obj) => {
    return {
      period: obj.period,
      title: obj.title,
      company: obj.company,
      logo: obj.logo,
      location: obj.location,
      description: obj.description,
    }
}

// const processedData = getTimelineData(timelineData);
export default getTimelineData;