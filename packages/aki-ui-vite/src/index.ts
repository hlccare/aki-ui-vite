import { createApp } from "vue/dist/vue.esm-browser.js";

// import Button from "./button";
// import JSXButton from "./JSXButton";
// import SFCButton from "./SFCButton.vue";
import AkiUI from "./entry";

// createApp(Button).mount("#app");
// createApp(SFCButton).mount("#app");
createApp({
  template: `
    <div>
        <Button color="blue" icon="search">蓝色按钮</Button>
        <Button color="green" icon="edit">绿色按钮</Button>
        <Button color="gray" icon="check">灰色按钮</Button>
        <Button color="yellow" icon="search"message>黄色按钮</Button>
        <Button color="red" icon="delete">红色按钮</Button>
    </div>
    `,
})
  .use(AkiUI)
  .mount("#app");
