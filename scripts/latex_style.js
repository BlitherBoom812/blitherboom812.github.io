module.exports = function (data) {
  console.log("run latex style");
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "css/latex.css";
  console.log(data);
  data.content.getElementsByTagName("head")[0].appendChild(link);
};
