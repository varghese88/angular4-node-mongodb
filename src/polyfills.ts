import 'core-js/es6';
import 'core-js/es7/reflect';
import 'reflect-metadata';

require('zone.js/dist/zone')
Error['stackTraceLimit'] = Infinity;
require('zone.js/dist/long-stack-trace-zone');