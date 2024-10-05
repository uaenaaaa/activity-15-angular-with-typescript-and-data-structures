import { Injectable } from '@angular/core';
import AccessoryList from '@app/interface/accessory-list';

@Injectable({
  providedIn: 'root'
})
export class AccessoryListService {
  private accessories: AccessoryList[] = [];

  constructor() { }

  addAccessory(name: string, description: string, price: number): void {
    this.accessories.push({
      name: name,
      description: description,
      price: price,
    });
  }

  getAccessories(): AccessoryList[] {
    return this.accessories;
  }
}
