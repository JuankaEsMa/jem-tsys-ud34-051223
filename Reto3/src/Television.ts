import { Electrodomestico } from "./Electrodomestico";
export
class Television extends Electrodomestico{
    private resolucion: number;
    private is4K: boolean;

    constructor(precioBase: number = 100, color?: string, peso: number = 5, consumo?: string,resolucion:number = 20, is4K:boolean = false){
        super(precioBase,color,peso,consumo)
        this.resolucion = resolucion;
        this.is4K = is4K;
    }

    public precioFinal(){
        if(this.is4K){
            this.precioBase += 50;
        }
        if(this.resolucion > 40){
            this.precioBase += this.precioBase * 1.3;
        }
    }

    public getResolucion(){
        return this.resolucion;
    }
    public getIs4K(){
        return this.is4K;
    }
}