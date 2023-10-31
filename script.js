function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


window.onload = choosePic;

var myPix = new Array("Hero/tk68.jpg","Hero/_MG_1371.jpg","Hero/_MG_3759.jpg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
    }

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }