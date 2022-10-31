extra = {
  definechar() {
    let url = window.location.search;
    if (url=="") {
      return
    }
    let urlparams = new URLSearchParams(url);
    let package = urlparams.get('mode');
    if (package=="isa") {
      gamevalues.cross="heart.svg";
    } else if (package=="narv") {
      gamevalues.cross="america.png"
    }
  }
}