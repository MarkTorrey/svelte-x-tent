// @ts-nocheck
import { writable, readable, derived } from "svelte/store";
import { webMercatorToGeographic } from "@arcgis/core/geometry/support/webMercatorUtils";

export const key = readable(
  "AAPT85fOqywZsicJupSmVSCGrjLA1W20h_mLeh2lh6o9CJyXYBAoKjdUrh3K_IvP1ZS_RfWU6gpdTf2or3nnljXiE-VqENQiXJxKfVUc0i01VsXUKJsof8_Z5dsDu6AUkSO5bREc9tFYhhajs8gs-dtsFk3cZC41DL5y68iHe7exB8gXs_t3wuhuK1tyr4Y7AKhl-3ffbltk_9mmTfNY0VtPWO86Cj82XZHsS1-sP9NKAGg.AT2_H5Lo5hPL",
);
export const mapView = writable({ center: { x: -0, y: -0 }, scale: -0, extent: null });

export const mapExtent = writable({});
export const mapCenter = writable({});
export const mapScale = writable({});

export const drawnExtent = writable({});

export const wgsCenterPoint = derived(mapView, (mv) => {
  if (mv && mv.center) {
    const wgspt = webMercatorToGeographic(mv.center);
    return `${wgspt.x.toFixed(4)}, ${wgspt.y.toFixed(4)}`;
  }

  return "-0.0000, -0.0000";
});

export const wmExtentStr = derived(mapView, (mv) => {
  if (mv && mv.extent) {
    return JSON.stringify(mv.extent, null, 4);
  }
});

export const wgsExtentStr = derived(mapView, (mv) => {
  if (mv && mv.extent) {
    let extent = mv.extent;
    const wgsExtent = webMercatorToGeographic(extent);
    return JSON.stringify(wgsExtent, null, 4);
  }

  return "{}";
});

export const mapSize = writable("full-size");
