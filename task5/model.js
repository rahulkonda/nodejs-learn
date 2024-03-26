// const { v4: uuidv4 } = require('uuid');
// import uuidv4 from 'uuid';
class User {
  constructor(name, email) {
    this.id = Math.random().toString(36).slice(2);
    this.name = name;
    this.email = email;
    this.hobbies = [];
  }
}

class Model {
  constructor() {
    this.users = [];
  }

  createUser(name, email) {
    const user = new User(name, email);
    this.users.push(user);
    return user;
  }

  getUsers() {
    return this.users;
  }

  deleteUser(id) {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }

  getHobbies(id) {
    const user = this.users.find(user => user.id === id);
    return user ? user.hobbies : null;
  }

  addHobbies(id, hobbies) {
    const user = this.users.find(user => user.id === id);
    if (user) {
      user.hobbies = [...new Set(user.hobbies.concat(hobbies))];
      return user.hobbies;
    }
    return null;
  }
}

export default new Model();