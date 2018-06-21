import React from 'react';
import data from '../../data';

class Holding extends React.Component {
  constructor() {
    super();
    this.state = {
      data
    };
  }

  render() {
    const { title, items, footer } = this.state.data.holding;
    return (
      <div className="absolute w-100 h-100 flex">
        <div className="flex flex-grow-1">
          <div className="flex-grow-1 flex flex-column pa3">
            <h1 className="ma0 _fs-title">
              {title}
              <br/>
              ↓
            </h1>
            <ul className="list ma0 pl0 pb4">
              { items.map((item) => {
                return (
                  <li key={item.title} className="_fs-title">
                    <a href={item.link} className="_c-black no-underline hover-moon-gray" target={item.target}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="_mt-auto">
              <p className="ma0 _fs-title">
                {footer}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Holding;
