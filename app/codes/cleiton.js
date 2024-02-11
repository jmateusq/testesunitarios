class Cleiton{
    constructor(tipo,som){
        this.tipo = tipo;
        this.som = som;
    }
    
    apresentacao(){
        return `Cleiton ${this.tipo} ao som do ${this.som}, olha a pedra`
    }
}

module.exports=Cleiton;