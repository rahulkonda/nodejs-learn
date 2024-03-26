import * as controller from './controller.js';

const router = (req, res) => {
  const url = req.url;
  const method = req.method;
  const parts = url.split('/');

  if (url === "/api/users" && method === "POST") {
    controller.createUser(req, res);
  } else if (url === "/api/users" && method === "GET") {
    controller.getUsers(req, res);
  } else if (parts[2] === "users" && method === "DELETE") {
    controller.deleteUser(req, res, parts[3]);
  } else if (parts[2] === "users" && parts[4] === "hobbies" && method === "GET") {
    controller.getHobbies(req, res, parts[3]);
  } else if (parts[2] === 'users' && parts[4] === 'hobbies' && method === 'PATCH') {
    controller.addHobbies(req, res, parts[3]);
  } else {
    res.writeHeader(404);
    res.end("Not Found");
  }
};
export default router;