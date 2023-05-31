import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.47999 4.60694C3.64838 4.60694 4.59555 3.67669 4.59555 2.52916C4.59555 1.38164 3.64838 0.451385 2.47999 0.451385C1.31161 0.451385 0.364441 1.38164 0.364441 2.52916C0.364441 3.67669 1.31161 4.60694 2.47999 4.60694Z'
      fill='#397FE8'
    />
  </svg>
);
const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
