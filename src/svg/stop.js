import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default ({ size = 45, color }) => (
  <Svg height={size} width={size} viewBox='0 0 48 48' preserveAspectRatio='none'>
    <Path d='M12 12h24v24H12z' fill={color}/>
  </Svg>
);