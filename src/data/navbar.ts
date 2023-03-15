interface Item {
  text: string;
  link: string;
}

export const navbarItems: Item[] = [
  {
    text: "How it Started",
    link: "/home",
  },
  {
    text: "Where we are going",
    link: "/where_we_are_going",
  },
  // {
  //   text: "Explore Temple",
  //   link: "/where_we_are_going",
  // },
  // {
  //   text: "The congregation",
  //   link: "#congregation",
  // },
];

export const navbarWhereItems: Item[] = [
  {
    text: "Introduction",
    link: "/where_we_are_going/introduction",
  },
  {
    text: "Floor Plans & Indoor Architecture",
    link: "/where_we_are_going/floor_plans",
  },
  {
    text: "Mechanical and Plumbing Systems",
    link: "/where_we_are_going/mechanical_plumbing_systems",
  },
  {
    text: "Electrical and Lighting Systems",
    link: "/where_we_are_going/electrical_lighting",
  },
  {
    text: "Acoustics Systems",
    link: "/where_we_are_going/acoustic_systems",
  },
  {
    text: "Prospective Vendors",
    link: "/where_we_are_going/prospective_vendors",
  },
  {
    text: "The Ecclesiastic Building",
    link: "/where_we_are_going",
  },
];
