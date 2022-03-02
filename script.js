document.querySelector("button").addEventListener("click", function () {
  Promise.reject(new Error("Check Your Internet Connection....!")).catch((x) =>
    alert(x)
  );
});
