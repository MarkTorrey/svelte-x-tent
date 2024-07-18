// @ts-nocheck
import { writable, derived } from "svelte/store";
import { webMercatorToGeographic } from "@arcgis/core/geometry/support/webMercatorUtils";

export const mapView = writable({ center: { x: 0, y: 0 }, scale: 0, extent: {} });

export const CurrentExtent = writable({ center: { x: 0, y: 0 }, scale: 0 });

export const wmExtentStr = derived(CurrentExtent, (mv) => {
  return JSON.stringify(mv.extent, null, 4);
});

export const wgsCenterPoint = derived(mapView, (mv) => {
  return webMercatorToGeographic(mv.center);
});

export const wgsExtentStr = derived(mapView, (mv) => {
  let extent = mv.extent;
  const wgsExtent = webMercatorToGeographic(extent);
  return JSON.stringify(wgsExtent, null, 4);
});

export const mapSize = writable("full-size");
