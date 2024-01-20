// vite.config.js
import ViteFontawesome from "vite-plugin-font-awesome";

export default {
  plugins: [
    ViteFontawesome({
      // Specify FontAwesome icons to include
      icons: [
        "faHtml5",
        "faCss3",
        "faJs",
        "faReact",
        "faAntDesign",
        "faRedux",
        "faAxios",
      ],
    }),
  ],
};
