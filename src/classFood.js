class Food {
  constructor(name) {
    this.name = name;
    this.brands = [];
  }
  //Food 객체 속 brands 배열에 넣어주는 작업
  addBrand(brand) {
    this.brands.push(brand);
  }

  print() {
    console.log(`${this.name} 을 파는 음식점 : `); //`{} ~~~`
    console.log(this.brands.join(", "));
  }
}

const pizza = new Food("피자");
pizza.addBrand("피자헛");
pizza.addBrand("도미너");

const chicken = new Food("치킨");
chicken.addBrand("네네");
chicken.addBrand("굽네");

pizza.print();
chicken.print();
