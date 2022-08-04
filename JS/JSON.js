var pregunta = [
    {
        "text": "Empieza el bachillerato.<br><br>A la derecha encuentras un grupo de chicas.<br><br>A la izquierda ves unos cuantos chicos con camisa y gafas hablando de ordenadores.",
        "opcionsPregunta": [ //0
            {
                triaPregunta: "TE SIENTAS AL FINAL",
                seguentPregunta: [{
                    situacio: 1,
                    probabilitat: 100
                }]
            }
        ],
        "audio": "../AUDIO/Intro.mp3",
        "sound": "2"
    },
    {
        "text": "Va entrando gente. Empieza la clase.<br><br>De repente se abre la puerta y entra ella. La chica más hermosa que has visto en tu vida. El mundo ha parado.<br><br> Además se sienta a tu lado.",
        "opcionsPregunta": [ //1
            {
                triaPregunta: "O-O-HOLA... ME LLAMO CHRIS",
                seguentPregunta: [{
                    situacio: 2,
                    probabilitat: 100
                }]
            },
            {
                triaPregunta: "ME GUSTA TU CAMISETA",
                seguentPregunta: [{
                    situacio: 3,
                    probabilitat: 100
                }]
            }
        ]
    },
    {
        "text": "- Hola soy Sofía, dice sonriendo.<br><br>Te pones nervioso y no sabes que decirle.<br><br>Solo le sonríes.",
        "opcionsPregunta": [ //2
            {
                triaPregunta: "LOS DOS ESCUCHÁIS LA CLASE",
                seguentPregunta: [{
                    situacio: 4,
                    probabilitat: 100
                }]
            }
        ]
    },
    {
        "text": "- Gracias, es de los Arctic Monkeys. Soy Sofía, encantada.<br><br>- Yo Chris.<br><br> Oyes al profesor chistar.",
        "opcionsPregunta": [ //3
            {
                triaPregunta: "LOS DOS OS CALLÁIS DE INMEDIATO",
                seguentPregunta: [{
                    situacio: 4,
                    probabilitat: 100
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //4
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 5,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "Lleváis un año siendo amigos. Hoy es el primer día que os besáis.<br><br>Desde el primer día soñabas con este momento.",
        "opcionsPregunta": [ //5
            {
                triaPregunta: "ERES LA PERSONA MÁS FELIZ DEL MUNDO",
                seguentPregunta: [{
                    situacio: 6,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/intro2.png)",
        "img2": "url(../IMG/intro2.png)",
        "transicion": "si"
    },
    {
        "text": "No falta mucho para entrar en la universidad, toca elegir carrera.<br><br>Ella lo tiene muy claro, estudiará medicina.<br><br>Tú aún no sabes que hacer.",
        "opcionsPregunta": [ //6
            {
                triaPregunta: "ESTUDIAR ECONOMÍA",
                seguentPregunta: [{
                    situacio: 7,
                    probabilitat: 100,
                    vida: 0
                }]
            },
            {
                triaPregunta: "ESTUDIAR DERECHO",
                seguentPregunta: [{
                    situacio: 7,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //7
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 8,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "Lleváis un tiempo juntos, es genial.<br><br>Te escapas de clase siempre que puedes para ir a verla a la facultad de medicina.<br><br>Ella te dice que no deberías faltar a clase.",
        "opcionsPregunta": [ //8
            {
                triaPregunta: "AUNQUE LE ENCANTAN TUS VISITAS",
                seguentPregunta: [{
                    situacio: 9,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/intro3.png)",
        "img2": "url(../IMG/intro3.png)",
        "transicion": "si"
    },
    {
        "text": "Te planteas dejar la universidad. No te gusta nada tu carrera.<br><br>Ella te apoya en la decisión.",
        "opcionsPregunta": [ //9
            {
                triaPregunta: "EMPIEZAS A TRABAJAR EN UN SUPERMERCADO",
                seguentPregunta: [{
                    situacio: 10,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //10
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 11,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "2003<br><br>Sophia ha terminado la carrera.<br><br>Tu has ahorrado suficiente dinero para independizarte.",
        "opcionsPregunta": [ //11
            {
                triaPregunta: "OS VAIS A VIVIR JUNTOS",
                seguentPregunta: [{
                    situacio: 12,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/intro10.png)",
        "img2": "url(../IMG/intro10.png)",
        "transicion": "si"
    },
    {
        "text": "Al poco tiempo ella consigue un trabajo como médico.<br><br>Es un buen trabajo y a ella le encanta.",
        "opcionsPregunta": [ //12
            {
                triaPregunta: "Y A TI TE ENCANTA VERLA FELIZ",
                seguentPregunta: [{
                    situacio: 13,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //13
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 14,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "2005<br><br>Tu trabajo te tiene exhausto y aburrido.",
        "opcionsPregunta": [ //14
            {
                triaPregunta: "BUSCAS UN HOBBY",
                seguentPregunta: [{
                    situacio: 15,
                    probabilitat: 100,
                    vida: 0
                }]
            },
            {
                triaPregunta: "DEJAS EL TRABAJO",
                seguentPregunta: [{
                    situacio: 17,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/intro5.png)",
        "img2": "url(../IMG/intro5.png)",
        "transicion": "si"
    },
    {
        "text": "Hablas con Sofía y le cuentas un pequeño secreto.<br><br>Desde pequeño siempre has querido ser piloto.",
        "opcionsPregunta": [ //15
            {
                triaPregunta: "QUIERES TOMAR CLASES DE VUELO",
                seguentPregunta: [{
                    situacio: 16,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Hacía tiempo que ella no te veía tan emocionado por algo.",
        "opcionsPregunta": [ //16
            {
                triaPregunta: "TE ANIMA PARA SACARTE EL CARNÉ",
                seguentPregunta: [{
                    situacio: 20,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "A Sofía no le gusta tu decisión.<br><br>Te dice que si no te gusta tu trabajo, ¿Por qué dejaste la universidad?<br><br>Te molesta su comentario.",
        "opcionsPregunta": [ //17
            {
                triaPregunta: "AUNQUE SABES QUE TIENE RAZÓN",
                seguentPregunta: [{
                    situacio: 18,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Le confiesas un pequeño secreto.<br><br>Desde pequeño siempre has querido ser piloto.",
        "opcionsPregunta": [ //18
            {
                triaPregunta: "ELLA RÍE POR DEBAJO LA NARIZ",
                seguentPregunta: [{
                    situacio: 19,
                    probabilitat: 100
                }]
            }
        ]
    },
    {
        "text": "- Por eso nunca lo había dicho, sabía que te reirías.<br><br>- No seas tonto, si quieres ser piloto estudia.<br>Pero esta vez acabalo.",
        "opcionsPregunta": [ //19
            {
                triaPregunta: "LE DICES QUE SI CON LA CABEZA",
                seguentPregunta: [{
                    situacio: 20,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //20
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 21,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "2008<br><br>Te has sacado el carné de avioneta y habéis pedido un préstamo para comprar una.<br><br>Ahora trabajas haciendo rutas turísticas a las islas Bermudas.<br><br>No es el trabajo de tus sueños.",
        "opcionsPregunta": [ //21
            {
                triaPregunta: "PERO ERES FELIZ",
                seguentPregunta: [{
                    situacio: 22,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/intro4.png)",
        "img2": "url(../IMG/intro4.png)",
        "transicion": "si"
    },
    {
        "text": "Todos los viernes llevas a Sofía a dar una vuelta en avioneta para ver el atardecer.<br><br>Hablais durante horas sobre vuestro futuro como pareja. Ella quiere una gran boda y dos niñas. A ti te encanta escucharla fantasear.",
        "opcionsPregunta": [ //22
            {
                triaPregunta: "SON MOMENTOS ÚNICOS",
                seguentPregunta: [{
                    situacio: 23,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //23
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 24,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "2010",
        "opcionsPregunta": [ //24
            {
                triaPregunta: "VUESTROS PLANES DE FUTURO SE RETRASAN",
                seguentPregunta: [{
                    situacio: 25,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/intro7.png)",
        "img2": "url(../IMG/intro7.png)",
        "transicion": "si"
    },
    {
        "text": "Sofía recibe una oferta de trabajo como investigadora en la universidad más prestigiosa de Florida, a 4 horas en tren de vuestra casa.<br><br>Tu trabajo no te permite mudarte.<br><br>Decide alquilar un apartamento allí.",
        "opcionsPregunta": [ //25
            {
                triaPregunta: "TE PROMETE QUE VENDRÁ A VERTE<br>TODOS LOS FINES DE SEMANA",
                seguentPregunta: [{
                    situacio: 26,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //26
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 27,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "2012<br><br>- ¿Esta semana tampoco ha venido?<br><br>- No, ha tenido que quedarse para terminar no sé que papeleo, le dices a la camarera.",
        "opcionsPregunta": [ //27
            {
                triaPregunta: "LLEVAS MESES BAJANDO AL BAR DE LA ESQUINA",
                seguentPregunta: [{
                    situacio: 28,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/intro8.png)",
        "img2": "url(../IMG/intro8.png)",
        "transicion": "si"
    },
    {
        "text": "- Cariño llevas mucho tiempo así, deberías hablar con ella.<br><br>- No quiero arruinarle el trabajo de sus sueños, ha luchado mucho para conseguirlo.",
        "opcionsPregunta": [ //28
            {
                triaPregunta: "LE SEÑALAS EL VASO Y TE SIRVE OTRA COPA",
                seguentPregunta: [{
                    situacio: 29,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //29
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 30,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)",
        "audio": "../AUDIO/Copa.mp3",
        "sound": "5"
    },
    {
        "text": "Últimamente la notas muy cambiada, cuando viene de visita piensa más en el trabajo que en tí.<br><br>A demás no le gusta que frecuentes tanto el bar.",
        "opcionsPregunta": [ //30
            {
                triaPregunta: "LE DICES QUE AHÍ NO TE SIENTES TAN SOLO",
                seguentPregunta: [{
                    situacio: 31,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/intro9.png)",
        "img2": "url(../IMG/intro9.png)",
        "transicion": "si"
    },
    {
        "text": "Esa misma semana ella sube una publicación en Facebook con un compañero suyo de trabajo.<br><br>Nunca te ha hablado de él aunque en la foto parecen estar muy unidos.",
        "opcionsPregunta": [ //31
            {
                triaPregunta: "TE PONES CELOSO",
                seguentPregunta: [{
                    situacio: 32,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //32
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 33,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "Ese mismo verano pide dos semanas de fiesta para estar contigo.<br><br>Tú estás distante.<br><br>Te pregunta qué te pasa.",
        "opcionsPregunta": [ //33
            {
                triaPregunta: "LE REPROCHAS EL POCO TIEMPO<br>QUE PASA CONTIGO",
                seguentPregunta: [{
                    situacio: 34,
                    probabilitat: 100,
                    vida: 0
                }]
            },
            {
                triaPregunta: "LE DICES QUE ESTÁS CELOSO<br>DE SU COMPAÑERO",
                seguentPregunta: [{
                    situacio: 40,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/intro11.png)",
        "img2": "url(../IMG/intro11.png)",
        "transicion": "si"
    },
    {
        "text": "- Sabías lo duro que sería no vernos cuando aceptaste que me fuera.<br><br>- Me prometiste que vendrías a verme todas las semanas.<br><br>- No tienes ni idea de cuanto trabajo tengo, a demás, me gusta estar ahí.",
        "opcionsPregunta": [ //34
            {
                triaPregunta: "- ANTES TE GUSTABA ESTAR CONMIGO",
                seguentPregunta: [{
                    situacio: 35,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "- A lo mejor deberías tener algo de consideración y alegrarte de que sea feliz. Yo te apoyé en tu estúpida decisión de ser piloto y yo asumí el coste de tu estúpida avioneta.",
        "opcionsPregunta": [ //35
            {
                triaPregunta: "TE SIENTES ATACADO",
                seguentPregunta: [{
                    situacio: 36,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "- Y tú crees que me gusta estar semanas enteras solo, mientras tú estás ahí con tu amiguito el de las fotos de Facebook.<br><br>- ¿O sea es eso, no confías en mí?",
        "opcionsPregunta": [ //36
            {
                triaPregunta: "LA DISCUSIÓN SE VUELVE CADA VEZ MAYOR",
                seguentPregunta: [{
                    situacio: 37,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Después de un rato decides marcharte al bar.<br><br>- Necesito una copa, dices.<br><br>- Tienes un maldito problema, te responde.",
        "opcionsPregunta": [ //37
            {
                triaPregunta: "SALES POR LA PUERTA",
                seguentPregunta: [{
                    situacio: 38,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Fuera hay tormenta.<br><br>Después de lo último que te ha dicho no te apetece ir al bar, pero necesitas despejarte.",
        "opcionsPregunta": [ //38
            {
                triaPregunta: "VES TU AVIONETA APARCADA",
                seguentPregunta: [{
                    situacio: 39,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "audio": "../AUDIO/Tormenta.mp3",
        "sound": "1"
    },
    {
        "text": "",
        "opcionsPregunta": [ //39
            {
                triaPregunta: "TE SUBES EN ELLA",
                seguentPregunta: [{
                    situacio: 44,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "- ¿Cómo puedes decirme esto después de tanto tiempo juntos? Parece que no me conozcas.<br><br>- No soy yo el que se pasa semanas enteras sin venir y le esconde a su pareja con quien se junta.<br><br>- ¿Y qué me dices de la camarera del bar? Sé que solo vas al bar por ella.",
        "opcionsPregunta": [ //40
            {
                triaPregunta: "TE PREGUNTAS A TI MISMO SI ESO ES VERDAD",
                seguentPregunta: [{
                    situacio: 41,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "- No digas tonterías. Sabes que te quiero y sabes lo mucho que te echo de menos, dices con lágrimas en los ojos.<br><br>- Y tú sabes que ese trabajo me hace feliz, igual que a ti te hace feliz tu estúpida avioneta.",
        "opcionsPregunta": [ //41
            {
                triaPregunta: "TE SIENTES ATACADO",
                seguentPregunta: [{
                    situacio: 42,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //42
            {
                triaPregunta: "EMPIEZA UNA DISCUSIÓN MAYOR DE LO QUE ESPERABAIS",
                seguentPregunta: [{
                    situacio: 43,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Después de mucho discutir decides marcharte al bar.<br><br>- Necesito una copa, dices.<br><br>- Dale recuerdos a la camarera de mi parte.",
        "opcionsPregunta": [ //43
            {
                triaPregunta: "CIERRAS DE UN PORTAZO",
                seguentPregunta: [{
                    situacio: 38,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //44
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 45,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "audio": "",
        "sound": "2"
    },
    {
        "text": "",
        "opcionsPregunta": [ //45
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 46,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/Storm.gif)",
        "img2": "url(../IMG/Storm.gif)",
        "transicion": "si"

    },
    {
        "text": "Son las diez de la noche.<br><br>El tiempo parece compartir tus sentimientos.",
        "opcionsPregunta": [ //46
            {
                triaPregunta: "NO PUEDES PARAR DE PENSAR EN VUESTRA DISCUSIÓN",
                seguentPregunta: [{
                    situacio: 47,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "audio": "../AUDIO/Avion.mp3",
        "sound": "2"
    },
    {
        "text": "Llevas un buen rato conduciendo.<br><br>La tormenta es cada vez mayor. Te empieza a dar miedo.",
        "opcionsPregunta": [ //47
            {
                triaPregunta: "PIENSAS EN DAR LA VUELTA",
                seguentPregunta: [{
                    situacio: 48,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Pierdes el control.",
        "opcionsPregunta": [ //48
            {
                triaPregunta: "TODO PASA MUY RÁPIDO",
                seguentPregunta: [{
                    situacio: 49,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //49
            {
                triaPregunta: "BLACK",
                seguentPregunta: [{
                    situacio: 50,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)",
        "audio1": "../AUDIO/Pajaros.mp3",
        "audio2": "../AUDIO/impact.mp3",
        "sound": "3"
    },
    {
        "text": "",
        "opcionsPregunta": [ //50
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 51,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/amanecerMobile.jpg)",
        "img2": "url(../IMG/amanecer.jpg)",
        "transicion": "si"
    },
    {
        "text": "Acabas de abrir los ojos. No te acuerdas de nada. Lo único que sabes es que te duele todo el cuerpo. Estás asustado.<br><br>Por algún milagro no tienes nada roto. Sin embargo, tu avioneta no tuvo tanta suerte. Está destruida.<br><br>Ya te acuerdas de todo.",
        "opcionsPregunta": [ //51
            {
                triaPregunta: "TUVISTE UN ACCIDENTE",
                seguentPregunta: [{
                    situacio: 52,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "opacidad": "true"
    },
    {
        "text": "Te levantas. Observas. Estás en una isla.<br><br>Calculando la zona en la que has caído es posible que estés en Queries.<br><br>Es una isla que toma el nombre de una rana venenosa típica de la zona.",
        "opcionsPregunta": [ //52
            {
                triaPregunta: "LO LEÍSTE DE UNA REVISTA",
                seguentPregunta: [{
                    situacio: 53,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "La gente no viene aquí con mucha frecuencia. La verdad que casi nunca.<br><br>La radio no funciona, no hay cobertura, no puedes informar a nadie de dónde estás.",
        "opcionsPregunta": [ //53
            {
                triaPregunta: "- ¿QUÉ HAGO?, PIENSAS",
                seguentPregunta: [{
                    situacio: 54,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Ves una playa bastante lejos, no tienes muchas opciones, piensas que ir allí es lo mejor que puedes hacer.<br><br>Tienes que coger de tu avioneta todo lo que te pueda ser útil.",
        "opcionsPregunta": [ //54
            {
                triaPregunta: "TE ACERCAS A LA AVIONETA",
                seguentPregunta: [{
                    situacio: 55,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //55
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -1,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Empiezas a caminar siguiendo el río.<br><br>Bajando la montaña ves dos caminos que podrías seguir. Para hacer uno tendrás que cruzar un pequeño túnel lleno de murciélagos, para el otro tienes que bajar un pequeño barranco (piensas que podrías usar una cuerda).",
        "opcionsPregunta": [ //56
            {
                triaPregunta: "TÚNEL",
                seguentPregunta: [{
                    situacio: 57,
                    probabilitat: 100,
                    vida: 0
                }]
            },
            {
                triaPregunta: "BARRANCO",
                seguentPregunta: [{
                    situacio: 60,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //57
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                        situacio: 58,
                        probabilitat: 60,
                        vida: 0
                },
                    {
                        situacio: 59,
                        probabilitat: 100,
                        vida: -10
                }]
            },
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "El túnel está tan oscuro que casi no puedes ver nada.<br><br>Algunos murciélagos han pasado muy cerca de ti, pero sales del túnel sin recibir ningún daño.",
        "opcionsPregunta": [ //58
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 69,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "opacidad": "true"
    },
    {
        "text": "El túnel está tan oscuro que casi no puedes ver nada.<br><br>Un murciélagos al chocar contra tí se ha asustado y te ha mordido.<br><br>No parece nada grave pero te ha hecho daño.",
        "opcionsPregunta": [ //59
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 69,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "opacidad": "true"
    },
    {
        "text": "",
        "opcionsPregunta": [ //60
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -2,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "CUERDA"
                }]
            },
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //61
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 62,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "",
        "opcionsPregunta": [ //62
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 63,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/barrancoMobile.png)",
        "img2": "url(../IMG/barranco.png)",
        "transicion": "si",
        "opacidad": "false"
    },
    {
        "text": "Te acercas al barranco y ves una roca en la que podrías atar una cuerda y bajar.",
        "opcionsPregunta": [ //63
            {
                triaPregunta: "INVENTARIO",
                seguentPregunta: [{
                        situacio: 64,
                        probabilitat: 60,
                        vida: 0
                },
                    {
                        situacio: 66,
                        probabilitat: 100,
                        vida: -10
                }]
            }
        ],
        "opacidad": "true"
    },
    {
        "text": "",
        "opcionsPregunta": [ //64
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -3,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "CUERDA"
                }]
            }
        ]
    },
    {
        "text": "Nunca en tu vidas has hecho escalada, pero esto se te da bastante bien, piensas.<br><br>Bajas sin ningún problema.",
        "opcionsPregunta": [ //65
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 69,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //66
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -3,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "CUERDA"
                }]
            }
        ]
    },
    {
        "text": "Cuando estabas a un metro y medio de distancia, la cuerda se ha roto y te has caído al suelo. Te has hecho daño, pero puedes continuar.<br><br>Ya no puedes utilizar más la cuerda.",
        "opcionsPregunta": [ //67
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 68,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "CUERDA"
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //68
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -4,
                    probabilitat: 100,
                    vida: 0,
                    resta: true
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //69
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 70,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)",
        "sound": "6"
    },
    {
        "text": "",
        "opcionsPregunta": [ //70
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 71,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/atardecerMobile.jpg)",
        "img2": "url(../IMG/atardecer.jpg)",
        "transicion": "si",
        "opacidad": "false",
        "audio": "../AUDIO/Isla.mp3",
        "sound": "1"
    },
    {
        "text": "Acabas de bajar de las montañas. Como se está haciendo tarde, tienes que decidir que vas a hacer.",
        "opcionsPregunta": [ //71
            {
                triaPregunta: "EXPLORAR",
                seguentPregunta: [{
                        situacio: 72,
                        probabilitat: 70,
                        vida: 0
                },
                    {
                        situacio: 73,
                        probabilitat: 100,
                        vida: 0
                }]
            },
            {
                triaPregunta: "DORMIR",
                seguentPregunta: [{
                    situacio: 75,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "opacidad": "true"
    },
    {
        "text": "Explorando has encontrado un palo.",
        "opcionsPregunta": [ //72
            {
                triaPregunta: "GUARDAR",
                seguentPregunta: [{
                    situacio: 74,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "PALO"
                }]
            },
            {
                triaPregunta: "TIRAR",
                seguentPregunta: [{
                    situacio: 75,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Explorando no has encontrado nada.",
        "opcionsPregunta": [ //73
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 75,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //74
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -4,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Se está haciendo de noche. Decide dónde vas a dormir.",
        "opcionsPregunta": [ //75
            {
                triaPregunta: "SUELO",
                seguentPregunta: [{
                    situacio: 76,
                    probabilitat: 100,
                    vida: 0
                }]
            },
            {
                triaPregunta: "ÁRBOL",
                seguentPregunta: [{
                    situacio: 79,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //76
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -5,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)",
        "audio": "../AUDIO/impact.mp3",
        "sound": "5"
    },
    {
        "text": "",
        "opcionsPregunta": [ //77
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                        situacio: 78,
                        probabilitat: 30,
                        vida: -5
                        },
                    {
                        situacio: 81,
                        probabilitat: 100,
                        vida: 0
                }]
            }
        ],
        "audio": "../AUDIO/Pajaros.mp3",
        "sound": "1",
        "img1": "url(../IMG/amanecerMobile.jpg)",
        "img2": "url(../IMG/amanecer.jpg)",
        "transicion": "si",
        "opacidad": "false"
    },
    {
        "text": "",
        "opcionsPregunta": [ //78
            {
                triaPregunta: "COMO DORMISTE EN EL SUELO TE PICARON INSECTOS POR LA NOCHE",
                seguentPregunta: [{
                    situacio: 81,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "opacidad": "true"
    },
    {
        "text": "",
        "opcionsPregunta": [ //79
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -5,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)",
        "audio": "../AUDIO/impact.mp3",
        "sound": "5"
    },
    {
        "text": "",
        "opcionsPregunta": [ //80
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 81,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "audio": "../AUDIO/Pajaros.mp3",
        "sound": "1",
        "img1": "url(../IMG/amanecerMobile.jpg)",
        "img2": "url(../IMG/amanecer.jpg)",
        "transicion": "si",
        "opacidad": "false"
    },
    {
        "text": "Te has despertado hace un rato con la barriga vacía. Puedes buscar comida o comer algo de tu mochila.",
        "opcionsPregunta": [ //81
            {
                triaPregunta: "EXPLORAR",
                seguentPregunta: [{
                    situacio: 82,
                    probabilitat: 100,
                    vida: 0
                }]
            },
            {
                triaPregunta: "INVENTARIO",
                seguentPregunta: [{
                    situacio: 88,
                    probabilitat: 100,
                    vida: 5
                }]
            }
        ],
        "opacidad": "true"
    },
    {
        "text": "Elige como quieres conseguir la comida:",
        "opcionsPregunta": [ //82
            {
                triaPregunta: "PESCAR",
                seguentPregunta: [{
                        situacio: 84,
                        probabilitat: 60,
                        vida: -10
                },
                    {
                        situacio: 85,
                        probabilitat: 100,
                        vida: 0
                }]
            },
            {
                triaPregunta: "RECOLECTAR",
                seguentPregunta: [{
                        situacio: 87,
                        probabilitat: 30,
                        vida: -10
                },
                    {
                        situacio: 86,
                        probabilitat: 100,
                        vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //83
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                        situacio: 84,
                        probabilitat: 60,
                        vida: -10
                },
                    {
                        situacio: 85,
                        probabilitat: 100,
                        vida: 0
                }]
            },
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "Mientras estabas en el río intentando pescar, has resbalado y te has dado un golpe en la rodilla.",
        "opcionsPregunta": [ //84
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 90,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Al cabo de un par de horas has cogido un pequeño pez azul que seguía la corriente del agua.",
        "opcionsPregunta": [ //85
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 91,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "COMIDA"
                }]
            }
        ]
    },
    {
        "text": "Has encontrado unas pequeñas bayas que parecen no ser venenosas.<br><br>No te darán mucha energía pero es mejor que nada.",
        "opcionsPregunta": [ //86
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 91,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "COMIDA"
                }]
            }
        ]
    },
    {
        "text": "Te has subido a un cocotero para intentar coger una fruta, lamentablemente has resbalado y has caído al suelo.<br><br>Te duele el tobillo al andar, esperas que no dure mucho el dolor.",
        "opcionsPregunta": [ //87
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 90,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //88
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -2,
                    probabilitat: 100,
                    vida: 5,
                    objeto: "COMIDA",
                    comida: "si"
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //89
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -3,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "COMIDA"
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //90
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 93,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "",
        "opcionsPregunta": [ //91
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -4,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //92
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 93,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "Llevas un rato caminando, cuando de repente ves algo en el suelo.<br><br>- ¿Pero qué es esto?, piensas.<br><br>Resulta que es un arco hecho con troncos y lianas.<br><br>Lo esta rodeando una serpiente. ¿Qué vas a hacer?",
        "opcionsPregunta": [ //93
            {
                triaPregunta: "ATACAR",
                seguentPregunta: [{
                        situacio: 94,
                        probabilitat: 30,
                        vida: 0
                },
                    {
                        situacio: 95,
                        probabilitat: 70,
                        vida: 0
                },
                    {
                        situacio: 96,
                        probabilitat: 100,
                        vida: -15
                }]
            },
            {
                triaPregunta: "HUIR",
                seguentPregunta: [{
                    situacio: 97,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/amanecerMobile.jpg)",
        "img2": "url(../IMG/amanecer.jpg)",
        "transicion": "si",
    },
    {
        "text": "Te has acercado corriendo para intimidarla. La serpiente se ha asustado y se ha ido.<br><br>Consigues el arco.",
        "opcionsPregunta": [ //94
            {
                triaPregunta: "GUARDAR",
                seguentPregunta: [{
                    situacio: 98,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "ARCO"
                }]
            },
            {
                triaPregunta: "TIRAR",
                seguentPregunta: [{
                    situacio: 97,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Te has acercado sigilosamente a ella, y cuando no te miraba le has pisado la cabeza con todas tus fuerzas. La has matado.<br><br>Consigues el arco.",
        "opcionsPregunta": [ //95
            {
                triaPregunta: "GUARDAR",
                seguentPregunta: [{
                    situacio: 98,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "ARCO"
                }]
            },
            {
                triaPregunta: "TIRAR",
                seguentPregunta: [{
                    situacio: 97,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Cuando te has acercado a ella se ha puesto a la defensiva, has pensado que podías coger el arco y salir corriendo pero al acercar la mano la serpiente te ha mordido y se te ha hinchado la mano.<br><br>Aún así has cogido el arco, aunque te ha costado caro.",
        "opcionsPregunta": [ //96
            {
                triaPregunta: "GUARDAR",
                seguentPregunta: [{
                    situacio: 98,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "ARCO"
                }]
            },
            {
                triaPregunta: "TIRAR",
                seguentPregunta: [{
                    situacio: 97,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "No has conseguido el arco.",
        "opcionsPregunta": [ //97
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 99,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //98
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -4,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //99
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 100,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "Estabas tan despistado pensando en que hacía un arco en el suelo que no te has dado cuenta de que delante habían unas arenas movedizas y te has caído dentro.<br><br>La mitad de tu cuerpo está atrapada. Intentas mantener la calma y salir de aquí.",
        "opcionsPregunta": [ //100
            {
                triaPregunta: "¿CÓMO LO HACES?",
                seguentPregunta: [{
                    situacio: 101,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/amanecerMobile.jpg)",
        "img2": "url(../IMG/amanecer.jpg)",
        "transicion": "si",
        "opacidad": "true"
    },
    {
        "text": "",
        "opcionsPregunta": [ //101
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -6,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "¡Has tenido mucha suerte! Has conseguido salir de las arenas movedizas.<br><br>Estás al lado del río tranquilo. Te notas bastante cansado.<br><br>¿Qué vas a hacer?",
        "opcionsPregunta": [ //102
            {
                triaPregunta: "BAÑARTE",
                seguentPregunta: [{
                    situacio: 103,
                    probabilitat: 70,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //103
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                        situacio: 104,
                        probabilitat: 70,
                        vida: 0
                },
                    {
                        situacio: 105,
                        probabilitat: 100,
                        vida: 0
                }]
            }
        ],
        "sound": "6",
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "Al salir del río has visto unos monos merodeando tu mochila.<br><br>Parece que si tenías comida guardada, tendrás que buscar más, porque te la han quitado toda.",
        "opcionsPregunta": [ //104
            {
                triaPregunta: "BUSCAR COMIDA",
                seguentPregunta: [{
                    situacio: 106,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "COMIDA"
                }]
            }
        ],
        "audio": "../AUDIO/Isla.mp3",
        "sound": "1",
        "img1": "url(../IMG/atardecerMobile.jpg)",
        "img2": "url(../IMG/atardecer.jpg)",
        "transicion": "si"
    },
    {
        "text": "Después de bañarte, te ha entrado hambre.",
        "opcionsPregunta": [ //105
            {
                triaPregunta: "EXPLORAR",
                seguentPregunta: [{
                    situacio: 107,
                    probabilitat: 100,
                    vida: 0
                }]
            },
            {
                triaPregunta: "INVENTARIO",
                seguentPregunta: [{
                    situacio: 120,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "audio": "../AUDIO/Isla.mp3",
        "sound": "1",
        "img1": "url(../IMG/atardecerMobile.jpg)",
        "img2": "url(../IMG/atardecer.jpg)",
        "transicion": "si"
    },
    {
        "text": "",
        "opcionsPregunta": [ //106
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -4,
                    probabilitat: 100,
                    vida: 0,
                    resta: true
                }]
            }
        ]
    },
    {
        "text": "Elige como quieres conseguir la comida:",
        "opcionsPregunta": [ //107
            {
                triaPregunta: "CAZAR",
                seguentPregunta: [{
                    situacio: 108,
                    probabilitat: 60,
                    vida: 0
                }]
            },
            {
                triaPregunta: "PESCAR",
                seguentPregunta: [{
                        situacio: 116,
                        probabilitat: 60,
                        vida: -10
                },
                    {
                        situacio: 117,
                        probabilitat: 100,
                        vida: 0
                }]
            },
            {
                triaPregunta: "RECOLECTAR",
                seguentPregunta: [{
                        situacio: 119,
                        probabilitat: 30,
                        vida: -10
                },
                    {
                        situacio: 118,
                        probabilitat: 100,
                        vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //108
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -2,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "ARCO"
                }]
            },
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //109
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 110,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "",
        "opcionsPregunta": [ //110
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 111,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/conejoMobile.jpg)",
        "img2": "url(../IMG/conejo.jpg)",
        "transicion": "si",
        "opacidad": "false"
    },
    {
        "text": "Ves un pequeño conejo no muy lejos de tí. Has improvisado unas flechas con unos palos afilados.",
        "opcionsPregunta": [ //111
            {
                triaPregunta: "INVENTARIO",
                seguentPregunta: [{
                        situacio: 112,
                        probabilitat: 60,
                        vida: 0
                },
                    {
                        situacio: 114,
                        probabilitat: 100,
                        vida: -15
                }]
            }
        ],
        "opacidad": "true"
    },
    {
        "text": "",
        "opcionsPregunta": [ //112
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -3,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "ARCO"
                }]
            }
        ]
    },
    {
        "text": "Le has dado con un par de flechas al conejo y has conseguido atraparlo antes de que se escondiera.",
        "opcionsPregunta": [ //113
            {
                triaPregunta: "GUARDAR",
                seguentPregunta: [{
                    situacio: 123,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "COMIDA"
                }]
            },
            {
                triaPregunta: "TIRAR",
                seguentPregunta: [{
                    situacio: 124,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //114
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -3,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "ARCO"
                }]
            }
        ]
    },
    {
        "text": "Mientras le disparabas al conejo a venido un jabalí corriendo hacía a tí y no lo has visto.<br><br>Te ha tirado al suelo de un golpe.",
        "opcionsPregunta": [ //115
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 124,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Mientras estabas en el río intentando pescar, has resbalado y te has dado un golpe en la rodilla.",
        "opcionsPregunta": [ //116
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 124,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Al cabo de un par de horas has cogido un pequeño pez azul que seguía la corriente del agua.",
        "opcionsPregunta": [ //117
            {
                triaPregunta: "GUARDAR",
                seguentPregunta: [{
                    situacio: 123,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "COMIDA"
                }]
            },
            {
                triaPregunta: "TIRAR",
                seguentPregunta: [{
                    situacio: 124,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Has encontrado unas pequeñas bayas que parecen no ser venenosas.<br><br>No te darán mucha energía pero es mejor que nada.",
        "opcionsPregunta": [ //118
            {
                triaPregunta: "GUARDAR",
                seguentPregunta: [{
                    situacio: 123,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "COMIDA"
                }]
            },
            {
                triaPregunta: "TIRAR",
                seguentPregunta: [{
                    situacio: 124,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Te has subido a un cocotero para intentar coger una fruta, lamentablemente has resbalado y has caído al suelo.<br><br>Te duele el tobillo al andar, esperas que no dure mucho el dolor.",
        "opcionsPregunta": [ //119
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 124,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //120
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -2,
                    probabilitat: 100,
                    vida: 5,
                    objeto: "COMIDA",
                    comida: "si"
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //121
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -3,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "COMIDA"
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //122
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 125,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "",
        "opcionsPregunta": [ //123
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -4,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "COMIDA"
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //124
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 125,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "Se está haciendo de noche. Decide dónde vas a dormir.",
        "opcionsPregunta": [ //125
            {
                triaPregunta: "SUELO",
                seguentPregunta: [{
                    situacio: 126,
                    probabilitat: 100,
                    vida: 0
                }]
            },
            {
                triaPregunta: "ÁRBOL",
                seguentPregunta: [{
                    situacio: 126,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/atardecerMobile.jpg)",
        "img2": "url(../IMG/atardecer.jpg)",
        "transicion": "si"
    },
    {
        "text": "",
        "opcionsPregunta": [ //126
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -5,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)",
        "audio": "../AUDIO/impact.mp3",
        "sound": "5"
    },
    {
        "text": "",
        "opcionsPregunta": [ //127
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 128,
                    probabilitat: 30,
                    vida: -5
                        }]
            }
        ],
        "audio": "../AUDIO/Pajaros.mp3",
        "sound": "1",
        "img1": "url(../IMG/amanecerMobile.jpg)",
        "img2": "url(../IMG/amanecer.jpg)",
        "transicion": "si",
        "opacidad": "false"
    },
    {
        "text": "Por la noche había excepcionalmente muchos insectos y por desgracia te han picado bastante.<br><br>¿Sabías que la resina tiene propiedades curativas?",
        "opcionsPregunta": [ //128
            {
                triaPregunta: "BUSCAR RESINA",
                seguentPregunta: [{
                    situacio: 129,
                    probabilitat: 100,
                    vida: 0
                }]
            },
            {
                triaPregunta: "INVENTARIO",
                seguentPregunta: [{
                    situacio: 133,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "opacidad": "true"
    },
    {
        "text": "Encuentras un árbol del cual puedes extraer resina.",
        "opcionsPregunta": [ //129
            {
                triaPregunta: "PICAR ÁRBOL",
                seguentPregunta: [{
                    situacio: 130,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Cuándo estabas picando el árbol, no sabías que arriba había una colmena de abejas. Los movimientos del árbol han provocado que cayese y han salido de golpe todas las abejas que estaban dentro. Tienes que huir.",
        "opcionsPregunta": [ //130
            {
                triaPregunta: "CORRER",
                seguentPregunta: [{
                    situacio: 131,
                    probabilitat: 100,
                    vida: 5
                }]
            },
            {
                triaPregunta: "SALTAR DENTRO DEL RÍO",
                seguentPregunta: [{
                    situacio: 132,
                    probabilitat: 100,
                    vida: 5
                }]
            }
        ]
    },
    {
        "text": "¡Uff! Has escapado de las abejas y has conseguido la resina. Ahora puedes aliviar tus picaduras tranquilo.",
        "opcionsPregunta": [ //131
            {
                triaPregunta: "UTILIZAR LA RESINA",
                seguentPregunta: [{
                    situacio: 137,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "¡Uff! Has podido salvarte de las abejas enfadadas. Se han ido y han dejado la colmena sola, consigues la resina y también has encontrado algo de miel! Ahora puedes aliviar tus picaduras tranquilo.",
        "opcionsPregunta": [ //132
            {
                triaPregunta: "UTILIZAR LA RESINA",
                seguentPregunta: [{
                    situacio: 136,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "COMIDA"
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //133
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -2,
                    probabilitat: 100,
                    vida: 10,
                    objeto: "BOTIQUÍN"
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //134
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -3,
                    probabilitat: 100,
                    vida: 5,
                    objeto: "BOTIQUÍN"
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //135
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 138,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "",
        "opcionsPregunta": [ //136
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -4,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //137
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 138,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "",
        "opcionsPregunta": [ //138
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 139,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/ranasetaMobile.jpg)",
        "img2": "url(../IMG/ranaseta.jpg)",
        "transicion": "si"
    },
    {
        "text": "Estabas caminando cuando de repente has visto una rana junto a una seta.<br><br>Decides comerte una de las dos.",
        "opcionsPregunta": [ //139
            {
                triaPregunta: "RANA",
                seguentPregunta: [{
                    situacio: 140,
                    probabilitat: 100,
                    vida: 0
                }]
            },
            {
                triaPregunta: "SETA",
                seguentPregunta: [{
                    situacio: 142,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "opacidad": "true"
    },
    {
        "text": "",
        "opcionsPregunta": [ //140
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 141,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)",
        "sound": "6"
    },
    {
        "text": "",
        "opcionsPregunta": [ //141
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -7,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "audio": "../AUDIO/Muerte.mp3",
        "sound": "5",
    },
    {
        "text": "La seta que has comido era una seta alucinógena.<br><br>Estás bajo el efecto de la droga unas horas.",
        "opcionsPregunta": [ //142
            {
                triaPregunta: "DESPUÉS TE QUEDAS DORMIDO",
                seguentPregunta: [{
                    situacio: 143,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "audio": "../AUDIO/Alucinacion.mp3",
        "sound": "7"
    },
    {
        "text": "",
        "opcionsPregunta": [ //143
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -5,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "",
        "opcionsPregunta": [ //144
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 145,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/seta.jpg)",
        "img2": "url(../IMG/seta.jpg)",
        "opacidad": "false"
    },
    {
        "text": "Acabas de despertarte.<br><br>En un primer momento no sabes ni donde estás ni qué ha pasado. Además el dolor de cabeza tampoco te ayuda a concentrarte. Al mirar a la izquierda has encontrado un trozo de una seta.",
        "opcionsPregunta": [ //145
            {
                triaPregunta: "EMPIEZAS A ACORDARTE",
                seguentPregunta: [{
                    situacio: 146,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Ahora por tu cabeza están pasando diferentes pensamientos, pero todos llegan a la misma conclusión. Acabas de darte cuenta de que estabas colocado. A lo mejor mirar en la mochila te ayuda a recordar qué pasó ayer.",
        "opcionsPregunta": [ //146
            {
                triaPregunta: "COMPROBAR LA MOCHILA",
                seguentPregunta: [{
                    situacio: 147,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //147
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                        situacio: 148,
                        probabilitat: 25,
                        vida: 0
                },
                    {
                        situacio: 149,
                        probabilitat: 50,
                        vida: 0
                },
                    {
                        situacio: 150,
                        probabilitat: 75,
                        vida: 0
                },
                    {
                        situacio: 151,
                        probabilitat: 100,
                        vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "Ayer tuviste diferentes visiones. En una de ellas te imaginaste que eras un héroe que iba a salvar el mundo. Para conseguirlo tuviste que luchar contra los extraterrestres. En la gran batalla sacrificaste la comida de tu inventario.",
        "opcionsPregunta": [ //148
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 152,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "COMIDA"
                }]
            }
        ],
        "img1": "url(../IMG/seta2.jpg)",
        "img2": "url(../IMG/seta2.jpg)",
        "transicion": "si"
    },
    {
        "text": "Ayer cuando estabas bajo los efectos de la seta llegó un momento que tenías tanta hambre que te comiste unas bayas venenosas. Ahora no te encuentras bien, te duele mucho la barriga y estás un poco mareado. No hay otro remedio que tomar un descanso.",
        "opcionsPregunta": [ //149
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 153,
                    probabilitat: 100,
                    vida: -10
                }]
            }
        ],
        "img1": "url(../IMG/seta2.jpg)",
        "img2": "url(../IMG/seta2.jpg)",
        "transicion": "si"
    },
    {
        "text": "Ayer tenías diferentes visiones. En una de ellas te imaginaste que te perseguía un extraterrestre y tuviste que huir. En algún momento caíste y te hiciste daño en la pierna. Ahora te duele bastante y tienes que andar con más cuidado y mucho más lento.",
        "opcionsPregunta": [ //150
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 153,
                    probabilitat: 100,
                    vida: -10
                }]
            }
        ],
        "img1": "url(../IMG/seta2.jpg)",
        "img2": "url(../IMG/seta2.jpg)",
        "transicion": "si"
    },
    {
        "text": "Ayer tuviste diferentes visiones. En una de ellas te imaginaste que eras un héroe que iba a salvar el mundo. Para conseguirlo tuviste que luchar contra los extraterrestres, resulta que con éxito. Cuando estabas drogado mataste a un conejo y te lo comiste, ahora tienes más energía.",
        "opcionsPregunta": [ //151
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 153,
                    probabilitat: 100,
                    vida: 10
                }]
            }
        ],
        "img1": "url(../IMG/seta2.jpg)",
        "img2": "url(../IMG/seta2.jpg)",
        "transicion": "si"
    },
    {
        "text": "",
        "opcionsPregunta": [ //152
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -4,
                    probabilitat: 100,
                    vida: 0,
                    resta: true
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //153
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 154,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)",
        "sound": "6"
    },
    {
        "text": "",
        "opcionsPregunta": [ //154
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 155,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "audio": "../AUDIO/Pajaros.mp3",
        "sound": "1",
        "img1": "url(../IMG/precipicioMobile.png)",
        "img2": "url(../IMG/precipicio.png)",
        "opacidad": "false",
        transicion: "si"
    },
    {
        "text": "Estabas andando cuando en tu camino has encontrado un precipicio profundo con las paredes empinadas. No es posible ni bajar ni subir. El precipicio se creó por el movimiento de las placas tectónicas y atraviesa toda la isla. Para continuar tienes que cruzarlo.",
        "opcionsPregunta": [ //155
            {
                triaPregunta: "¿CÓMO VAS A PASAR AL OTRO LADO?",
                seguentPregunta: [{
                    situacio: 156,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "opacidad": "true"
    },
    {
        "text": "1. Puedes intentar pasar ligando la cuerda a un extremo de un árbol y dándote impulso hasta el otro lado.<br><br>2. Puedes cortar un delgado árbol y utilizarlo de puente.",
        "opcionsPregunta": [ //156
            {
                triaPregunta: "ESCOGER 1",
                seguentPregunta: [{
                    situacio: 157,
                    probabilitat: 100,
                    vida: -10
                }]
            },
            {
                triaPregunta: "ESCOGER 2",
                seguentPregunta: [{
                        situacio: 158,
                        probabilitat: 30,
                        vida: -5
                },
                    {
                        situacio: 159,
                        probabilitat: 100,
                        vida: 0
                }]
            },

        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //157
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -2,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "CUERDA"
                }]
            },
        ]
    },
    {
        "text": "Pasando al otro lado casi te caes. Te has herido, pero al final has conseguido superar el obstáculo.",
        "opcionsPregunta": [ //158
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 160,
                    probabilitat: 100,
                    vida: 0
                     }]
            }
        ]
    },
    {
        "text": "No era fácil pero has conseguido pasar al otro lado perfectamente.",
        "opcionsPregunta": [ //159
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 160,
                    probabilitat: 100,
                    vida: 0
                     }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //160
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 161,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "",
        "opcionsPregunta": [ //161
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 162,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/ciervoMobile.jpg)",
        "img2": "url(../IMG/ciervo.jpg)",
        "opacidad": "false",
        transicion: "si"
    },
    {
        "text": "Algo ha atraído tu atención. Al entrecerrar los ojos has percibido un cervatillo atrapado entre los arbustos. ¿Qué vas a hacer? ¿Vas a ayudarle o aprovecharás la ocasión para conseguir fácilmente una buena carne?",
        "opcionsPregunta": [ //162
            {
                triaPregunta: "AYUDAR",
                seguentPregunta: [{
                    situacio: 163,
                    probabilitat: 100,
                    vida: 0
                }]
            },
            {
                triaPregunta: "MATAR",
                seguentPregunta: [{
                    situacio: 165,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "opacidad": "true"
    },
    {
        "text": "¡Has conseguido ayudar al cervatillo! Ahora puede volver con su familia. Sin embargo, en vez de escapar te está mirando como si quisiera decirte algo.<br><br>- ¿Por qué se comporta tan raro?, piensas.<br><br>¿Qué puede querer de tí?",
        "opcionsPregunta": [ //163
            {
                triaPregunta: "SEGUIR AL CERVATILLO",
                seguentPregunta: [{
                    situacio: 164,
                    probabilitat: 100,
                    vida: 0
                     }]
            }
        ]
    },
    {
        "text": "Cuando estabas siguiendo al animal que salvaste, has visto muchas marcas de garras de oso en los árboles. Parece que estás en la área de un oso y el cervatillo te ayuda a pasar por ella para que no lo encuentres. De lo contrario podrías terminar muy mal.<br><br>Ahora estás a salvo.",
        "opcionsPregunta": [ //164
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 172,
                    probabilitat: 100,
                    vida: 0
                     }]
            }
        ]
    },
    {
        "text": "Has matado al cervatillo. Por desgracia un oso que estaba cerca ha olido la sangre y te ha encontrado.<br><br>¿Qué vas a hacer?",
        "opcionsPregunta": [ //165
            {
                triaPregunta: "HUIR",
                seguentPregunta: [{
                    situacio: 166,
                    probabilitat: 100,
                    vida: 0
                }]
            },
            {
                triaPregunta: "LUCHAR",
                seguentPregunta: [{
                    situacio: 169,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //166
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 167,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "sound": "6",
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "",
        "opcionsPregunta": [ //167
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 168,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "audio": "../AUDIO/Oso.mp3",
        "sound": "5",
        "img1": "url(../IMG/osoMobile.jpg)",
        "img2": "url(../IMG/oso.jpg)",
        "opacidad": "false",
        transicion: "si"
    },
    {
        "text": "",
        "opcionsPregunta": [ //168
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -7,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "audio": "../AUDIO/Muerte.mp3",
        "sound": "5",
        "opacidad": "true"
    },
    {
        "text": "",
        "opcionsPregunta": [ //169
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 170,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "sound": "6",
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "",
        "opcionsPregunta": [ //170
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 171,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "audio": "../AUDIO/Oso.mp3",
        "sound": "5",
        "img1": "url(../IMG/osoMobile.jpg)",
        "img2": "url(../IMG/oso.jpg)",
        "opacidad": "false",
        transicion: "si"
    },
    {
        "text": "",
        "opcionsPregunta": [ //171
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -7,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "audio": "../AUDIO/Muerte.mp3",
        "sound": "5",
        "opacidad": "true"
    },
    {
        "text": "",
        "opcionsPregunta": [ //172
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 173,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "sound": "5",
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "Durante un día tan emocionante casi te has olvidado de que hay que comer. Ahora es buen momento para descansar un poco y llenar la barriga.",
        "opcionsPregunta": [ //173
            {
                triaPregunta: "BUSCAR COMIDA",
                seguentPregunta: [{
                    situacio: 174,
                    probabilitat: 100,
                    vida: 0
                }]
            },
            {
                triaPregunta: "INVENTARIO",
                seguentPregunta: [{
                    situacio: 187,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/atardecerMobile.jpg)",
        "img2": "url(../IMG/atardecer.jpg)",
        "transicion": "si",
        "opacidad": "true",
        "audio": "../AUDIO/Isla.mp3",
        "sound": "1"
    },
    {
        "text": "Elige como quieres conseguir la comida:",
        "opcionsPregunta": [ //174
            {
                triaPregunta: "CAZAR",
                seguentPregunta: [{
                    situacio: 175,
                    probabilitat: 60,
                    vida: 0
                }]
            },
            {
                triaPregunta: "PESCAR",
                seguentPregunta: [{
                        situacio: 183,
                        probabilitat: 60,
                        vida: -10
                },
                    {
                        situacio: 184,
                        probabilitat: 100,
                        vida: 0
                }]
            },
            {
                triaPregunta: "RECOLECTAR",
                seguentPregunta: [{
                        situacio: 185,
                        probabilitat: 30,
                        vida: -10
                },
                    {
                        situacio: 186,
                        probabilitat: 100,
                        vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //175
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -2,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "ARCO"
                }]
            },
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //176
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 177,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "",
        "opcionsPregunta": [ //177
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 178,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/conejoMobile.jpg)",
        "img2": "url(../IMG/conejo.jpg)",
        "transicion": "si",
        "opacidad": "false"
    },
    {
        "text": "Ves un pequeño conejo no muy lejos de tí. Has improvisado unas flechas con unos palos afilados.",
        "opcionsPregunta": [ //178
            {
                triaPregunta: "INVENTARIO",
                seguentPregunta: [{
                        situacio: 179,
                        probabilitat: 60,
                        vida: 0
                },
                    {
                        situacio: 181,
                        probabilitat: 100,
                        vida: -15
                }]
            }
        ],
        "opacidad": "true"
    },
    {
        "text": "",
        "opcionsPregunta": [ //179
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -3,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "ARCO"
                }]
            }
        ]
    },
    {
        "text": "Le has dado con un par de flechas al conejo y has conseguido atraparlo antes de que se escondiera.",
        "opcionsPregunta": [ //180
            {
                triaPregunta: "GUARDAR",
                seguentPregunta: [{
                    situacio: 190,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "COMIDA"
                }]
            },
            {
                triaPregunta: "TIRAR",
                seguentPregunta: [{
                    situacio: 191,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //181
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -3,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "ARCO"
                }]
            }
        ]
    },
    {
        "text": "Mientras le disparabas al conejo a venido un jabalí corriendo hacía a tí y no lo has visto.<br><br>Te ha tirado al suelo de un golpe.",
        "opcionsPregunta": [ //182
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 191,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Mientras estabas en el río intentando pescar, has resbalado y te has dado un golpe en la rodilla.",
        "opcionsPregunta": [ //183
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 191,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Al cabo de un par de horas has cogido un pequeño pez azul que seguía la corriente del agua.",
        "opcionsPregunta": [ //184
            {
                triaPregunta: "GUARDAR",
                seguentPregunta: [{
                    situacio: 190,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "COMIDA"
                }]
            },
            {
                triaPregunta: "TIRAR",
                seguentPregunta: [{
                    situacio: 191,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Has encontrado unas pequeñas bayas que parecen no ser venenosas.<br><br>No te darán mucha energía pero es mejor que nada.",
        "opcionsPregunta": [ //185
            {
                triaPregunta: "GUARDAR",
                seguentPregunta: [{
                    situacio: 190,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "COMIDA"
                }]
            },
            {
                triaPregunta: "TIRAR",
                seguentPregunta: [{
                    situacio: 191,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Te has subido a un cocotero para intentar coger una fruta, lamentablemente has resbalado y has caído al suelo.<br><br>Te duele el tobillo al andar, esperas que no dure mucho el dolor.",
        "opcionsPregunta": [ //186
            {
                triaPregunta: "SEGUIR CAMINANDO",
                seguentPregunta: [{
                    situacio: 191,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //187
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -2,
                    probabilitat: 100,
                    vida: 5,
                    objeto: "COMIDA",
                    comida: "si"
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //188
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -3,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "COMIDA"
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //189
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 192,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "",
        "opcionsPregunta": [ //190
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -4,
                    probabilitat: 100,
                    vida: 0,
                    objeto: "COMIDA"
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //191
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 192,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "Se está haciendo de noche. Decide dónde vas a dormir.",
        "opcionsPregunta": [ //192
            {
                triaPregunta: "SUELO",
                seguentPregunta: [{
                    situacio: 193,
                    probabilitat: 100,
                    vida: 0
                }]
            },
            {
                triaPregunta: "ÁRBOL",
                seguentPregunta: [{
                    situacio: 196,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/atardecerMobile.jpg)",
        "img2": "url(../IMG/atardecer.jpg)",
        "transicion": "si",
        "audio": "../AUDIO/Isla.mp3",
        "sound": "1"
    },
    {
        "text": "",
        "opcionsPregunta": [ //193
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -5,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)",
        "audio": "../AUDIO/impact.mp3",
        "sound": "5"
    },
    {
        "text": "",
        "opcionsPregunta": [ //194
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                        situacio: 195,
                        probabilitat: 30,
                        vida: -5
                        },
                    {
                        situacio: 198,
                        probabilitat: 100,
                        vida: 0
                }]
            }
        ],
        "audio": "../AUDIO/Pluja.mp3",
        "sound": "1",
        "img1": "url(../IMG/lluvia.jpg)",
        "img2": "url(../IMG/lluvia.jpg)",
        "transicion": "si",
        "opacidad": "false"
    },
    {
        "text": "",
        "opcionsPregunta": [ //195
            {
                triaPregunta: "COMO DORMISTE EN EL SUELO TE PICARON INSECTOS POR LA NOCHE",
                seguentPregunta: [{
                    situacio: 198,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "opacidad": "true"
    },
    {
        "text": "",
        "opcionsPregunta": [ //196
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -5,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)",
        "audio": "../AUDIO/impact.mp3",
        "sound": "5"
    },
    {
        "text": "",
        "opcionsPregunta": [ //197
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 198,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "audio": "../AUDIO/Pluja.mp3",
        "sound": "1",
        "img1": "url(../IMG/lluvia.jpg)",
        "img2": "url(../IMG/lluvia.jpg)",
        "transicion": "si",
        "opacidad": "false"
    },
    {
        "text": "Hoy te has despertado de un humor diferente que otros días. Es posible que sea por el tiempo que hace.<br><br>El cielo está nublado y hace frío.",
        "opcionsPregunta": [ //198
            {
                triaPregunta: "EMPIEZA A LLOVER",
                seguentPregunta: [{
                    situacio: 199,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Deberías buscar un refugio para protegerte de la lluvia.",
        "opcionsPregunta": [ //199
            {
                triaPregunta: "BUSCAR REFUGIO",
                seguentPregunta: [{
                    situacio: 200,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Estabas buscando un sitio para esconderte cuando en el otro lado del río has visto una colina con una cueva.<br><br>Parece la única opción.",
        "opcionsPregunta": [ //200
            {
                triaPregunta: "¿CÓMO VAS A PASAR AL OTRO LADO?",
                seguentPregunta: [{
                    situacio: 201,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "El río es rápido y caudaloso a causa de la lluvia.<br><br>Puedes pasar a través de un tronco caído o bien por unas piedras.",
        "opcionsPregunta": [ //201
            {
                triaPregunta: "TRONCO",
                seguentPregunta: [{
                    situacio: 202,
                    probabilitat: 100,
                    vida: 0
                }]
            },
            {
                triaPregunta: "PIEDRAS",
                seguentPregunta: [{
                    situacio: 203,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    }, {
        "text": "¡Has conseguido pasar al otro lado del río! Por desgracia en un momento has perdido el equilibrio y se ha caído tu mochila.<br><br>No es posible recuperarla.",
        "opcionsPregunta": [ //202
            {
                triaPregunta: "IR A LA CUEVA",
                seguentPregunta: [{
                    situacio: 204,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    }, {
        "text": "¡Has conseguido pasar al otro lado del río! Por desgracia te ha atacado un cocodrilo y le has lanzado la mochila para protegerte.",
        "opcionsPregunta": [ //203
            {
                triaPregunta: "IR A LA CUEVA",
                seguentPregunta: [{
                    situacio: 204,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Ahora estás en la cueva protegido de la tormenta. También puedes ver que la playa está muy cerca. Solo quedan unas pocas horas de camino.<br><br>Una vez llegues a la playa podrás construir una cabaña para pasar los próximos días.<br><br>O semanas...",
        "opcionsPregunta": [ //204
            {
                triaPregunta: "O MESES...",
                seguentPregunta: [{
                    situacio: 205,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)",
        "sound": "5"
    },
    {
        "text": "Has encontrado un mechero en la cueva.<br><br>- ¿Por qué hay un mechero aquí si solo estoy yo en esta isla?<br><br>Miras a tu alrededor, quizás haya alguna pista.",
        "opcionsPregunta": [ //205
            {
                triaPregunta: "BUSCAR",
                seguentPregunta: [{
                    situacio: 206,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //206
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 207,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)",
        "sound": "5"
    },
    {
        "text": "¡Allí hay algo!<br><br>Al acercarte todas tus esperanzas de golpe han perdido el sentido. Has encontrado un cadáver.<br><br>Parece llevar mucho tiempo aquí. Es la primera vez en tu vida que ves a una persona muerta. Además en un sitio así.",
        "opcionsPregunta": [ //207
            {
                triaPregunta: "MIRAS A SU ALREDEDOR",
                seguentPregunta: [{
                    situacio: 208,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "audio": "../AUDIO/Sadsong.mp3",
        "sound": "1",
        "img1": "url(../IMG/mechero.png)",
        "img2": "url(../IMG/mechero.png)",
        "transicion": "si",
        "opacidad": "false"
    },
    {
        "text": "",
        "opcionsPregunta": [ //208
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 209,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/botellaMobile.png)",
        "img2": "url(../IMG/botella.png)",
        "transicion": "si",
        "opacidad": "false"
    },
    {
        "text": "Ves una botella con un papel dentro. Parece una carta.",
        "opcionsPregunta": [ //209
            {
                triaPregunta: "LEERLA",
                seguentPregunta: [{
                    situacio: 210,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "opacidad": "true"
    },
    {
        "text": "",
        "opcionsPregunta": [ //210
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 211,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)",
        "transicion": "si"
    },
    {
        "text": "",
        "opcionsPregunta": [ //211
            {
                triaPregunta: "-->",
                seguentPregunta: [{
                    situacio: -8,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Decide:",
        "opcionsPregunta": [ //212
            {
                triaPregunta: "USAR LA BALA",
                seguentPregunta: [{
                    situacio: 213,
                    probabilitat: 100,
                    vida: 0
                }]
            },
            {
                triaPregunta: "NO USAR LA BALA",
                seguentPregunta: [{
                    situacio: 215,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)",
        "transicion": "si"
    },
    {
        "text": "",
        "opcionsPregunta": [ //213
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 214,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)",
        "sound": "6"
    },
    {
        "text": "",
        "opcionsPregunta": [ //214
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -7,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "audio": "../AUDIO/Muerte.mp3",
        "sound": "5",
    },
    {
        "text": "Las palabras de la carta eran muy emotivas y te han afectado. No puedes dejar de pensar en Antonio y como tenía que sentirse para que decidiera quitarse la vida. Sin embargo tú quieres sobrevivir y volver a ver a Sofía. Tienes motivo por lo que vale la pena luchar. Has tomado la decisión correcta.",
        "opcionsPregunta": [ //215
            {
                triaPregunta: "SEGUIR ADELANTE",
                seguentPregunta: [{
                    situacio: 216,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "Se ha hecho de noche, deberías comer algo pero la situación con Antonio te ha dejado sin hambre.<br><br>Oyes la lluvia caer.",
        "opcionsPregunta": [ //216
            {
                triaPregunta: "TE QUEDAS DORMIDO",
                seguentPregunta: [{
                    situacio: 217,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //217
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -5,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)",
        "audio": "../AUDIO/impact.mp3",
        "sound": "5"
    },
    {
        "text": "",
        "opcionsPregunta": [ //218
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 219,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/cercaplayaMobile.png)",
        "img2": "url(../IMG/cercaplaya.png)",
        "transicion": "si",
        "opacidad": "false"
    },
    {
        "text": "Acabas de despertarte.<br><br>Has pensado que antes de irte vas a enterrar a Antonio. Es lo mínimo que puedes hacer por él. Por un hombre que murió solo, en un lugar horrible y con ganas de ver a sus seres queridos.",
        "opcionsPregunta": [ //219
            {
                triaPregunta: "ENTERRAR A ANTONIO",
                seguentPregunta: [{
                    situacio: 220,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "opacidad": "true"
    },
    {
        "text": "",
        "opcionsPregunta": [ //220
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 221,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "audio": "../AUDIO/Mar.mp3",
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)",
        "sound": "1"
    },
    {
        "text": "",
        "opcionsPregunta": [ //221
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 222,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/entradaplayaMobile.jpg)",
        "img2": "url(../IMG/entradaplaya.jpg)",
        "transicion": "si",
        "opacidad": "false"
    },
    {
        "text": "¡Por fin has llegado a la playa! Ahora hay que señalar tu presencia en la isla para que te puedan ver desde el cielo y desde el mar. ¿Cómo vas a hacerlo?",
        "opcionsPregunta": [ //222
            {
                triaPregunta: "HOGUERA",
                seguentPregunta: [{
                    situacio: 223,
                    probabilitat: 100,
                    vida: 0
                }]
            },
            {
                triaPregunta: "”SOS” CON PIEDRAS",
                seguentPregunta: [{
                    situacio: 237,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "opacidad": "true"
    },
    {
        "text": "",
        "opcionsPregunta": [ //223
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 224,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "",
        "opcionsPregunta": [ //224
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 225,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/playaMobile.jpg)",
        "img2": "url(../IMG/playa.jpg)",
        "transicion": "si",
        "opacidad": "false"
    },
    {
        "text": "Llevas mirando al mar y al cielo unas horas. No aparece nadie. Empiezas a dudar si la decisión que tomaste ayer fue la mejor.<br><br>- ¿Y si no viene nadie? No quiero pasar el resto de mi vida en esta isla. No quiero ni construir una casa aquí ni acostumbrarme a cazar. Quiero volver a casa, a mi verdadera casa, sentarme en el sofá y tomar mi cerveza favorita.",
        "opcionsPregunta": [ //225
            {
                triaPregunta: "- QUIERO ABRAZAR A SOFÍA",
                seguentPregunta: [{
                    situacio: 226,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "opacidad": "true"
    },
    {
        "text": "Quieres ser fuerte pero la desesperación te lo impide. Tienes ganas de volver 6 días atrás y no coger esa maldita avioneta. Pero ahora no puedes hacer nada. Solo esperar. De esta manera “solo esperar” se acaba de convertir en lo más difíciles y más odiado en tu vida.",
        "opcionsPregunta": [ //226
            {
                triaPregunta: "ESPERAS",
                seguentPregunta: [{
                        situacio: 227,
                        probabilitat: 50,
                        vida: 0
                },
                    {
                        situacio: 233,
                        probabilitat: 100,
                        vida: 0
                }]
            }]
    },
    {
        "text": "",
        "opcionsPregunta": [ //227
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 228,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "",
        "opcionsPregunta": [ //228
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 229,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/nocheplayaMobile.png)",
        "img2": "url(../IMG/nocheplaya.png)",
        "transicion": "si",
        "opacidad": "false"
    },
    {
        "text": "Se ha hecho de noche. Estás más agobiado que nunca, porque resulta que tienes que dormir aquí otra noche.<br><br>Es lo último que quieres pero no tienes otra opción.",
        "opcionsPregunta": [ //229
            {
                triaPregunta: "TE QUEDAS DORMIDO",
                seguentPregunta: [{
                    situacio: 230,
                    probabilitat: 100,
                    vida: 0
                }]
            },
        ],
        "opacidad": "true"
    },
    {
        "text": "",
        "opcionsPregunta": [ //230
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 231,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "",
        "opcionsPregunta": [ //231
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 232,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/helicopteroMobile.jpg)",
        "img2": "url(../IMG/helicoptero.jpg)",
        "transicion": "si",
        "opacidad": "false",
        "audio": "../AUDIO/Helicoptero.mp3",
        "sound": "8"
    },
    {
        "text": "Te despiertas de golpe, pero no por el sueño, sino por un sonido muy ruidoso.<br><br>Al mirar arriba ves un helicóptero que viene a salvarte. Ahora estás más despierto que nunca. ¡Estás a salvo!<br><br>Ahora sube a la escalera que te han bajado.",
        "opcionsPregunta": [ //232
            {
                triaPregunta: "SUBIR AL HELICÓPTERO",
                seguentPregunta: [{
                    situacio: 247,
                    probabilitat: 100,
                    vida: 0
                }]
            },
        ],
        "opacidad": "true"
    },
    {
        "text": "",
        "opcionsPregunta": [ //233
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 234,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "",
        "opcionsPregunta": [ //234
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 235,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/playabarcaMobile.jpg)",
        "img2": "url(../IMG/playabarca.jpg)",
        "transicion": "si",
        "opacidad": "false"
    },
    {
        "text": "Se ha hecho de noche. Estás más agobiado que nunca, porque resulta que tienes que dormir aquí otra noche. Es lo último que quieres pero no tienes otra opción.<br><br>Estás quedandote dormido cuándo de repente ves alguas sombras en el mar.",
        "opcionsPregunta": [ //235
            {
                triaPregunta: "ESTÁS CONFUNDIDO",
                seguentPregunta: [{
                    situacio: 236,
                    probabilitat: 100,
                    vida: 0
                }]
            },
        ],
        "opacidad": "true"
    },
    {
        "text": "Un barco ha visto el fuego y han enviado una barca para comprobar si alguien necesita ayuda. De golpe todas las emociones negativas han desaparecido. ¡Estás a salvo! Ahora sube a la barca.",
        "opcionsPregunta": [ //236
            {
                triaPregunta: "SUBIR A LA BARCA",
                seguentPregunta: [{
                    situacio: 247,
                    probabilitat: 100,
                    vida: 0
                }]
            },
        ],
        "audio": "../AUDIO/Barco.mp3",
        "sound": "8"
    },
    {
        "text": "",
        "opcionsPregunta": [ //237
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 238,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "",
        "opcionsPregunta": [ //238
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 239,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/playaMobile.jpg)",
        "img2": "url(../IMG/playa.jpg)",
        "transicion": "si",
        "opacidad": "false"
    },
    {
        "text": "Llevas mirando al mar y al cielo unas horas. No aparece nadie. Empiezas a dudar si la decisión que tomaste ayer fue la mejor.<br><br>- ¿Y si no viene nadie? No quiero pasar el resto de mi vida en esta isla. No quiero ni construir una casa aquí ni acostumbrarme a cazar. Quiero volver a casa, a mi verdadera casa, sentarme en el sofá y tomar mi cerveza favorita.",
        "opcionsPregunta": [ //239
            {
                triaPregunta: "- QUIERO ABRAZAR A SOFÍA",
                seguentPregunta: [{
                    situacio: 240,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "opacidad": "true"
    },
    {
        "text": "Quieres ser fuerte pero la desesperación te lo impide. Tienes ganas de volver 6 días atrás y no coger esa maldita avioneta. Pero ahora no puedes hacer nada. Solo esperar. De esta manera “solo esperar” se acaba de convertir en lo más difíciles y más odiado en tu vida.",
        "opcionsPregunta": [ //240
            {
                triaPregunta: "ESPERAS",
                seguentPregunta: [{
                    situacio: 241,
                    probabilitat: 100,
                    vida: 0
                }]
            }]
    },
    {
        "text": "",
        "opcionsPregunta": [ //241
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 242,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "",
        "opcionsPregunta": [ //242
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 243,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/nocheplayaMobile.png)",
        "img2": "url(../IMG/nocheplaya.png)",
        "transicion": "si",
        "opacidad": "false"
    },
    {
        "text": "Se ha hecho de noche. Estás más agobiado que nunca, porque resulta que tienes que dormir aquí otra noche.<br><br>Es lo último que quieres pero no tienes otra opción.",
        "opcionsPregunta": [ //243
            {
                triaPregunta: "TE QUEDAS DORMIDO",
                seguentPregunta: [{
                    situacio: 244,
                    probabilitat: 100,
                    vida: 0
                }]
            },
        ],
        "opacidad": "true"
    },
    {
        "text": "",
        "opcionsPregunta": [ //244
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 245,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "",
        "opcionsPregunta": [ //245
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 246,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/sosMobile.jpg)",
        "img2": "url(../IMG/sos.jpg)",
        "transicion": "si",
        "opacidad": "false"
    },
    {
        "text": "Te despiertas de golpe, pero no por el sueño, sino por un sonido.<br><br>Miras al horizonte y ves una pequeña barca con personas dentro. Un barco ha visto tu señal y ha enviado a una barca para salvarte. ¡Estás a salvo!<br><br>Ahora sube a la barca que han enviado.",
        "opcionsPregunta": [ //246
            {
                triaPregunta: "SUBIR A LA BARCA",
                seguentPregunta: [{
                    situacio: 247,
                    probabilitat: 100,
                    vida: 0
                }]
            },
        ],
        "audio": "../AUDIO/Barco.mp3",
        "sound": "8",
        "opacidad": "true"
    },
    {
        "text": "",
        "opcionsPregunta": [ //247
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 248,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)",
        "sound": "6"
    },
    {
        "text": "",
        "opcionsPregunta": [ //248
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 249,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/chrisMobile.jpg)",
        "img2": "url(../IMG/chris.jpg)",
        "transicion": "si",
        "opacidad": "false"
    },
    {
        "text": "Ahora estás a salvo y de camino a casa. Con lágrimas en los ojos estás dando las gracias a la gente que te ha salvado. Estás tan feliz y tan agradecido que no sabes que hacer. Lo único que te se ocurre es llamar a Sofía y escuchar su voz.",
        "opcionsPregunta": [ //249
            {
                triaPregunta: "TE DEJAN LLAMAR",
                seguentPregunta: [{
                    situacio: 250,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "opacidad": "true"
    },
    {
        "text": "",
        "opcionsPregunta": [ //250
            {
                triaPregunta: "BLACKINTRO",
                seguentPregunta: [{
                    situacio: 251,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)"
    },
    {
        "text": "",
        "opcionsPregunta": [ //251
            {
                triaPregunta: "CONTEXTO",
                seguentPregunta: [{
                    situacio: 252,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "audio": "../AUDIO/Intro.mp3",
        "sound": "1",
        "img1": "url(../IMG/intro4.png)",
        "img2": "url(../IMG/intro4.png)",
        "transicion": "si",
        "opacidad": "false"
    },
    {
        "text": "- ¿Si?<br><br>- Hola cariño soy yo.<br><br>- Chris ¿Pero dónde estabas?, llevamos días buscandote.<br><br>- Podríamos decir que estaba de vacaciones.",
        "opcionsPregunta": [ //252
            {
                triaPregunta: "- ¿COMO?",
                seguentPregunta: [{
                    situacio: 253,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "- Es una larga historia, cuando llegue te la cuento. Ahora solo te llamaba para decirte que estoy bien.<br><br>- Me has tenido muy preocupada, ¿te fuiste por la discusión que tuvimos?<br><br>- No. Osea sí, pero no quería irme tanto tiempo.",
        "opcionsPregunta": [ //253
            {
                triaPregunta: "NOTAS A SOFÍA PREOCUPADA POR ALGO",
                seguentPregunta: [{
                    situacio: 254,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "- ¿Cariño estás bien?<br><br>- Verás Chris, creía que no volverías. Pensaba que me habías dejado.<br><br>- Sofía te quiero, jamás haría algo así.",
        "opcionsPregunta": [ //254
            {
                triaPregunta: "SOFÍA SE PONE SERIA",
                seguentPregunta: [{
                    situacio: 255,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "- Oye Chris escuchame un momento. Verás quería hablar contigo sobre una cosa.",
        "opcionsPregunta": [ //255
            {
                triaPregunta: "- SI, CLARO, DIME",
                seguentPregunta: [{
                    situacio: 256,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "- Verás, a ver como te digo esto. Después del quinto día pensaba que ya no volverías, o sea que ya no me querías ver más. Llamaba y no contestabas.",
        "opcionsPregunta": [ //256
            {
                triaPregunta: "- CARIÑO TE LO CONTARE TOD-",
                seguentPregunta: [{
                    situacio: 257,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "- Dejame acabar. Volví a la universidad para continuar con el trabajo y olvidarme de todo. Se lo conté todo a mi compañero, una cosa llegó a la otra y bueno... Nos besamos.",
        "opcionsPregunta": [ //257
            {
                triaPregunta: "COLGAR",
                seguentPregunta: [{
                    situacio: 258,
                    probabilitat: 100,
                    vida: 0
                }]
            },
            {
                triaPregunta: "LA DEJAS CONTINUAR",
                seguentPregunta: [{
                    situacio: 259,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //258
            {
                triaPregunta: "- ADIÓS SOFÍA",
                seguentPregunta: [{
                    situacio: 263,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "- Te juro que no significó nada.<br><br>Te quedas en silencio unos segundos.<br><br>- Chris, yo te quiero...",
        "opcionsPregunta": [ //259
            {
                triaPregunta: "COLGAR",
                seguentPregunta: [{
                    situacio: 258,
                    probabilitat: 100,
                    vida: 0
                }]
            },
            {
                triaPregunta: "- YO TAMBIÉN TE QUIERO",
                seguentPregunta: [{
                    situacio: 260,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "- Vuelve a casa pronto, ¿vale?",
        "opcionsPregunta": [ //260
            {
                triaPregunta: "- SI",
                seguentPregunta: [{
                    situacio: 261,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "- ¿Estás enfadado?",
        "opcionsPregunta": [ //261
            {
                triaPregunta: "- SI...",
                seguentPregunta: [{
                    situacio: 262,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "- Lo siento...",
        "opcionsPregunta": [ //262
            {
                triaPregunta: "- ADIÓS SOFÍA",
                seguentPregunta: [{
                    situacio: 263,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    },
    {
        "text": "",
        "opcionsPregunta": [ //263
            {
                triaPregunta: "BLACK",
                seguentPregunta: [{
                    situacio: 264,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ],
        "img1": "url(../IMG/black.jpeg)",
        "img2": "url(../IMG/black.jpeg)",
        "audio": "../AUDIO/impact.mp3",
        "sound": "5"
    },
    {
        "text": "",
        "opcionsPregunta": [ //264
            {
                triaPregunta: "",
                seguentPregunta: [{
                    situacio: -7,
                    probabilitat: 100,
                    vida: 0
                }]
            }
        ]
    }
];
