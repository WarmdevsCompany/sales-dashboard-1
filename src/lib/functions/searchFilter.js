export default function searchKeyup() {
    // Declare variables
    var input, filter, ul, li, targetValue, i, txtValue;
    input = document.getElementById('search');
    filter = input.value.toLowerCase();
    ul = document.getElementById("notifications");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      targetValue = li[i].querySelector(".title");
      txtValue = targetValue.textContent || targetValue.innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}