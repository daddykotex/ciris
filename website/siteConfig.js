// The buildInfo constant is generated by sbt. Do not edit directly.
const buildInfo = { organization: "is.cir", coreModuleName: "ciris", latestVersion: "1.0.0-SNAPSHOT", scalaPublishVersions: "2.12 and 2.13" };

const repoUrl = "https://github.com/vlovgr/ciris";

const apiUrl = "/api/ciris/index.html";

// See https://docusaurus.io/docs/site-config for available options.
const siteConfig = {
  title: "Ciris",
  tagline: "Functional Configurations for Scala",
  url: "https://cir.is",
  baseUrl: "/",

  customDocsPath: "docs/target/mdoc",

  projectName: "ciris",
  organizationName: "vlovgr",

  headerLinks: [
    { href: apiUrl, label: "API Docs" },
    { doc: "overview", label: "Documentation" },
    { href: repoUrl, label: "GitHub" }
  ],

  headerIcon: "img/ciris.white.svg",
  titleIcon: "img/ciris.svg",
  favicon: "img/favicon.png",

  colors: {
    primaryColor: "#122932",
    secondaryColor: "#153243"
  },

  copyright: `Copyright © 2017-${new Date().getFullYear()} Viktor Lövgren.`,

  highlight: { theme: "github" },

  onPageNav: "separate",

  separateCss: ["api"],

  cleanUrl: true,

  repoUrl,

  buildInfo,

  apiUrl
};

module.exports = siteConfig;