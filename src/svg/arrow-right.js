import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default ({ size = 35, color }) => (
  <Svg height={size} width={size} viewBox='0 0 48 48' preserveAspectRatio='none'>
    <Path d='M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z' fill={color}/>
  </Svg>
);
