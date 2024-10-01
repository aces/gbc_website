const row= require("./row.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPairedShortcode("row", row);
};