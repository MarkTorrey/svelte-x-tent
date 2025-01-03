import{A as s}from"./index-Cek7aMWl.js";let c=class n{constructor(t,r,o=""){this.major=t,this.minor=r,this._context=o}lessThan(t,r){return this.major<t||t===this.major&&this.minor<r}since(t,r){return!this.lessThan(t,r)}validate(t){if(this.major!==t.major){const r=this._context&&this._context+":",o=this._context&&this._context+" ";throw new s(r+"unsupported-version",`Required major ${o}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:t})}}clone(){return new n(this.major,this.minor,this._context)}static parse(t,r=""){const[o,e]=t.split("."),i=/^\s*\d+\s*$/;if(!(o!=null&&o.match)||!i.test(o))throw new s((r&&r+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:t});if(!(e!=null&&e.match)||!i.test(e))throw new s((r&&r+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:t});const a=parseInt(o,10),h=parseInt(e,10);return new n(a,h,r)}};export{c as r};
