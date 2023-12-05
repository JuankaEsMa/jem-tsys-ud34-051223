import { Electrodomestico } from "./Electrodomestico";
export
class Lavadora extends Electrodomestico{

    private carga:number;

    constructor(precioBase: number = 100, color?: string, peso: number = 5, consumo?: string, carga: number = 5){
        super(precioBase, color, peso, consumo);
        this.carga = carga;
    }

    public getCarga():number{
        return this.carga;
    }
    public precioFinal(){
        if(this.carga > 30){
            this.precioBase += 50;
        }
    }
}