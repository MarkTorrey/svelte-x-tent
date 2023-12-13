<script>
  import { centerPoint, mapSize, scaleLevel, zoomLevel, extentGeom } from "./stores.js";

  import MapView from "@arcgis/core/views/MapView";
  import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
  import Expand from "@arcgis/core/widgets/Expand";
  import * as ReactiveUtils from "@arcgis/core/core/reactiveUtils";
  const createMap = (domNode) => {
    const view = new MapView({
      container: domNode,
      map: {
        basemap: "gray-vector",
      },
      constraints: {
        snapToZoom: true,
      },
      center: [-80.84521293637971, 35.22535861915421],
      zoom: 16,
    });

    const viewDidLoad = () => {
      ReactiveUtils.watch(
        () => [view.stationary, view.scale, view.zoom, view.center, view.extent],
        ([stationary, scale, zoom, center, extent]) => {
          if (stationary) {
            scaleLevel.set(scale);
            zoomLevel.set(zoom);
            centerPoint.set(center);
            extentGeom.set(extent);
          }
        },
      );
    };
    const bmg = new BasemapGallery({ view: view });
    const exp = new Expand({
      expandIcon: "basemap",
      view: view,
      content: bmg,
      autoCollapse: true,
      closeOnEsc: true,
    });
    view.ui.add(exp, "top-left");

    view.when(viewDidLoad);
  };
</script>

<div id="map-container">
  <div class={`view-container-${$mapSize}`}>
    <div class="map-div" use:createMap></div>
  </div>
</div>

<style>
  #map-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(125, 125, 125, 0.5);
  }

  .map-div {
    width: 100%;
    height: 100%;
  }

  .view-container-full-size {
    width: 100%;
    height: 100%;
    transition: all 0.5s ease-out;
  }

  .view-container-size-1 {
    width: 900px;
    height: 400px;
    transition: all 1s ease-in;
  }
</style>
