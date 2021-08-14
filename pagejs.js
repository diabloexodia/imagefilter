var image;
function upload()
{ var fileinput=document.getElementById("fin");
  var imgcanvas=document.getElementById("can");
 
   image = new SimpleImage(fileinput);
 var canvas = document.getElementById("can");
  image.drawTo(canvas);
}

function change()
{  var fileinput=document.getElementById("fin");
 var filename=fileinput.value;
 var canvas = document.getElementById("can");


for(var pixel of image.values()){
avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3

pixel.setRed(avg);
pixel.setGreen(avg);
  pixel.setBlue(avg);
}
image.drawTo(canvas);
}
