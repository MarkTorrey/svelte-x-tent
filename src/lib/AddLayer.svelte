<script>
  // @ts-ignore
  import EsriLayer from "@arcgis/core/layers/Layer";
  import { createEventDispatcher } from "svelte";
  import { mapView } from "./stores";

  import "@esri/calcite-components/dist/components/calcite-input";
  import "@esri/calcite-components/dist/components/calcite-label";
  import "@esri/calcite-components/dist/components/calcite-button";

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
    >Add a reference layer by its itemID
    <calcite-input id="itemIdInput" placeholder="b5d71d19fd4b43fbb88abf07773ec0c7">
      <calcite-button
        type="button"
        id="addLayerBtn"
        slot="action"
        role="button"
        tabindex="0"
        on:click={addLayerBtnWasClicked}
        on:keyup={(evt) => {
          console.log("button keyup");
        }}>Add to map</calcite-button
      >
    </calcite-input>
  </calcite-label>
</div>
