var prediction1="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
var camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="final" src="'+data_uri+'"/>';
    });
}
  console.log(ml5.version);
  var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/IGZvUeqAX/model.json",loaded);
  function loaded(){
      console.log("model has been loaded")
  }
  