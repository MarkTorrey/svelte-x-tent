class r{constructor(t=[],s=[],e=!1){this.lengths=t??[],this.coords=s??[],this.hasIndeterminateRingOrder=e}static fromRect(t){const[s,e,n,h]=t,i=n-s,o=h-e;return new r([5],[s,e,i,0,0,o,-i,0,0,-o])}get isPoint(){return this.lengths.length===0}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce((t,s)=>t+s)}forEachVertex(t){let s=0;this.lengths.length||t(this.coords[0],this.coords[1]);for(let e=0;e<this.lengths.length;e++){const n=this.lengths[e];for(let h=0;h<n;h++)t(this.coords[2*(h+s)],this.coords[2*(h+s)+1]);s+=n}}clone(t){return t?(t.set(this.coords),new r(this.lengths.slice(),t,this.hasIndeterminateRingOrder)):new r(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}export{r as t};
