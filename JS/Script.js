var marca = true;

function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
    } else {
        cancelFullScreen.call(doc);
    }

    if (marca == true) {
        document.getElementById("fullscreen").src = "../IMG/NoneFullScreen.svg";
        marca = false;
    } else {
        document.getElementById("fullscreen").src = "../IMG/FullScreen.svg";
        marca = true;
    }

}

//setTimeout(function () {
//    $(".recomend").fadeIn(0);
//}, 0);
//
//setTimeout(function () {
//    $(".recomend").fadeOut(0);
//}, 0);
//
//setTimeout(function () {
//    $(".spectrace").fadeIn(0);
//}, 0);
//
//setTimeout(function () {
//    $(".spectrace").fadeOut(0);
//}, 0);
//
//setTimeout(function () {
//    $(".presenta").fadeIn(0);
//}, 0);
//
//setTimeout(function () {
//    $(".presenta").fadeOut(0);
//}, 0);
//
//setTimeout(function () {
//    $(".sitio").fadeIn(0);
//}, 0);
//
//setTimeout(function () {
//    $(".sitio").fadeOut(0);
//}, 0);
//
//setTimeout(function () {
//    $(".año").fadeIn(0);
//}, 0);
//
//setTimeout(function () {
//    $(".año").fadeOut(0);
//}, 0);
//
//setTimeout(function () {
//    $(".black").fadeOut(0);
//}, 0);
//
//setTimeout(function () {
//    $(".context").fadeOut(0);
//}, 0);
//
//setTimeout(function () {
//    $(".saltar_intro").fadeIn(0);
//}, 0);
//
//setTimeout(function () {
//    $("#intro").fadeIn(0);
//}, 0);



setTimeout(function () {
    $(".recomend").fadeIn(1500);
}, 0);

setTimeout(function () {
    $(".recomend").fadeOut(1500);
}, 2500);

setTimeout(function () {
    $(".spectrace").fadeIn(1500);
}, 4000);

setTimeout(function () {
    $(".spectrace").fadeOut(1500);
}, 7000);

setTimeout(function () {
    $(".presenta").fadeIn(1500);
}, 4000);

setTimeout(function () {
    $(".presenta").fadeOut(1500);
}, 7000);

setTimeout(function () {
    $(".sitio").fadeIn(1500);
}, 8500);

setTimeout(function () {
    $(".sitio").fadeOut(1500);
}, 12000);

setTimeout(function () {
    $(".año").fadeIn(1500);
}, 8500);

setTimeout(function () {
    $(".año").fadeOut(1500);
}, 12000);

setTimeout(function () {
    $(".black").fadeOut(1500);
}, 9000);

setTimeout(function () {
    $(".context").fadeOut(1500);
}, 13000);

setTimeout(function () {
    $(".saltar_intro").fadeIn(1500);
}, 13000);

setTimeout(function () {
    $("#intro").fadeIn(1500);
}, 14000);

setTimeout(function () {
    document.getElementById("timbre").play();
}, 12000);

function menu() {
    var audio = document.getElementById("audio_menu");
    audio.play();
    audio.loop = true;
    document.getElementById("carga").style.display = "none";
    setTimeout(function () {
        $("#menu").css("display", "flex")
            .hide()
            .fadeIn(2000);
    }, 0);
}

var leftActualSlider = 0;

function moureSlider(sumaRes) {

    leftActualSlider = leftActualSlider + sumaRes;

    if (leftActualSlider <= -1700) {
        leftActualSlider = -1700;
    }

    if (leftActualSlider >= -0) {
        leftActualSlider = -0;
    }



    document.getElementById('cImg').style.left = leftActualSlider + 'vw';

}


function moureSliderD(sumaRes) {

    leftActualSlider = sumaRes;

    document.getElementById('cImg').style.left = leftActualSlider + 'vw';

    document.getElementById("dibujos").style.display = "block";
    document.getElementById("cuadrado").style.display = "none";

}

