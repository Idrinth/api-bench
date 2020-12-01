import {
  Middleware,
} from '../middleware';
import {
  Request,
} from '../request';
import {
  Result,
} from '../result';
import noop from './noop';

const MAXIMUM = 299;
const MINIMUM = 200;

const processor = (response: Result,): void => {
  if (typeof response.response.status === 'undefined') {
    throw new Error('Request returned no status',);
  }
  if (response.response.status > MAXIMUM) {
    throw new Error('Request returned status above 200-299 range',);
  }
  if (response.response.status < MINIMUM) {
    throw new Error('Request returned status below 200-299 range',);
  }
};
export default {
  ...noop,
  process: processor,
} as Middleware;
