import React, { useRef, useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../../stores/utils';

import './styles.css';

interface IProps {}

const ProgressBar = observer(function ProgressBarCmp(props: IProps) {
  const { currentPercentage, timeScroll } = useStore();
  const barRef = useRef<HTMLDivElement>(null);
  const controlRef = useRef<any>(null);

  useEffect(() => {
    const slider = barRef.current;
    if (!slider) {
      console.warn('cant find slider bar');
      return;
    }
  }, [barRef.current, controlRef.current]);

  const mouseMove = (e: any) => {
    if (!barRef.current) {
      console.warn('cant find scroll bar');
      return;
    }
    console.log(e);
    console.log('e.pageX ', e.pageX);
    console.log(barRef.current.offsetLeft);
    timeScroll(e.pageX - barRef.current.offsetLeft, barRef.current.offsetWidth);
  };

  const mouseUp = () => {
    window.removeEventListener('mousemove', mouseMove);
    window.removeEventListener('mouseup', mouseUp);
  };

  const mouseDown = () => {
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseup', mouseUp);
  };

  return (
    <div className="bar">
      <div className="bar__progress" ref={barRef} onClick={mouseMove}>
        <div
          className="bar__progress-inner"
          ref={controlRef}
          style={{ left: `${currentPercentage}%`, width: `${100 - currentPercentage}%` }}
          onMouseDown={mouseDown}
        >
          <div className="bar__progress-inner-control"></div>
        </div>
      </div>
    </div>
  );
});

export default ProgressBar;
