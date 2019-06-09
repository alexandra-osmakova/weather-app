import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  public key: string = '62ea29378f635e4a2d18ffc62c0cc130';
  public currentCity: string;
  

  constructor() { }

}
