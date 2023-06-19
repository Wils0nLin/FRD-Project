import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function fetchLogin(username: string, password: string) {
  const res = await fetch('http://192.168.160.142:3000/public/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const result = await res.json();
  if (res.status === 200) {
    let decoded: any = jwt_decode(result);
    AsyncStorage.setItem('id', decoded.userId);
    return true;
  } else {
    return false;
  }
}
