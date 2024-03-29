import model from './model.js';

const getUsers = async (req, res) => {
    res.writeHeader(200, {"Content-Type": "application/json"});
    const users = model.getUsers();
    res.write(JSON.stringify(users));
    res.end();
};


const createUser = async (req, res) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      let userData = JSON.parse(body);
      const user = model.createUser(userData.name, userData.email);
      res.writeHeader(201, {"Content-Type": "application/json"});
      res.write(JSON.stringify(user));
      res.end();
    });
  };

const deleteUser = async (req, res, id) => {
    const result = model.deleteUser(id);
    res.writeHeader(result ? 200 : 404, {"Content-Type": "application/json"});
    res.write(JSON.stringify({ "success": result }));
    res.end();
  };

const getHobbies = async (req, res, id) => {
    const hobbies = model.getHobbies(id);
    res.writeHeader(hobbies ? 200 : 404, {"Content-Type": "application/json"});
    if (hobbies) {
      res.write(JSON.stringify(hobbies));
    }
    res.end();
  };

const addHobbies =  async (req, res, id) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      let hobbyData = JSON.parse(body);
      const hobbies = model.addHobbies(id, hobbyData.hobbies);
      res.writeHeader(hobbies ? 200 : 404, {"Content-Type": "application/json"});
      if (hobbies) {
        res.write(JSON.stringify(hobbies));
      }
      res.end();
    });
  };

export { getUsers, createUser, deleteUser, getHobbies, addHobbies };