Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("result");

webcam.attach('#camera');

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/uSIBSSHlV/model.json', modelLoaded);

console.log('ml5 version: ', ml5.version);

function modelLoaded(){
    console.log("model loaded");
}

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = "first prediction is " + prediction_1;
    speak_data2 = "second prediction is " + prediction_2;
    var utter_this = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utter_this);
}