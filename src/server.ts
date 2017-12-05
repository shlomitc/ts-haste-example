import * as express from 'express';
import * as ejs from 'ejs';
import {promisify} from 'bluebird';
import 'babel-polyfill';

const createServer = (): express.Router  => {
  const app = express();

  app.get('/', wrapAsync(async (req, res) => {
    const templatePath = './src/index.ejs';
    const data = {
      title: 'Wix Full Stack Project Boilerplate',
      staticsBaseUrl: 'http://localhost:3200/',
      baseurl: 'http://localhost:3000/',
      locale: 'en'
    };

    const renderFile = await promisify(ejs.renderFile, {context: ejs});

    const htmlData = await renderFile(templatePath, data);

    res.send(htmlData);
  }));

  return app;
};

module.exports = createServer;

function wrapAsync(asyncFn) {
  return (req, res, next) => asyncFn(req, res, next).catch(next);
}