function moureGrid(sumaRes) {

    leftActualSlider = leftActualSlider + sumaRes;

    if (leftActualSlider <= -200) {
        leftActualSlider = -200;
    }

    if (leftActualSlider >= -0) {
        leftActualSlider = -0;
    }



    document.getElementById('contenidorGrid').style.left = leftActualSlider + 'vw';

}


function instrucciones() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("flexCreditos").style.display = "none";
    setTimeout(function () {
        $("#flexInstrucciones").css("display", "flex")
            .hide()
            .fadeIn(2000);
    }, 0);
}

function arte() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("flexCreditos").style.display = "none";
    document.getElementById("flexCreditos").style.display = "none";
    setTimeout(function () {
        $("#cuadrado").css("display", "flex")
            .hide()
            .fadeIn(2000);
    }, 0);

}

function cruzSlider() {
    document.getElementById("dibujos").style.display = "none";
    document.getElementById("cuadrado").style.display = "block";

}

function tornarMenu() {
    var audio = document.getElementById("audio_menu");
    audio.play();
    audio.loop = true;
    document.getElementById("cuadrado").style.display = "none";
    document.getElementById("flexCreditos").style.display = "none";
    document.getElementById("flexInstrucciones").style.display = "none";
    setTimeout(function () {
        $("#menu").css("display", "flex")
            .hide()
            .fadeIn(2000);
    }, 0);

}

function creditos() {
    document.getElementById("menu").style.display = "none";
    setTimeout(function () {
        $("#flexCreditos").css("display", "flex")
            .hide()
            .fadeIn(2000);
    }, 0);

}









function saltarIntro() {
    generaPregunta(45);
    document.getElementById('saltar_intro').style.display = "none";
    var sound = document.getElementById('audio1');
    sound.setAttribute('src', "../AUDIO/Tormenta.mp3");
    sound.play();
    sound.loop = true;
    var sound2 = document.getElementById('audio2');
    sound2.pause();
}

function empezar() {
    document.getElementById('intro').style.display = "none";
    generaPregunta(0);
}

var life = 100;

