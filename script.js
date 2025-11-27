const emailField = document.getElementById("email-address-input");
emailField.focus({
  preventScroll: true,

});

document.getElementById("mobile-menu").onclick = () => {
  document.getElementById("navbar").style.display =
    document.getElementById("navbar").style.display === "block"
      ? "none"
      : "block";
};

