import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDiscount } from 'src/app/shared/interfaces';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  requestDiscountsData(): Observable<any> {
    let response = this.http.get('http://localhost:8080/discounts');
    return response;
  }

  handleRemoteDiscount(remoteDiscount: any) {
    const localDiscount: IDiscount = {
      id: remoteDiscount.id,
      name: remoteDiscount.name,
      vendor:
        remoteDiscount.vendor === null ? 'Unknown' : remoteDiscount.vendor,
      added: remoteDiscount.startTime,
      expired: remoteDiscount.endTime,
      location: 'remoteDiscount',
      tag: remoteDiscount.tags.name,
      category: remoteDiscount.category.name,
      isActive: remoteDiscount.active,
      description:
        remoteDiscount.description === null
          ? 'Default description'
          : remoteDiscount.description,
      percent: remoteDiscount.percent,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVe9r47bhQVcZJ4jEd4wQuYH0LsAz5qKOTBATYRG8c7C3waYKbB2Z1My-HtoY2nzv4XmY&usqp=CAU',
      coordinates: [50 + Math.random() * 5, 20 + Math.random() * 5],
    };
    return localDiscount;
  }
}