function generaPregunta(indexPregunta, damage = 0, object) {

    // VIDA
    life = life + damage;
    if (life > 100) {
        life = 100;
    }

    document.getElementById('vida').innerHTML = life;
    document.getElementById('pregunta').style.opacity = "0";
    document.getElementById('pregunta').innerHTML = "";


    // TRANSICIONES
    if (pregunta[indexPregunta].img1 != null) {
        var mediaquery = window.matchMedia("(max-width: 600px)");
        if (mediaquery.matches) {
            document.styleSheets[0].addRule('.div_joc:before', 'background-image: ' + pregunta[indexPregunta].img1 + ';');
        } else {
            document.styleSheets[0].addRule('.div_joc:before', 'background-image: ' + pregunta[indexPregunta].img2 + ';');
        }
        if (pregunta[indexPregunta].transicion == "si") {
            $('#divJoc').addClass("anima");
            setTimeout(function () {
                $('#divJoc').removeClass("anima");
            }, 10000);
        }
    }
    if (pregunta[indexPregunta].opacidad == "true") {
        document.styleSheets[0].addRule('.div_joc', 'background-color: rgba(0,0,0,.6);');
    }
    if (pregunta[indexPregunta].opacidad == "false") {
        document.styleSheets[0].addRule('.div_joc', 'background-color: rgba(0,0,0,0);');
    }

    //AUDIO
    if (pregunta[indexPregunta].sound == "1") {
        var sound = document.getElementById('audio1');
        sound.setAttribute('src', pregunta[indexPregunta].audio);
        sound.play();
        sound.loop = true;
    }

    if (pregunta[indexPregunta].sound == "2") {
        var sound = document.getElementById('audio2');
        sound.setAttribute('src', pregunta[indexPregunta].audio);
        sound.play();
        sound.loop = true;
    }

    if (pregunta[indexPregunta].sound == "3") {
        var sound = document.getElementById('audio1');
        sound.setAttribute('src', pregunta[indexPregunta].audio1);
        sound.play();
        sound.loop = true;
        var sound2 = document.getElementById('audio2');
        sound2.setAttribute('src', pregunta[indexPregunta].audio2);
        sound2.play();
        sound2.loop = false;
    }

    if (pregunta[indexPregunta].sound == "4") {
        var sound = document.getElementById('audio1');
        sound.setAttribute('src', pregunta[indexPregunta].audio);
        sound.play();
        sound.loop = true;
        var sound2 = document.getElementById('audio2');
        sound2.pause();
    }

    if (pregunta[indexPregunta].sound == "5") {
        var sound = document.getElementById('audio1');
        sound.setAttribute('src', pregunta[indexPregunta].audio);
        sound.play();
        sound.loop = false;
    }

    if (pregunta[indexPregunta].sound == "6") {
        var sound = document.getElementById('audio1');
        sound.pause();
        var sound2 = document.getElementById('audio2');
        sound2.pause();
    }

    if (pregunta[indexPregunta].sound == "7") {
        var sound = document.getElementById('audio1');
        sound.pause();
        var sound2 = document.getElementById('audio2');
        sound2.setAttribute('src', pregunta[indexPregunta].audio);
        sound2.play();
        sound2.loop = true;
    }

    if (pregunta[indexPregunta].sound == "8") {
        var sound2 = document.getElementById('audio2');
        sound2.setAttribute('src', pregunta[indexPregunta].audio);
        sound2.play();
        sound2.loop = false;
    }

    //PREGUNTAS
    var divText = document.createElement('p');
    divText.className = 'texto_contenedor';
    divText.innerHTML = pregunta[indexPregunta].text;

    var divOpcions = document.createElement('div');
    divOpcions.className = 'respuesta_contenedor';


    //RESPOSTES
    if (pregunta[indexPregunta].opcionsPregunta[0].triaPregunta == "-->") {
        for (i = 0; i < pregunta[indexPregunta].opcionsPregunta.length; i++) {
            var flecha = document.createElement('img');
            flecha.src = "../IMG/Flecha.svg";
            flecha.className = 'flecha';
            var segSit;
            var aleatori = Math.floor(Math.random() * 100) + 1;
            for (j = pregunta[indexPregunta].opcionsPregunta[i].seguentPregunta.length - 1; j >= 0; j--) {
                if (aleatori < pregunta[indexPregunta].opcionsPregunta[i].seguentPregunta[j].probabilitat) {
                    segSit = pregunta[indexPregunta].opcionsPregunta[i].seguentPregunta[j].situacio;
                    damage = pregunta[indexPregunta].opcionsPregunta[i].seguentPregunta[j].vida;
                    objecte = pregunta[indexPregunta].opcionsPregunta[i].seguentPregunta[j].objeto;
                }
            }

            flecha.setAttribute('onclick', "generaPregunta(" + segSit + ", " + damage + ",'" + objecte + "')");

            divOpcions.appendChild(flecha);
        }
    } else {
        for (i = 0; i < pregunta[indexPregunta].opcionsPregunta.length; i++) {
            var opcio = document.createElement('a');
            opcio.className = 'respuesta';
            opcio.href = '#';
            var segSit;
            var aleatori = Math.floor(Math.random() * 100) + 1;
            for (j = pregunta[indexPregunta].opcionsPregunta[i].seguentPregunta.length - 1; j >= 0; j--) {
                if (aleatori < pregunta[indexPregunta].opcionsPregunta[i].seguentPregunta[j].probabilitat) {
                    segSit = pregunta[indexPregunta].opcionsPregunta[i].seguentPregunta[j].situacio;
                    damage = pregunta[indexPregunta].opcionsPregunta[i].seguentPregunta[j].vida;
                    objecte = pregunta[indexPregunta].opcionsPregunta[i].seguentPregunta[j].objeto;
                    indexSit = j;
                }
            }

            opcio.setAttribute('onclick', "generaPregunta(" + segSit + ", " + damage + ",'" + objecte + "')");
            if (pregunta[indexPregunta].opcionsPregunta[0].triaPregunta == "CONTEXTO") {
                setTimeout(generaPregunta, 6000, pregunta[indexPregunta].opcionsPregunta[0].seguentPregunta[indexSit].situacio, damage, object);
            } else {
                if (pregunta[indexPregunta].opcionsPregunta[0].triaPregunta == "BLACK") {
                    setTimeout(function () {
                        $(".pantallaAlone").css("display", "flex")
                            .hide()
                            .fadeIn(0);
                    }, 1000);
                    setTimeout(function () {
                        $(".pantallaAlone").fadeOut(1500);
                    }, 3000);
                    setTimeout(generaPregunta, 8000, pregunta[indexPregunta].opcionsPregunta[0].seguentPregunta[indexSit].situacio, damage, object);
                } else {
                    if (pregunta[indexPregunta].opcionsPregunta[0].triaPregunta == "BLACKINTRO") {
                        setTimeout(generaPregunta, 1500, pregunta[indexPregunta].opcionsPregunta[0].seguentPregunta[indexSit].situacio, damage, object);
                    } else {
                        opcio.innerHTML = pregunta[indexPregunta].opcionsPregunta[i].triaPregunta;
                        if (segSit >= 0) {
                            divOpcions.appendChild(opcio);
                        }
                    }
                }
            }

        }
    }
    if (segSit > 0) {
        setTimeout(function () {
            $("#pregunta").css("opacity", 1)
                .hide()
                .fadeIn(2000);
        }, 0);
    }
    if (segSit > 43) {
        document.getElementById('saltar_intro').style.display = "none";
    }

    // PREGUNTAS ESPECIALES
    if (segSit == -1) {
        document.getElementById('pregunta').style.display = "none";
        generaInventario(0);
        setTimeout(function () {
            $("#inventario").css("display", "flex")
                .hide()
                .fadeIn(2000);
        }, 0);
        setTimeout(function () {
            $("#vida").css("display", "flex")
                .hide()
                .fadeIn(2000);
        }, 0);
        setTimeout(function () {
            $("#opciones").css("display", "flex")
                .hide()
                .fadeIn(2000);
        }, 0);
    }
    if (segSit == -2) {
        if (comprovarObjecte(objecte)) {
            generaPregunta(indexPregunta + 1);
        } else {
            if (pregunta[indexPregunta].opcionsPregunta[0].seguentPregunta[0].comida == "si") {
                setTimeout(function () {
                    $("#error6").css("display", "flex")
                        .hide()
                        .fadeIn(1000);
                }, 0);
            } else {
                setTimeout(function () {
                    $("#error4").css("display", "flex")
                        .hide()
                        .fadeIn(1000);
                }, 0);
            }
        }
    }
    if (segSit == -3) {
        document.getElementById('pregunta').style.display = "none";
        mochila(indexPregunta, objecte);
        setTimeout(function () {
            $("#mochila").css("display", "flex")
                .hide()
                .fadeIn(2000);
        }, 0);

    }
    if (segSit == -4) {
        if (pregunta[indexPregunta].opcionsPregunta[0].seguentPregunta[0].resta == true) {
            resta_objeto(indexPregunta, object);
        } else {
            suma_objeto(indexPregunta, object);
        }
    }
    if (segSit == -5) {
        document.getElementById('pregunta').style.display = "none";
        generaDia(indexPregunta);
    }
    if (segSit == -6) {
        document.getElementById('pregunta').style.display = "none";
        arenasMovedizas(indexPregunta);
        setTimeout(function () {
            $("#arenasMovedizas").css("display", "flex")
                .hide()
                .fadeIn(2000);
        }, 0);
    }

    if (segSit == -7) {
        document.getElementById('pregunta').style.display = "none";
        pantallaMuerte(indexPregunta);
        setTimeout(function () {
            $("#muerte").css("display", "flex")
                .hide()
                .fadeIn(2000);
        }, 0);
        if (indexPregunta = !264) {
            var sound = document.getElementById('audio1');
            sound.setAttribute('src', "../AUDIO/Muerte.mp3");
            setTimeout(function () {
                sound.play();
            }, 0);
        }

        sound.loop = false;
        var sound2 = document.getElementById('audio2');
        sound2.pause();
    }

    if (segSit == -8) {
        document.getElementById('pregunta').style.display = "none";
        carta(indexPregunta);
        setTimeout(function () {
            $("#carta").css("display", "flex")
                .hide()
                .fadeIn(2000);
        }, 0);
    }

    document.getElementById('pregunta').appendChild(divText);
    document.getElementById('pregunta').appendChild(divOpcions);
}

