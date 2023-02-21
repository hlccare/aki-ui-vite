import { createApp } from "vue/dist/vue.esm-browser.js";

import SButton from "./button";
import JSXButton from "./JSXButton";
import SFCButton from "./SFCButton.vue";
import AkiUI from "./entry";

// createApp(SButton).mount("#app");
// createApp(SFCButton).mount("#app");
createApp({
  template: `
    <div>
        <SButton color="blue" icon="search">蓝色按钮</SButton>
        <SButton color="green" icon="edit">绿色按钮</SButton>
        <SButton color="gray" icon="check">灰色按钮</SButton>
        <SButton color="yellow" icon="search"message>黄色按钮</SButton>
        <SButton color="red" icon="delete">红色按钮</SButton>
    </div>
    `,
})
  .use(AkiUI)
  .mount("#app");
