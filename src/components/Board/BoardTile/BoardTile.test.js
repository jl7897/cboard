import React from 'react';
import { shallow, mount } from 'enzyme';

import Symbol from '../Symbol';
import BoardTile from './BoardTile.component';

it('renders without crashing', () => {
  shallow(<BoardTile />);
});

it('renders with <Symbol /> child', () => {
  const wrapper = shallow(<BoardTile />);
  expect(wrapper.contains(<Symbol />)).toEqual(true);
});

it('renders with <Symbol /> child and props', () => {
  const props = {
    label: 'dummy label',
    img: 'path/to/img.svg'
  };
  const wrapper = shallow(<BoardTile {...props} />);
  expect(wrapper.contains(<Symbol {...props} />)).toEqual(true);
});

it('renders with a folder className', () => {
  const folderClassName = 'BoardTile--folder';
  const props = {
    loadBoard: 'boardId'
  };
  const wrapper = shallow(<BoardTile {...props} />);
  expect(wrapper.hasClass(folderClassName)).toEqual(true);
});

it('set ref element', () => {
  const wrapper = mount(<BoardTile />);
  const instance = wrapper.instance();
  expect(instance.tileElement).toBeTruthy();
});

it('on tile focus', () => {
  const props = {
    id: '42',
    onFocus: jest.fn()
  };
  const wrapper = shallow(<BoardTile {...props} />);
  wrapper.simulate('focus');
  expect(props.onFocus.mock.calls[0][0]).toEqual(props.id);
});

it('on tile click', () => {
  const props = {
    id: '42',
    onClick: jest.fn()
  };
  const wrapper = shallow(<BoardTile {...props} />);
  wrapper.simulate('click');
  expect(props.onClick.mock.calls.length).toEqual(1);
  expect(props.onClick.mock.calls[0][0].id).toEqual(props.id);
});
