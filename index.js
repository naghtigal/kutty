const plugin = require("tailwindcss/plugin");

const Alert = require("./src/alert.js");
const Avatar = require("./src/avatar.js");
const Badge = require("./src/badge.js");
const Breadcrumb = require("./src/breadcrumb.js");
const Button = require("./src/button.js");
const Card = require("./src/card.js");
const Dialog = require("./src/dialog.js");
const Drawer = require("./src/drawer.js");
const Dropdown = require("./src/dropdown.js");
const Forms = require("./src/forms.js");
const List = require("./src/list.js");
const Pagination = require("./src/pagination.js");
const Sidebar = require("./src/sidebar.js");
const Spinner = require("./src/spinner.js");
const Tabs = require("./src/tabs.js");
const Typography = require("@tailwindcss/typography");

module.exports = plugin.withOptions(function () {
  return function (options) {
    const { addComponents } = options;

    addComponents(Alert());
    addComponents(Avatar());
    addComponents(Badge());
    addComponents(Breadcrumb());
    addComponents(Button());
    addComponents(Card());
    addComponents(Dialog());
    addComponents(Drawer());
    addComponents(Dropdown());
    addComponents(Forms());
    addComponents(List());
    addComponents(Pagination());
    addComponents(Sidebar());
    addComponents(Spinner());
    addComponents(Tabs());
    Typography().handler(options);
  };
});
