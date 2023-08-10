import { Injectable } from '@angular/core';

export interface Credentials {
  [x: string]: any;
  // Customize received credentials here
  username: string;
  token: string;
  data: string;
  status:boolean;
}

const credentialsKey = 'credentials';

/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  private _credentials: Credentials | null = null;
  private remeber: any;

  constructor() {
    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
    if (savedCredentials) {
      this._credentials = JSON.parse(savedCredentials);
    }
  }

  /**
   * Checks is the user is authenticated.
   * @return True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    return !!this.credentials;
  }
  get credentials(): Credentials | null {
    return this._credentials;
  }
  setCredentials(credentials?: Credentials, remember?: boolean) {
    this._credentials = credentials || null;
    this.remeber = remember;
    if (credentials) {
      const storage = localStorage ;
      storage.setItem(credentialsKey, JSON.stringify(credentials));
    } else {
      localStorage.removeItem(credentialsKey);
    }
  }

}
