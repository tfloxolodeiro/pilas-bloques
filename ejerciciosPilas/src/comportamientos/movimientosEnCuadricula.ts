/// <reference path = "../../dependencias/pilasweb.d.ts"/>

class MovimientoEnCuadricula extends Comportamiento {
    cuadricula;
    movimiento;
    estoyEmpezandoAMoverme;
    
    iniciar(receptor){
        super.iniciar(receptor);
        this.cuadricula = receptor.cuadriculaActual();
        this.movimiento = new this.claseQueImita();
        this.movimiento.iniciar(receptor);
        this.movimiento.velocidad = this.velocidad();
        this.estoyEmpezandoAMoverme = true;
    }
    actualizar(){
        if (!this.puedoMovermeEnEsaDireccion() || this.movimiento.actualizar()){
            
            return true;
        }
    }
    claseQueImita(){
        // Template Method. Las subclases deben devolver una clase de comportamiento.
    }
    puedoMovermeEnEsaDireccion(){
        if (this.estoyEmpezandoAMoverme){
            this.estoyEmpezandoAMoverme = false;
            return this.verificarDireccion(this.receptor.casillaActual());
        }
        return true;
    }
    
    velocidad(){
        // Template Method. Devuelve la velocidad vertical ú horizontal según corresponda 
    }
    
    // El nro 20 depende del nro 0.05 establecido en CaminaBase
    velocidadHorizontal(){
        return 20 / this.cuadricula.anchoCasilla();    
    }
    velocidadVertical(){
        return 20 / this.cuadricula.altoCasilla();
    }
    verificarDireccion(casilla){
        var proximaCasilla = this.proximaCasilla(casilla);
        if (!proximaCasilla){
            this.receptor.decir("No puedo ir para " + this.textoAMostrar());
            return false;
        };
        this.receptor.casillaActual(proximaCasilla);
        return true
    }
    
    proximaCasilla(casilla){
        // Template Method. Devolver la casilla a la que se va a avanzar
    }
    
    textoAMostrar(){
        // Template Method. Para mostrar mensaje descriptivo al no poder avanzar
    }
}

class MoverACasillaDerecha extends MovimientoEnCuadricula {
    claseQueImita(){
        return CaminaDerecha;
    }
    proximaCasilla(casilla){
        return casilla.casillaASuDerecha();
    }
    textoAMostrar(){
        return "la derecha";
    }
    velocidad(){
        return this.velocidadHorizontal();
    }
}

class MoverACasillaArriba extends MovimientoEnCuadricula{
    claseQueImita(){
        return CaminaArriba;
    }
    proximaCasilla(casilla){
        return casilla.casillaDeArriba();
    }
    textoAMostrar(){
        return "arriba";
    }
    velocidad(){
        return this.velocidadHorizontal();
    }
}

class MoverACasillaAbajo extends MovimientoEnCuadricula{
    claseQueImita(){
        return CaminaAbajo;
    }
    proximaCasilla(casilla){
        return casilla.casillaDeAbajo();
    }
    textoAMostrar(){
        return "abajo";
    }
    velocidad(){
        return this.velocidadHorizontal();
    }
}

class MoverACasillaIzquierda extends MovimientoEnCuadricula{
    claseQueImita(){
        return CaminaIzquierda;
    }
    proximaCasilla(casilla){
        return casilla.casillaASuIzquierda();
    }
    textoAMostrar(){
        return "la izquierda";
    }
    velocidad(){
        return this.velocidadHorizontal();
    }
}