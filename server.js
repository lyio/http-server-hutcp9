const Hapi = require('@hapi/hapi');
const Routes = require('./routes.js');
const Path = require('path');

const server = new Hapi.Server({ port: 3008 });

const init = async () => {
  await server.register([require('@hapi/vision')]);

  server.views({
    engines: { pug: require('pug') },
    path: Path.join(__dirname, 'views'),
    compileOptions: {
      pretty: false
    },
    isCached: false
  });

  server.route(Routes);

  await server.start();

  console.log(`Server running at: ${server.info.uri}`);
  return server;
};

process.on('unhandledRejection', err => {
  console.err(err);
});

init().then(value => console.log(`server: ${value.info.port}`));
