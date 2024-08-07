let alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "á",
  "é",
  "í",
  "ó",
  "ú",
  "ü",
];

const codigos = [
  "olai",
  "zxy",
  "oberlai",
  "uno",
  "xelop",
  "bvr",
  "fluk",
  "dos",
  "crum",
  "mpl",
  "vlex",
  "tres",
  "dirp",
  "qux",
  "merf",
  "cuatro",
  "trop",
  "tws",
  "grof",
  "cinco",
  "plok",
  "gnr",
  "krex",
  "seis",
  "morf",
  "ywd",
  "florx",
  "siete",
  "krax",
  "plk",
  "jorp",
  "ocho",
  "vort",
  "vjt",
  "snur",
  "nueve",
  "blup",
  "jmn",
  "glip",
  "diez",
  "xorp",
  "kxq",
  "wex",
  "once",
  "zlep",
  "rfd",
  "murn",
  "doce",
  "flanx",
  "tlg",
  "krip",
  "trece",
  "zrop",
  "ncz",
  "tux",
];

function añadirlista(palabra) {
  document.getElementById("retirar").style.display = "none";
  document.getElementById("texto").value = "";
  document.getElementById("palabras").innerHTML=""
  var li = document.createElement("li");
  li.innerHTML = `${palabra}`;
  document.getElementById("palabras").appendChild(li);
  document.getElementById("copiarboton").setAttribute("onclick", `copiar('${palabra}')`);
  document.getElementById("copiarboton").removeAttribute("style")
}

async function copiar(palabra) {
  try {
    await navigator.clipboard.writeText(palabra);
    alert("Texto copiado al portapapeles");
  } catch (err) {
    console.error("Error al copiar el texto: ", err);
    alert("Error al copiar el texto");
  }
}

function encriptar(texto) {
    if (texto === "") {
      window.alert("INGRESE UNA PALABRA VALIDA");
      return;
    }
  
    const numerosGenerados = new Set();
    const mover = texto.length - Math.floor(texto.length / 2);
    let palabra = texto.split("");
  
    for (let i = 0; i < mover; i++) {
      let numero;
      do {
        numero = Math.floor(Math.random() * texto.length);
      } while (numerosGenerados.has(numero));
      numerosGenerados.add(numero);
  
      const caracter = texto[numero].toLowerCase();
      const indiceCodificacion = alfabeto.indexOf(caracter);

        palabra[numero] = codigos[indiceCodificacion]
    }
  
    añadirlista(palabra.join(""));
  }
  

  function desencriptar(texto) {
    if (texto === "") {
      window.alert("INGRESE UNA PALABRA VALIDA");
      return;
    }
  
    let palabra = texto;
  
    for (let i = 0; i < codigos.length; i++) {
      if (texto.includes(codigos[i])) {
        palabra = palabra.split(codigos[i]).join(alfabeto[i]);
      }
    }
  
    añadirlista(palabra)
  }
  
  
