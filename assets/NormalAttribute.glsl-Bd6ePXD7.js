import{cm as l}from"./index-Cek7aMWl.js";import{o}from"./interfaces-B8ge7Jg9.js";import{e as i}from"./VertexAttribute-BnAa5VW0.js";var e;function p(r){return u(r)||r===e.Depth||r===e.Normal||r===e.ObjectAndLayerIdColor}function u(r){return r===e.Shadow||r===e.ShadowHighlight||r===e.ShadowExcludeHighlight||r===e.ViewshedShadow}function w(r){return m(r)||r===e.Normal}function d(r){return r===e.Highlight||r===e.ObjectAndLayerIdColor}function C(r){return r===e.Color||d(r)}function a(r){return r===e.Color}function S(r){return a(r)||r===e.ObjectAndLayerIdColor}function h(r){return a(r)||r===e.Highlight}function b(r){return h(r)||c(r)}function s(r){return a(r)||d(r)}function m(r){return s(r)||c(r)}function c(r){return r===e.Depth}(function(r){r[r.Color=0]="Color",r[r.Depth=1]="Depth",r[r.Normal=2]="Normal",r[r.Shadow=3]="Shadow",r[r.ShadowHighlight=4]="ShadowHighlight",r[r.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",r[r.ViewshedShadow=6]="ViewshedShadow",r[r.Highlight=7]="Highlight",r[r.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",r[r.COUNT=9]="COUNT"})(e||(e={}));function N(r,t){switch(t.normalType){case n.Compressed:r.attributes.add(i.NORMALCOMPRESSED,"vec2"),r.vertex.code.add(o`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case n.Attribute:r.attributes.add(i.NORMAL,"vec3"),r.vertex.code.add(o`vec3 normalModel() {
return normal;
}`);break;case n.ScreenDerivative:r.fragment.code.add(o`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:l(t.normalType);case n.COUNT:case n.Ground:}}var n;(function(r){r[r.Attribute=0]="Attribute",r[r.Compressed=1]="Compressed",r[r.Ground=2]="Ground",r[r.ScreenDerivative=3]="ScreenDerivative",r[r.COUNT=4]="COUNT"})(n||(n={}));export{n as a,p as b,m as c,s as d,C as e,S as f,c as g,d as h,a as i,b as l,w as n,e as o,u as r,N as t};
