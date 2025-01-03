import{e as me}from"./deduplicate-BRGImMLi.js";import{H as F}from"./InterleavedLayout-DapSkrn-.js";import{e as c}from"./VertexAttribute-BnAa5VW0.js";import{t as Y}from"./glUtil-C6KhMg1m.js";import{dd as w,cZ as ee,dt as Ie,dq as k,dj as oe,dy as K,dx as Oe,dw as Se,e5 as fe,dD as re,dN as de,e1 as pe,dp as Ae,kl as Ee}from"./index-Cek7aMWl.js";import{s as j}from"./Normals-CaeqCbr7.js";const we=F().vec3f(c.POSITION).u16(c.COMPONENTINDEX).freeze(),Te=F().vec2u8(c.SIDENESS).freeze();Y(Te);const J=F().vec3f(c.POSITION0).vec3f(c.POSITION1).vec2i16(c.NORMALCOMPRESSED).u16(c.COMPONENTINDEX).u8(c.VARIANTOFFSET,{glNormalized:!0}).u8(c.VARIANTSTROKE).u8(c.VARIANTEXTENSION,{glNormalized:!0}).freeze(),Z=F().vec3f(c.POSITION0).vec3f(c.POSITION1).vec2i16(c.NORMALCOMPRESSED).vec2i16(c.NORMAL2COMPRESSED).u16(c.COMPONENTINDEX).u8(c.VARIANTOFFSET,{glNormalized:!0}).u8(c.VARIANTSTROKE).u8(c.VARIANTEXTENSION,{glNormalized:!0}).freeze();c.POSITION0,c.POSITION1,c.COMPONENTINDEX,c.VARIANTOFFSET,c.VARIANTSTROKE,c.VARIANTEXTENSION,c.NORMALCOMPRESSED,c.NORMAL2COMPRESSED,c.SIDENESS;class ve{constructor(){this.position0=w(),this.position1=w(),this.faceNormal0=w(),this.faceNormal1=w(),this.componentIndex=0,this.cosAngle=0}}const W=-1;function ye(e,n,s){const r=e.vertices.position,a=e.vertices.componentIndex,f=m.position0,g=m.position1,h=m.faceNormal0,S=m.faceNormal1,{edges:i,normals:d}=$e(e),I=i.length/4,A=n.allocate(I);let $=0;const z=I,T=s==null?void 0:s.allocate(z);let B=0,t=0,o=0;b.length=0;for(let p=0;p<I;++p){const y=4*p;r.getVec(i.data[y],f),r.getVec(i.data[y+1],g);const x=b.pushNew();x.index=4*p,x.length=Ie(f,g)}b.sort((p,y)=>y.length-p.length);const u=new Array,l=new Array;b.forAll(({length:p,index:y})=>{const x=i.data[y],Ne=i.data[y+1],te=i.data[y+2],ne=i.data[y+3],se=ne===W;if(r.getVec(x,f),r.getVec(Ne,g),se){const E=3*te;k(h,d.data[E],d.data[E+1],d.data[E+2]),oe(S,h),m.componentIndex=a.get(x),m.cosAngle=K(h,S)}else{let E=3*te;if(k(h,d.data[E],d.data[E+1],d.data[E+2]),E=3*ne,k(S,d.data[E],d.data[E+1],d.data[E+2]),m.componentIndex=a.get(x),m.cosAngle=K(h,S),Pe(m,De))return;m.cosAngle<-.9999&&oe(S,h)}t+=p,o++,se||Me(m,Ce)?(n.write(A,$++,m),u.push(p)):Re(m,ge)&&(T&&s&&s.write(T,B++,m),l.push(p))});const O=new Float32Array(u.reverse()),v=new Float32Array(l.reverse()),M=T&&s?{instancesData:T.slice(0,B),lodInfo:{lengths:v}}:void 0;return{regular:{instancesData:A.slice(0,$),lodInfo:{lengths:O}},silhouette:M,averageEdgeLength:t/o}}function Me(e,n){return e.cosAngle<n}function Pe(e,n){return e.cosAngle>n}function Re(e,n){const s=Oe(e.cosAngle);return Se(ie,e.position1,e.position0),s*(K(fe(xe,e.faceNormal0,e.faceNormal1),ie)>0?-1:1)>n}function $e(e){const n=e.faces.length/3,s=e.faces,r=e.neighbors,a=e.vertices.position;N.length=q.length=0;for(let f=0;f<n;f++){const g=3*f,h=r[g],S=r[g+1],i=r[g+2],d=s[g],I=s[g+1],A=s[g+2];a.getVec(d,V),a.getVec(I,_),a.getVec(A,X),re(_,_,V),re(X,X,V),fe(V,_,X),de(V,V),q.pushArray(V),(h===W||d<I)&&(N.push(d),N.push(I),N.push(f),N.push(h)),(S===W||I<A)&&(N.push(I),N.push(A),N.push(f),N.push(S)),(i===W||A<d)&&(N.push(A),N.push(d),N.push(f),N.push(i))}return{edges:N,normals:q}}class Ve{constructor(){this.index=0,this.length=0}}const b=new ee({allocator:e=>e||new Ve,deallocator:null}),N=new ee({deallocator:null}),q=new ee({deallocator:null}),m=new ve,xe=w(),ie=w(),V=w(),_=w(),X=w(),ge=pe(4),De=Math.cos(ge),Le=pe(35),Ce=Math.cos(Le);function ae(e,n,s){const r=n/3,a=new Uint32Array(s+1),f=new Uint32Array(s+1),g=(t,o)=>{t<o?a[t+1]++:f[o+1]++};for(let t=0;t<r;t++){const o=e[3*t],u=e[3*t+1],l=e[3*t+2];g(o,u),g(u,l),g(l,o)}let h=0,S=0;for(let t=0;t<s;t++){const o=a[t+1],u=f[t+1];a[t+1]=h,f[t+1]=S,h+=o,S+=u}const i=new Uint32Array(6*r),d=a[s],I=(t,o,u)=>{if(t<o){const l=a[t+1]++;i[2*l]=o,i[2*l+1]=u}else{const l=f[o+1]++;i[2*d+2*l]=t,i[2*d+2*l+1]=u}};for(let t=0;t<r;t++){const o=e[3*t],u=e[3*t+1],l=e[3*t+2];I(o,u,t),I(u,l,t),I(l,o,t)}const A=(t,o)=>{const u=2*t,l=o-t;for(let O=1;O<l;O++){const v=i[u+2*O],M=i[u+2*O+1];let p=O-1;for(;p>=0&&i[u+2*p]>v;p--)i[u+2*p+2]=i[u+2*p],i[u+2*p+3]=i[u+2*p+1];i[u+2*p+2]=v,i[u+2*p+3]=M}};for(let t=0;t<s;t++)A(a[t],a[t+1]),A(d+f[t],d+f[t+1]);const $=new Int32Array(3*r),z=(t,o)=>t===e[3*o]?0:t===e[3*o+1]?1:t===e[3*o+2]?2:-1,T=(t,o)=>{const u=z(t,o);$[3*o+u]=-1},B=(t,o,u,l)=>{const O=z(t,o);$[3*o+O]=l;const v=z(u,l);$[3*l+v]=o};for(let t=0;t<s;t++){let o=a[t];const u=a[t+1];let l=f[t];const O=f[t+1];for(;o<u&&l<O;){const v=i[2*o],M=i[2*d+2*l];v===M?(B(t,i[2*o+1],M,i[2*d+2*l+1]),o++,l++):v<M?(T(t,i[2*o+1]),o++):(T(M,i[2*d+2*l+1]),l++)}for(;o<u;)T(t,i[2*o+1]),o++;for(;l<O;)T(i[2*d+2*l],i[2*d+2*l+1]),l++}return $}const H=.7;let he=class{updateSettings(n){this.settings=n,this._edgeHashFunction=n.reducedPrecision?ze:Fe}write(n,s,r){U.seed=this._edgeHashFunction(r);const a=U.getIntRange(0,255),f=U.getIntRange(0,this.settings.variants-1),g=U.getFloat(),h=255*(.5*Be(-(1-Math.min(g/H,1))+Math.max(0,g-H)/(1-H),1.2)+.5);n.position0.setVec(s,r.position0),n.position1.setVec(s,r.position1),n.componentIndex.set(s,r.componentIndex),n.variantOffset.set(s,a),n.variantStroke.set(s,f),n.variantExtension.set(s,h)}};const P=new Float32Array(6),R=new Uint32Array(P.buffer),C=new Uint32Array(1);function Fe(e){return P[0]=e.position0[0],P[1]=e.position0[1],P[2]=e.position0[2],P[3]=e.position1[0],P[4]=e.position1[1],P[5]=e.position1[2],C[0]=31*(31*(31*(31*(31*(166811+R[0])+R[1])+R[2])+R[3])+R[4])+R[5],C[0]}function ze(e){const n=P;n[0]=D(e.position0[0]),n[1]=D(e.position0[1]),n[2]=D(e.position0[2]),n[3]=D(e.position1[0]),n[4]=D(e.position1[1]),n[5]=D(e.position1[2]),C[0]=5381;for(let s=0;s<R.length;s++)C[0]=31*C[0]+R[s];return C[0]}const ce=1e4;function D(e){return Math.round(e*ce)/ce}function Be(e,n){return Math.abs(e)**n*Math.sign(e)}class G{constructor(){this._commonWriter=new he}updateSettings(n){this._commonWriter.updateSettings(n)}allocate(n){return J.createBuffer(n)}write(n,s,r){this._commonWriter.write(n,s,r),Ae(L,r.faceNormal0,r.faceNormal1),de(L,L);const{typedBuffer:a,typedBufferStride:f}=n.normalCompressed;j(a,s,L[0],L[1],L[2],f)}}G.Layout=J,G.glLayout=Y(J,1);class Q{constructor(){this._commonWriter=new he}updateSettings(n){this._commonWriter.updateSettings(n)}allocate(n){return Z.createBuffer(n)}write(n,s,r){this._commonWriter.write(n,s,r);{const{typedBuffer:a,typedBufferStride:f}=n.normalCompressed;j(a,s,r.faceNormal0[0],r.faceNormal0[1],r.faceNormal0[2],f)}{const{typedBuffer:a,typedBufferStride:f}=n.normal2Compressed;j(a,s,r.faceNormal1[0],r.faceNormal1[1],r.faceNormal1[2],f)}}}Q.Layout=Z,Q.glLayout=Y(Z,1);const L=w(),U=new Ee;function je(e){const n=be(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return le.updateSettings(e.writerSettings),ue.updateSettings(e.writerSettings),ye(n,le,ue)}function be(e,n,s,r){if(n){const g=ae(s,r,e.count);return new _e(s,r,g,e)}const a=me(e.buffer,e.stride/4,{originalIndices:s,originalIndicesLength:r}),f=ae(a.indices,r,a.uniqueCount);return{faces:a.indices,facesLength:a.indices.length,neighbors:f,vertices:we.createView(a.buffer)}}class _e{constructor(n,s,r,a){this.faces=n,this.facesLength=s,this.neighbors=r,this.vertices=a}}const le=new G,ue=new Q,Je=F().vec3f(c.POSITION0).vec3f(c.POSITION1),Ze=F().vec3f(c.POSITION0).vec3f(c.POSITION1).u16(c.COMPONENTINDEX);export{we as E,Je as d,je as f,Ze as m,ye as p,be as u};