import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  storage: any;
  encryptSecretKey: string = 'A565KhsdhasdjsKJHNL4NA1!N@PU$HP@';

  constructor() {
    if (window.localStorage) {
      this.storage = localStorage;
    } else {
      throw Error('Localstorage is not supported in this browser. Try to update the browser');
    }
  }

  setItem(storage: any, key: string, value: string | undefined, encrypt: Boolean = false) {
    if (encrypt) {
      value = this.encryptData(value);
    }
    storage.setItem(key, value);
  }

  setJSONItem(storage: any, key: string, value: any, encrypt: Boolean = false) {
    value = JSON.stringify(value);
    if (encrypt) {
      value = this.encryptData(value);
    }
    storage.setItem(key, value);
  }

  getItem(storage: any, key: string, decrypt: Boolean = false) {
    let value = storage.getItem(key);
    if (decrypt) {
      value = this.decryptData(value);
    }
    return value ? value : null;
  }

  getJSONItem(storage: any, key: string, decrypt: Boolean = false) {
    let value = storage.getItem(key);
    if (decrypt) {
      value = this.decryptData(value);
    }
    return value ? JSON.parse(value) : null;
  }

  removeItem(storage: any, key: string) {
    storage.removeItem(key);
  }

  encryptData(data: any) {
    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), this.encryptSecretKey).toString();
    } catch (e) {
      console.log(e);
    }
  }

  decryptData(data: any) {
    if (data != null) {
      try {
        const bytes = CryptoJS.AES.decrypt(data, this.encryptSecretKey);
        if (bytes.toString()) {
          return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        }
        return data;
      } catch (e) {
        console.log(e);
      }
    }
  }
}
