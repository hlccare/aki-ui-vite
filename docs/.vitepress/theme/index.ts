import Theme from "vitepress/dist/client/theme-default";
import AkiUI from "../../../src/entry";

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(AkiUI);
  },
};
