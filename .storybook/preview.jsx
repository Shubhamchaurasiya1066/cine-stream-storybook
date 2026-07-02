import "../src/app/globals.css";

import React from "react";
import { Provider } from "react-redux";
import { store } from "../src/store/store";

const preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global Theme",
      defaultValue: "dark",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "dark", title: "Dark" },
          { value: "light", title: "Light" },
        ],
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;

      return (
        <Provider store={store}>
          <div
            style={{
              minHeight: "100vh",
              padding: "30px",
              background: theme === "dark" ? "#111827" : "#ffffff",
              color: theme === "dark" ? "#ffffff" : "#000000",
            }}
          >
            <Story />
          </div>
        </Provider>
      );
    },
  ],

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default preview;