function siguiente_objetos() {
    if (objetos == 5) {
        generaPregunta(56);
        document.getElementById("inventario").style.display = "none";
    }

    if (objetos < 5) {
        setTimeout(function () {
            $("#error3").css("display", "flex")
                .hide()
                .fadeIn(1000);
        }, 0);
    }

    if (objetos > 5) {
        setTimeout(function () {
            $("#error2").css("display", "flex")
                .hide()
                .fadeIn(1000);
        }, 0);
    }
}

function ok() {
    setTimeout(function () {
        $("#error2").fadeOut(500);
    }, 0);
    setTimeout(function () {
        $("#error3").fadeOut(500);
    }, 0);
    setTimeout(function () {
        $("#error5").fadeOut(500);
    }, 0);
}

function menos5obj() {
    document.getElementById("error3").style.display = "none";
    document.getElementById("inventario").style.display = "none";
    generaPregunta(56);
}


var inventario = [
    {
        "text": "Elige 5 objetos que puedes llevar en la mochila:",
        "objeto": [
            "CUERDA",
            "ESPEJO",
            "NAVAJA",
            "ROPA",
            "GASOLINA",
            "MECHERO",
            "BOTIQUÍN",
            "MÓVIL",
            "LINTERNA",
            "MANZANA"
        ]
    }
];

