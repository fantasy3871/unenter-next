import type { SVGProps } from 'react';

export default function MdiAlert(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2z"
      ></path>
    </svg>
  );
}
