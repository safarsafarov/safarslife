import React from 'react';

import './Tags.scss';

const tags = [
  'Node.js',
  'React.js',
  'ES6+',
  'Docker',
  'Mongodb',
  'Adobe xd',
  'Sketch',
];

const Tags = () => (
  <ul className="tags">
    {tags.map(tag => (
      <li>{tag}</li>
    ))}
  </ul>
);

export default Tags;