function generaInventario(indexObjeto) {

    var divTextObjeto = document.createElement('div');
    divTextObjeto.className = 'texto_contenedor';
    divTextObjeto.innerHTML = inventario[indexObjeto].text;

    var flecha = document.createElement('img');
    flecha.src = "../IMG/Flecha.svg"
    flecha.className = 'flecha';
    flecha.setAttribute('onclick', "siguiente_objetos()");

    var divInventario = document.createElement('div');
    divInventario.className = 'row';

    var inventari1 = document.createElement('div');
    inventari1.className = 'respuesta_objetos';

    var inventari2 = document.createElement('div');
    inventari2.className = 'respuesta_objetos';

    for (cont = 0; cont <= 4; cont++) {
        var objeto = document.createElement('a');
        objeto.className = 'respuesta';
        objeto.id = "respuesta" + cont + "";
        objeto.href = '#';
        objeto.setAttribute('onclick', "escoger_objetos(" + cont + ", 'respuesta" + cont + "')");
        objeto.innerHTML = inventario[indexObjeto].objeto[cont];

        inventari1.appendChild(objeto);
    }
    for (cont = 5; cont < 10; cont++) {
        var objeto = document.createElement('a');
        objeto.className = 'respuesta';
        objeto.id = "respuesta" + cont + "";
        objeto.href = '#';
        objeto.setAttribute('onclick', "escoger_objetos(" + cont + ", 'respuesta" + cont + "')");
        objeto.innerHTML = inventario[indexObjeto].objeto[cont];

        inventari2.appendChild(objeto);
    }
    document.getElementById('inventario').appendChild(divTextObjeto);
    document.getElementById('inventario').appendChild(flecha);
    divInventario.appendChild(inventari1);
    divInventario.appendChild(inventari2);
    document.getElementById('inventario').appendChild(divInventario);
}

