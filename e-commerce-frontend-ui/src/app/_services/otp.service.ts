import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  PATH_OF_API = environment.apiUrl;
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private httpClient: HttpClient) { }

  public sendOtp(phoneNumber: string): Observable<any> {
    const request = { phoneNumber: phoneNumber };
    return this.httpClient.post(
      this.PATH_OF_API + '/otp/send',
      request,
      { headers: this.requestHeader }
    );
  }

  public verifyOtp(phoneNumber: string, code: string): Observable<any> {
    const request = { phoneNumber: phoneNumber, code: code };
    return this.httpClient.post(
      this.PATH_OF_API + '/otp/verify',
      request,
      { headers: this.requestHeader }
    );
  }
}
