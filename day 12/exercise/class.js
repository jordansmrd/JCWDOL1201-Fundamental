/** @format */

class FoodOrders {
  #foods = [];

  addFood(food) {
    this.#foods.push(food);
    console.log(this.#foods);
  }

  async process() {
    let i = 0;

    do {
      if (i >= this.#foods.length) break;
      let interval = Math.floor(Math.random() * 11) * 1000;
      await new Promise(
        (resolve) =>
          setTimeout(() => {
            resolve(
              console.log(
                `Queue ${i + 1} ${this.#foods[i]} Done in ${
                  interval / 1000
                } minutes`
              )
            );
          }, interval) //2000
      );
      i++;
    } while (true);
    {
    }
  }
}

module.exports = FoodOrders;