var objectosInventario = [
    {
        nombre: "CUERDA",
        seleccionado: false
    },
    {
        nombre: "ESPEJO",
        seleccionado: false
    },
    {
        nombre: "NAVAJA",
        seleccionado: false
    },
    {
        nombre: "ROPA",
        seleccionado: false
    },
    {
        nombre: "GASOLINA",
        seleccionado: false
    },
    {
        nombre: "MECHERO",
        seleccionado: false
    },
    {
        nombre: "BOTIQUÍN",
        seleccionado: false
    },
    {
        nombre: "MÓVIL",
        seleccionado: false
    },
    {
        nombre: "LINTERNA",
        seleccionado: false
    },
    {
        nombre: "COMIDA",
        seleccionado: false
    },
    {
        nombre: "PALO",
        seleccionado: false
    },
    {
        nombre: "ARCO",
        seleccionado: false
    }
];

var objetos = 0;

var contadorInventari = 0;

function escoger_objetos(obj, resp) {

    if (objectosInventario[obj].seleccionado == false) {
        objetos++;
        objectosInventario[obj].seleccionado = true;
        document.getElementById(resp).style.backgroundColor = "#FDF38A";
        document.getElementById(resp).style.border = "1px solid #FDF38A";
        document.getElementById(resp).style.color = "#000";

    } else {
        objetos--;
        objectosInventario[obj].seleccionado = false;
        document.getElementById(resp).style.backgroundColor = "";
        document.getElementById(resp).style.border = "1px solid #fff";
        document.getElementById(resp).style.color = "#fff";
    }
}

function comprovarObjecte(object) {
    for (var i = 0; i < objectosInventario.length; i++) {
        if (objectosInventario[i].nombre == object && objectosInventario[i].seleccionado == true) {
            return true;
        }
    }
    return false;
}

var text = [
    {
        elige: "Elige el objeto que necesites:"
    }
]

function mochila(indexPregunta, obj) {

    document.getElementById('mochila').innerHTML = "";

    var texto = document.createElement('div');
    texto.className = 'texto_contenedor';
    texto.innerHTML = text[0].elige;

    var inventari = document.createElement('div');
    inventari.className = 'respuesta_objetos';

    for (var i = 0; i < objectosInventario.length; i++) {
        if (objectosInventario[i].seleccionado == true) {
            var objeto = document.createElement('a');
            objeto.className = 'respuesta';
            objeto.href = '#';
            objeto.setAttribute('onclick', "escoger_objeto(" + indexPregunta + ", '" + obj + "', " + i + ")");
            objeto.innerHTML = objectosInventario[i].nombre;
            inventari.appendChild(objeto);
        }
    }
    document.getElementById('mochila').appendChild(texto);
    document.getElementById('mochila').appendChild(inventari);
}

function escoger_objeto(indexPregunta, obj, i) {
    if (objectosInventario[i].nombre == obj) {
        document.getElementById('mochila').style.display = "none";
        generaPregunta(indexPregunta + 1);
    } else {
        setTimeout(function () {
            $("#error5").css("display", "flex")
                .hide()
                .fadeIn(1000);
        }, 0);
    }
}

function suma_objeto(indexPregunta, obj) {
    for (var i = 0; i < objectosInventario.length; i++) {
        if (objectosInventario[i].nombre == obj) {
            objectosInventario[i].seleccionado = true;
            generaPregunta(indexPregunta + 1);
        }
    }
}

function resta_objeto(indexPregunta, obj) {
    for (var i = 0; i < objectosInventario.length; i++) {
        if (objectosInventario[i].nombre == obj) {
            objectosInventario[i].seleccionado = false;
            generaPregunta(indexPregunta + 1);
        }
    }
}

var dies = [
    {
        "dia": "DÍA 2",
        "subtitulo": "EXPLORACIÓN"
    },
    {
        "dia": "DÍA 3",
        "subtitulo": "DESMAYO"
    },
    {
        "dia": "DÍA 4",
        "subtitulo": "ALUCINACIÓN"
    },
    {
        "dia": "DÍA 5",
        "subtitulo": "REFLEXIÓN"
    },
    {
        "dia": "DÍA 6",
        "subtitulo": "RESCATE"
    }
];

var contadorDies = 0;

