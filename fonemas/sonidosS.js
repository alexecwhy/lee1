var html5_audiotypes={
"mp3": "audio/mpeg",
"mp4": "audio/mp4",
"ogg": "audio/ogg",
"wav": "audio/wav"
}

function createsoundbite(sound){
var html5audio=document.createElement('audio')
if (html5audio.canPlayType){ //Comprobar soporte para audio HTML5
for (var i=0; i<arguments.length; i++){
var sourceel=document.createElement('source')
sourceel.setAttribute('src', arguments[i])
if (arguments[i].match(/.(w+)$/i))
sourceel.setAttribute('type', html5_audiotypes[RegExp.$1])
html5audio.appendChild(sourceel)
}
html5audio.load()
html5audio.playclip=function(){
html5audio.pause()
html5audio.currentTime=0
html5audio.play()
}
return html5audio
}
else{
return {playclip:function(){throw new Error('Su navegador no soporta audio HTML5')}}
}
}

//Inicializar sonidos
//var hover1 = createsoundbite('audio/pc.mp3');
//var hover2 = createsoundbite('audio/bambu_1.mp3');

//Nótese que se pueden añadir ficheros con otras extensiones para mayor compatibilidad
var click1 = createsoundbite('audio/pa.mp3');
var click2 = createsoundbite('audio/pi.mp3');
var click3 = createsoundbite('audio/po.mp3');
var clickp4 = createsoundbite('audio/pe.mp3');
var click5 = createsoundbite('audio/pu.mp3');


var clicks1 = createsoundbite('audio/sa.mp3');
var clicks2 = createsoundbite('audio/se.mp3');
var clicks3 = createsoundbite('audio/si.mp3');
var clicks4 = createsoundbite('audio/so.mp3');
var clicks5 = createsoundbite('audio/su.mp3');


var clickl1 = createsoundbite('audio/la.mp3');
var clickl2 = createsoundbite('audio/le.mp3');
var clickl3 = createsoundbite('audio/li.mp3');
var clickl4 = createsoundbite('audio/lo.mp3');
var clickl5 = createsoundbite('audio/lu.mp3');


var clickn1 = createsoundbite('audio/na.mp3');
var clickn2 = createsoundbite('audio/ne.mp3');
var clickn3 = createsoundbite('audio/ni.mp3');
var clickn4 = createsoundbite('audio/no.mp3');
var clickn5 = createsoundbite('audio/nu.mp3');


var clickt1 = createsoundbite('audio/ta.mp3');
var clickt2 = createsoundbite('audio/te.mp3');
var clickt3 = createsoundbite('audio/ti.mp3');
var clickt4 = createsoundbite('audio/to.mp3');
var clickt5 = createsoundbite('audio/tu.mp3');

var clickd1 = createsoundbite('audio/da.mp3');
var clickd2 = createsoundbite('audio/de.mp3');
var clickd3 = createsoundbite('audio/di.mp3');
var clickd4 = createsoundbite('audio/do.mp3');
var clickd5 = createsoundbite('audio/du.mp3');

var clickr1 = createsoundbite('audio/ra.mp3');
var clickr2 = createsoundbite('audio/re.mp3');
var clickr3 = createsoundbite('audio/ri.mp3');
var clickr4 = createsoundbite('audio/ro.mp3');
var clickr5 = createsoundbite('audio/ru.mp3');

var clickrr1 = createsoundbite('audio/rra.mp3');
var clickrr2 = createsoundbite('audio/rre.mp3');
var clickrr3 = createsoundbite('audio/rri.mp3');
var clickrr4 = createsoundbite('audio/rro.mp3');
var clickrr5 = createsoundbite('audio/rru.mp3');

var clickc1 = createsoundbite('audio/ca.mp3');
var clickc2 = createsoundbite('audio/co.mp3');
var clickc3 = createsoundbite('audio/cu.mp3');

var clickni1 = createsoundbite('audio/nia.mp3');
var clickni2 = createsoundbite('audio/nie.mp3');
var clickni3 = createsoundbite('audio/nii.mp3');
var clickni4 = createsoundbite('audio/nio.mp3');
var clickni5 = createsoundbite('audio/niu.mp3');
//]]>



