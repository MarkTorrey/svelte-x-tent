<script>
  import "@esri/calcite-components/dist/components/calcite-button";
  import "@esri/calcite-components/dist/components/calcite-label";
  import "@esri/calcite-components/dist/components/calcite-tooltip";
  import "@esri/calcite-components/dist/components/calcite-tabs";
  import "@esri/calcite-components/dist/components/calcite-tab-nav";
  import "@esri/calcite-components/dist/components/calcite-tab-title";
  import "@esri/calcite-components/dist/components/calcite-tab";
  import "@esri/calcite-components/dist/components/calcite-text-area";

  import { mapView, wgsCenterPoint, wmExtentStr, wgsExtentStr } from "./stores";

  import { createEventDispatcher } from "svelte";
  // @ts-ignore
  const dispatch = createEventDispatcher();

  const copyWasClicked = (evt) => {
    const parentElement = document.getElementById(evt.target.dataset.copyId);
    // @ts-ignore
    navigator.clipboard.writeText(parentElement.value).then(
      () => {
        dispatch("copy", {
          label: evt.target.dataset.copyMsg,
          // @ts-ignore
          value: parentElement.value,
          type: "success",
        });
      },
      // @ts-ignore
      (err) => {
        console.log("error copying to cp");
      },
    );
  };
</script>

<div class="cntrl-container">
  <h3>Map</h3>
  <calcite-label
    >Zoom level
    <calcite-input id="zoomInput" read-only value={$mapView.zoom || 0}>
      <div slot="action">
        <calcite-button
          on:click={copyWasClicked}
          data-copy-id="zoomInput"
          data-copy-msg="Zoom level"
          id="zoomBtn"
          icon-start="copy-to-clipboard"
        ></calcite-button>
      </div>
    </calcite-input>
    <calcite-tooltip reference-element="zoomBtn">Copy zoom level</calcite-tooltip>
  </calcite-label>
  <calcite-label
    >Scale
    <calcite-input id="scaleInput" read-only value={$mapView.scale}>
      <div slot="action">
        <calcite-button
          id="scaleBtn"
          on:click={copyWasClicked}
          data-copy-id="scaleInput"
          data-copy-msg="Scale level"
          icon-start="copy-to-clipboard"
        ></calcite-button>
      </div>
    </calcite-input>
    <calcite-tooltip reference-element="scaleBtn">Copy scale</calcite-tooltip>
  </calcite-label>

  <h3>Extent</h3>
  <calcite-tabs bordered layout="center">
    <calcite-tab-nav slot="title-group">
      <calcite-tab-title selected>WGS84 (4326)</calcite-tab-title>
      <calcite-tab-title>WebMercator (102100)</calcite-tab-title>
    </calcite-tab-nav>
    <calcite-tab selected>
      <calcite-label
        >Center
        <calcite-input
          id="wgsCenterCntrl"
          value={`${$wgsCenterPoint.x.toFixed(4)}, ${$wgsCenterPoint.y.toFixed(4)}`}
          read-only
        >
          <div slot="action">
            <calcite-button
              on:click={copyWasClicked}
              data-copy-id="wgsCenterCntrl"
              data-copy-msg="WGS84 center point"
              id="wgsCenterBtn"
              icon-start="copy-to-clipboard"
            ></calcite-button>
          </div>
        </calcite-input>
        <calcite-tooltip reference-element="wgsCenterBtn">Copy WGS center point</calcite-tooltip>
      </calcite-label>
      <calcite-label>
        Extent
        <calcite-text-area
          id="wgsExtentCntrl"
          name="wgsExtentCntrl"
          rows="10"
          read-only
          value={$wgsExtentStr}
        >
          <calcite-button
            on:click={copyWasClicked}
            data-copy-id="wgsExtentCntrl"
            data-copy-msg="WGS84 extent"
            id="wgsExtentBtn"
            slot="footer-end"
            icon-start="copy-to-clipboard"
          >
          </calcite-button>
        </calcite-text-area>
        <calcite-tooltip reference-element="wgsExtentBtn">Copy scale</calcite-tooltip>
      </calcite-label>
    </calcite-tab>
    <calcite-tab>
      <calcite-label
        >Center
        <calcite-input
          id="wmCenterCntrl"
          read-only
          value={`${$mapView.center.x.toFixed(4)}, ${$mapView.center.y.toFixed(4)}`}
        >
          <div slot="action">
            <calcite-button
              on:click={copyWasClicked}
              data-copy-id="wmCenterCntrl"
              data-copy-msg="Web mercator center point"
              id="copyCenterBtn"
              icon-start="copy-to-clipboard"
            ></calcite-button>
          </div>
        </calcite-input>
        <calcite-tooltip reference-element="copyCenterBtn">Copy WGS84 center point</calcite-tooltip>
      </calcite-label>
      <calcite-label>
        Extent
        <calcite-text-area
          id="wmExtentCntrl"
          name="wmExtentCntrl"
          rows="10"
          read-only
          value={$wmExtentStr}
        >
          <calcite-button
            on:click={copyWasClicked}
            data-copy-id="wmExtentCntrl"
            data-copy-msg="Web mercator extent"
            id="wmExtentBtn"
            slot="footer-end"
            icon-start="copy-to-clipboard"
          >
          </calcite-button>
        </calcite-text-area>
        <calcite-tooltip reference-element="wmExtentBtn">Copy Web Mercator extent</calcite-tooltip>
      </calcite-label>
    </calcite-tab>
  </calcite-tabs>
</div>
