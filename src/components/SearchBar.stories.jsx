import SearchBar from "./SearchBar";

export default {
  title: "Components/SearchBar",
  component: SearchBar,

  argTypes: {
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export const Default = {
  args: {
    placeholder: "Search movies...",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    placeholder: "Disabled Search",
    disabled: true,
  },
};

export const CustomPlaceholder = {
  args: {
    placeholder: "Search Marvel Movies...",
    disabled: false,
  },
};