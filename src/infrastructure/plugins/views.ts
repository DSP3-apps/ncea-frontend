const path = require('path');
const nunjucks = require('nunjucks');

module.exports = {
  plugin: require('@hapi/vision'),
  options: {
    engines: {
      njk: {
        compile: (src: any, options: { environment: any }) => {
          const template = nunjucks.compile(src, options.environment);

          return (context: any) => {
            return template.render(context);
          };
        },
        prepare: (
          options: {
            compileOptions: { environment: any };
            relativeTo: any;
            path: any;
          },
          next: () => any
        ) => {
          options.compileOptions.environment = nunjucks.configure(
            [
              path.join(options.relativeTo || process.cwd(), options.path),
              'node_modules/govuk-frontend/',
            ],
            {
              autoescape: true,
              watch: false,
            }
          );

          return next();
        },
      },
    },
    path: '../../views',
    relativeTo: __dirname,
    isCached: process.env.NODE_ENV !== 'production',
  },
};
