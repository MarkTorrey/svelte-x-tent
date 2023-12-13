import { writable, derived } from "svelte/store";
import { webMercatorToGeographic } from "@arcgis/core/geometry/support/webMercatorUtils";

export const scaleLevel = writable(0);

export const zoomLevel = writable(0);

export const centerPoint = writable({ x: 0, y: 0 });

export const wgsCenterPoint = derived(centerPoint, ($centerPoint) =>
  webMercatorToGeographic($centerPoint),
);

export const extentGeom = writable({});

export const wmExtentStr = derived(extentGeom, ($extentGeom) =>
  JSON.stringify($extentGeom, null, 4),
);

export const wgsExtentStr = derived(extentGeom, ($extentGeom) => {
  const wgsExtent = webMercatorToGeographic($extentGeom);
  return JSON.stringify(wgsExtent, null, 4);
});

export const mapSize = writable("full-size");
