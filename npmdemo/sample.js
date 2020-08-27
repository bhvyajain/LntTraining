function check(data) {
  if (data === 1) {
    return "true";
  }
  return "alse";
}

check(1, (err, res) => {
  if (err) console.log(err);
  if (res) console.log(res);
});
