import{dg as de,j9 as ee,ja as me,dp as C,dm as w,de as b,dk as Re,eK as Ae,jb as be,dG as pe,jc as Fe,jd as Ee,dq as Ne,je as L,jf as ge,aB as M,dd as F,b6 as Me,jg as q,jh as te,ji as K,jj as ne,dj as oe,ij as f,ii as I,cZ as D,jk as je,dQ as ie,df as O}from"./index-Cek7aMWl.js";import{i as ue}from"./Util-D3WFoRjI.js";function Q(n){return n?{ray:ee(n.ray),c0:n.c0,c1:n.c1}:{ray:ee(),c0:0,c1:Number.MAX_VALUE}}function ke(n,e=Q()){return me(n,e.ray),e.c0=0,e.c1=Number.MAX_VALUE,e}function Ke(n,e){return le(n,n.c0,e)}function Ve(n,e){return le(n,n.c1,e)}function le(n,e,t){return C(t,n.ray.origin,w(t,n.ray.direction,e))}new de(()=>Q());function Je(n){return n?[b(n[0]),b(n[1]),b(n[2]),b(n[3]),b(n[4]),b(n[5])]:[b(),b(),b(),b(),b(),b()]}function Se(){return[F(),F(),F(),F(),F(),F(),F(),F()]}function We(n,e){for(let t=0;t<Y;t++)Re(n[t],e[t]);return n}function Ue(n,e,t,o=He){const i=Ae(be.get(),e,n);pe(i,i);for(let r=0;r<xe;++r){const a=Fe(Ee.get(),Pe[r],i);Ne(o[r],a[0]/a[3],a[1]/a[3],a[2]/a[3])}Be(t,o)}function Be(n,e){L(e[s.FAR_BOTTOM_LEFT],e[s.NEAR_BOTTOM_LEFT],e[s.NEAR_TOP_LEFT],n[j.LEFT]),L(e[s.NEAR_BOTTOM_RIGHT],e[s.FAR_BOTTOM_RIGHT],e[s.FAR_TOP_RIGHT],n[j.RIGHT]),L(e[s.FAR_BOTTOM_LEFT],e[s.FAR_BOTTOM_RIGHT],e[s.NEAR_BOTTOM_RIGHT],n[j.BOTTOM]),L(e[s.NEAR_TOP_LEFT],e[s.NEAR_TOP_RIGHT],e[s.FAR_TOP_RIGHT],n[j.TOP]),L(e[s.NEAR_BOTTOM_LEFT],e[s.NEAR_BOTTOM_RIGHT],e[s.NEAR_TOP_RIGHT],n[j.NEAR]),L(e[s.FAR_BOTTOM_RIGHT],e[s.FAR_BOTTOM_LEFT],e[s.FAR_TOP_LEFT],n[j.FAR])}function y(n,e){for(let t=0;t<Y;t++){const o=n[t];if(o[0]*e[0]+o[1]*e[1]+o[2]*e[2]+o[3]>=e[3])return!1}return!0}function Xe(n,e){for(let t=0;t<Y;t++){const o=n[t];if(!ge(o,e))return!1}return!0}var j,s;(function(n){n[n.LEFT=0]="LEFT",n[n.RIGHT=1]="RIGHT",n[n.BOTTOM=2]="BOTTOM",n[n.TOP=3]="TOP",n[n.NEAR=4]="NEAR",n[n.FAR=5]="FAR"})(j||(j={})),function(n){n[n.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",n[n.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",n[n.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",n[n.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",n[n.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",n[n.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",n[n.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",n[n.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(s||(s={}));s.FAR_BOTTOM_RIGHT,s.NEAR_BOTTOM_RIGHT,s.NEAR_BOTTOM_LEFT,s.FAR_BOTTOM_LEFT,s.NEAR_BOTTOM_LEFT,s.NEAR_BOTTOM_RIGHT,s.NEAR_TOP_RIGHT,s.NEAR_TOP_LEFT,s.FAR_BOTTOM_RIGHT,s.FAR_BOTTOM_LEFT,s.FAR_TOP_LEFT,s.FAR_TOP_RIGHT,s.NEAR_BOTTOM_RIGHT,s.FAR_BOTTOM_RIGHT,s.FAR_TOP_RIGHT,s.NEAR_TOP_RIGHT,s.FAR_BOTTOM_LEFT,s.NEAR_BOTTOM_LEFT,s.NEAR_TOP_LEFT,s.FAR_TOP_LEFT,s.FAR_TOP_LEFT,s.NEAR_TOP_LEFT,s.NEAR_TOP_RIGHT,s.FAR_TOP_RIGHT;const Y=6,xe=8,Pe=[M(-1,-1,-1,1),M(1,-1,-1,1),M(1,1,-1,1),M(-1,1,-1,1),M(-1,-1,1,1),M(1,-1,1,1),M(1,1,1,1),M(-1,1,1,1)];new de(Q);const He=Se();class H{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(e,t){this.objectToBoundingSphere=e,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new u,this._objectCount=0,t&&(t.maximumObjectsPerNode!==void 0&&(this._maximumObjectsPerNode=t.maximumObjectsPerNode),t.maximumDepth!==void 0&&(this._maximumDepth=t.maximumDepth))}destroy(){this._degenerateObjects.clear(),u.clearPool(),X[0]=null,x.prune(),P.prune()}add(e,t=e.length){this._objectCount+=t,this._grow(e,t);const o=u.acquire();for(let i=0;i<t;i++){const r=e[i];this._isDegenerate(r)?this._degenerateObjects.add(r):(o.init(this._root),this._add(r,o))}u.release(o)}remove(e,t=null){this._objectCount-=e.length;const o=u.acquire();for(const i of e){const r=t??q(this.objectToBoundingSphere(i),Ce);$(r[3])?(o.init(this._root),Le(i,r,o)):this._degenerateObjects.delete(i)}u.release(o),this._shrink()}update(e,t){if(!$(t[3])&&this._isDegenerate(e))return;const o=ve(e);this.remove(o,t),this.add(o)}forEachAlongRay(e,t,o){const i=te(e,t);B(this._root,r=>{if(!ze(i,r))return!1;const a=r.node;return a.terminals.forAll(d=>{this._intersectsObject(i,d)&&o(d)}),a.residents!==null&&a.residents.forAll(d=>{this._intersectsObject(i,d)&&o(d)}),!0})}forEachAlongRayWithVerticalOffset(e,t,o,i){const r=te(e,t);B(this._root,a=>{if(!Ge(r,a,i))return!1;const d=a.node;return d.terminals.forAll(h=>{this._intersectsObjectWithOffset(r,h,i)&&o(h)}),d.residents!==null&&d.residents.forAll(h=>{this._intersectsObjectWithOffset(r,h,i)&&o(h)}),!0})}forEach(e){B(this._root,t=>{const o=t.node;return o.terminals.forAll(e),o.residents!==null&&o.residents.forAll(e),!0}),this._degenerateObjects.forEach(e)}forEachDegenerateObject(e){this._degenerateObjects.forEach(e)}findClosest(e,t,o,i=()=>!0,r=1/0){let a=1/0,d=1/0,h=null;const c=V(e,t),T=l=>{if(--r,!i(l))return;const m=this.objectToBoundingSphere(l);if(!y(o,m))return;const E=S(e,t,f(m)),z=E-m[3],_=E+m[3];z<a&&(a=z,d=_,h=l)};return re(this._root,l=>{if(r<=0||!y(o,l.bounds)||(w(p,c,l.halfSize),C(p,p,f(l.bounds)),S(e,t,p)>d))return!1;const m=l.node;return m.terminals.forAll(E=>T(E)),m.residents!==null&&m.residents.forAll(E=>T(E)),!0},e,t),h}forEachInDepthRange(e,t,o,i,r,a,d){let h=-1/0,c=1/0;const T={setRange:_=>{o===H.DepthOrder.FRONT_TO_BACK?(h=Math.max(h,_.near),c=Math.min(c,_.far)):(h=Math.max(h,-_.far),c=Math.min(c,-_.near))}};T.setRange(i);const l=S(t,o,e),m=V(t,o),E=V(t,-o),z=_=>{if(!d(_))return;const g=this.objectToBoundingSphere(_),G=f(g),Z=S(t,o,G)-l,Te=Z-g[3],Oe=Z+g[3];Te>c||Oe<h||!y(a,g)||r(_,T)};re(this._root,_=>{if(!y(a,_.bounds)||(w(p,m,_.halfSize),C(p,p,f(_.bounds)),S(t,o,p)-l>c)||(w(p,E,_.halfSize),C(p,p,f(_.bounds)),S(t,o,p)-l<h))return!1;const g=_.node;return g.terminals.forAll(G=>z(G)),g.residents!==null&&g.residents.forAll(G=>z(G)),!0},t,o)}forEachNode(e){B(this._root,t=>e(t.node,t.bounds,t.halfSize,t.depth))}forEachNeighbor(e,t){const o=K(t),i=f(t),r=h=>{const c=this.objectToBoundingSphere(h),T=K(c),l=o+T;return!(ie(f(c),i)-l*l<=0)||e(h)};let a=!0;const d=h=>{a&&(a=r(h))};B(this._root,h=>{const c=K(h.bounds),T=o+c;if(ie(f(h.bounds),i)-T*T>0)return!1;const l=h.node;return l.terminals.forAll(d),a&&l.residents!==null&&l.residents.forAll(d),a}),a&&this.forEachDegenerateObject(d)}_intersectsObject(e,t){const o=this.objectToBoundingSphere(t);return!(o[3]>0)||ne(o,e)}_intersectsObjectWithOffset(e,t,o){const i=this.objectToBoundingSphere(t);return!(i[3]>0)||ne(o.applyToBoundingSphere(i),e)}_add(e,t){t.advanceTo(this.objectToBoundingSphere(e))?t.node.terminals.push(e):(t.node.residents.push(e),t.node.residents.length>this._maximumObjectsPerNode&&t.depth<this._maximumDepth&&this._split(t))}_split(e){const t=e.node.residents;e.node.residents=null;for(let o=0;o<t.length;o++){const i=u.acquire().init(e);this._add(t.at(o),i),u.release(i)}}_grow(e,t){if(t!==0&&(se(e,t,o=>this.objectToBoundingSphere(o),N),$(N[3])&&!this._fitsInsideTree(N)))if(ce(this._root.node))q(N,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const o=this._rootBoundsForRootAsSubNode(N);this._placingRootViolatesMaxDepth(o)?this._rebuildTree(N,o):this._growRootAsSubNode(o),u.release(o)}}_rebuildTree(e,t){oe(f(W),f(t.bounds)),W[3]=t.halfSize,se([e,W],2,i=>i,U);const o=u.acquire().init(this._root);this._root.initFrom(null,U,U[3]),this._root.increaseHalfSize(1.25),B(o,i=>(this.add(i.node.terminals.data,i.node.terminals.length),i.node.residents!==null&&this.add(i.node.residents.data,i.node.residents.length),!0)),u.release(o)}_placingRootViolatesMaxDepth(e){const t=Math.log(e.halfSize/this._root.halfSize)*Math.LOG2E;let o=0;return B(this._root,i=>(o=Math.max(o,i.depth),o+t<=this._maximumDepth)),o+t>this._maximumDepth}_rootBoundsForRootAsSubNode(e){const t=e[3],o=e;let i=-1/0;const r=this._root.bounds,a=this._root.halfSize;for(let h=0;h<3;h++){const c=r[h]-a-(o[h]-t),T=o[h]+t-(r[h]+a),l=Math.max(0,Math.ceil(c/(2*a))),m=Math.max(0,Math.ceil(T/(2*a)))+1,E=2**Math.ceil(Math.log(l+m)*Math.LOG2E);i=Math.max(i,E),v[h].min=l,v[h].max=m}for(let h=0;h<3;h++){let c=v[h].min,T=v[h].max;const l=(i-(c+T))/2;c+=Math.ceil(l),T+=Math.floor(l);const m=r[h]-a-c*a*2;J[h]=m+(T+c)*a}const d=i*a;return J[3]=d*fe,u.acquire().initFrom(null,J,d,0)}_growRootAsSubNode(e){const t=this._root.node;oe(f(N),f(this._root.bounds)),N[3]=this._root.halfSize,this._root.init(e),e.advanceTo(N,null,!0),e.node.children=t.children,e.node.residents=t.residents,e.node.terminals=t.terminals}_shrink(){for(;;){const e=this._findShrinkIndex();if(e===-1)break;this._root.advance(e),this._root.depth=0}}_findShrinkIndex(){if(this._root.node.terminals.length!==0||this._root.isLeaf())return-1;let e=null;const t=this._root.node.children;let o=0,i=0;for(;i<t.length&&e==null;)o=i++,e=t[o];for(;i<t.length;)if(t[i++])return-1;return o}_isDegenerate(e){return!$(this.objectToBoundingSphere(e)[3])}_fitsInsideTree(e){const t=this._root.bounds,o=this._root.halfSize;return e[3]<=o&&e[0]>=t[0]-o&&e[0]<=t[0]+o&&e[1]>=t[1]-o&&e[1]<=t[1]+o&&e[2]>=t[2]-o&&e[2]<=t[2]+o}toJSON(){const{maximumDepth:e,maximumObjectsPerNode:t,_objectCount:o}=this,i=this._nodeToJSON(this._root.node);return{maximumDepth:e,maximumObjectsPerNode:t,objectCount:o,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:i}}}_nodeToJSON(e){var r,a;const t=e.children.map(d=>d?this._nodeToJSON(d):null),o=(r=e.residents)==null?void 0:r.map(d=>this.objectToBoundingSphere(d)),i=(a=e.terminals)==null?void 0:a.map(d=>this.objectToBoundingSphere(d));return{children:t,residents:o,terminals:i}}static fromJSON(e){const t=new H(o=>o,{maximumDepth:e.maximumDepth,maximumObjectsPerNode:e.maximumObjectsPerNode});return t._objectCount=e.objectCount,t._root.initFrom(e.root.node,e.root.bounds,e.root.halfSize,e.root.depth),t}}class u{constructor(){this.bounds=I(),this.halfSize=0,this.initFrom(null,null,0,0)}init(e){return this.initFrom(e.node,e.bounds,e.halfSize,e.depth)}initFrom(e,t,o,i=this.depth){return this.node=e??u.createEmptyNode(),t&&q(t,this.bounds),this.halfSize=o,this.depth=i,this}increaseHalfSize(e){this.halfSize*=e,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*fe}advance(e){let t=this.node.children[e];t||(t=u.createEmptyNode(),this.node.children[e]=t),this.node=t,this.halfSize/=2,this.depth++;const o=_e[e];return this.bounds[0]+=o[0]*this.halfSize,this.bounds[1]+=o[1]*this.halfSize,this.bounds[2]+=o[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(e,t,o=!1){for(;;){if(this.isTerminalFor(e))return t&&t(this,-1),!0;if(this.isLeaf()){if(!o)return t&&t(this,-1),!1;this.node.residents=null}const i=this._childIndex(e);t&&t(this,i),this.advance(i)}}isLeaf(){return this.node.residents!=null}isTerminalFor(e){return e[3]>this.halfSize/2}_childIndex(e){const t=this.bounds;return(t[0]<e[0]?1:0)+(t[1]<e[1]?2:0)+(t[2]<e[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new D({shrink:!0}),residents:new D({shrink:!0})}}static acquire(){return u._pool.acquire()}static release(e){u._pool.release(e)}static clearPool(){u._pool.prune()}}function B(n,e){let t=u.acquire().init(n);const o=[t];for(;o.length!==0;){if(t=o.pop(),e(t)&&!t.isLeaf())for(let i=0;i<t.node.children.length;i++)t.node.children[i]&&o.push(u.acquire().init(t).advance(i));u.release(t)}}function re(n,e,t,o=H.DepthOrder.FRONT_TO_BACK){let i=u.acquire().init(n);const r=[i];for(ye(t,o,he);r.length!==0;){if(i=r.pop(),e(i)&&!i.isLeaf())for(let a=7;a>=0;--a){const d=he[a];i.node.children[d]&&r.push(u.acquire().init(i).advance(d))}u.release(i)}}function Le(n,e,t){x.clear();const o=t.advanceTo(e,(i,r)=>{x.push(i.node),x.push(r)})?t.node.terminals:t.node.residents;if(o.removeUnordered(n),o.length===0)for(let i=x.length-2;i>=0&&Ie(x.data[i],x.data[i+1]);i-=2);}function Ie(n,e){return e>=0&&(n.children[e]=null),!!ce(n)&&(n.residents===null&&(n.residents=new D({shrink:!0})),!0)}function ze(n,e){return k(f(e.bounds),2*-e.halfSize,R),k(f(e.bounds),2*e.halfSize,A),ue(n.origin,n.direction,R,A)}function Ge(n,e,t){return k(f(e.bounds),2*-e.halfSize,R),k(f(e.bounds),2*e.halfSize,A),t.applyToMinMax(R,A),ue(n.origin,n.direction,R,A)}function ce(n){if(n.terminals.length!==0)return!1;if(n.residents!==null)return n.residents.length===0;for(let e=0;e<n.children.length;e++)if(n.children[e])return!1;return!0}function $e(n,e){n[0]=Math.min(n[0],e[0]-e[3]),n[1]=Math.min(n[1],e[1]-e[3]),n[2]=Math.min(n[2],e[2]-e[3])}function De(n,e){n[0]=Math.max(n[0],e[0]+e[3]),n[1]=Math.max(n[1],e[1]+e[3]),n[2]=Math.max(n[2],e[2]+e[3])}function k(n,e,t){t[0]=n[0]+e,t[1]=n[1]+e,t[2]=n[2]+e}function se(n,e,t,o){if(e===1){const i=t(n[0]);q(i,o)}else{R[0]=1/0,R[1]=1/0,R[2]=1/0,A[0]=-1/0,A[1]=-1/0,A[2]=-1/0;for(let i=0;i<e;i++){const r=t(n[i]);$(r[3])&&($e(R,r),De(A,r))}je(f(o),R,A,.5),o[3]=Math.max(A[0]-R[0],A[1]-R[1],A[2]-R[2])/2}}function ye(n,e,t){if(!P.length)for(let o=0;o<8;++o)P.push({index:0,distance:0});for(let o=0;o<8;++o){const i=_e[o];P.data[o].index=o,P.data[o].distance=S(n,e,i)}P.sort((o,i)=>o.distance-i.distance);for(let o=0;o<8;++o)t[o]=P.data[o].index}function V(n,e){let t,o=1/0;for(let i=0;i<8;++i){const r=S(n,e,ae[i]);r<o&&(o=r,t=ae[i])}return t}function S(n,e,t){return e*(n[0]*t[0]+n[1]*t[1]+n[2]*t[2])}function $(n){return!isNaN(n)&&n!==-1/0&&n!==1/0&&n>0}u._pool=new Me(u),function(n){var e;(e=n.DepthOrder||(n.DepthOrder={}))[e.FRONT_TO_BACK=1]="FRONT_TO_BACK",e[e.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(H||(H={}));const _e=[O(-1,-1,-1),O(1,-1,-1),O(-1,1,-1),O(1,1,-1),O(-1,-1,1),O(1,-1,1),O(-1,1,1),O(1,1,1)],ae=[O(-1,-1,-1),O(-1,-1,1),O(-1,1,-1),O(-1,1,1),O(1,-1,-1),O(1,-1,1),O(1,1,-1),O(1,1,1)],fe=Math.sqrt(3),X=[null];function ve(n){return X[0]=n,X}const J=I(),p=F(),R=F(),A=F(),x=new D,Ce=I(),N=I(),W=I(),U=I(),v=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],P=new D,he=[0,0,0,0,0,0,0,0],Qe=H;export{Je as H,Ue as L,We as N,Qe as Y,Q as a,Ke as b,j,Xe as m,Ve as p,ke as y};