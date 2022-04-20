const rateButtons = document.querySelectorAll(".rate-button");
let activeButton;
let clickedFlag = false;
rateButtons.forEach((element) => {
  element.addEventListener("click", () => {
    rateButtons.forEach((element) => {
      if (element.classList.contains("active-btn"))
        element.classList.remove("active-btn");
    });

    element.classList.add("active-btn");
    activeButton = element;
    clickedFlag = true;
  });
});


  const submitButton = document.querySelector(".submit-btn");
  const mainContainer1 = document.querySelector(".main-container");
  const mainContainer2 = document.querySelector(".main-container-secondary");

  submitButton.addEventListener("click", () => {
    if (clickedFlag) {
    mainContainer1.classList.toggle("hide");
    mainContainer2.classList.toggle("hide");

    const statusReport = document.querySelector(".status-report");
    statusReport.textContent = `You selected ${activeButton.textContent} out of 5`;
    }

    });

