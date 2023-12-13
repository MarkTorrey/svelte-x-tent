import { writable, derived } from "svelte/store";
import { webMercatorToGeographic } from "@arcgis/core/geometry/support/webMercatorUtils";

export const mapView = writable({ center: { x: 0, y: 0 }, scale: 0, extent: {} });

export const wgsCenterPoint = derived(mapView, ($mapView) =>
  webMercatorToGeographic($mapView.center),
);

export const wmExtentStr = derived(mapView, ($mapView) => JSON.stringify($mapView.extent, null, 4));

export const wgsExtentStr = derived(mapView, ($mapView) => {
  const wgsExtent = webMercatorToGeographic($mapView.extent);
  return JSON.stringify(wgsExtent, null, 4);
});

export const mapSize = writable("full-size");
