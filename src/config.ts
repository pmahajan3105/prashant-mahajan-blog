export const SITE = {
  website: "https://prashantmahajan.com/", // replace this with your deployed domain
  author: "Prashant Mahajan",
  profile: "https://www.linkedin.com/in/prashantmahajan31/",
  desc: "Product management insights and startup journey - Building better products through data-driven decisions.",
  title: "Prashant's Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false, // disable edit button for now
    text: "Edit page",
    url: "https://github.com/yourusername/your-blog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/Los_Angeles", // Adjust to your timezone
} as const;
