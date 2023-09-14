const sign = document.querySelector(".SIGN");
const signInRed = document.querySelector(".signInRed");
const signUpRed = document.querySelector(".signUpRed");

const redSignUp = {
  Animation: ["white2", "red2"],
  text: "Hello, Friend!",
  text2: "enter your personal details and start journey with us",
  sign: "SIGN UP",
  add: ["block", "none"],
  border: " 0 20px 20px 0",
};
const redSignIn = {
  Animation: ["white", "red"],
  text: "Welcome Back!",
  text2: "To keep connected with us please login with your personal info",
  sign: "SIGN IN",
  add: ["none", "block"],
  border: " 20px 0  0 20px",
};
const whiteSignUp = {
  h1: "Create Account",
  text: "or use your email for registration",
  sign: "SIGN UP",
  border: " 0 20px 20px 0",
};
const whiteSignIn = {
  h1: "Sign in",
  text: "or use your account",
  sign: "SIGN IN",
  border: " 20px 0  0 20px",
};

const signArr = [
  [redSignUp, whiteSignIn],
  [redSignIn, whiteSignUp],
];

const funcRed = function (obj) {
  const white = document.querySelector(".white");
  const red = document.querySelector(".red");
  const text = document.querySelector(".red-content-text");
  const text2 = document.querySelector(".text-2");
  white.style.animationName = obj[0].Animation[0];
  red.style.animationName = obj[0].Animation[1];
  red.style.borderRadius = obj[0].border;
  white.style.borderRadius = obj[1].border;

  text.textContent = obj[0].text;
  text2.textContent = obj[0].text2;
  sign.textContent = obj[0].sign;
  console.log(obj[0]);
  signUpRed.style.display = obj[0].add[0];
  signInRed.style.display = obj[0].add[1];
};

function funcWhite(obj) {
  const h1 = document.querySelector(".h1-header");
  const text = document.querySelector(".text");
  const forgot = document.querySelector(".forgot-password");
  const input1 = document.querySelector(".input1");
  const input2 = document.querySelector(".input2");
  const btn = document.querySelector(".btn");
  if (obj[1] === whiteSignUp) {
    h1.style.fontSize = "48px";
    forgot.style.display = "none";
    input1.style.display = "none";
    input2.style.display = "flex";
  } else {
    h1.style.fontSize = "64px";
    forgot.style.display = "block";
    input1.style.display = "flex";
    input2.style.display = "none";
  }
  h1.textContent = obj[1].h1;
  text.textContent = obj[1].text;
  btn.textContent = obj[1].sign;
}

const changePlace = function () {
  funcRed(this);
  funcWhite(this);
};

signUpRed.addEventListener("click", changePlace.bind(signArr[1]));
signInRed.addEventListener("click", changePlace.bind(signArr[0]));
