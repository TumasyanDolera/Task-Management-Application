import { IAuthState } from "../../models";

export function saveAccessToken(accessToken:IAuthState, refreshtoken:IAuthState) {
  document.cookie = `accessToken=${accessToken}; expires=7; path=/`;
  document.cookie = `refreshToken=${refreshtoken}; expires=7;  path=/`; }

  export function setToken(accessToken: string, token: string, remember: boolean) {
    if (remember) {
      document.cookie = `${accessToken}=${token}; expires=${new Date(
        Date.now() + 3600000
      ).toUTCString()}; path=/;`;
    } else {
      document.cookie = `accessToken=${accessToken}; path=/;`;
    }
  }

export function getAccessToken(accessToken: string) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
       if (cookie.startsWith(`${accessToken}=`)) {
      return cookie.substring(`${accessToken}=`.length, cookie.length);
    }
      
    }
    return null;
  }
  
export function removeAccessToken() {
  document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';}

export function removeRefreshToken() {
    document.cookie = 'refreshtoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
   }
  

