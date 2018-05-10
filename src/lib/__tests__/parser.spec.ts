import { beforeEach, test } from 'ava';
import { SinonSpy, spy } from 'sinon';

import { parser } from '../parser';

let formater: SinonSpy;
beforeEach(() => {
  formater = spy();
});

test('Should call formater once', t => {
  const csvString = 'header\ntext';

  parser(csvString, formater);

  t.true(formater.calledOnce);
});

test('Should throw error when csvString is invalid', t => {
  const csvString = 'header,header\n';

  const error: Error = t.throws(() => parser(csvString, formater));
  t.is(error.message, 'Too few fields: expected 2 fields but parsed 1');
});
