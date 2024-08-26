const escapeStr = "`\\/'";
const arr = Object.freeze([4, "2"]);
const obj = Object.freeze({
  str: "I am the best",
  num: 67,
  bool: true,
  undef: undefined,
});
const nested = {
  arr: Object.freeze([3, 4, undefined, "2"]),
  obj: Object.freeze({
    str: "Father time",
    num: 33,
    bool: false,
  }),
};
