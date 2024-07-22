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
  "@",
  "zxy",
  "#",
  "1",
  "$",
  "bvr",
  "%",
  "2",
  "^",
  "mpl",
  "&",
  "3",
  "*",
  "qux",
  "(",
  "4",
  ")",
  "tws",
  "-",
  "5",
  "_",
  "gnr",
  "=",
  "6",
  "+",
  "ywd",
  "[",
  "7",
  "]",
  "plk",
  "{",
  "8",
  "}",
  "vjt",
  "\\",
  "9",
  "|",
  "jmn",
  ";",
  "10",
  ":",
  "kxq",
  "'",
  "11",
  '"',
  "rfd",
  ",",
  "12",
  ".",
  "tlg",
  "/",
  "13",
  "<",
  "ncz",
  ">",
  "14",
  "?",
  "bsm",
  "!",
  "15",
  "~",
  "qkp",
  "`",
];

function añadirlista(palabra) {
  document.getElementById("retirar").style.display = "none";
  document.getElementById("texto").value = "";
  var li = document.createElement("li");
  li.innerHTML = `${palabra} <button class='copiar' onclick="copiar('${palabra}')">copiar</button>`;
  document.getElementById("palabras").appendChild(li);
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
    if(texto===""){
        window.alert("INGRESE UNA PALABRA VALIDA")
        return
    }

    const desencriptado = texto
      .split("")
      .map((caracter) => {
        const indice = codigos.indexOf(caracter.toLowerCase());
        if (indice !== -1) {
          return alfabeto[indice];
        } else {
          return caracter;
        }
      })
      .join("");

    añadirlista(desencriptado);
}
