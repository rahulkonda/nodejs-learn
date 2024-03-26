import http from 'http';
import router from './router.js';

http.createServer(router).listen(8000, () => {
    console.log('Server running at http://localhost:8000/');
  });