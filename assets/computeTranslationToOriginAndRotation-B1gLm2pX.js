import{dH as S,hO as h,hP as i,hQ as u,hR as s,Q as O,hS as f,hT as c,hU as N,e1 as M,dd as e}from"./index-Cek7aMWl.js";function P(C,L,t){const R=Math.sin(C),r=Math.cos(C),E=Math.sin(L),o=Math.cos(L),n=t;return n[0]=-R,n[4]=-E*r,n[8]=o*r,n[12]=0,n[1]=r,n[5]=-E*R,n[9]=o*R,n[13]=0,n[2]=0,n[6]=o,n[10]=E,n[14]=0,n[3]=0,n[7]=0,n[11]=0,n[15]=1,n}function T(C,L,t){return P(C,L,t),S(t,t),t}function H(C,L,t,R){if(C==null||R==null)return!1;const r=h(C,i),E=h(R,u);if(r===E&&!_(E)&&(r!==s.UNKNOWN||O(C,R)))return f(t,L),!0;if(_(E)){const o=c[r][s.LON_LAT],n=c[s.LON_LAT][E];return o!=null&&n!=null&&(o(L,0,A,0),n(A,0,a,0),P(l*A[0],l*A[1],t),t[12]=a[0],t[13]=a[1],t[14]=a[2],!0)}if(!(E!==s.WEB_MERCATOR&&E!==s.PLATE_CARREE&&E!==s.WGS84&&E!==s.CGCS2000||r!==s.WGS84&&r!==s.SPHERICAL_ECEF&&r!==s.WEB_MERCATOR&&r!==s.CGCS2000)){const o=c[r][s.LON_LAT],n=c[s.LON_LAT][E];return o!=null&&n!=null&&(o(L,0,A,0),n(A,0,a,0),r===s.SPHERICAL_ECEF?T(l*A[0],l*A[1],t):N(t),t[12]=a[0],t[13]=a[1],t[14]=a[2],!0)}return!1}function _(C){return C===s.SPHERICAL_ECEF||C===s.SPHERICAL_MARS_PCPF||C===s.SPHERICAL_MOON_PCPF}const l=M(1),A=e(),a=e();export{P as n,H as u};
