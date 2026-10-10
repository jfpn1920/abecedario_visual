//-----------------------------------//
//--|funcionalidad_tarjetas_visual|--//
//-----------------------------------//
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
    "btn-nandu": "audio_ñandu.mp3",
    "btn-oso": "audio_oso.mp3",
    "btn-pato": "audio_pato.mp3",
    "btn-queso": "audio_queso.mp3",
    "btn-raton": "audio_raton.mp3",
    "btn-sol": "audio_sol.mp3",
    "btn-telefono": "audio_telefono.mp3",
    "btn-uva": "audio_uva.mp3",
    "btn-vaca": "audio_vaca.mp3",
    "btn-sandia": "audio_sandia.mp3",
    "btn-xilofono": "audio_xilofono.mp3",
    "btn-yoyo": "audio_yoyo.mp3",
    "btn-zapato": "audio_zapato.mp3"
};
//---------------------------//
//--|botones_a_interactuar|--//
//---------------------------//
const botones = document.querySelectorAll("button[id^='btn-']");
botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        const archivoAudio = audios[boton.id];
        if (!archivoAudio) {
            console.error("No existe un audio configurado para:", boton.id);
            return;
        }
        console.log("Botón presionado:", boton.id);
        console.log("Audio buscado:", archivoAudio);
        const audio = new Audio(archivoAudio);
        audio.play()
            .then(function () {
                console.log("Audio reproduciéndose:", archivoAudio);
            })
            .catch(function (error) {
                console.error("No se pudo reproducir:", archivoAudio, error);
            });
    });
});
//-----------------------------------//
//--|validacion_formularios_visual|--//
//-----------------------------------//
const formularios = document.querySelectorAll("form[action='abecedario_visual.php']");
formularios.forEach(function (formulario) {
    formulario.addEventListener("submit", function (evento) {
        const campoPalabra = formulario.querySelector("input[name='palabra']");
        const campoLetra = formulario.querySelector("input[name='letra']");
        //-------------------------------------//
        //--|verificar_campos_del_formulario|--//
        //-------------------------------------//
        if (!campoPalabra || !campoLetra) {
            evento.preventDefault();
            alert("No se encontraron los campos necesarios para guardar.");
            return;
        }
        //------------------------------------------------//
        //--|obtener_y_validar_los_datos_del_formulario|--//
        //------------------------------------------------//
        const palabra = campoPalabra.value.trim();
        const letra = campoLetra.value.trim();
        if (palabra === "") {
            evento.preventDefault();
            alert("Por favor, escribe una palabra antes de guardar.");
            campoPalabra.focus();
            return;
        }
        //------------------------//
        //--|validar_las_letras|--//
        //------------------------//
        if (letra === "") {
            evento.preventDefault();
            alert("No se encontró la letra de esta tarjeta.");
            return;
        }
        //------------------------------------//
        //--|preparar_los_datos_para_enviar|--//
        //------------------------------------//
        campoPalabra.value = palabra;
        console.log("Letra enviada:", letra);
        console.log("Palabra enviada:", palabra);
    });
});
