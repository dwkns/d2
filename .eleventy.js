const lodash = require("lodash");
const { DateTime } = require("luxon");
const htmlmin = require("html-minifier");
const siteData = require("./src/_data/site.js")
const currentEnv = require("./src/_data/currentEnv.js")
// const siteDataString = fs.readFileSync(siteDataFile, "utf8")
// const siteData = JSON.parse(siteDataString)

module.exports = (eleventyConfig) => {

  // detect changes in the output folder and reload browser
  eleventyConfig.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  });

  // watch our script folder for changes. 
  eleventyConfig.addWatchTarget("./src/scripts/");
  eleventyConfig.addWatchTarget("./eleventy/");
  eleventyConfig.addWatchTarget("./tailwind.config.js");

  // return a readable date
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat("dd LLL yyyy");
  });

  // Prepend 'A' or 'An' depeding on the next word supplied
  eleventyConfig.addFilter("addAnOrA", word => {
    firstChar = word.charAt(0)
    if (/[aeiou]/i.test(firstChar)) {
      return `An ${lodash.lowerCase(word)}`
    } else {
      return `A ${lodash.lowerCase(word)}`
    }
  });

  eleventyConfig.setBrowserSyncConfig({
    middleware: function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*sfsdf');
      next();
    }
  });

  eleventyConfig.addPassthroughCopy({
    'src/fonts': './fonts',
    'src/images': './images',
    'src/styles/compiled.css': './styles/compiled.css'
  });

  eleventyConfig.setDataDeepMerge(true);

  // compress the html & inline CSS & JS
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    const compressHTML = siteData[currentEnv].minifyInline_HTML_JS_CSS
    if (!compressHTML) { return content }
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
      });
      return minified;
    }
    return content;
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_partials/',
      layouts: '_partials/_layouts',
      data: '_data',
    },
  };
};


// https://marketing.under2.global/acton/fs/blocks/showLandingPage/a/44267/p/p-0001/t/page/fm/0
// https://marketing.under2.global/acton/fs/blocks/showLandingPage/a/44267/p/p-0001/t/page/fm/0