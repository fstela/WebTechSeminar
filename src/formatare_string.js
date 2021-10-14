const formatString = (s, ...format) => {
  return s.replace("{substantiv}", format[0]).replace("{adjectiv}", format[1]);
};
console.log(formatString("un {substantiv} este {adjectiv}", "calut", "dragut"));
