function seleccionarClase() {
    // Obtener el valor seleccionado por el usuario
    var claseSelect = document.getElementById("claseSelect");
    var claseElegida = claseSelect.value;
  
    // Lógica para mostrar el resultado de la clase seleccionada
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
  
    switch (claseElegida) {
      case "clase1":
        resultado.innerHTML = `
        <h1>Operaciones Matemáticas</h1>
        <br>
        <select id="operation">
        <option value="add">Suma</option>
        <option value="subtract">Resta</option>
        <option value="multiply">Producto</option>
        <option value="divide">División</option>
      </select>
      <br>
      <input type="number" id="num1" placeholder="Número 1">
      <input type="number" id="num2" placeholder="Número 2">
      <button class="my-button" onclick="calculate()">Calcular</button>
      <div class="result-container">
        <p id="result">Ingrese Datos</p>
      </div>
        `;
        break;

        case "clase2":
    resultado.innerHTML = `
    <h1>Funciones Matemáticas</h1>
    <br>
    <div style="margin-top: 10px;">
        <button class="my-button" onclick="ejecutarFunciones()">Ejecutar Funciones</button>
        
    </div>
    <div class="result-container" style="background-color: rgb(96, 96, 96);">
      <p id="resultadoae"">Resultado</p>
      </div>
    `;
    break;

    case "clase3":
    resultado.innerHTML = `
    <h1>Respuestas a postulantes</h1>
    <br>
        <label for="respuestasCorrectas">Respuestas Correctas:</label>
        <input type="number" id="respuestasCorrectas">
        <br>
        <label for="respuestasIncorrectas">Respuestas Incorrectas:</label>
        <input type="number" id="respuestasIncorrectas">
        <br>
        <label for="respuestasEnBlanco">Respuestas en Blanco:</label>
        <input type="number" id="respuestasEnBlanco">
        <br>
        <button class="my-button" onclick="calcularPuntaje()">Calcular Puntaje</button>
        <div class="result-container">
          <p id="puntajeFinal">El puntaje final del postulante es: </p>
        </div> 
    `;
    break;

    case "clase4":
    resultado.innerHTML = `
    <h1>Incentivos Semanales</h1>
    <p>Introduce la producción semanal del operario:</p>
    <label for="respuestasCorrectas">Producción:</label>
    <input type="number" id="produccion">
    <br>
    <button class="my-button" onclick="calcularIncentivos()">Calcular Incentivo</button>
    <div class="result-container">
      <p id="puntajeFinal">El puntaje final del postulante es: </p>
    </div> 
`;
    break;

    case "clase5":
    resultado.innerHTML = `
    <h1>Estación Climática</h1>
    <label for="tempInput">Introduce las temperaturas diarias:</label>
    <input type="number" id="tempMaximaInput" placeholder="Máxima">
    <input type="number" id="tempMinimaInput" placeholder="Mínima">
    <button class="my-button" onclick="agregarTemperatura()">Agregar Temperatura</button>
</div>
<div class="result-container">
<p>Número de Días: <span id="numDias">0</span></p>
<p>Media Máxima: <span id="mediaMaxima">0</span></p>
<p>Media Mínima: <span id="mediaMinima">0</span></p>
<p>Número de Errores: <span id="numErrores">0</span></p>
<p>Porcentaje de Errores: <span id="porcentajeErrores">0%</span></p>
<p id="vacio"></p>
<p id="mensaje"></p>
`;
break;

case "clase6":
  resultado.innerHTML = `
  <h1>Contador de números</h1>
  <p>Ingrese números uno por uno. Presione "Contar" después de ingresar cada número:</p>
  <input type="number" id="inputNumber">
  <button class="my-button" onclick="contarNumero()">Contar</button>
  <div class="result-container">
    <p id="result">Ingrese datos</p>
    <p id="sumPositivos"></p>
    <p id="sumNegativos"></p>
  </div>
`;
  break;
  case "clase7":
  resultado.innerHTML = `
  <h1>Cálculo del Promedio de Peso</h1>

  <label for="edad">Edad:</label>
  <input type="number" id="edad" min="0" max="120" step="1">
  

  <label for="peso">Peso (kg):</label>
  <input type="number" id="peso" min="0" step="0.1">
  

  <button class="my-button" onclick="calcularPromedio()">Agregar Persona</button>
  
  <div class="result-container">
  <p id="vacio1"></p>
  <p>Promedio de peso por categoría de edad:</p>
  <p id="resultados"></p>
</div>
`;
  break;
  case "clase8":
  resultado.innerHTML = `
  <h1>Proceso de producción de huevos</h1>
<p>Ingresa los valores de Gallinas y días:</p>

<label for="x">Gallinas:</label>
<input type="number" id="x" placeholder="Ingresa numero de gallina">

<label for="n">Días:</label>
<input type="number" id="n" placeholder="Ingresa numero de días">

<button class="my-button" onclick="calcularResultado()">Calcular</button>
<div class="result-container">
  <p id="resultadoaa">Resulatdo:</p>
</div>
`;
  break;
  case "clase9":
  resultado.innerHTML = `
  <a href="estudiante.html">
  <button class="my-button">
    <p>Ir al programa</p>
    </button>
    </a>
`;
  break;
  case "clase10":
  resultado.innerHTML = `
  <a href="nomina.html">
  <button class="my-button">
    <p>Ir a la nomina</p>
    </button>
    </a>
`;
  break;
    }
  }
  
  //Programa1
  function calculate() {
    const operation = document.getElementById("operation").value;
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("result").innerHTML = "Por favor, ingrese números válidos.";
      return;
    }

    if (operation === "add") {
      result = num1 + num2;
    } else if (operation === "subtract") {
      result = num1 - num2;
    } else if (operation === "multiply") {
      result = num1 * num2;
    } else if (operation === "divide") {
      if (num2 === 0) {
        document.getElementById("result").innerHTML = "No se puede dividir por cero.";
        return;
      }
      result = num1 / num2;
    }

    document.getElementById("result").innerHTML = "Resultado: " + result.toFixed(1);
  }


  //Programa 2
  function suma(a, b) {
    return a + b;
  }
  
  
  function resta(a, b) {
    return a - b;
  }
  
  
  function multiplicacion(a, b) {
    return a * b;
  }
  
  
  function division(a, b) {
    return a / b;
  }
  
  
  function valorAbsoluto(numero) {
    return Math.abs(numero);
  }
  
  
  function raizCuadrada(numero) {
    return Math.sqrt(numero);
  }
  
  
  function potencia(base, exponente) {
    return Math.pow(base, exponente);
  }
  
  
  function redondeoCercano(numero) {
    return Math.round(numero);
  }
  
  
  function redondeoAbajo(numero) {
    return Math.floor(numero);
  }
  
  
  function redondeoArriba(numero) {
    return Math.ceil(numero);
  }
  
          function ejecutarFunciones() {
              const resultadoaeElement = document.getElementById('resultadoae');
              resultadoaeElement.innerHTML = '';
            
              resultadoaeElement.innerHTML += "<b>a + b:</b> Toma a y b (3 y 5) y devuelve la suma. = " + suma(5, 3) + "<br>";
              resultadoaeElement.innerHTML += "<b>a - b:</b> Toma a y b (10 y 4) y devuelve la resta. = " + resta(10, 4) + "<br>";
              resultadoaeElement.innerHTML += "<b>a * b:</b> Toma a y b (6 y 2) y devuelve la multiplicación. = " + multiplicacion(6, 2) + "<br>";
              resultadoaeElement.innerHTML += "<b>a / b:</b> Toma a y b (8 y 4) y devuelve la división. =  " + division(8, 4) + "<br>";
              resultadoaeElement.innerHTML += "<b>Math.abs(numero):</b> toma un número (-10) y devuelve su valor absoluto. = " + valorAbsoluto(-10) + "<br>";
              resultadoaeElement.innerHTML += "<b>ath.sqrt(numero):</b> Toma un número (25) y calcula su raíz cuadrada. = " + raizCuadrada(25) + "<br>";
              resultadoaeElement.innerHTML += "<b>Math.pow(base, exponente):</b> toma dos argumentos, base y exponente (2 y 3) , y calcula la potencia. = " + potencia(2, 3) + "<br>";
              resultadoaeElement.innerHTML += "<b>Math.round(numero):</b> Redondea un número (4.6) al entero más cercano. = " + redondeoCercano(4.6) + "<br>";
              resultadoaeElement.innerHTML += "<b>Math.floor(numero):</b> Redondea un número (4.6) hacia abajo al entero más cercano. = " + redondeoAbajo(4.6) + "<br>";
              resultadoaeElement.innerHTML += "<b>Math.ceil(numero):</b> Redondea un número (4.6) hacia arriba al entero más cercano. = " + redondeoArriba(4.6) + "<br>";
          }

      //Programa 3

          function calcularPuntaje() {
            const respuestasCorrectas = parseInt(document.getElementById("respuestasCorrectas").value);
            const respuestasIncorrectas = parseInt(document.getElementById("respuestasIncorrectas").value);
            const respuestasEnBlanco = parseInt(document.getElementById("respuestasEnBlanco").value);
        
            if (isNaN(respuestasCorrectas) || isNaN(respuestasIncorrectas) || isNaN(respuestasEnBlanco)) {
                document.getElementById("puntajeFinal").innerHTML = "Por favor, ingresa datos válidos en todos los campos.";
                return;
            } else {
                const puntajeFinal = (respuestasCorrectas * 4) - (respuestasIncorrectas * 1);
                document.getElementById("puntajeFinal").textContent = "El puntaje final del postulante es: " + puntajeFinal;
            }
        }
      //programa 4
        function calcularIncentivos() {
          const produccion = parseInt(document.getElementById("produccion").value);
          let ingresoTotal = 2 * produccion;  
          let porcentajeIncentivo = 0;    
          let salarioSemanal = 0;
          if (isNaN(produccion)) {
              document.getElementById("puntajeFinal").innerHTML = "Por favor, ingresa datos válidos.";
              return;          
          }
          if (produccion >= 0 && produccion < 100) {
            porcentajeIncentivo = 0;
          }
          if (produccion >= 100 && produccion < 200) {
            porcentajeIncentivo = 0.10;
          }
          if (produccion >= 200 && produccion < 300) {
            porcentajeIncentivo = 0.12;
            ingresoTotal = 2.5 * produccion;
          }
          if (produccion >= 300 && produccion < 400) {
            porcentajeIncentivo = 0.14;
            ingresoTotal = 3 * produccion;
          }
          if (produccion >= 400) {
            porcentajeIncentivo = 0.16;
            ingresoTotal = 3.5 * produccion;
          }
          salarioSemanal = ingresoTotal + (porcentajeIncentivo * ingresoTotal);
          document.getElementById("puntajeFinal").innerHTML = "Salario Semanal: $" + salarioSemanal;;
      }

      //programa 5
      let temperaturas = [];
        let numErrores = 0;
        let datosIngresados = false;

        function agregarTemperatura() {
            if (datosIngresados) {
                document.getElementById("mensaje").textContent = "No puedes ingresar más datos después de introducir 0 y 0.";
                limpiarMensaje("mensaje");
                return;
            }

            const maxima = parseFloat(document.getElementById("tempMaximaInput").value);
            const minima = parseFloat(document.getElementById("tempMinimaInput").value);

            if (isNaN(maxima) || isNaN(minima)) {
                document.getElementById("vacio").textContent = "Ingrese datos válidos";
                limpiarMensaje("vacio");
                return;
            }

            if (maxima === 0 && minima === 0) {
                datosIngresados = true;
            }

            if (maxima === 9 || minima === 9) {
                numErrores++;
            }

            temperaturas.push({ maxima, minima });
            calcularResumen();
        }

        function calcularResumen() {
            const numDias = temperaturas.length;

            let sumaMaxima = 0;
            let sumaMinima = 0;

            for (const temp of temperaturas) {
                sumaMaxima += temp.maxima;
                sumaMinima += temp.minima;
            }

            const mediaMaxima = sumaMaxima / numDias;
            const mediaMinima = sumaMinima / numDias;
            const porcentajeErrores = (numErrores / numDias) * 100;

            document.getElementById("numDias").textContent = numDias;
            document.getElementById("mediaMaxima").textContent = mediaMaxima.toFixed(2);
            document.getElementById("mediaMinima").textContent = mediaMinima.toFixed(2);
            document.getElementById("numErrores").textContent = numErrores;
            document.getElementById("porcentajeErrores").textContent = porcentajeErrores.toFixed(2) + "%";
        }

        function limpiarMensaje(elementId) {
            setTimeout(function () {
                document.getElementById(elementId).textContent = "";
            }, 3000); // 5000 milliseconds (5 seconds)
        }
        //Programa 6

      let positivos = 0;
      let negativos = 0;
      let neutros = 0;
      let sumaPositivos = 0;
      let sumaNegativos = 0;

      function contarNumero() {
          const inputNumber = parseInt(document.getElementById('inputNumber').value);

          if (inputNumber > 0) {
              positivos++;
              sumaPositivos += inputNumber;
          } else if (inputNumber < 0) {
              negativos++;
              sumaNegativos += inputNumber;
          } else {
              neutros++;
          }

          const result = `Positivos: ${positivos}, Negativos: ${negativos}, Neutros: ${neutros}`;
          const sumPositivosText = `Suma de positivos: ${sumaPositivos}`;
          const sumNegativosText = `Suma de negativos: ${sumaNegativos}`;

          document.getElementById('result').textContent = result;
          document.getElementById('sumPositivos').textContent = sumPositivosText;
          document.getElementById('sumNegativos').textContent = sumNegativosText;
          document.getElementById('inputNumber').value = ''; // Limpiar el campo de entrada después de contar
      }

      //Programa 7
  
      const personas = [];
      const categorias = ["Niños", "Jóvenes", "Adultos", "Viejos"];
  
      function calcularPromedio() {
        const edadInput = document.getElementById("edad");
        const pesoInput = document.getElementById("peso");
  
        const edad = parseInt(edadInput.value);
        const peso = parseFloat(pesoInput.value);
  
        if (isNaN(edad) || isNaN(peso)) {
          document.getElementById("vacio1").textContent = "Por favor, ingresa una edad y peso válidos.";
          limpiarMensaje("vacio1");
          return;
        }
  
        personas.push({ edad, peso });
  
        edadInput.value = "";
        pesoInput.value = "";
        edadInput.focus();
  
        actualizarResultados();
      }
  
      function actualizarResultados() {
        const resultadosList = document.getElementById("resultados");
        resultadosList.innerHTML = "";
  
        for (let i = 0; i < categorias.length; i++) {
          const categoria = categorias[i];
          const personasEnCategoria = personas.filter((persona) => {
            if (i === 0) {
              return persona.edad >= 0 && persona.edad <= 13;
            } else if (i === 1) {
              return persona.edad >= 14 && persona.edad <= 30;
            } else if (i === 2) {
              return persona.edad >= 31 && persona.edad <= 60;
            } else {
              return persona.edad >= 61;
            }
          });
  
          const totalPesoEnCategoria = personasEnCategoria.reduce((total, persona) => total + persona.peso, 0);
          const promedioPeso = totalPesoEnCategoria / personasEnCategoria.length || 0;
  
          const li = document.createElement("li");
          li.textContent = `${categoria}: Promedio de peso: ${promedioPeso.toFixed(2)} kg`;
          resultadosList.appendChild(li);
        }
      } 

      //Programa 8

      function calcularResultado() {
        var x = parseFloat(document.getElementById("x").value);
        var n = parseInt(document.getElementById("n").value);
        var resultadoaa = 0;
    
        for (var i = 0; i <= n; i++) {
          resultadoaa += Math.pow(x, i) / factorial(i);
        }
    
        document.getElementById("resultadoaa").innerHTML = "Resultado: " + resultadoaa;
    
        function factorial(num) {
            return num === 0 ? 1 : num * factorial(num - 1);
        }
    }

  //otro cosa
  var cantidad = 1;

function incrementar() {
  cantidad += 1;
  document.getElementById("cantidad").value = cantidad;
  if (cantidad == 11) {
    cantidad -= 1;
    document.getElementById("cantidad").value = cantidad;
  }
}

function decrementar() {
  if (cantidad > 1) {
    cantidad -= 1;
    document.getElementById("cantidad").value = cantidad;
  }
}
  