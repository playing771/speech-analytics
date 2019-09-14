import React from 'react';

const PlayIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="#ffffff" style={{ paddingLeft: 4, paddingTop: 4 }} {...props}>
    <path d="M3 22V2l18 10L3 22z" />
  </svg>
);

export default PlayIcon;
