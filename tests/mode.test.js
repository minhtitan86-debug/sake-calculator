import test from 'node:test';
import assert from 'node:assert/strict';
import { compareExpressions } from '../js/engine.js';

test('kiểm tra hai biểu thức tương đương', () => {
  assert.equal(compareExpressions('(2+3)^2', '25').equal, true);
  assert.equal(compareExpressions('sin(30)^2+cos(30)^2', '1', 'DEG').equal, true);
});

test('phát hiện hai biểu thức không bằng nhau', () => {
  const result = compareExpressions('2+3*4', '(2+3)*4');
  assert.equal(result.equal, false);
  assert.equal(result.leftValue, 14);
  assert.equal(result.rightValue, 20);
});
