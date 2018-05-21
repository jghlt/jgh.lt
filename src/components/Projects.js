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
    project: null
  }

  componentDidMount() {
    console.log('Projects: componentDidMount');
    this.setState({
      project: null
    });
  }

  componentDidUpdate() {
    console.log('Projects: componentDidUpdate');
  }

  setProject = (key) => {
    console.log('Projects: setProject');
    const project = projectsData.items.filter((object) => {
      return object.title === key;
    });
    this.setState({
      project: project[0] || null
    });
  }

  clearProject = () => {
    console.log('Projects: clearProject');
    this.setState({
      project: null
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
