var i=0;
    var a=[];
    a[0]="web developer"
    a[1]="programmmer"
    a[2]="bussiness enthusiast"
    var time = 2000; 
    function changeImg() {
      document.getElementById("about").innerHTML = a[i];
      if (i < 2) {
        i++;
      } else {
        i = 0;
      }
      setTimeout("changeImg()", time);
    }
    window.onload = changeImg;