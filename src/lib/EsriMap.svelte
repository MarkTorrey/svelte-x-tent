<script>
  // @ts-nocheck

  import { mapSize, mapView } from "./stores.js";
  import { onMount } from "svelte";

  import EsriMapView from "@arcgis/core/views/MapView";
  import EsriBasemapGallery from "@arcgis/core/widgets/BasemapGallery";
  import EsriExpand from "@arcgis/core/widgets/Expand";
  import EsriSearch from "@arcgis/core/widgets/Search";
  import EsriConfig from "@arcgis/core/config.js";

  import * as EsriReactiveUtils from "@arcgis/core/core/reactiveUtils";

  onMount(() => {
    EsriConfig.apiKey =
      "AAPT85fOqywZsicJupSmVSCGrjLA1W20h_mLeh2lh6o9CJyXYBAoKjdUrh3K_IvP1ZS_RfWU6gpdTf2or3nnljXiE-VqENQiXJxKfVUc0i01VsXUKJsof8_Z5dsDu6AUkSO5bREc9tFYhhajs8gs-dtsFk3cZC41DL5y68iHe7exB8gXs_t3wuhuK1tyr4Y7AKhl-3ffbltk_9mmTfNY0VtPWO86Cj82XZHsS1-sP9NKAGg.AT2_H5Lo5hPL";
    const view = new EsriMapView({
      container: "mapDiv",
      map: {
        basemap: "arcgis/outdoor",
      },
      constraints: {
        snapToZoom: true,
      },
      center: [-95.6926, 38.7408],
      zoom: 4,
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

    const searchWidget = new EsriSearch({
      view: view,
      includeDefaultSources: false,
      sources: [
        {
          name: "arcgis geocoding services",
          singleLineFieldName: "SingleLine",
          placeholder: "Find place or address",
          apiKey: EsriConfig.apiKey,
          url: "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer",
        },
      ],
    });
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
