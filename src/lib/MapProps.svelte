<script>
  import { mapSize, mapView } from "./stores";
  import EsriSketch from "./EsriSketch.svelte";

  import "@esri/calcite-components/dist/components/calcite-label";
  import "@esri/calcite-components/dist/components/calcite-button";
  import "@esri/calcite-components/dist/components/calcite-select";
  import "@esri/calcite-components/dist/components/calcite-option";
  import "@esri/calcite-components/dist/components/calcite-dropdown";
  import "@esri/calcite-components/dist/components/calcite-dropdown-group";
  import "@esri/calcite-components/dist/components/calcite-dropdown-item";

  const ExtentType = Object.freeze({ MAP: "MAP", GRAPHIC: "GRAPHIC" });
  let extentType = { extType: ExtentType.MAP };

  // $: extentType.extType === ExtentType.MAP
  //   ? CurrentExtent.set($mapView.extent)
  //   : CurrentExtent.set(null);

  const selectDidChange = (evt) => {
    mapSize.set(evt.target.value);
  };

  const ddSelectDidChange = (evt) => {
    console.log("Drop down select did change");
    extentType.extType = evt.target.selectedItems[0].label;
    // CurrentExtent.set($mapView.extent);
    document.getElementById("typeBtn").innerHTML = `Use extent from ${extentType.extType}`;
  };
</script>

<div class="cntrl-container">
  <calcite-label
    >Map size
    <calcite-select on:calciteSelectChange={selectDidChange}>
      <calcite-option value="full-size">Full size</calcite-option>
      <calcite-option value="size-1">900px x 400px</calcite-option>
    </calcite-select>
  </calcite-label>

  <div>
    <calcite-dropdown width="m" on:calciteDropdownSelect={ddSelectDidChange}>
      <calcite-button id="typeBtn" slot="trigger">Use extent from MAP</calcite-button>
      <calcite-dropdown-group group-title="Extent type">
        <calcite-dropdown-item label="MAP">Map</calcite-dropdown-item>
        <calcite-dropdown-item label="EXTENT">Extent</calcite-dropdown-item>
      </calcite-dropdown-group>
    </calcite-dropdown>
  </div>

  {#if extentType.extType !== ExtentType.MAP}
    <EsriSketch />
  {/if}
</div>

<style>
</style>
