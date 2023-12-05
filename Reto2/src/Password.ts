export
class Password {
    private longitud: number;
    private password: string;
    public constructor (longitud:number){
        this.longitud = longitud;
        this.password = "";
        this.generatePassword(longitud);
    }
    private generatePassword(longitud:number){
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        for (let i = 0; i < longitud; i++) {
            this.password += characters.charAt(Math.floor(Math.random()*characters.length));
        }
    }
    public getPassword(): string{
        return this.password;
    }
    public getLongitud(): number{
        return this.longitud;
    }
    public setPassword(password:string){
        this.password = password;
    }
    public setLongitud(longitud: number){
        this.longitud = longitud;
    }
}