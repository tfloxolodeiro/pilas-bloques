export default [
  {
    id: 1,
    grupoId: 1,
    nombre: 'AlienTocaBoton',
    titulo: 'El alien toca el botón',
    enunciado: 'Ayudá a nuestro Alien a presionar el botón de su laboratorio. \n'+
               'Pistas: mirá las acciones disponibles. ¡Vas a tener que avanzar varias veces!',
    consignaInicial: 'Los bloques te permiten formar secuencias de acciones para resolver los desafíos que te proponemos en Pilas Bloques.',
    escena: 'AlienInicial',
    actividad: null   /* Se carga desde un hook en la ruta desafío. */
  },
  {
    id: 2,
    grupoId: 1,
    nombre: 'ElGatoEnLaCalle', // sale de 'id' en 'app/actividades/actividadElGatoEnLaCalle.js'
    titulo: 'El gato en la calle', // sale de 'nombre' en 'app/actividades/actividadElGatoEnLaCalle.js'
    enunciado: 'Hacé que el gato avance un paso, se duerma, se despierte, salude y vuelva a su lugar.',
    consignaInicial: 'Se pueden crear nuevas acciones en Procedimientos definiendo nuevos bloques que incluyan otras acciones.',
    escena: 'ElGatoEnLaCalle',
    actividad: null,
  },
  {
    id: 3,
    grupoId: 1,
    nombre: 'NoMeCansoDeSaltar',
    titulo: 'No me canso de saltar',
    enunciado: 'Ayudá al gato a quitarse la pereza saltando 30 veces seguidas. Pista: se puede resolver con menos de 30 bloques.',
    consignaInicial: 'El bloque Repetir permite elegir la cantidad de veces que se desea repetir una secuencia de acciones. Esto se llama "Repetición simple".',
    escena: 'NoMeCansoDeSaltar',
    actividad: null,
  },
  {
    id: 4,
    grupoId: 1,
    nombre: 'ElMarcianoEnElDesierto',
    titulo: 'El marciano en el desierto',
    enunciado: 'El marciano está perdido en el desierto y necesita alimentarse de su comida favorita: ¡las manzanas! Ayudalo a comer las frutas. Pista: Crear un procedimiento (bloque) para cada conjunto de manzanas',
    consignaInicial: 'Hay muchas formas de comer las manzanas. Podés empezar por las de la derecha, ¡o podés empezar por arriba! ¿Se te ocurre otra estrategia? Pensala siempre antes de programar',
    escena: 'ElMarcianoEnElDesierto',
    actividad: null,
  },
  {
    id: 5,
    grupoId: 1,
    nombre: 'TitoEnciendeLuces',
    titulo: 'Tito enciende las luces',
    enunciado: 'Ayudá a Tito a encender todas las luces. \n'+
    'Pista: creá un procedimiento para prender todas las luces de una diagonal.',
    consignaInicial: 'Se puede crear un procedimiento una vez y usarlo todas las veces que quieras dentro de un programa.',
    escena: 'TitoEnciendeLuces',
    actividad: null,
  },
  {
    id: 6,
    grupoId: 1,
    nombre: 'ElAlienYLasTuercas',
    titulo: 'El alien y las tuercas',
    enunciado: 'Definí un programa para que el alien junte todas las tuercas. Pista: ¿El alien no puede moverse en diagonal? Podés crear tu propio procedimiento para que lo haga',
    escena: 'AlienLevantaTuercas',
    actividad: null,
  },
  {
    id: 7,
    grupoId: 1,
    nombre: 'ElRecolectorDeEstrellas',
    titulo: 'El recolector de estrellas',
    enunciado: 'Ayudá a nuestro personaje a recolectar todas las estrellas. Pista: podés hacer un procedimiento que tome una fila de estrellas.',
    consignaInicial: 'Usar muchas veces un procedimiento te ahorra trabajo.',
    escena: 'ElRecolectorDeEstrellas',
    actividad: null,
  },
  {
    id: 8,
    grupoId: 1,
    nombre: 'MariaLaComeSandias',
    titulo: 'María la come sandías',
    enunciado: 'María necesita comer todas las sandías de la cuadrícula. Pensá de qué manera puede hacerlo creando los bloques necesarios. Pista: la forma en que las sandías están distribuidas en la cuadrícula, es clave para crear la menor cantidad de procedimientos.',
    escena: 'MariaLaComeSandias',
    actividad: null,
  },
  {
    id: 9,
    grupoId: 1,
    nombre: 'AlimentandoALosPeces',
    titulo: 'Alimentando a los peces',
    enunciado: 'Nuestro buzo debe alimentar con lombrices a los 7 peces que hay en esta escena. Buscá primero a las lombrices y luego pasá por cada pez alimentándolo. Pista: pensá en una estrategia de 3 partes.',
    consignaInicial: '',
    escena: 'AlimentandoALosPeces',
    actividad: null,
  },
  {
    id: 10,
    grupoId: 1,
    nombre: 'InstalandoJuegos',
    titulo: 'Instalando juegos',
    enunciado: 'Ramiro tiene que instalar un juego en 3 compus para divertirse con sus amigos. Los pasos para instalarlo en cada una son: encenderla, ingresar la contraseña ("ABC"), instalar el juego y apagar la máquina. Pista: aprovechá que en cada compu hay que hacer el mismo trabajo.',
    escena: 'InstalandoJuegos',
    actividad: null,
  },
  {
    id: 11,
    grupoId: 1,
    nombre: 'LaGranAventuraDelMarEncantado',
    titulo: 'La gran aventura del mar encantado',
    enunciado:  'Ayuda a la heroína a rescatar a su príncipe. Para ello debe superar en orden cada una de las siguientes pruebas:\n' +
              '1) Buscar la llave.\n'+
              '2) Abrir el cofre con la llave y tomar el sombrero mágico que está dentro.\n'+
              '3) Entregarle el sombrero al mago para recibir la espada a cambio.\n'+
              '4) Luchar con la espada contra el caballero oscuro.\n'+
              '5) Ir con el príncipe hasta el unicornio y escapar.',
    consignaInicial: '',
    escena: 'LaGranAventuraDelMarEncantado',
    actividad: null,
  },
  {
    id: 12,
    grupoId: 1,
    nombre: 'ReparandoLaNave',
    titulo: 'Reparando la nave',
    enunciado: 'El marciano debe arreglar su nave para poder volver a su hogar. Para lograrlo debe llevar 3 unidades de carbón y 3 de hierro a la nave, pero no puede cargar más de una unidad a la vez.',
    escena: 'ReparandoLaNave',
    actividad: null,
  },
  {
    id: 13,
    grupoId: 2,
    nombre: 'ElMonoYLasBananas',
    titulo: 'El mono y las bananas',
    enunciado:
    '¿Podés hacer que el mono avance al casillero de enfrente?'+
    ' Si hay una banana debe comérsela. Si no, es feliz con sólo llegar. \n '+
    'Ejecutá el programa varias veces para asegurarte que siempre funciona. \n' +
    'Pista: mirá la categoría "Sensores" y la categoría "Control".',
    consignaInicial: 'El bloque "Si... Entonces" ejecuta una secuencia de instrucciones solamente cuando la condición es verdadera. Esto se llama "alternativa condicional".',
    escena: 'ElMonoYLasBananas',
    actividad: null,
  },
  {
    id: 14,
    grupoId: 2,
    nombre: 'LaEleccionDelMono',
    titulo: 'La elección del mono',
    enunciado: '¿Podés ayudar nuevamente a nuestro mono? Esta vez tiene '+
     'que elegir qué fruta comer. \n'+
    'Ejecutá el programa varias veces para asegurarte que siempre funciona. \n' +
    'Pista: ésta vez no alcanza con el bloque "Si".',
    consignaInicial: 'Cuando sólo hay 2 opciones, alcanza con hacer una sola pregunta. En esos casos se puede usar el bloque "Si... si no".',
    escena: 'LaEleccionDelMono',
    actividad: null,
  },
  {
    id: 15,
    grupoId: 2,
    nombre: 'LaberintoCorto',
    titulo: 'Laberinto corto',
    enunciado: 'Guiá al ratón para llegar a la meta. Para lograrlo, debe avanzar una casilla en la dirección que indica la flecha. Pista: mirá en la categoría "Sensores" qué preguntas podés hacer.',
    escena: 'LaberintoCorto',
    actividad: null,
  },
  {
    id: 16,
    grupoId: 2,
    nombre: 'TresNaranjas',
    titulo: 'Tres naranjas',
    enunciado: 'El alien debe comer todos los gajos de naranja que aparezcan en las casillas violetas. ¡Pero no siempre aparecen en los mismos lugares ni la misma cantidad de naranjas! Pista: pensá primero cómo harías un procedimiento para comer una sola naranja si es que la hay.',
    escena: 'TresNaranjas',
    actividad: null,
  },
  {
    id: 17,
    grupoId: 2,
    nombre: 'TitoRecargado',
    titulo: 'Tito recargado',
    enunciado: 'Tito necesita encender las luces para poder conocer el camino... ¡Pero en cada ejecución cambian de lugar! Podés utlizar los procedimientos y bloques de control.',
    escena: 'TitoRecargado',
    actividad: null,
  },
  {
    id: 18,
    grupoId: 2,
    nombre: 'LaberintoLargo',
    titulo: 'Laberinto largo',
    enunciado: 'Ayudá al ratón a salir del laberinto. A diferencia del laberinto anterior, aquí la cantidad de casillas que debe avanzar son muchas. ¿Cuántas? ¿Es siempre la misma? Pista: pensá primero cómo avanzar una sola casilla.',
    escena: 'LaberintoLargo',
    actividad: null,
  },
  {
    id: 19,
    grupoId: 3,
    nombre: 'SuperTito1',
    titulo: 'Súper Tito 1 ',
    enunciado: ' Ayudá a Tito a encender las luces. \n ¡Ojo! En todas las celdas hay una luz, pero no sabés cuántas celdas hay en cada ejecución.',
    consignaInicial: 'Hay nuevos bloques que pueden ayudarte a resolver el desafío de manera muy sencilla. ¡Aprovechalos!',
    escena: 'SuperTito1',
    actividad: null,
  },
  {
    id: 20,
    grupoId: 3,
    nombre: 'SuperTito2',
    titulo: 'Súper Tito 2',
    enunciado: 'Súper Tito debe encender todas las luces, pero a diferencia del desafío anterior, hay celdas sin luz. ¿Podrás utilizar el mismo procedimiento que en Súper Tito 1? \n',
    consignaInicial: 'El bloque "repetir hasta que" repite una secuencia de acciones hasta que se cumple una condición. Esto se llama "repetición condicional".',
    escena: 'SuperTito2',
    actividad: null,
  },
  {
    id: 21,
    grupoId: 3,
    nombre: 'LaberintoConQueso',
    titulo: 'Laberinto con queso',
    enunciado: '¡El ratón está más hambriento que nunca! Guialo por el laberinto para que pueda comer todos los trozos de queso. Pista: antes de empezar, apretá varias veces el botón Ejecutar para conocer cómo varía el escenario.',
    consignaInicial: 'Es importante pensar si en algún momento se cumple la condición del bloque "Repetir hasta qué". Sino, ¡el programa podría no terminar nunca!',
    escena: 'LaberintoConQueso',
    actividad: null,
  },
  {
    id: 22,
    grupoId: 3,
    nombre: 'ElDetectiveChaparro',
    titulo: 'El detective Chaparro',
    enunciado: 'El detective debe descubrir al culpable de un crimen, quitándole el disfraz que lo camufla. Comenzando por el primero de la izquierda, ¡interrogá a cada uno de los sospechosos hasta encontrar al culpable!',
    consignaInicial: 'El bloque "Repetir hasta que" nos permite terminar el programa cuando encontramos al culpable sin tener que interrogar a todos los sospechosos de la fila.',
    escena: 'ElDetectiveChaparro',
    actividad: null,
  },
  {
    id: 23,
    grupoId: 3,
    nombre: 'FutbolRobots',
    titulo: 'Fútbol para robots',
    enunciado: 'Ayudá a nuestro robot futbolista a patear todas las pelotas. ' +
    'Recordá siempre que una buena división en procedimientos puede ayudarte a encarar '+
    'mejor el problema.',
    consignaInicial: 'El procedimiento que se defina debe considerar el escenario variable y ofrecer una solución con poca cantidad de bloques. Es importante tener en cuenta que la acción se repite varias veces y que la longitud de las filas varía.',
    escena: 'FutbolRobots',
    actividad: null,
  },
  {
    id: 24,
    grupoId: 3,
    nombre: 'PrendiendoLasCompus',
    titulo: 'Prendiendo las compus',
    enunciado:
    'Debemos prender todas las compus teniendo en cuenta que el ancho y el alto del escenario cambian en cada ejecución. Pista: pensá cómo harías para prender las compus de un solo lado del rectángulo y después repetilo para el resto de los lados.',
    escena: 'PrendiendoLasCompus',
    actividad: null,
  },
  {
    id: 25,
    grupoId: 3,
    nombre: 'ElMonoQueSabeContar',
    titulo: 'El mono que sabe contar',
    enunciado: 'El mono debe recorrer todas las casillas y contar cuántas bananas y manzanas hay en total. Pista: primero pensá cómo contarías si hay una manzana o una banana en una casilla determinada. Luego pensá cómo harías para contar todas las frutas de una sola columna.',
    consignaInicial: 'Subdividir un problema grande en problemas más pequeños ayuda a comprender mejor cada una de las partes que lo componen. Además nos permite concentrarnos en resolver cuestiones más sencillas al problema original.',
    escena: 'ElMonoQueSabeContar',
    actividad: null,
  },
  {
    id: 26,
    grupoId: 4,
    nombre: 'ElSuperviaje',
    titulo: 'El Superviaje',
    enunciado: 'Nuestro superhéroe debe realizar su súper paseo matutino que consiste en recorrer una cierta cantidad de kilómetros que varía día a día (entre 15 y 45 km). ¡Lográ que nuestro súper amigo llegue siempre a destino!',
    consignaInicial: 'Se puede usar un bloque "Repetir" con el valor de una variable. Esto permite repetir una secuencia de código la cantidad de veces que indique la variable.',
    escena: 'SuperViaje',
    actividad: null,
  },
  {
    id: 27,
    grupoId: 4,
    nombre: 'ElMonoCuentaDeNuevo',
    titulo: 'El mono cuenta de nuevo',
    enunciado: 'El mono tiene que contar otra vez las frutas, ¡pero ahora no puede verificar si ya llegó al final de una columna! Pista: mirá en la categoría "Variables" si hay algo que te pueda servir.',
    consignaInicial: 'Una variable nos permite guardar información que puede cambiar en cada ejecución del programa, incluso en una misma ejecución. Por ejemplo, el largo de cada columna varía dependiendo en qué columna esté parado el mono.',
    escena: 'ElMonoCuentaDeNuevo',
    actividad: null,
  },
  {
    id: 28,
    grupoId: 5,
    nombre: 'ElPlanetaDeNano',
    titulo: 'El planeta de Nano',
    escena: 'ElPlanetaDeNano',
    enunciado: 'Ayudá a Nano a recoger todas sus frutas. ¡Cuidado! No se puede bajar... \n ¡Tené en cuenta que el escenario no cambia, las bananas están siempre en las mismas casillas!',
    consignaInicial: 'A los procedimientos se les pueden agregar parámetros para que resulten más generales. Por ejemplo, si creamos los procedimientos "Avanzar 2 casillas", "Avanzar 3 casillas" y "Avanzar 4 casillas", podemos reemplazar a los 3 por un solo procedimiento que reciba como parámetro la cantidad de casillas que queremos avanzar: "Avanzar [cantidad] casillas".',
    actividad: null,
  },
  {
    id: 29,
    grupoId: 5,
    nombre: 'DibujandoCuadrado',
    titulo: 'Dibujando: Al cuadrado',
    enunciado: 'Dibujá un cuadrado que tenga 100 de lado.',
    consignaInicial: '',
    escena: 'DibujandoCuadrado',
    actividad: null,
  },
  {
    id: 30,
    grupoId: 5,
    nombre: 'Dibujando5CuadradosHorizontal',
    titulo: 'Dibujando: Rayuela robótica',
    enunciado: 'Dibujá 5 cuadrados en fila, cada uno de lado 50, como muestra la figura sombreada.',
    consignaInicial: '',
    escena: 'Dibujando5CuadradosHorizontal',
    actividad: null,
  },
  {
    id: 31,
    grupoId: 5,
    nombre: 'Dibujando5CuadradosDiagonal',
    titulo: 'Dibujando: Corto por la diagonal',
    enunciado: 'Dibujá 5 cuadrados en diagonal, cada uno de lado 50, como muestra la figura sombreada.',
    consignaInicial: '',
    escena: 'Dibujando5CuadradosDiagonal',
    actividad: null,
  },
  {
    id: 32,
    grupoId: 5,
    nombre: 'Dibujando4CuadradosInteriores',
    titulo: 'Dibujando: Mamushka cuadrada',
    enunciado: 'Dibujá 4 cuadrados de lados 50, 100, 150 y 200, como muestra la figura sombreada. Pista: creá un procedimiento nuevo para dibujar cuadrados de cualquier longitud de lado.',
    consignaInicial: 'Incluir parámetros en los procedimientos permite generalizar un concepto. Por ejemplo, la longitud del lado de un cuadrado.',
    escena: 'Dibujando4CuadradosInteriores',
    actividad: null,
  },
  {
    id: 33,
    grupoId: 5,
    nombre: 'DibujandoCabezaElefante',
    titulo: 'Dibujando: Escalera cuadrada',
    enunciado: 'Dibujá 5 cuadros de lado 50 y uno de 100, como muestra la figura sombreada.',
    consignaInicial: 'Al crear un procedimiento con parámetros, sus valores no están definidos (por ej. "longitud de lado"). Al usar los procedimientos hay que darles un valor concreto a esos parámetros (50, 100, etc.).',
    escena: 'DibujandoCabezaElefante',
    actividad: null,
  },
  {
    id: 34,
    grupoId: 5,
    nombre: 'DibujandoHexagono',
    titulo: 'Dibujando: Hexágono',
    enunciado: 'Dibujá un hexágono de lado 100, como muestra la figura sombreada. Pista: pensá cuántos grados debe girar el robot sabiendo cuánto miden los ángulos internos del hexágono.',
    consignaInicial: 'En los polígonos, el valor de un ángulo externo es igual a 180 menos el valor de un ángulo interno.',
    escena: 'DibujandoHexagono',
    actividad: null,
  },
  {
    id: 35,
    grupoId: 5,
    nombre: 'DibujandoTrianguloEquilatero',
    titulo: 'Dibujando: Pirámide invertida',
    enunciado: 'Dibujá un triángulo equilátero de lado 100, como muestra la figura sombreada. Pista: pensá si existe una relación entre los ángulos y la cantidad de lados.',
    consignaInicial: 'En los polígonos, la suma de todos los ángulos externos es 360',
    escena: 'DibujandoTrianguloEquilatero',
    actividad: null,
  },
  {
    id: 36,
    grupoId: 5,
    nombre: 'DibujandoPoligonosInteriores',
    titulo: 'Dibujando: Figuras dentro de figuras',
    enunciado: 'Dibujá un triángulo, un cuadrado y un hexágono de lados 100, como muestra la figura sombreada. Pista: creá un procedimiento con un parámetro para la cantidad de lados.',
    consignaInicial: 'Para agregar un parámetro a un procedimiento nuevo, hay que hacer clic en la estrella que aparece al lado de "Definir" y luego arrastrar el bloque "nombre de entrada" a "entradas".',
    escena: 'DibujandoPoligonosInteriores',
    actividad: null,
  },
  {
    id: 37,
    grupoId: 5,
    nombre: 'DibujandoCuevaEstalagtitas',
    titulo: 'Dibujando: La cueva de estalagtitas',
    enunciado: 'Dibujá 3 triángulos de lados 40, 60 y 100, y un cuadrado de lado 100, como muestra la figura sombreada. Pista: creá un procedimiento con 2 parámetros, uno para la cantidad de lados y otro para la longitud de los lados.',
    consignaInicial: 'Para poder usar los parámetros en un nuevo procedimiento, hay que hacer clic derecho en el bloque que define dicho procedimiento.',
    escena: 'DibujandoCuevaEstalagtitas',
    actividad: null,
  },
  {
    id: 130,
    grupoId: 5,
    nombre: 'LaFiestaDeDracula',
    titulo: 'La fiesta de Drácula',
    escena: 'LaFiestaDeDracula',
    enunciado: 'Para que la fiesta de Drácula comience debemos cambiar el color de las 3 lámparas una cierta cantidad de veces: 5 veces la primera, 8 la segunda y 12 la tercera.',
    actividad: null,
  },
  {
    id: 131,
    grupoId: 5,
    nombre: 'SalvandoLaNavidad',
    titulo: 'Salvando la Navidad',
    escena: 'SalvandoLaNavidad',
    enunciado: 'Ayudá a Papá Noel a dejar un regalo al final de cada fila. ¡Tené en cuenta que el escenario no cambia de una ejecución a la otra! Pista: si tuvieses que elegir un parámetro para tu procedimiento... ¿Cuál eligirías?',
    actividad: null,
  },
  {
    id: 132,
    grupoId: 5,
    nombre: 'PrendiendoLasCompusParametrizado',
    titulo: 'Prendiendo las compus parametrizado',
    escena: 'PrendiendoLasCompus',
    enunciado: 'Al igual que antes, debemos prender todas las compus. Pero esta vez tenés que definir un único procedimiento que prenda cualquiera de los lados.',
    consignaInicial: 'Los parámetros pueden ser de texto además de numéricos. Por ejemplo, un parámetro podría ser la dirección en que el autómata debe moverse.',
    actividad: null,
  },
  {
    id: 133,
    grupoId: 5,
    nombre: 'TitoCuadrado',
    titulo: 'Tito cuadrado',
    escena: 'TitoCuadrado',
    enunciado: 'Tito debe encender todas las luces del cuadrado pero en cada ejecución están distribuidas de una manera diferente. Tené en cuenta que las casillas de la esquina nunca se prenden y que el tamaño del cuadrado no varía de una ejecución a la otra.',
    actividad: null,
  },
  {
    id: 134,
    grupoId: 5,
    nombre: 'ElCangrejoAguafiestas',
    titulo: 'El cangrejo aguafiestas',
    escena: 'ElCangrejoAguafiestas',
    enunciado: 'El cangrejo quiere pinchar todos los globos de la fiesta. Tené en cuenta que estos no cambian de lugar. Pista: ¿la cantidad de globos y la dirección podrían ser parámetros?',
    consignaInicial: 'Se pueden combinar parámetros numéricos (cantidades, longitudes) con parámetros de texto (direcciones, nombres).',
    actividad: null,
  },
  {
    id: 135,
    grupoId: 5,
    nombre: '',
    titulo: 'Próximamente: más actividades',
    deshabilitado: true,
    actividad: null,
  },
];
