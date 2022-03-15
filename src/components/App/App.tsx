import React from "react";
import MediaQuery from "react-responsive";
import Cursor from "components/Cursor";
import ScrollSpy from "components/ScrollSpy";
import ThumbnailsList from "components/Thumbnails/ThumbnailsList";
import ThumbnailsGrid from "components/Thumbnails/ThumbnailsGrid";
import Projects from "components/Projects";
import Contact from "components/Contact";
import config from "config/config";
import data from "config/data";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data,
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
