function openTab(evt, tabName) {
  var i, tabContent, tab;

  // Esconde todos os elementos com a classe "tab-content"
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Remove a classe "active" de todos os elementos com a classe "tab"
  tab = document.getElementsByClassName("tab");
  for (i = 0; i < tab.length; i++) {
    tab[i].className = tab[i].className.replace(" active", "");
  }

  // Mostra o conteúdo da aba atual e adiciona a classe "active" ao elemento da aba
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Define a aba inicialmente ativa
document.getElementById("tab1").style.display = "block";
document.getElementsByClassName("tab")[0].className += " active";
