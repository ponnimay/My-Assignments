let browserName = "Edge";
let testType = "sanity"

if (browserName === "chrome")
 {
  console.log("Launch Chrome browser");
}
 else if (browserName === "Edge")
{
  console.log("Launch Edge browser");
}
else
{
    console.log("Launch default browser");
}

switch (testType) {
  case "smoke":
    console.log("Running Smoke tests.");
    break;

  case "sanity":
    console.log("Running Sanity tests.");
    break;

  case "regression":
    console.log("Running Regression tests.");
    break;

  default:
    console.log("Running Smoke tests."); 
}