import "./app.css";
import App from "./App.svelte";
import { mount } from "svelte";
import { setAssetPath } from "@esri/calcite-components/dist/components";
setAssetPath(location.href);

const app = mount(App, {
  target: document.getElementById("app"),
});

export default app;
