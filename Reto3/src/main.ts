import './style.css'
import { Electrodomestico } from './Electrodomestico'
import { Lavadora } from './Lavadora';
import { Television } from './Television';


let arrayElectrodomesticos:Array<Electrodomestico> = [];
arrayElectrodomesticos.push(new Electrodomestico(150, "violeta",100,"J"), new Electrodomestico(150, "rojo",110,"A"), new Electrodomestico(150, "negro",100,"B"));
arrayElectrodomesticos.push(new Lavadora(150, "violeta",100,"J"), new Lavadora(150, "rojo",110,"A",50), new Lavadora(150, "negro",100,"B",20));
arrayElectrodomesticos.push(new Television(150, "violeta",100,"J",50,true), new Television(150, "rojo",110,"A",20), new Television(150, "negro",100,"B"), new Television(180,"aliceblue",5,"A",60,true));
let precioTelevisiones:number = 0;
let precioLavadoras:number = 0;
let precioElectrodomesticos:number = 0;
for (let i = 0; i < arrayElectrodomesticos.length; i++) {
  arrayElectrodomesticos[i].precioFinal();
  if(arrayElectrodomesticos[i]instanceof Television){
    precioTelevisiones += arrayElectrodomesticos[i].getPrecioBase();
  }else if(arrayElectrodomesticos[i]instanceof Lavadora){
    precioLavadoras += arrayElectrodomesticos[i].getPrecioBase();
  }
  precioElectrodomesticos += arrayElectrodomesticos[i].getPrecioBase();

}
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <p>Precio Lavadoras: ${precioLavadoras}
    <p>Precio Televisiones: ${precioTelevisiones}
    <p>Precio Electrodomesticos: ${precioElectrodomesticos}
  </div>
`