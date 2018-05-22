import React from 'react';
import MediaQuery from 'react-responsive';
import Breakpoints from './Breakpoints';
import projectsData from '../data/projects';
import ThumbnailList from './ThumbnailList';
import ProjectsMedia from './ProjectsMedia';
import ProjectsList from './ProjectsList';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      project: null
    };
  }

  setProject = (key) => {
    const project = projectsData.items.filter(object => object.title === key);
    this.setState(() => {
      return {
        project: project[0] || null
      };
    });
  }

  clearProject = () => {
    this.setState(() => {
      return {
        project: null
      };
    });
  }

  render() {
    return (
      <div className="relative">
        <MediaQuery query={Breakpoints.small}>
          <ThumbnailList
            title={projectsData.title}
            links={projectsData.items}
          />
        </MediaQuery>
        <MediaQuery query={Breakpoints.medium}>
          <ProjectsMedia
            project={this.state.project}
            projects={projectsData.items}
          />
          <ProjectsList
            title={projectsData.title}
            projects={projectsData.items}
            footer={projectsData.footer}
            setProject={this.setProject}
            clearProject={this.clearProject}
          />
        </MediaQuery>
      </div>
    );
  }
}

export default Projects;
