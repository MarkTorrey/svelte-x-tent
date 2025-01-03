<script>
  // @ts-nocheck

  import EsriMap from "./lib/EsriMap.svelte";
  import ViewProps from "./lib/ViewProps.svelte";
  import MapProps from "./lib/MapProps.svelte";
  import AddLayer from "./lib/AddLayer.svelte";

  import "@esri/calcite-components/dist/components/calcite-shell-panel";
  import "@esri/calcite-components/dist/components/calcite-panel";
  import "@esri/calcite-components/dist/components/calcite-alert";
  import "@esri/calcite-components/dist/components/calcite-input";
  import "@esri/calcite-components/dist/components/calcite-shell";

  const handleAlert = (evt) => {
    const alertElement = document.getElementById("copyAlert");
    alertElement.setAttribute("icon", "copy-to-clipboard");
    alertElement.setAttribute("kind", "success");

    document.getElementById("alertTitle").innerHTML = "Copy value";
    document.getElementById("alertMessage").innerHTML =
      `${evt.detail.label} <b>${evt.detail.value}</b> copied to the clipboard`;

    alertElement.open = true;
  };
</script>

<main>
  <calcite-shell>
    <calcite-alert id="copyAlert" auto-close auto-close-duration="fast" placement="top">
      <div slot="message" name="alertMessage" id="alertMessage"></div>
      <div slot="title" name="alertTitle" id="alertTitle"></div>
    </calcite-alert>
    <calcite-shell-panel slot="panel-end" position="end" id="shell-panel-start">
      <MapProps />

      <AddLayer on:add-layer={handleAlert} />

      <ViewProps on:copy={handleAlert} />
    </calcite-shell-panel>
    <calcite-panel>
      <EsriMap />
    </calcite-panel>
  </calcite-shell>
</main>

<style>
</style>
