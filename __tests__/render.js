import React from 'react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { render, screen, includes } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../src/App';
import Component from '../src/containers/dockerContainers';
import store from '../src/store';

describe('Testing React components', () => {
  describe('Component', () => {
    let text;

    beforeAll(() => {
      text = render(<Component />);
    });

    test('Checks if the Docker Containers component is rendered', () => {
      expect(text.getByText('Docker Containers')).toBeTruthy();
    });
  });
  describe('Component', () => {
    let text;

    beforeAll(() => {
      text = render(<Component />);
    });

    test('Checks container buttons render', () => {
      const button = screen.getByText('', { selector: 'label' });
      expect(button).toBeTruthy();
    });
  });
});