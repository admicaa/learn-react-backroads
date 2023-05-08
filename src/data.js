export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "Home",
  },
  {
    id: 2,
    href: "#about",
    text: "about",
  },
  {
    id: 3,
    href: "#services",
    text: "services",
  },
  {
    id: 4,
    href: "#tours",
    text: "tours",
  },
];
export const socialLinks = [
  {
    id: 1,
    icon: "fa-facebook",
    href: "https://www.twitter.com",
  },
  {
    id: 2,
    icon: "fa-twitter",
    href: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: "fa-squarespace",
    href: "https://www.twitter.com",
  },
];

export const services = [
  {
    id: 1,
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    icon: "fas fa-wallet fa-fw",
  },
  {
    id: 2,
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    icon: "fas fa-tree fa-fw",
  },
  {
    id: 3,
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    icon: "fas fa-socks fa-fw",
  },
];

export const toursFunc = async () => {
  return [
    {
      id: 1,
      image: await import("./images/tour-1.jpeg"),
      date: "august 26th, 2020",
      title: "Tibet Adventure",
      info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
      location: "china",
      duration: 6,
      cost: 2100,
    },
    {
      id: 2,
      image: await import("./images/tour-2.jpeg"),
      date: "october 1th, 2020",
      title: "best of java",
      info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
      location: "indonesia",
      duration: 11,
      cost: 1400,
    },
    {
      id: 3,
      image: await import("./images/tour-3.jpeg"),
      date: "september 15th, 2020",
      title: "explore hong kong",
      info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
      location: "hong kong",
      duration: 8,
      cost: 5000,
    },
    {
      id: 4,
      image: await import("./images/tour-4.jpeg"),
      date: "december 5th, 2019",
      title: "kenya highlights",
      info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
      location: "kenya",
      duration: 20,
      cost: 3300,
    },
  ];
};
