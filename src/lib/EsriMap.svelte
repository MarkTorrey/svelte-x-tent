<script>
  // @ts-nocheck

  import { mapSize, mapView } from "./stores.js";
  import { onMount } from "svelte";

  import EsriMapView from "@arcgis/core/views/MapView";
  import EsriBasemapGallery from "@arcgis/core/widgets/BasemapGallery";
  import EsriExpand from "@arcgis/core/widgets/Expand";
  import EsriSearch from "@arcgis/core/widgets/Search";

  import * as EsriReactiveUtils from "@arcgis/core/core/reactiveUtils";

  onMount(() => {
    const view = new EsriMapView({
      container: "mapDiv",
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
      EsriReactiveUtils.watch(
        () => [view.stationary, view.scale, view.zoom, view.center, view.extent],
        ([stationary, scale, zoom, center, extent]) => {
          if (stationary) {
            mapView.set(view);
          }
        },
      );
      mapView.set(view);
    };

    const bmg = new EsriBasemapGallery({ view: view });
    const bmgExpand = new EsriExpand({
      expandIcon: "basemap",
      view: view,
      content: bmg,
      autoCollapse: true,
      closeOnEsc: true,
    });

    const searchWidget = new EsriSearch({ view: view });
    const searchExpand = new EsriExpand({
      expandIcon: "search",
      view: view,
      content: searchWidget,
      group: "top-left",
    });

    view.ui.add([bmgExpand, searchExpand], "top-left");

    view.when(viewDidLoad);
  });
</script>

<div id="map-container">
  <div class={`view-container-${$mapSize}`}>
    <div id="mapDiv"></div>
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

  #mapDiv {
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
