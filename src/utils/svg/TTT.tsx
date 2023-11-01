import * as React from 'react';
import Svg, { SvgProps, Path, Rect, Ellipse, Defs, Pattern, Use, Image } from 'react-native-svg';

import { memo } from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={340} height={121} fill="none" {...props}>
    <Rect width="340" height="121" fill="url(#pattern0)" />
    <Defs>
      <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <Use xlinkHref="#image0_31_6314" transform="matrix(0.00194553 0 0 0.00546677 0 -0.0849439)" />
      </Pattern>
      <Image
        id="image0_31_6314"
        width="514"
        height="214"
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);

export const Tech = memo(SvgComponent);