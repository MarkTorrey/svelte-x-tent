// @ts-nocheck
import { writable, readable, derived } from "svelte/store";
import { webMercatorToGeographic } from "@arcgis/core/geometry/support/webMercatorUtils";

export const key = readable(
  "AAPTxy8BH1VEsoebNVZXo8HurOy5tg-ziR77dVRpS_5Kw7jXdm2LepxkLq6EHGDFr5AXfq2aDrJJRMfbFxaPHKvHe8o0_uckPtHbw9KYKY9TNVvy-wG42TFGOQLYZLrSBi4ucLLHMwe22cLhs3lVIPwQ1kqSflk5qitYC7AwcuETorjmt120lh6TJuT2mAzHgoniSGjHsWYYz_QYHvINdazrcfeB0H6p-k3UqaTZFZ4ZLbQ.AT1_ftqGaY2j",
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
