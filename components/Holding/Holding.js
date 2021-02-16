import React from 'react'
import data from '../data'
import config from '../config'
import dynamic from 'next/dynamic'
const Cursor = dynamic(() => import('../Cursor/Cursor'))

class Holding extends React.Component {
  constructor() {
    super();
    this.state = {
      data
    };
  }

  render() {
    const { 
      title,
      lead,  
      footer 
    } = this.state.data.holding;
    const { 
      breakpoints 
    } = config;
    return (
      <div className="absolute w-100 h-100 flex">
        <Cursor/>
        <div className="flex flex-grow-1">
          <div className="flex-grow-1 flex flex-column pa3">
            <h1 className="ma0 _fs-title-holding">
              {title}
              <br/>
              <span dangerouslySetInnerHTML={{__html: lead }} />
            </h1>
            <div className="_mt-auto">
              <p className="ma0 _fs-title-holding">
                {footer.title}
              </p>
              <ul className="list ma0 pl0 pb4">
              { footer.items.map((item) => {
                return (
                  <li 
                    key={item.title} 
                    className="_fs-title-holding"
                  >
                    <a 
                      href={item.link} 
                      className="_c-black no-underline hover-moon-gray" 
                      target={item.target}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Holding;
