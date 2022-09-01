export const validatePasswordType = (event) => {
    let input = event.target.parentElement.lastElementChild;
    let type = input.getAttribute("type");
    if (type === "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  };