
const Papa = require('papaparse');
const fs = require('fs');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const shortcodes = require("./src/_includes/components/shortcodes/shortcode.js");

module.exports = function (eleventyConfig) {

  // Copy the people data from the TSV file to a JSON file before building the site.
  eleventyConfig.on('eleventy.before', async () => {
    const tsvFile = fs.readFileSync("src/raw_data/people.tsv")
    const tsvData = tsvFile.toString()
    const out = Papa.parse(tsvData, { delimiter: "\t", header: true, dynamicTyping: true, skipEmptyLines:true})
    console.log(JSON.stringify(out.data))
    fs.writeFile("src/_data/people.json", JSON.stringify(out.data), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("people.json was written successfully");
    });
  });

  // Copy the partner data from the TSV file to a JSON file before building the site.
  eleventyConfig.on('eleventy.before', async () => {
    const tsvFile = fs.readFileSync("src/raw_data/partners.tsv")
    const tsvData = tsvFile.toString()
    const out = Papa.parse(tsvData, { delimiter: "\t", header: true, dynamicTyping: true, skipEmptyLines:true})
    console.log(JSON.stringify(out.data))
    fs.writeFile("src/_data/partners.json", JSON.stringify(out.data), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("partners.json was written successfully");
    });
  });

  // Don't re-build when the generated people and partners JSON files are changed (as this would cause a loop of rebuilding)
  eleventyConfig.watchIgnores.add("src/_data/people.json");
  eleventyConfig.watchIgnores.add("src/_data/partners.json");

  // Register the plugin to handle site navigation links
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Copy the image assets to the built site
  eleventyConfig.addPassthroughCopy('src/assets/images/')

  // Copy alpine.js from the node development directory to the built site
  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/cdn.min.js': './js/alpine.min.js',
    './src/CNAME': './CNAME'
  })

  // Filter for formatting date strings
  eleventyConfig.addFilter("formatDate", (date) => {
    return (new Date(date)).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })
  })

  // Filter for converting tag list strings to a js-like list (in string format)
  eleventyConfig.addFilter("listToQuotedListString", (lst) => { return ('[' + lst.map(i => `'${i}'`).join(',') + ']') })

  // Add the shortcodes
  shortcodes(eleventyConfig)

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
}
