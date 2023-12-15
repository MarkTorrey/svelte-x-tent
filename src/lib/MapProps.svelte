<script>
  import { mapSize } from "./stores";
  import EsriSketch from "./EsriSketch.svelte";

  import "@esri/calcite-components/dist/components/calcite-label";
  import "@esri/calcite-components/dist/components/calcite-select";
  import "@esri/calcite-components/dist/components/calcite-option";

  const selectDidChange = (evt) => {
    mapSize.set(evt.target.value);
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

  <EsriSketch />
</div>

<style>
</style>
