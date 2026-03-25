import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  PATH_OF_API = '';
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private httpClient: HttpClient) { }

  public initiatePasswordReset(phoneNumber: string): Observable<any> {
    const request = { phoneNumber: phoneNumber };
    return this.httpClient.post(
      this.PATH_OF_API + '/api/forgot-password/initiate',
      request,
      { headers: this.requestHeader }
    );
  }

  public verifyOtpForReset(phoneNumber: string, code: string): Observable<any> {
    const request = { phoneNumber: phoneNumber, code: code };
    return this.httpClient.post(
      this.PATH_OF_API + '/api/forgot-password/verify',
      request,
      { headers: this.requestHeader }
    );
  }

  public resetPassword(phoneNumber: string, newPassword: string, confirmPassword: string): Observable<any> {
    const request = { phoneNumber: phoneNumber, newPassword: newPassword, confirmPassword: confirmPassword };
    return this.httpClient.post(
      this.PATH_OF_API + '/api/forgot-password/reset',
      request,
      { headers: this.requestHeader }
    );
  }
}
