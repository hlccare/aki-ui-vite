import { createApp } from "vue";

import SButton from "./button";
import JSXButton from "./JSXButton";
import SFCButton from "./SFCButton.vue";

// createApp(SButton).mount("#app");
// createApp(SFCButton).mount("#app");
createApp(JSXButton).mount("#app");
