declare module 'chai';
declare module 'axios';
declare module 'i18next-xhr-backend';
declare module '*.scss';
declare module '*.json';
declare module 'enzyme';

interface Window {
  __STATICS_BASE_URL__: string;
  __LOCALE__: string;
  __BASEURL__: string;
}
