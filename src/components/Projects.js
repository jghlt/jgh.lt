import React from 'react';
import projectsData from '../data/projects';
import ThumbnailList from './ThumbnailList';
import LinkList from './LinkList';

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
      <div className="projects">
        <ThumbnailList
          title={projectsData.title}
          links={projectsData.items}
        />
        <LinkList
          title={projectsData.title}
          links={projectsData.items}
        />
      </div>
    );
  }
}

export default Projects;
