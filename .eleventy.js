const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copy static assets straight through
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });

  // Filters
  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISODate();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
