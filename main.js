Webcam.set({
  width:280,
  height:300,
  image_format: "png",
  png_quality:90,
  constraints:{
      facingMode:"environment"
  }
});
 
Webcam.attach("#camera")

function take(){
  console.log("hi")
  Webcam.snap(function(data_uri) { document.getElementById("snap").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; });
}

console.log("ml5version" , ml5.version)

classifier=ml5.imageClassifier("MobileNet" , modelloaded)

function modelloaded(){
  console.log("Model has been loaded")
}

function predict(){

   img = document.getElementById("captured_image")
   classifier.classify(img , getresults)
}

function getresults(error,results){
  if (error){
    console.log(error)
  }
  else{
    console.log(results)
    document.getElementById("answer").innerHTML=results[0].label
  }
}