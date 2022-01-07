import React from 'react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const childrenItem = (children, handleClick) => {
  if (children) {
    return (children.map(x => (
      <li key={x.title} onClick={handleClick}>
        <a id={x.name} rel={x.ele}>
          <ChevronRightIcon />
          {x.title}
        </a>
      </li>
    )));
  }
}

const menuItem = (i, handleClick) => (
  <section key={i.name}>
    <li className="menu-title">
      <span>
        {i.title}
      </span>
    </li>
    {childrenItem(i.children, handleClick)}
  </section>
);

const TabMenu = ({ menu, handleClick }) => (
  <ul className="menu p-4 shadow bg-base-100 rounded-box">
    {menu && menu.map(i => menuItem(i, handleClick))}
  </ul>
);

export default TabMenu;
