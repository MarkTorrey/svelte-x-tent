<script>
  // @ts-ignore
  import EsriLayer from "@arcgis/core/layers/Layer";
  import { createEventDispatcher } from "svelte";
  import { mapView } from "./stores";

  const dispatch = createEventDispatcher();

  const addLayerBtnWasClicked = () => {
    // @ts-ignore
    const itemId = document.getElementById("itemIdInput").value;
    if (itemId) {
      // @ts-ignore
      const itmLayer = EsriLayer.fromPortalItem({ portalItem: { id: itemId } }).then(
        (lyr) => {
          // @ts-ignore
          $mapView.map.add(lyr);
          lyr.when(() => {
            // @ts-ignore
            $mapView.extent = lyr.fullExtent;
          });
        },
        (err) => {
          dispatch("add-layer", `${err.message}`);
        },
      );
      //mapView.map.add()
    }
  };
</script>

<div class="cntrl-container">
  <calcite-label
    >Add a reference layer by item ID
    <calcite-input id="itemIdInput" placeholder="Layer item ID (b5d71d19fd4b43fbb88abf07773ec0c7)">
      <calcite-button id="addLayerBtn" slot="action" on:click={addLayerBtnWasClicked}
        >Add to map</calcite-button
      >
    </calcite-input>
  </calcite-label>
</div>
