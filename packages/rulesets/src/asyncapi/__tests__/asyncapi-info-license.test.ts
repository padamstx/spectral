import { DiagnosticSeverity } from '@stoplight/types';
import testRule from './__helpers__/tester';

testRule('asyncapi-info-license', [
  {
    name: 'valid case',
    document: {
      asyncapi: '2.0.0',
      info: {
        license: {
          name: 'MIT',
        },
      },
    },
    errors: [],
  },
  {
    name: 'valid v3 case',
    document: {
      asyncapi: '3.0.0',
      info: {
        license: {
          name: 'MIT',
        },
      },
    },
    errors: [],
  },
  {
    name: 'license property is missing',
    document: {
      asyncapi: '2.0.0',
      info: {},
    },
    errors: [
      {
        message: 'Info object must have "license" object.',
        path: ['info'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
  {
    name: 'v3 license property is missing',
    document: {
      asyncapi: '3.0.0',
      info: {},
    },
    errors: [
      {
        message: 'Info object must have "license" object.',
        path: ['info'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
]);
