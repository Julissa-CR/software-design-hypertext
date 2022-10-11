function myFunction(x,y){
    const summary = document.getElementById(x);
    const key = document.getElementById(y);
    if (key.style.display !== "none") {
        key.style.display = "none";
      } else {
        key.style.display = "block";
      }
    if (summary.style.display !== "block") {
        summary.style.display = "block";
      } else {
        summary.style.display = "none";
      }
};
