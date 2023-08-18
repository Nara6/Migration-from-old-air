import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';

@Injectable()

export class UtilsService {

    constructor() { }

    formatDate(date: Date): string {
        if (date) {
            return moment(date).format('Y-MM-DD HH:mm:ss');
        } else {
            return null;
        }
    }

    formatDateOnly(date: Date): string {
        if (date) {
            return moment(date).format('Y-MM-DD');
        } else {
            return null;
        }
    }

    getDateBeforeNow(period: number): Date {
        return moment().subtract(period, 'months').toDate();
    }

    lang(kh: any, en: any): any {
        return localStorage.getItem('lang') === 'en' ? en : kh;
    }

    checkImageExtension(fileName: string): boolean {
        const validFileExtensions = ['.jpg', '.jpeg', '.bmp', '.gif', '.png'];
        const ext = fileName.substr(fileName.lastIndexOf('.') + 1);
        console.log(ext);
        if (fileName) {

        }
        return false;
    }
}
