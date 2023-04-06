class car {
    constructor(brand, tahun, negara) {
        this.brand = brand;
        this.tahun = tahun;
        this.negara = negara;
    }

    getUmur(){
        const currentYear = new Date().getFullYear();
        return currentYear - this.tahun;
    }

    MadeInUS() {
        return this.negara === 'US'; //buat mengecek apakah mobil tersebut berasal dari US
    }
}

const Car = new car('Wuling', 2020, 'China')
console.log('Brand:', Car.brand); 
console.log('Tahun:', Car.tahun);
console.log('Negara:', Car.negara);

console.log('Jarak Umur:', Car.getUmur());
console.log('Apakah terbuat dari US?', Car.MadeInUS());

