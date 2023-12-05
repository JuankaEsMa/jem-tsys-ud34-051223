import { Colores } from './Colores.ts';
import { Consumos } from './Consumos.ts';
export
class Electrodomestico{
    protected precioBase: number;
    protected color: string;
    protected consumoEnergetico: string;
    protected peso: number;

    constructor(precioBase: number = 100, color?: string, peso: number = 5, consumo?: string){
        this.precioBase = precioBase;
        this.consumoEnergetico = this.comprobarConsumoEnergetico(consumo);
        this.peso = peso;
        this.color = this.comprobarColor(color);
    }

    private comprobarColor(color:string|undefined):string{
        if(color != undefined){
            for (var colorEnum in Colores) {
                if(colorEnum.toLowerCase() == color.toLowerCase()){
                    return colorEnum;
                }
            }
        }
        return Colores.Blanco;
    }

    private comprobarConsumoEnergetico(letra: string|undefined): string{
        if(letra != undefined){
            for (var consumoEnom in Consumos) {
                if(consumoEnom == letra.toUpperCase()){
                    return consumoEnom;
                }
            }
        }
        return "F";
    }   

    public precioFinal(){
        let consumoPrecio:any;
        let pesoPrecio: number;
        for (var consumoEnom in Consumos) {
            if(consumoEnom == this.consumoEnergetico){
                consumoPrecio = Consumos[consumoEnom];
            }
        }
        if(this.peso > 80){
            pesoPrecio = 100;
        }else if(this.peso > 49){
            pesoPrecio = 80;
        }else if(this.peso > 19){
            pesoPrecio = 50;
        }else{
            pesoPrecio = 10;
        }
        this.precioBase += consumoPrecio + pesoPrecio;
    }

    public getPrecioBase(): number{
        return this.precioBase;
    }
    public getColor(): string{
        return this.color;
    }
    public getConsumoEnergetico():string{
        return this.consumoEnergetico;
    }
    public getPeso():number{
        return this.peso;
    }
}