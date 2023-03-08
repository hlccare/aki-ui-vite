import { App } from "vue";
import Button from "./Button";

// 导出Button组件
export { Button };

export default {
  install: (app: App) => {
    app.component(Button.name, Button);
  },
};
