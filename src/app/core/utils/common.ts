import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { FormArray } from '@angular/forms';
import * as moment from 'moment';

@Injectable()
export class UtilsService {
  constructor() {}

  findObjectIndex(list: any[], obj: any, key: string): number {
    return _.findIndex(list, (item: any) => {
      return key === item[obj];
    });
  }

  findObject(list: any[], key: any, value: any): number {
    return _.find(list, (item: any) => {
      return item[key] === value;
    });
  }

  findObjectByQuery(list: any[], key: string, query: string): any {
    return _.find(list, (item: any) => {
      return item[key].toLowerCase() === query.toLowerCase();
    });
  }

  removeObject(list: any[], key: any, value: any) {
    _.remove(list, (currentObject: any) => {
      return currentObject[key] === value;
    });
  }

  isEmpty(obj: any) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  clearKeyValueForm(control: FormArray) {
    for (let i = control.length - 1; i >= 0; i--) {
      control.removeAt(i);
    }
  }

  convertUTCTimeToLocal(utcTime: any) {
    utcTime = utcTime.slice[-1] !== 'Z' ? utcTime + 'Z' : utcTime;
    let dateTime: any = moment(utcTime, 'HH:mmZ');
    dateTime = moment
      .utc(dateTime)
      .local()
      .format('HH:mm');
    return dateTime;
  }

  convertLocalToUTC(local: any) {
    const localTime = _.cloneDeep(local);
    const dateTime: any = moment(localTime, 'HH:mm')
      .utc()
      .toISOString()
      .split('T')[1];
    return dateTime;
  }

  getDuplicateObjectsInArray(array: any[]) {
    let duplicateObjs = array
      .map((e: any) => JSON.stringify(e))
      .map((e: any, i: any, final: any[]) => final.indexOf(e) !== i && i)
      .filter((obj: any) => array[obj])
      .map((e: any) => array[e]);
    if (duplicateObjs && duplicateObjs.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
