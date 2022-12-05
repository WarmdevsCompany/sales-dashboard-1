export function hidePasswords() {
 let inputs = document.querySelectorAll('input[type="text"]')
 inputs.forEach(input => input.setAttribute("type", "password"))
}