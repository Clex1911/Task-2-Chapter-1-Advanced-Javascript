const divisi = {
    marketing: [
        {
          name: "Budi",
          salary: 5000000,
        },
        {
          name: "Agus",
          salary: 4500000,
        },
      ],
      engineer: {
        frontend: [
          {
            name: "Suci",
            salary: 8500000,
          },
          {
            name: "Lukito",
            salary: 7000000,
          },
        ],
        backend: [
          {
            name: "Bustomi",
            salary: 9500000,
          },
        ],
        devops: [
          {
            name: "Paul",
            salary: 9000000,
          },
        ],
      },
};

function TotalSalary(divisi){
    let total = 0;

    if(Array.isArray(divisi)) {
        for(let i=0; i<divisi.length; i++){
            total += divisi[i].salary;
        }
    } else if(typeof(divisi)==='object' && divisi!==null) {
        for(let prop in divisi){
            total += TotalSalary(divisi[prop]);
        }
    }
    return total;
    
}

console.log(TotalSalary(divisi));
