document.addEventListener("DOMContentLoaded", () => {
  const registrationForm = document.getElementById("registration-form");

  registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(registrationForm);
    const registrationData = {};

    formData.forEach((value, key) => {
      registrationData[key] = value;
    });

    // Here you can send the registration data to your backend or store it in a database
    console.log("Registration data:", registrationData);

    // Optionally, you can redirect the user to a thank you page
    window.location.href = "thankyou.html";
  });
});
