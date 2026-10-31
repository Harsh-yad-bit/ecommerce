import http from 'k6/http';
import { check, sleep } from 'k6';

// List of your proxy server addresses (e.g., HTTP/HTTPS proxies)
const proxies = [
  'http://proxy-server-1.com:8080',
  'http://proxy-server-2.com:8080',
  'http://proxy-server-3.com:8080',
];

export const options = {
  vus: 50,
  duration: '2m',
};

export default function () {
  // Randomly pick a proxy for this virtual user iteration
  const randomProxy = proxies[Math.floor(Math.random() * proxies.length)];

  const params = {
    headers: { 'Connection': 'keep-alive' },
    // Tell k6 to route this request through the selected proxy IP
    proxy: randomProxy, 
  };

  const res = http.get('https://ecommerceheadset.vercel.app', params);
  
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
  
  sleep(1);
}