import{ce as a,Q as c}from"./index-Cek7aMWl.js";function t(n,e,s){if(n.hasM==null||n.hasZ)for(const f of e)for(const o of f)o.length>2&&(o[2]*=s)}function u(n,e,s){if(!n&&!e||!s)return;const f=a(s);r(n,s,f),r(e,s,f)}function r(n,e,s){if(n)for(const f of n)l(f.geometry,e,s)}function l(n,e,s){if(!(n!=null&&n.spatialReference)||c(n.spatialReference,e))return;const f=a(n.spatialReference)/s;if(f!==1){if("x"in n)n.z!=null&&(n.z*=f);else if("rings"in n)t(n,n.rings,f);else if("paths"in n)t(n,n.paths,f);else if("points"in n&&(n.hasM==null||n.hasZ))for(const o of n.points)o.length>2&&(o[2]*=f)}}export{u as i};
