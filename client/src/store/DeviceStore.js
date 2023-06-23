import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {
        id: 1,
        name: "computer",
      },
      {
        id: 2,
        name: "computer",
      },
    ];
    this._devices = [
      {
        id: 1,
        name: "lux deatheader",
        price: 150,
        img: "https://content.rozetka.com.ua/goods/images/big/21226006.jpg",
      },
      {
        id: 2,
        name: "lux deatheader",
        price: 150,
        img: "https://content.rozetka.com.ua/goods/images/big/21226006.jpg",
      },
      {
        id: 3,
        name: "lux deatheader",
        price: 150,
        img: "https://content.rozetka.com.ua/goods/images/big/21226006.jpg",
      },
      {
        id: 4,
        name: "lux deatheader",
        price: 150,
        img: "https://content.rozetka.com.ua/goods/images/big/21226006.jpg",
      },
    ];
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }

  get devices() {
    return this._devices;
  }
}
