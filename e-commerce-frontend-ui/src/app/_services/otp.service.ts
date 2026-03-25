import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  PATH_OF_API = '';
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private httpClient: HttpClient) { }

  public sendOtp(phoneNumber: string): Observable<any> {
    const request = { phoneNumber: phoneNumber };
    return this.httpClient.post(
      this.PATH_OF_API + '/api/otp/send',
      request,
      { headers: this.requestHeader }
    );
  }

  public verifyOtp(phoneNumber: string, code: string): Observable<any> {
    const request = { phoneNumber: phoneNumber, code: code };
    return this.httpClient.post(
      this.PATH_OF_API + '/api/otp/verify',
      request,
      { headers: this.requestHeader }
    );
  }
}
