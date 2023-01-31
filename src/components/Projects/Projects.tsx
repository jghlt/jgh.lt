// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import ProjectsList from "./ProjectsList";
import ProjectsMedia from "./ProjectsMedia";

class Projects extends React.Component<{items: any, title: any, footer: any }, { project: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      project: null,
    };
  }

  setProject = (key: any) => {
    const project = this.props.items.filter((object: any) => object.title === key);
    this.setState(() => {
      return {
        project: project[0] || null,
      };
    });
  };

  clearProject = () => {
    this.setState(() => {
      return {
        project: null,
      };
    });
  };

  render() {
    const { title, items, footer } = this.props;
    return (
      <div className="relative">
        <ProjectsMedia items={items} project={this.state.project} />
        <ProjectsList
          title={title}
          items={items}
          footer={footer}
          setProject={this.setProject}
          clearProject={this.clearProject}
        />
      </div>
    );
  }
}

Projects.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      target: PropTypes.string.isRequired,
    })
  ).isRequired,
  footer: PropTypes.string.isRequired,
};

export default Projects;
