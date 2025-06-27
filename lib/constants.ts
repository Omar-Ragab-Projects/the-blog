export const navLinks = [
  {
    name: "Blog",
    path: "/posts",
  },
  {
    name: "Projects",
    path: "#",
  },
  {
    name: "About",
    path: "#",
  },
  {
    name: "Newsletter",
    path: "#",
  },
];

export const categories = [
  "Design",
  "Research",
  "Presentation",
  "Interface",
  "Product",
  "Frameworks",
  "Customer Success",
  "Software Development",
  "Tools",
  "SaaS",
  "Podcasts",
];

export const colors = ["purple", "blue", "pink", "green", "navy"];

export const errorMetadata = {
  title: "Post not found",
  description: "The requested blog post could not be loaded.",
  openGraph: {
    title: "Post not found",
    description: "The requested blog post could not be loaded.",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Post not found",
      },
    ],
  },
};
