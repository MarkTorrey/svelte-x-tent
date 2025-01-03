<script>
  // @ts-nocheck

  import { mapSize, mapView, key } from "./stores.js";
  import { onMount } from "svelte";

  import EsriMapView from "@arcgis/core/views/MapView";
  import EsriBasemapGallery from "@arcgis/core/widgets/BasemapGallery";
  import EsriMeasurement from "@arcgis/core/widgets/Measurement";
  import EsriExpand from "@arcgis/core/widgets/Expand";
  import EsriSearch from "@arcgis/core/widgets/Search";
  import EsriConfig from "@arcgis/core/config.js";
  import EsriGraphic from "@arcgis/core/Graphic.js";

  import * as EsriReactiveUtils from "@arcgis/core/core/reactiveUtils";

  onMount(() => {
    EsriConfig.apiKey = $key;

    const view = new EsriMapView({
      container: "mapDiv",
      map: {
        basemap: "osm/light-gray",
      },
      constraints: {
        snapToZoom: true,
      },
      center: [-95.6926, 38.7408],
      zoom: 4,
    });

    view.ui.move("zoom", "bottom-right");

    const addCenterGraphic = (atPoint) => {
      const g = new EsriGraphic({
        geometry: atPoint,
        symbol: {
          type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
          style: "square",
          color: "blue",
          size: "8px", // pixels
          outline: {
            // autocasts as new SimpleLineSymbol()
            color: [255, 255, 0],
            width: 3, // points
          },
        },
      });
      view.graphics.removeAll();
      view.graphics.add(g);
    };

    const viewDidLoad = () => {
      EsriReactiveUtils.watch(
        () => [view.stationary, view.scale, view.zoom, view.center, view.extent],
        ([stationary, scale, zoom, center, extent]) => {
          if (stationary) {
            mapView.set(view);
            addCenterGraphic(view.center);
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
      group: "mapControls",
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
      group: "mapControls",
    });

    view.ui.add([bmgExpand, searchExpand], "top-trailing");

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
