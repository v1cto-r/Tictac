Funcion generateGrid (g, actplay) //genera las casillas pero con los valores de las casillas
	jugador = ConvertirATexto(actplay)
	escribir "jugador: "+jugador
	escribir "   a   b   c"
	escribir "1  "+g[1]+" "+"|"+" "+g[2]+" "+"|"+" "+g[3]+" " //dependiendo del valor de la casillas
	escribir "  ---|---|---"								   //concatenas el valor para que 
	escribir "2  "+g[4]+" "+"|"+" "+g[5]+" "+"|"+" "+g[6]+" " //aparezca: " "vacias
	escribir "  ---|---|---"								  // "X" Cruz
	escribir "3  "+g[7]+" "+"|"+" "+g[8]+" "+"|"+" "+g[9]+" "// "O" Circulo
Fin Funcion

Algoritmo gato
	//Genera un numero al azar para decidir el jugador que inicia
	inicia = azar(2)+1 //le suma 1 por que el 0 esta incluido
	ganador = Falso //definir variable para ver si hay gandor
	actplay = inicia //declarar el jugador inicial
	definir seleccion Como Caracter //definir la variable
	jugador = ConvertirATexto(inicia) //convierte el entero a texto para poder concatenarlo
	Escribir "Inicia el jugador: "+jugador //concatena el texto con el numero de jugador que inicia
	Dimension g[9] //define todas las casillas del juego
	//     a   b   c
	// 1     \   \
	//    ---\---\---
	// 2     \   \
	//    ---\---\---
	// 3     \   \
	g[1] = " " //equivalente a: a1
	g[2] = " " //equivalente a: b1
	g[3] = " " //equivalente a: c1
	g[4] = " " //equivalente a: a2
	g[5] = " " //equivalente a: b2
	g[6] = " " //equivalente a: c2
	g[7] = " " //equivalente a: a3
	g[8] = " " //equivalente a: b3
	g[9] = " " //equivalente a: c3
	//por default las casillas valen " espacio " para que aparezcan vacias
	escribir "Escribir casilla para jugar (Ej. a1)"
	Mientras ganador == Falso Hacer
		generateGrid(g,actplay)//llama la funcion para generar casillas
		escribir sin saltar "casilla: " //texto para ingresar la casilla
		// verificar por entradas validas 
		valido = Falso
		mientras valido == Falso Hacer
			leer seleccion //leer la entrada
			si seleccion == "a1" Entonces //verificar posibles entradas
				si g[1] == " " Entonces //si la casilla no existe (Ej. c4) escribe casilla invalida
					si actplay==1 Entonces //si la casilla ya está ocupada escribe casilla invalida
						g[1] = "X"
						actplay = 2
					SiNo
						si actplay == 2 Entonces
							g[1] = "O"
							actplay = 1
						FinSi
					FinSi
					valido = Verdadero
				FinSi
			FinSi
			si seleccion == "a2" Entonces
				si g[4] == " " Entonces
					si actplay == 1 Entonces
						g[4] = "X"
						actplay = 2
					SiNo
						si actplay == 2 Entonces
							g[4] = "O"
							actplay = 1
						FinSi
					FinSi
					valido = Verdadero
				FinSi
			FinSi
			si seleccion == "a3" Entonces
				si g[7] == " " Entonces
					si actplay == 1 Entonces
						g[7] = "X"
						actplay = 2
					SiNo
						si actplay == 2 Entonces
							g[7] = "O"
							actplay = 1
						FinSi
					FinSi
					valido = Verdadero
				FinSi
			FinSi
			si seleccion == "b1" Entonces
				si g[2] == " " Entonces
					si actplay == 1 Entonces
						g[2] = "X"
						actplay = 2
					SiNo
						si actplay == 2 Entonces
							g[2] = "O"
							actplay = 1
						FinSi
					FinSi
					valido = Verdadero
				FinSi
			FinSi
			si seleccion == "b2" Entonces
				si g[5] == " " Entonces
					si actplay == 1 Entonces
						g[5] = "X"
						actplay = 2
					SiNo
						si actplay == 2 Entonces
							g[5] = "O"
							actplay = 1
						FinSi
					FinSi
					valido = Verdadero
				FinSi
			FinSi
			si seleccion == "b3" Entonces
				si g[8] == " " Entonces
					si actplay == 1 Entonces
						g[8] = "X"
						actplay = 2
					SiNo
						si actplay == 2 Entonces
							g[8] = "O"
							actplay = 1
						FinSi
					FinSi
					valido = Verdadero
				FinSi
			FinSi
			si seleccion == "c1" Entonces
				si g[3] == " " Entonces
					si actplay == 1 Entonces
						g[3] = "X"
						actplay = 2
					SiNo
						si actplay == 2 Entonces
							g[3] = "O"
							actplay = 1
						FinSi
					FinSi
					valido = Verdadero
				FinSi
			FinSi
			si seleccion == "c2" Entonces
				si g[6] == " " Entonces
					si actplay == 1 Entonces
						g[6] = "X"
						actplay = 2
					SiNo
						si actplay == 2 Entonces
							g[6] = "O"
							actplay = 1
						FinSi
					FinSi
					valido = Verdadero
				FinSi
			FinSi
			si seleccion == "c3" Entonces
				si g[9] == " " Entonces
					si actplay == 1 Entonces
						g[9] = "X"
						actplay = 2
					SiNo
						si actplay == 2 Entonces
							g[1] = "O"
							actplay = 1
						FinSi
					FinSi
					valido = Verdadero
				FinSi
			FinSi
			si valido = Falso Entonces //Si la entrada no fue valida, notificar al jugador
				escribir "Seleccion invalida"
				escribir sin saltar "casilla: " //volver a pedir una entrada
			FinSi
		FinMientras
		Si g[1] == g[2] Y g[1] == g[3] Entonces
			si g[1] <> " " Entonces
				ganador = Verdadero
			FinSi
		FinSi
		Si g[4] == g[5] Y g[4] == g[6] Entonces
			si g[4] <> " " Entonces
				ganador = Verdadero
			FinSi
		FinSi
		Si g[7] == g[8] Y g[7] == g[9] Entonces
			si g[7] <> " " Entonces
				ganador = Verdadero
			FinSi
		FinSi
		Si g[1] == g[4] Y g[1] == g[7] Entonces
			si g[1] <> " " Entonces
				ganador = Verdadero
			FinSi
		FinSi
		Si g[2] == g[5] Y g[2] == g[8] Entonces
			si g[2] <> " " Entonces
				ganador = Verdadero
			FinSi
		FinSi
		Si g[3] == g[6] Y g[3] == g[9] Entonces
			si g[3] <> " " Entonces
				ganador = Verdadero
			FinSi
		FinSi
		Si g[1] == g[5] Y g[1] == g[9] Entonces
			si g[1] <> " " Entonces
				ganador = Verdadero
			FinSi
		FinSi
		Si g[7] == g[5] Y g[7] == g[3] Entonces
			si g[7] <> " " Entonces
				ganador = Verdadero
			FinSi
		FinSi
	FinMientras
	generateGrid(g, actplay)
	Si actplay == 1 Entonces
		Escribir "Ganador Jugador 2"
	SiNo
		Si actplay == 2 Entonces
			Escribir "Ganador Jugador 1"
		FinSi
	FinSi
FinAlgoritmo