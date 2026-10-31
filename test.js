import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 5,
  duration: '30s',
};

export default function () {
  const res = http.get('https://ecommerceheadset.vercel.app', {
    headers: { 'Connection': 'keep-alive' },
  });
  
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
  
  sleep(1);
}