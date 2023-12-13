<script>
  import { mapSize } from "./stores";
  const selectDidChange = (evt) => {
    mapSize.set(evt.target.value);
  };
</script>

<div class="cntrl-container">
  <calcite-select on:calciteSelectChange={selectDidChange}>
    <calcite-option value="full-size">Full size</calcite-option>
    <calcite-option value="size-1">900px x 400px</calcite-option>
  </calcite-select>
</div>

<style>
</style>
