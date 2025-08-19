alert("Sizga hozr random solar chiqish boshlaydi ");

let randomSon = Math.floor(Math.random() * 100) + 1;

alert("Rondon orqali chiqqan son " + randomSon );

let laycha = confirm("Bu soni ikkicha ko'payirish yoki bolish  ");

if(laycha){
    alert("Random son " + randomSon + " \n 2 ga bo'lganda " + randomSon / 2 + " \n 2 ga ko'paytirishda " + randomSon * 2 + "\n 3 ga bo'lganda qoldiq " + randomSon % 3);
}
