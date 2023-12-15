<script>
  import EsriSketchWidget from "@arcgis/core/widgets/Sketch";
  import EsriGraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
  import { mapView } from "./stores";

  const init = (domNode) => {
    const sketchLayer = new EsriGraphicsLayer({ id: "sketchLayer" });
    $mapView.map.add(sketchLayer);

    const sketchWidget = new EsriSketchWidget({
      view: $mapView,
      layer: sketchLayer,
      container: domNode,
      creationMode: "update",
      availableCreateTools: ["rectangle"],
    });
  };
</script>

{#if $mapView && $mapView.map}
  <div use:init></div>
{:else}
  <h1>Map getting ready...</h1>
{/if}
