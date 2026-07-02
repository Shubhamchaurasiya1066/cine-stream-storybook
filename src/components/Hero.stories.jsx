import Hero from "./Hero";

export default {
  title: "Components/Hero",
  component: Hero,

  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    buttonText: {
      control: "text",
    },
  },
};

export const Default = {
  args: {
    title: "Stream Movies In Ultra Experience",
    description:
      "Discover trending movies with server-side rendering, blazing performance, and cinematic design.",
    buttonText: "Explore Movies",
  },
};

export const CustomHero = {
  args: {
    title: "Watch Unlimited Movies",
    description:
      "Browse thousands of trending movies with blazing fast performance.",
    buttonText: "Start Watching",
  },
};