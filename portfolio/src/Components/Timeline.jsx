import React from 'react'
import data from "../Assets/project.json"

const Timeline = () => {
    return (
        <>
            {/* <h2>Skills</h2> */}

            <div id='timeline'>

                <div className="timelineBox">
                    {
                        data.skills.map((item, index) => {
                            return (
                                <TimelineItem heading={item.skill}
                                    text={item.skill}
                                    index={index}
                                    key={item.id} />
                            )
                        })
                    }
                </div>
            </div>


        </>
    )
};



const TimelineItem = ({ heading, text, index }) => {
    return (
        <div className={`timelineItem ${index % 2 === 0 ? "leftTimelineleft" : "rightTimelineright"}`}>
            <div>
                <h3>
                    {heading}
                </h3>
                {/* <p>{text}</p> */}
            </div>
        </div>

    )
}




export default Timeline