import React from 'react';
import PropTypes from 'prop-types';
import { DURATION_DROPPING_APPLE } from '../../config';
import './style.scss';

function Apple({ x, y, index }) {
  const appleStyle = {
    WebkitTransitionDuration: `${Math.floor(
      Math.random() * DURATION_DROPPING_APPLE
    )}ms`,
    transitionDuration: `${Math.floor(
      Math.random() * DURATION_DROPPING_APPLE
    )}ms`
  };
  return (
    <g
      id={`Apple-${index}`}
      className="drop-apple"
      transform={`translate(${x}, ${y})`}
      style={appleStyle}
    >
      <path
        d="M38.1132128,17.8919964 C38.1132128,20.2718016 37.7042558,22.8215929 36.6818635,25.031412 C36.0684281,26.5612867 35.0460358,28.0911615 33.819165,29.4510502 C32.5922942,30.6409528 31.3654234,31.4908832 29.7295956,32.1708275 C28.7072033,32.5107997 27.8892894,32.8507719 26.6624186,32.8507719 C26.0489832,32.8507719 25.4355478,32.8507719 25.0265909,32.8507719 C24.0041985,32.8507719 23.1862847,32.6807858 22.1638923,32.5107997 C20.7325431,32.1708275 19.3011938,31.6608693 17.8698445,30.8109388 C17.4608876,30.6409528 17.2564091,30.4709667 16.8474522,30.3009806 C16.8474522,30.3009806 16.6429737,30.4709667 16.6429737,30.4709667 C15.6205814,31.3208971 14.3937106,31.8308554 12.9623613,32.1708275 C11.939969,32.3408136 10.9175766,32.5107997 9.89518431,32.3408136 C7.85039964,32.1708275 6.01009344,31.6608693 4.3742657,30.6409528 C3.55635183,30.1309945 2.94291643,29.4510502 2.32948103,28.7711058 C1.3070887,27.5812032 0.693653295,26.2213146 0.489174827,24.6914398 C0.0802178934,23.3315511 -0.124260574,21.9716624 0.0802178934,20.6117737 C0.0802178934,18.5719407 0.489174827,16.5321077 1.10261023,14.4922747 C1.51156716,13.4723582 1.9205241,12.2824556 2.32948103,11.2625391 C2.73843796,10.5825947 3.1473949,9.90265039 3.55635183,9.39269214 C4.57874417,8.20278954 5.80561497,7.35285912 7.44144271,6.67291478 C8.46383504,6.16295652 9.69070584,5.99297044 10.7130982,5.99297044 C11.531012,5.99297044 12.5534044,6.16295652 13.1668398,6.50292869 C13.5757967,6.67291478 13.9847537,7.01288695 14.3937106,7.18287303 C14.8026675,7.5228452 15.2116245,7.86281737 15.6205814,8.20278954 C15.8250599,8.37277563 15.8250599,8.54276171 16.0295383,8.54276171 C16.0295383,8.7127478 16.2340168,8.7127478 16.2340168,8.88273388 C16.2340168,8.7127478 16.2340168,8.7127478 16.2340168,8.54276171 C16.2340168,8.03280346 16.4384953,7.69283129 16.8474522,7.35285912 C17.0519307,7.18287303 17.0519307,7.01288695 17.2564091,6.84290086 C17.8698445,6.16295652 18.2788015,5.65299827 19.0967153,5.14304001 C19.7101507,4.63308176 20.5280646,4.29310959 21.1415,3.95313742 C22.1638923,3.44317916 23.1862847,3.10320699 24.208677,2.93322091 C24.8221124,2.76323482 25.4355478,2.76323482 26.0489832,2.76323482 C28.5027248,2.59324874 30.5475095,3.27319308 32.3878157,4.63308176 C33.6146865,5.65299827 34.6370788,6.67291478 35.4549927,8.03280346 C36.2729066,9.39269214 36.886342,10.9225669 37.2952989,12.6224278 C37.4997774,13.4723582 37.7042558,14.3222886 37.7042558,15.3422051 C38.1132128,16.5321077 38.3176912,17.212052 38.1132128,17.8919964 Z"
        id="Path"
        fill="#B00923"
      />
      <path
        d="M19.9270073,0.841047993 C19.9270073,1.00290776 19.9270073,1.16476752 19.689781,1.32662728 C19.2153285,1.97406633 18.7408759,2.78336513 18.2664234,3.43080418 C17.5547445,4.56382251 16.8430657,5.69684085 16.6058394,6.99171894 C16.6058394,7.1535787 16.3686131,7.47729823 16.3686131,7.63915799 C16.1313869,7.80101775 16.1313869,7.96287751 15.8941606,8.12473727 C15.6569343,8.4484568 15.419708,8.93403608 15.1824818,9.25775561 C15.1824818,9.25775561 15.1824818,9.41961537 15.1824818,9.58147513 C15.1824818,9.58147513 15.1824818,9.58147513 15.1824818,9.58147513 C15.1824818,9.41961537 14.9452555,9.25775561 14.9452555,9.25775561 C14.9452555,8.93403608 14.9452555,8.61031656 14.9452555,8.28659703 C14.9452555,7.80101775 14.9452555,7.31543846 14.9452555,6.82985918 C14.9452555,5.0494018 15.1824818,3.59266394 16.1313869,1.97406633 C16.3686131,1.6503468 16.6058394,1.16476752 16.8430657,0.841047993 C17.080292,0.679188231 17.080292,0.51732847 17.3175182,0.355468708 C17.5547445,0.193608946 17.7919708,0.0317491844 18.2664234,0.0317491844 C18.5036496,0.0317491844 18.7408759,0.0317491844 18.7408759,0.0317491844 C19.4525547,-0.130110577 19.9270073,0.355468708 19.9270073,0.841047993 Z"
        id="Path"
        fill="#603914"
      />
    </g>
  );
}

Apple.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

export default Apple;
