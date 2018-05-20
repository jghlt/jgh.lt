import React from 'react';
import MediaQuery from 'react-responsive';
import Breakpoints from './Breakpoints';
import projectsData from '../data/projects';
import ThumbnailList from './ThumbnailList';
import ProjectsMedia from './ProjectsMedia';
import ProjectsList from './ProjectsList';

class Projects extends React.Component {
  static propTypes = {
  }

  state = {
  }

  componentDidMount() {
    console.log('Projects: componentDidMount');
  }

  componentDidUpdate() {
    console.log('Projects: componentDidUpdate');
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
            media={projectsData.items}
          />
          <ProjectsList
            title={projectsData.title}
            links={projectsData.items}
            footer={projectsData.footer}
          />
        </MediaQuery>
      </div>
    );
  }
}

export default Projects;
