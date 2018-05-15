import React from 'react';
import MediaQuery from 'react-responsive';
import Breakpoints from './Breakpoints';
import projectsData from '../data/projects';
import ThumbnailList from './ThumbnailList';
import MediGallery from './MediaGallery';
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
      <div className="Projects">
        <MediaQuery query={Breakpoints.small}>
          <ThumbnailList
            title={projectsData.title}
            links={projectsData.items}
          />
        </MediaQuery>
        <MediaQuery query={Breakpoints.medium}>
          <MediGallery
            images={projectsData.items}
          />
          <LinkList
            title={projectsData.title}
            links={projectsData.items}
          />
        </MediaQuery>
      </div>
    );
  }
}

export default Projects;
