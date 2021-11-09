export default class Product {
  constructor(id, name, mount, price) {
    this.id = Number(id);
    this.name = name;
    this.mount = Number(mount);
    this.price = Number(price);
    this.valorMercancia = 0;
  }
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
  getMount() {
    return this.mount;
  }
  getTotalPrice() {
    this.valorMercancia = this.mount * this.price;
    return this.valorMercancia;
  }
}
