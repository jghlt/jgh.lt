import React from 'react';
import MediaQuery from 'react-responsive';
import Cursor from '../Cursor/Cursor';
import ScrollSpy from '../ScrollSpy/ScrollSpy';
import ThumbnailsList from '../Thumbnails/ThumbnailsList';
import ThumbnailsGrid from '../Thumbnails/ThumbnailsGrid';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import config from '../config';
import data from '../data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data
    };
  }

  render() {
    const { data } = this.state;
    const { breakpoints } = config;
    return (
      <div>
        <MediaQuery query={breakpoints.small}>
          <ThumbnailsList {...data.projects} />
          <Contact {...data.contact} />
        </MediaQuery>
        <MediaQuery query={breakpoints.medium}>
          <ThumbnailsGrid {...data.projects} />
          <Contact {...data.contact} />
        </MediaQuery>
        <MediaQuery query={breakpoints.desk}>
          <Cursor />
          <ScrollSpy>
            <Projects {...data.projects} />
            <Contact {...data.contact} />
          </ScrollSpy>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