function generaDia(indexDia) {

    document.getElementById('divDia').innerHTML = "";
    var divDia = document.createElement('div');
    divDia.className = 'Dia';

    var textDia = document.createElement('h3');
    textDia.className = 'textDia';
    textDia.innerHTML = dies[contadorDies].dia;

    var subtitulo = document.createElement('p');
    subtitulo.className = 'subtitulo';
    subtitulo.innerHTML = dies[contadorDies].subtitulo;

    divDia.appendChild(textDia);
    divDia.appendChild(subtitulo);
    document.getElementById('divDia').appendChild(divDia);
    contadorDies++;
    setTimeout(function () {
        $(".divDia").css("display", "flex")
            .hide()
            .fadeIn(0);
    }, 1000);
    setTimeout(function () {
        $(".divDia").fadeOut(2000);
    }, 3000);
    setTimeout(generaPregunta, 3000, indexDia + 1);

}

var arenas = [{
        "texto": "Por encima tuyo hay una rama de árbol, sin embargo te faltan unos centímetros para cogerla. Empiezas a moverte como si quisieras saltar. Piensas que es la mejor manera de salir.",
        "seleccion": "ESCOGER"
},
    {
        "texto": "Coges un palo que hay flotando encima de las arenas. Lo coges por los dos extremos de manera horizontal y con las manos estiradas apoyas tu torso en las arenas movedizas. Después casi tumbado intentas sacar poco a poco tus piernas. Una vez las tengas libres, sin levantarte, gateas para salir.",
        "seleccion": "ESCOGER"
}];

function arenasMovedizas(indexPregunta) {

    for (i = 0; i < arenas.length; i++) {
        var divMitad = document.createElement('div');
        divMitad.className = 'div_mitad';

        var divText = document.createElement('p');
        divText.className = 'texto_arenas';
        divText.innerHTML = arenas[i].texto;

        var opcio = document.createElement('a');
        opcio.className = 'respuesta';
        opcio.href = '#';
        opcio.innerHTML = arenas[i].seleccion;
        opcio.setAttribute('onclick', "escogerArenas(" + indexPregunta + "," + i + ")");

        divMitad.appendChild(divText);
        divMitad.appendChild(opcio);
        document.getElementById('arenasMovedizas').appendChild(divMitad);
    }
}

function escogerArenas(indexPregunta, posicio) {
    var fraseMuerte = 0;
    if (posicio == 1) {
        document.getElementById('arenasMovedizas').style.display = "none";
        generaPregunta(indexPregunta + 1);
    } else {
        indexPregunta = 0;
        document.getElementById('arenasMovedizas').style.display = "none";
        pantallaMuerte(indexPregunta, fraseMuerte);
        setTimeout(function () {
            $("#muerte").css("display", "flex")
                .hide()
                .fadeIn(2000);
        }, 0);
        var sound = document.getElementById('audio1');
        sound.setAttribute('src', "../AUDIO/Muerte.mp3");
        setTimeout(function () {
            sound.play();
        }, 1000);

        sound.loop = false;
        var sound2 = document.getElementById('audio2');
        sound2.pause();
    }
}

var textoMuerte = [{
        "frase": "Para salir de las arenas movedizas hay que mantener la calma y hacer movimientos lentos y sosegados.",
        "menu": "VOLVER AL MENÚ",
        "posicion": "0"
    },
    {
        "frase": "Desgraciadamente la rana que has comido era una de las ranas venenosas características de la isla. Sin ayuda profesional del médico no se puede sobrevivir.",
        "posicion": "141"
    },
    {
        "frase": "Has corrido todo lo que has podido pero es inútil, no puedes ser más rapido que un oso.<br><br>Te atrapa, te golpea con sus garras y más tarde te devora.",
        "posicion": "168"
    },
    {
        "frase": "Ganar contra un oso sin un arma de fuego es casi imposible si no tienes habilidades especializadas y años de experiencia.<br><br>Has usado un objeto para herir al oso y eso lo ha enfadado. Te golpea con sus garras y más tarde te devora. No has tomado la mejor decisión.",
        "posicion": "171"
    },
    {
        "frase": "Has usado la pistola. No eras lo suficiente fuerte para luchar por tu vida. Has cometido un error muy grande. El día siguiente pasaba un barco por aquí, seguro que desde la playa te habrían visto.",
        "posicion": "214"
    },
    {
        "frase": "",
        "posicion": "264"
    }
];

