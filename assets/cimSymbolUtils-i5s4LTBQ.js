import{bj as i}from"./index-eSY5-lt-.js";import{f as u,M as l,y as m,m as n,C as I,u as h}from"./utils-jQLeeGOF.js";function b(e,o,a,t){if(e)if(e.type!=="CIMTextSymbol"){if(a&&e.effects)for(const s of e.effects)P(s,o);if(e.symbolLayers)for(const s of e.symbolLayers)switch(s.type){case"CIMPictureMarker":case"CIMVectorMarker":y(s,o,t);break;case"CIMPictureStroke":case"CIMSolidStroke":!(t!=null&&t.preserveOutlineWidth)&&s.width&&(s.width*=o);break;case"CIMPictureFill":s.height&&(s.height*=o),s.offsetX&&(s.offsetX*=o),s.offsetY&&(s.offsetY*=o);break;case"CIMHatchFill":b(s.lineSymbol,o,!0,{...t,preserveOutlineWidth:!1}),s.offsetX&&(s.offsetX*=o),s.offsetY&&(s.offsetY*=o),s.separation&&(s.separation*=o)}}else e.height!=null&&(e.height*=o)}function y(e,o,a){if(e&&(e.markerPlacement&&d(e.markerPlacement,o),e.offsetX&&(e.offsetX*=o),e.offsetY&&(e.offsetY*=o),e.anchorPoint&&e.anchorPointUnits==="Absolute"&&(e.anchorPoint={x:e.anchorPoint.x*o,y:e.anchorPoint.y*o}),e.size=e.size!=null?e.size*o:0,e.type==="CIMVectorMarker"&&e.markerGraphics))for(const t of e.markerGraphics)e.scaleSymbolsProportionally||b(t.symbol,o,!0,a)}function d(e,o){switch(n(e)&&e.offset&&(e.offset*=o),e.type){case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineSameSize":if(e.customEndingOffset&&(e.customEndingOffset*=o),e.offsetAlongLine&&(e.offsetAlongLine*=o),e.placementTemplate&&e.placementTemplate.length){const a=e.placementTemplate.map(t=>t*o);e.placementTemplate=a}break;case"CIMMarkerPlacementAlongLineVariableSize":if(e.maxRandomOffset&&(e.maxRandomOffset*=o),e.placementTemplate&&e.placementTemplate.length){const a=e.placementTemplate.map(t=>t*o);e.placementTemplate=a}break;case"CIMMarkerPlacementOnLine":e.startPointOffset&&(e.startPointOffset*=o);break;case"CIMMarkerPlacementAtExtremities":e.offsetAlongLine&&(e.offsetAlongLine*=o);break;case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementOnVertices":break;case"CIMMarkerPlacementAtRatioPositions":e.beginPosition&&(e.beginPosition*=o),e.endPosition&&(e.endPosition*=o);break;case"CIMMarkerPlacementPolygonCenter":e.offsetX&&(e.offsetX*=o),e.offsetY&&(e.offsetY*=o);break;case"CIMMarkerPlacementInsidePolygon":e.offsetX&&(e.offsetX*=o),e.offsetY&&(e.offsetY*=o),e.stepX&&(e.stepX*=o),e.stepY&&(e.stepY*=o)}}function P(e,o){switch(e.type){case"CIMGeometricEffectArrow":case"CIMGeometricEffectDonut":e.width&&(e.width*=o);break;case"CIMGeometricEffectBuffer":e.size&&(e.size*=o);break;case"CIMGeometricEffectCut":e.beginCut&&(e.beginCut*=o),e.endCut&&(e.endCut*=o),e.middleCut&&(e.middleCut*=o);break;case"CIMGeometricEffectDashes":if(e.customEndingOffset&&(e.customEndingOffset*=o),e.offsetAlongLine&&(e.offsetAlongLine*=o),e.dashTemplate&&e.dashTemplate.length){const a=e.dashTemplate.map(t=>t*o);e.dashTemplate=a}break;case"CIMGeometricEffectExtension":case"CIMGeometricEffectJog":case"CIMGeometricEffectRadial":e.length&&(e.length*=o);break;case"CIMGeometricEffectMove":e.offsetX&&(e.offsetX*=o),e.offsetY&&(e.offsetY*=o);break;case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":e.offset&&(e.offset*=o);break;case"CIMGeometricEffectRegularPolygon":e.radius&&(e.radius*=o);break;case"CIMGeometricEffectTaperedPolygon":e.fromWidth&&(e.fromWidth*=o),e.length&&(e.length*=o),e.toWidth&&(e.toWidth*=o);break;case"CIMGeometricEffectWave":e.amplitude&&(e.amplitude*=o),e.period&&(e.period*=o)}}function E(e){const o=[];return M(u(e),o),o.length?new i(h(o[0])):null}function M(e,o){var s;if(!e)return;let a;a=e.type==="CIMTextSymbol"?e.symbol:e;const t=e.type==="CIMPolygonSymbol";if(a!=null&&a.symbolLayers){for(const c of a.symbolLayers)if(!(c.colorLocked||t&&(l(c)||m(c)&&c.markerPlacement&&n(c.markerPlacement))))switch(c.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":c.tintColor&&p(o,c.tintColor);break;case"CIMVectorMarker":(s=c.markerGraphics)==null||s.forEach(r=>{M(r.symbol,o)});break;case"CIMSolidStroke":case"CIMSolidFill":p(o,c.color);break;case"CIMHatchFill":M(c.lineSymbol,o)}}}function p(e,o){for(const a of e)if(a.join(".")===o.join("."))return;e.push(o)}function G(e,o,a){o instanceof i||(o=new i(o));const t=u(e);t&&C(t,o,a)}function C(e,o,a){var c;if(!e)return;let t;t=e.type==="CIMTextSymbol"?e.symbol:e;const s=(t==null?void 0:t.type)==="CIMPolygonSymbol";if(t!=null&&t.symbolLayers)for(const r of t.symbolLayers){if(r.colorLocked)continue;if(s){if(a){const{layersToColor:f}=a;if((l(r)||m(r)&&r.markerPlacement&&n(r.markerPlacement))&&f==="fill"||I(r)&&f==="outline")continue}else if(l(r)||m(r)&&r.markerPlacement&&n(r.markerPlacement))continue}const k=o.toArray();switch(r.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":r.tintColor=k;break;case"CIMVectorMarker":(c=r.markerGraphics)==null||c.forEach(f=>{C(f.symbol,o,a)});break;case"CIMSolidStroke":case"CIMSolidFill":r.color=k;break;case"CIMHatchFill":C(r.lineSymbol,o,a)}}}export{E as C,G as I,y as m};
