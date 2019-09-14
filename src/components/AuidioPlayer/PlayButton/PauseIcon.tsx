import React from 'react';

const PauseIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg width={28} height={28} fill="#ffffff" style={{ paddingTop: 4, paddingLeft: 4 }} {...props}>
    <path d="M11 22H7V2h4v20zm6-20h-4v20h4V2z" />
  </svg>
);

export default PauseIcon;
