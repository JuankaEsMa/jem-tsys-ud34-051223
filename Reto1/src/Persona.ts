export
class Persona {
    public SEXODEFECTO: "H"|"M" = "H";
    private nombre: string;
    private edad: number;
    private dni: string;
    private sexo: "H"|"M";
    private peso: number;
    private altura: number;
    constructor(dni:string, nombre:string = "", edad:number = 0, peso:number = 0, altura:number = 0, sexo?: "H"|"M"){
        this.dni = dni;
        this.nombre = nombre!;
        this.edad = edad!;
        this.peso = peso!;
        this.altura = altura!;
        if(sexo === undefined){
            this.sexo = this.SEXODEFECTO;
        }else{
            this.sexo = sexo!
        }
    }
    getDni(): string{
        return this.dni;
    }
    getNombre(): string{
        return this.nombre;
    }
    getEdad(): number{
        return this.edad;
    }
    getPeso(): number{
        return this.peso;
    }
    getAltura(): number{
        return this.altura;
    }
    getSexo(): string{
        return this.sexo;
    }
    setDni(dni:string){
        this.dni = dni;
    }
    setNombre(nombre:string){
        this.nombre = nombre;
    }
    setEdad(edad:number){
        this.edad = edad;
    }
    setPeso(peso:number){
        this.peso = peso;
    }
    setAltura(altura:number){
        this.altura = altura;
    }
    setSexo(sexo:"H"|"M"){
        this.sexo = sexo;
    }
    
}