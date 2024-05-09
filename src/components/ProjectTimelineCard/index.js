// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  // console.log(props)
  const {projectDetails} = props
  const {imageUrl, projectTitle, description, projectUrl, duration} =
    projectDetails
  return (
    <div className="projects-card-container">
      <img className="project-image" src={imageUrl} alt="project" />
      <div className="project-title-duration-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="calander-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="visit-link">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
