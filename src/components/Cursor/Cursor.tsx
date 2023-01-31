import React from "react";
import { Spring, animated, interpolate } from "react-spring";

class Cursor extends React.Component<{}, { scale: any, mouse: any, transform: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      scale: false,
      mouse: {
        x: 0,
        y: 0,
      },
      transform: {
        from: {
          x: 0,
          y: 0,
        },
        to: {
          x: 0,
          y: 0,
        },
      },
    };
  }

  componentDidMount() {
    document.addEventListener("mousemove", this.handleMouseMove);
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.handleMouseMove);
  }

  setScale = (event: any) => {
    const { target } = event;
    const isLink = target && target.tagName.toLowerCase() === "a";
    if (this.state.scale) {
      if (!isLink) {
        this.setState(() => {
          return {
            scale: false,
          };
        });
      }
    }
    if (isLink) {
      this.setState(() => {
        return {
          scale: true,
        };
      });
    }
  };

  setTransform = (event: any) => {
    const mouseClientX = Math.round(event.clientX);
    const mouseClientY = Math.round(event.clientY);
    this.setState(() => {
      return {
        mouse: {
          x: mouseClientX,
          y: mouseClientY,
        },
        transform: {
          from: {
            x: this.state.mouse.x,
            y: this.state.mouse.y,
          },
          to: {
            x: mouseClientX,
            y: mouseClientY,
          },
        },
      };
    });
  };

  handleMouseOver = (event: any) => {
    const { target } = event;
    const isLink = target.tagName.toLowerCase() === "a";
    if (isLink) {
      this.setScale(1);
    }
  };

  handleMouseMove = (event: any) => {
    requestAnimationFrame(() => {
      this.setTransform(event);
      this.setScale(event);
    });
  };

  render() {
    const { scale, transform } = this.state;
    return (
      <Spring
        native
        from={{
          scale: scale ? 0.25 : 1.25,
          x: transform.from.x,
          y: transform.from.y,
        }}
        to={{
          scale: scale ? 1.25 : 0.25,
          x: transform.to.x,
          y: transform.to.y,
        }}
        config={{
          tension: 1000,
          friction: 40,
        }}
      >
        {({ scale, x, y }) => (
          <animated.div
            className="fixed flex flex-column items-center justify-center _o-cursor _u-wc-transform"
            style={{
              transform: interpolate(
                [x, y],
                (x, y) => `translateX(${x}px) translateY(${y}px)`
              ),
            }}
          >
            <animated.div
              className="_o-cursor-dot"
              style={{
                transform: interpolate([scale], (scale) => `scale(${scale})`),
              }}
            />
          </animated.div>
        )}
      </Spring>
    );
  }
}

export default Cursor;
