/* page query for global set */
const FindAllSortedPages = require("../../admin/adminModels/queries/page/FindAllSortedPages");
/* config import for title name set */
const config = require("../config/config");
module.exports = app => {
  /* Get all pages to pass to header.ejs */
  FindAllSortedPages().then(pages => {
    app.locals.pages = pages;
  });
  /* end get all pages */
  /* set title name for app */
  /* will work on more later */
  const title = config.read("site-title");
  if (title === "none") {
    app.locals.appTitle = "Aristos CMS";
  } else {
    app.locals.appTitle = title;
  }
  const favicon = config.read("favicon");
  if (favicon === "none") {
  } else {
    app.locals.favicon = favicon;
  }
  const brand = config.read("brand");
  if (favicon === "none") {
  } else {
    app.locals.brand = brand;
  }
  /* end title name for app */
  /* read Aristos Version Number */
  app.locals.aristosVersion = config.read("aristosVersion");
  /* end of Aristos version Number */
};