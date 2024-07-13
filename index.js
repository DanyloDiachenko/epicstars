const applicationForm = document.querySelector("#application-form");

applicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const captchaResponse = grecaptcha.getResponse();
    if (!captchaResponse.length > 0) {
        alert("Captcha not completed");

        throw new Error("Captcha not completed");
    } else {
        alert("Success");

        location.reload();
    }
});
