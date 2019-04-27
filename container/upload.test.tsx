import * as React from 'react';
import { mount } from 'enzyme';
import * as Container from './';

test('Verify all components settings and attributes', () => {
	const Upload = mount(<Container.Upload />);
  expect(Upload.getDOMNode().tagName).toBe('INPUT');
  expect(Upload.getDOMNode().getAttribute('type')).toBe('file')
  expect(Upload.getDOMNode().getAttribute('accept')).toBe('.json, application/json, text/plain')
});

test('Set the file on the state onChange method', () => {
  const Upload = mount(<Container.Upload />);
  Upload.find('input[type="file"]').simulate('change');
  console.log(Upload.state());
})
