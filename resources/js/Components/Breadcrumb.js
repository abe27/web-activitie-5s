import React from "react";

const Breadcrumb = ({ bcrumb }) => (
  <div className="text-sm breadcrumbs">
    <ul>
      {bcrumb && bcrumb.map(i => (
        <li key={i.name}>
          <a>{i.name}</a>
        </li>
      ))}
    </ul>
  </div>

);

export default Breadcrumb;
