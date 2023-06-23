import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [];
    this._devices = [];
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setDevices(devices) {
    this._devices = [...devices];
  }

  get types() {
    return this._types;
  }

  get devices() {
    return this._devices;
  }
}
