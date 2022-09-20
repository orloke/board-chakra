import { ActiveModelSerializer, createServer, Factory, Model } from 'miragejs';
import { faker } from '@faker-js/faker';
import { User } from '../../@types';

export function makeServer({ environment = 'test' } = {}) {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
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
      users.createList('user', 200);
    },
    routes() {
      this.namespace = 'api';
      this.timing = 750;
      this.get('/users', (schema, request) => {
        const qp = request.queryParams;
        const page = Number(qp?.page) || 1;
        const limit = Number(qp?.limit) || 10;
        const start = (page - 1) * limit;
        const end = start + limit;
        const filtered = schema.all('user').slice(start, end);
        return { users: filtered.models, total: schema.all('user').length };
      });

      this.get('users/:id');

      this.post('/users');

      this.namespace = '';
      this.passthrough();
    },
  });
  return server;
}
