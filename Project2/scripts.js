var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}


var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex,colorCode) {
  tabButtons.forEach(functon(node))
    node.style.backgroundColor="";
    node.style.color="";
  };
  tabButtons[panelIndex].style.backgroundColor=colorCode;
  tabButtons[panelIndex].style.color="black";
  tabPanels.forEach(function(node) {
    node.style.display="none";
  });
  tabPanels[panelIndex].style.display="block";
  tabPanels[panelIndex].style.backgroundColor="colorCode";
