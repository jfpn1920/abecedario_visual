// ========================================
// ABECEDARIO VISUAL
// REPRODUCCIÓN DE AUDIOS
// ========================================


// ========================================
// RELACIÓN ENTRE BOTONES Y ARCHIVOS
// ========================================

const audios = {

    "btn-abeja": "audio_abeja.mp3",
    "btn-ballena": "audio_ballena.mp3",
    "btn-casa": "audio_casa.mp3",
    "btn-delfin": "audio_delfin.mp3",
    "btn-elefante": "audio_elefante.mp3",
    "btn-foca": "audio_foca.mp3",
    "btn-gato": "audio_gato.mp3",
    "btn-helicoptero": "audio_helicoptero.mp3",
    "btn-isla": "audio_isla.mp3",
    "btn-jaguar": "audio_jaguar.mp3",
    "btn-koala": "audio_koala.mp3",
    "btn-leon": "audio_leon.mp3",
    "btn-mula": "audio_mula.mp3",
    "btn-nube": "audio_nube.mp3",
    
    // Ñandú
    "btn-nandu": "audio_ñandu.mp3",

    "btn-oso": "audio_oso.mp3",
    "btn-pato": "audio_pato.mp3",
    "btn-queso": "audio_queso.mp3",

    // Ratón
    "btn-raton": "audio_raton.mp3",

    "btn-sol": "audio_sol.mp3",
    "btn-telefono": "audio_telefono.mp3",
    "btn-uva": "audio_uva.mp3",
    "btn-vaca": "audio_vaca.mp3",
    "btn-sandia": "audio_sandia.mp3",
    "btn-xilofono": "audio_xilofono.mp3",
    "btn-yoyo": "audio_yoyo.mp3",

    // Zapato
    "btn-zapato": "audio_zapato.mp3"
};


// ========================================
// SELECCIONAR TODOS LOS BOTONES
// ========================================

const botones = document.querySelectorAll("button[id^='btn-']");


// ========================================
// EVENTO CLICK
// ========================================

botones.forEach(function (boton) {

    boton.addEventListener("click", function () {

        // Obtener el nombre del archivo
        const archivoAudio = audios[boton.id];

        // Verificar que el audio exista en nuestra lista
        if (!archivoAudio) {

            console.error(
                "No existe un audio configurado para:",
                boton.id
            );

            return;
        }


        // Mostrar información en la consola
        console.log("Botón presionado:", boton.id);
        console.log("Audio buscado:", archivoAudio);


        // Crear el audio
        const audio = new Audio(archivoAudio);


        // Reproducir el audio
        audio.play()

            .then(function () {

                console.log(
                    "Audio reproduciéndose:",
                    archivoAudio
                );

            })

            .catch(function (error) {

                console.error(
                    "No se pudo reproducir:",
                    archivoAudio,
                    error
                );

            });

    });

});