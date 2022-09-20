import { createServer, Factory, Model } from 'miragejs';
import { faker } from '@faker-js/faker';
import { User } from '../../@types';

export function makeServer({ environment = 'test' } = {}) {
  const server = createServer({
    environment,
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    factories: {
      user: Factory.extend({
        name() {
          return faker.name.firstName();
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(users) {
      users.createList('user', 10);
    },
    routes() {
      this.namespace = 'api';
      this.timing = 750;
      this.get('/users');
      this.post('/users');
      this.namespace = '';
      this.passthrough();
    },
  });
  return server;
}