function pantallaMuerte(indexMort) {
    for (i = 0; i < textoMuerte.length; i++) {
        if (indexMort == textoMuerte[i].posicion) {
            var frase = document.createElement('p');
            frase.className = 'texto_contenedor';
            frase.innerHTML = textoMuerte[i].frase;

            var opcio = document.createElement('a');
            opcio.className = 'respuesta';
            opcio.innerHTML = textoMuerte[0].menu;
            opcio.href = "../index.html";

            document.getElementById('muerte').appendChild(frase);
            document.getElementById('muerte').appendChild(opcio);
        }
    }
    if (indexMort == 0) {
        setTimeout(function () {
            $(".texto_contenedor").fadeOut(0);
        }, 0);
        setTimeout(function () {
            $(".respuesta").fadeOut(0);
        }, 0);
        setTimeout(function () {
            $(".texto_contenedor").fadeIn(5000);
        }, 1000);
        setTimeout(function () {
            $(".respuesta").fadeIn(5000);
        }, 1000);
    } else {
        setTimeout(function () {
            $(".texto_contenedor").fadeIn(5000);
        }, 0);
        setTimeout(function () {
            $(".respuesta").fadeIn(5000);
        }, 0);
    }
}

var opcion = true;

function menuOpcions() {
    if (opcion == true) {
        document.getElementById("opciones").src = "../IMG/MenuCerrar.svg";
        opcion = false;
        setTimeout(function () {
            $("#abrirMenu").css("display", "flex")
                .hide()
                .fadeIn(1000);
        }, 0);
    } else {
        document.getElementById("opciones").src = "../IMG/Menu.svg";
        opcion = true;
        setTimeout(function () {
            $("#abrirMenu").fadeOut(1000);
        }, 0);
    }
}

var textCarta = [{
    "text": "Hola. Me llamo Antonio, o mejor dicho, me llamaba. Porque si estás leyendo esta carta significa que estoy muerto. Estuve atrapado en esta maldita isla 2 años. Mi móvil no tenía cobertura y la batería se terminó rápido. Todo el mundo me tenía por muerto. Ahora tienen razón. Pasé meses intentando hacer vida normal aquí, hacer mi nuevo “hogar”. Sin éxito. Las cosas iban cada vez peor. Me empecé a volver loco, oía voces en mi cabeza. No podía dejar de pensar en lo que me estaba perdiendo. Mi esposa, mis hijos, mis amigos... Lo había perdido todo. Por eso no podía más. Me suicidé. Sí. Lo hice. Osea lo haré en breves. No es fácil, no lo será. Lo que te quiero decir es que si estás en mi situación, te compadezco. En mi pistola dejaré una bala. Para tí. Para que no sufras. Para que no pases por lo que he pasado yo. La decisión es tuya. Por si decides vivir, por favor encuentra a mi familia y diles lo que pasó.<br><br>Antonio González Velázquez de Islas Verde"
}];

function carta(indexPregunta) {
    var frase = document.createElement('p');
    frase.className = 'textcarta';
    frase.innerHTML = textCarta[0].text;

    indexPregunta++;

    var flecha = document.createElement('img');
    flecha.src = "../IMG/Flecha.svg"
    flecha.className = 'flecha';
    flecha.setAttribute('onclick', "ocultaCarta(" + indexPregunta + ")");

    document.getElementById('carta').appendChild(frase);
    document.getElementById('carta').appendChild(flecha);
}

function ocultaCarta(indexPregunta) {
    document.getElementById('carta').style.display = "none";
    generaPregunta(indexPregunta);
}

function okObjeto() {
    generaPregunta(56);
    setTimeout(function () {
        $("#error4").fadeOut(500);
    }, 0);
}

function okComida() {
    generaPregunta(81);
    setTimeout(function () {
        $("#error6").fadeOut(500);
    }, 0);
}
