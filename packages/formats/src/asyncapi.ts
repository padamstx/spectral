import type { Format } from '@stoplight/spectral-core';
import { isPlainObject } from '@stoplight/json';

type MaybeAAS2 = { asyncapi: unknown } & Record<string, unknown>;
type MaybeAAS3 = { asyncapi: unknown } & Record<string, unknown>;

const aas2Regex = /^2\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)$/;
const aas3Regex = /^3\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)$/;
const aas2_0Regex = /^2\.0(?:\.[0-9]*)?$/;
const aas2_1Regex = /^2\.1(?:\.[0-9]*)?$/;
const aas2_2Regex = /^2\.2(?:\.[0-9]*)?$/;
const aas2_3Regex = /^2\.3(?:\.[0-9]*)?$/;
const aas2_4Regex = /^2\.4(?:\.[0-9]*)?$/;
const aas2_5Regex = /^2\.5(?:\.[0-9]*)?$/;
const aas2_6Regex = /^2\.6(?:\.[0-9]*)?$/;
const aas3_0Regex = /^3\.0(?:\.[0-9]*)?$/;

const isAas2 = (document: unknown): document is { asyncapi: string } & Record<string, unknown> =>
  isPlainObject(document) && 'asyncapi' in document && aas2Regex.test(String((document as MaybeAAS2).asyncapi));

const isAas3 = (document: unknown): document is { asyncapi: string } & Record<string, unknown> =>
  isPlainObject(document) && 'asyncapi' in document && aas3Regex.test(String((document as MaybeAAS3).asyncapi));

export const aas2: Format = isAas2;
aas2.displayName = 'AsyncAPI 2.x';
export const aas3: Format = isAas3;
aas3.displayName = 'AsyncAPI 3.x';

// for backward compatibility
export const asyncApi2 = aas2;
export const asyncapi2 = aas2;

export const aas2_0: Format = (document: unknown): boolean =>
  isAas2(document) && aas2_0Regex.test(String((document as MaybeAAS2).asyncapi));
aas2_0.displayName = 'AsyncAPI 2.0.x';

export const aas2_1: Format = (document: unknown): boolean =>
  isAas2(document) && aas2_1Regex.test(String((document as MaybeAAS2).asyncapi));
aas2_1.displayName = 'AsyncAPI 2.1.x';

export const aas2_2: Format = (document: unknown): boolean =>
  isAas2(document) && aas2_2Regex.test(String((document as MaybeAAS2).asyncapi));
aas2_2.displayName = 'AsyncAPI 2.2.x';

export const aas2_3: Format = (document: unknown): boolean =>
  isAas2(document) && aas2_3Regex.test(String((document as MaybeAAS2).asyncapi));
aas2_3.displayName = 'AsyncAPI 2.3.x';

export const aas2_4: Format = (document: unknown): boolean =>
  isAas2(document) && aas2_4Regex.test(String((document as MaybeAAS2).asyncapi));
aas2_4.displayName = 'AsyncAPI 2.4.x';

export const aas2_5: Format = (document: unknown): boolean =>
  isAas2(document) && aas2_5Regex.test(String((document as MaybeAAS2).asyncapi));
aas2_5.displayName = 'AsyncAPI 2.5.x';

export const aas2_6: Format = (document: unknown): boolean =>
  isAas2(document) && aas2_6Regex.test(String((document as MaybeAAS2).asyncapi));
aas2_6.displayName = 'AsyncAPI 2.6.x';

export const aas3_0: Format = (document: unknown): boolean =>
  isAas3(document) && aas3_0Regex.test(String((document as MaybeAAS3).asyncapi));
aas3_0.displayName = 'AsyncAPI 3.0.x';
