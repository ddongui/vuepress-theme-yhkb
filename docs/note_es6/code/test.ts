const p = new Promise((resolve, reject) => {
  const num = Math.ceil(Math.random() * 10);
  if (num > 5) {
    reject("error: " + num);
  }
  resolve("success: " + num);
});

p.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
