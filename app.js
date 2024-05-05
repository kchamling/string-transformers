const userInput = document.querySelector("#user-input");
const lowerCaseOutput = document.querySelector(".lower-case p");
const upperCaseOutput = document.querySelector(".upper-case p");
const camelCaseOutput = document.querySelector(".camel-case p");
const pascalCaseOutput = document.querySelector(".pascal-case p");
const kebabCaseOutput = document.querySelector(".kebab-case p");
const trimOutput = document.querySelector(".trim p");

const camelCase = (str) => {
  const strArray = str.split(" ");
  const result = strArray.map((ele, idx) => {
    if (idx === 0) {
      return ele.charAt(0).toLowerCase() + ele.slice(1);
    } else {
      return ele.charAt(0).toUpperCase() + ele.slice(1);
    }
  });
  return result.join("");
};
const pascalCase = (str) => {
  const strArray = str.split(" ");
  const result = strArray.map((ele, idx) => {
    if (idx === 0) {
      return ele.charAt(0).toUpperCase() + ele.slice(1);
    } else {
      return ele.charAt(0).toUpperCase() + ele.slice(1);
    }
  });
  return result.join("");
};
const kebabCase = (str) => {
  return str.replace(" ", "-").toLowerCase();
};

userInput.addEventListener("input", (e) => {
  lowerCaseOutput.innerText = e.target.value.toLowerCase();

  upperCaseOutput.innerText = e.target.value.toUpperCase();

  camelCaseOutput.innerText = camelCase(e.target.value);

  pascalCaseOutput.innerText = pascalCase(e.target.value);
  kebabCaseOutput.innerText = kebabCase(e.target.value);
  trimOutput.innerText = e.target.value.trim()
});
