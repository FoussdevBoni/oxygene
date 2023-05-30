import React from 'react';
import { services } from '../../data-center/data';
import { NavLink } from 'react-router-dom';

function Services(props) {
    return (
    <div>
          <div className="dropdown-panel">
              {services.map((element) => {
                return (
                  <ul className="dropdown-panel-list" key={element.category}>
                    <li className="menu-title">
                      <NavLink href="#">{element.category}</NavLink>
                    </li>
                    {element.services.map((e) => {
                      return (
                        <li className="panel-list-item" key={e}>
                          <a href="#">{e}</a>
                        </li>
                      )
                    })}
                  </ul>
                )
              })}
            </div>
    </div>
    );
}

export default Services;