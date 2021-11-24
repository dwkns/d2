let siteData = {
  name: "comapny name",
  locale: "en_GB",
  legalName: "comapny name ltd",
  url: "https://someurl.com",
  logo: "https://someurl.com/images/logo.png",
  foundingDate: "2019",
  privacyEmail: "default_privacy@esomeurl.com",
  address: {
    type: "default_PostalAddress",
    streetAddress: "default_streetAddress",
    addressRegion: "default_addressRegion",
    postalCode: "default_postalCode",
    addressCountry: "default_addressCountry"
  },
  twitterURL: "https://twitter.com/yourTwitter",
  linkedInURL: "https://www.linkedin.com/company/yourCompany/",
  author: {
    twitterHandle: "@default_twitter_handle",
    name: "dazza"
  },
  metadata: {
    default_og_image: '/images/default_og_image.png',
    default_og_type: 'article'
  },
  development: {
    domain: 'localhost',
    baseURL: 'http://localhost:8080',
    debug: true,
    createSitemap: true,
    allowIndexing: false,
    allowRobots: true,
    minifyCSS: false,
    inlineCSS: false,
    minifyInline_HTML_JS_CSS: false,
  },
  staging: {
    domain: 'staging.yoursite.com',
    baseURL: 'https://staging.yoursite.com',
    debug: true,
    createSitemap: true,
    allowIndexing: false,
    allowRobots: true,
    minifyCSS: false,
    inlineCSS: false,
    minifyInline_HTML_JS_CSS: false,
  },
  production: {
    domain: 'yoursite.com',
    baseURL: 'https://yoursite.com',
    debug: false,
    createSitemap: true,
    allowIndexing: true,
    allowRobots: true,
    minifyCSS: true,
    inlineCSS: true,
    minifyInline_HTML_JS_CSS: false,
  },
  currentYear: new Date().getFullYear(),
  currentDate: new Date(),
  version: Math.random().toString(36).substr(2, 8),
}

module.exports = siteData


// "name": "Under2",
//   "legalName": "Under2 Limited",
//   "url": "https://under2.global",
//   "logo": "https://under2.global/images/u2-logo-for-white.png",
//   "foundingDate": "2019",
//   "privacyEmail": "privacy@under2.global",
//   "companyAddress": "7 Bell Yard, London, United Kingdom, WC2A 2JR",
//   "address": { 
//      "type": "PostalAddress", 
//      "streetAddress": "7 Bell Yard", 
//      "addressRegion": "London", 
//      "postalCode": "WC2A 2JR", 
//      "addressCountry": "UK" },
//   "twitterURL" : "https://twitter.com/under2global",
//   "linkedInURL" : "https://www.linkedin.com/company/under2/",
//   "author": {
//     "handle": "@dwkns",
//     "name": "dwkns"
//   },
//   "googleAnalyticsID": "G-YW7QMHS01K",
//   "actOnID": "44267",
//   "linkedInID": "3949985",
//   "urls": {
//     "production": "https://under2.global",
//     "staging": "https://staging.under2.global",
//     "development": "http://localhost:8080"
//   },
//   "development": {
//     "baseURL":  "http://localhost:8080",
//     "debug": false,
//     "debugScreens": false,
//     "showDefaultTextInForms": true,
//     "formsActive": false,
//     "linkedInActive": false,
//     "googleAnalyticsActive": false,
//     "actOnActive": false,
//     "createSitemap" : false,
//     "allowIndexing" : false,
//     "allowRobots" : true,
//     "inlineCSS" : false,
//     "compressCSS" : false,
//     "compressHTML": false
//   },