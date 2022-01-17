priediction1 = ""

Webcam.set({
    height: 1080,
    width: 1920,
    image_format: 'png',
    png_quality: 100
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function JhonnySnap(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML= '<img id="Jhonny" src="'+data_url+'"/>';
    });
}
function JhonnyCam(){
    img = document.getElementById("Jhonny");
    classifier.classify(img, gotResult);
}
console.log('ml5.version',ml5.version);
classifier = ml5.imageClassifier('',modelloaded);
function modelloaded(){
    console.log('Ayo Bro! Model is readdy yall! Its also loaded Yall!!! yayie! Jhonny!');
}
function speak(){
    var synth= window.speachSynthisis;
    speak_data_1 = "Da Jhonny webcan too da: "+priediction1;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        prediction = results[0].label;
        speak();
        if(results[0].label == "Amazing Yall"){
            document.getElementById("result_emoji").innerHTML = "&#128076;";
            
        }
        if(results[0].label == "Best Ya"){
            document.getElementById("result_emoji").innerHTML = "&#128077";
            
        }
        if(results[0].label == "Victory Yeah"){
            document.getElementById("result_emoji").innerHTML = "&#9996;";
            
        }
        if(results[0].label == "Unity Yee"){
            document.getElementById("result_emoji").innerHTML = "&#9994;";
           
        }
        if(results[0].label == "Clap Yup"){
            document.getElementById("result_emoji").innerHTML = "&#128079;";
           
        } 
        if(results[0].label == "Rock Yippie"){
            document.getElementById("result_emoji").innerHTML = "&#129304;";
            
        }
        if(results[0].label == "Bye Yo"){
            document.getElementById("result_emoji").innerHTML = "&#128075;";
            
        }
    }
        }
    
        