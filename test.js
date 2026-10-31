import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 },  // Ramp up to 10 users over 30 seconds
    { duration: '1m', target: 25 },   // Ramp up to 25 users over 1 minute
    { duration: '1m', target: 50 },   // Ramp up to 50 users (your next target) over 1 minute
    { duration: '1m', target: 100 },  // Push to 100 users to find maximum capacity
    { duration: '30s', target: 0 },   // Scale down to 0
  ],
  thresholds: {
    http_req_duration: ['p(95)<1000'], // 95% of requests should be below 1000ms
    http_req_failed: ['rate<0.05'],    // Error rate should stay below 5%
  },
};

export default function () {
  const params = {
    headers: {
      'Connection': 'keep-alive',
    },
  };

  const res = http.get('https://ecommerceheadset.vercel.app', params);
  
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
  
  sleep(1); // Pause 1 second between iterations per virtual user
}