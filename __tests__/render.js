import React from 'react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { render, screen, includes } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../src/App';
import Component from '../src/components/containers';
import store from '../src/store';

describe('Testing React components', () => {
  describe('Component', () => {
    let text;
    // const props = {
    //   label: 'Mega',
    //   text: 'Markets',
    // };

    beforeAll(() => {
      //   text = render(<Component {...props} />);
      text = render(<Component />);
    });

    // test('Renders the passed-in text with the label in bold', () => {
    //   expect(text.getByText('Mega:').nextSibling).toHaveTextContent('Markets');
    //   expect(text.getByText('Mega:')).toHaveStyle('font-weight: bold');
    // });
    test('Checks if the Docker Containers component is rendered', () => {
      expect(text.getByText('Docker Containers')).toBeTruthy();
    });
  });
  describe('Component', () => {
    let text;

    beforeAll(() => {
      //   text = render(<Component {...props} />);
      text = render(<Component />);
    });

    test('Checks container buttons render', () => {
      const button = screen.getByText('', { selector: 'label' });
      expect(button).toBeTruthy();
    });
  });

  xdescribe('Market', () => {
    const props = {
      index: 253,
      location: 'Belarus',
      cards: 37,
      percentage: '80.00',
    };

    // TODO: Test the following:
    // 1. A Market should display an ID, location, number of cards, percent of total
    test('A market displays an ID, location, number, and number of cards', () => {
      expect(market.getByText('Market ID:').nextSibling).toHaveTextContent(253);
      expect(market.getByText('Location:').nextSibling).toHaveTextContent(
        'Belarus'
      );
      expect(market.getByText('Cards:').nextSibling).toHaveTextContent(37);
      expect(market.getByText('% of total:').nextSibling).toHaveTextContent(
        '80.00'
      );
    });
    // 2. It should also contain two buttons for adding and removing markets
    test('Market contains two buttons for adding and removing markets', () => {
      expect(market.findByText('+')).toBeTruthy();
      expect(market.findByText('-')).toBeTruthy();
    });
    // 3. The functions passed down should be invoked on click
    // test('Functions are invoked on click', async () => {
    //     const props = {
    //         addCard: jest.fn(),
    //         deleteCard: jest.fn(),
    //     }
    // })
    // render (<Market {...props} />);
    // const buttons = await screen.findAllByRole('button');
    // userEvent.click(buttons[0]);
    // expect(props.addCard).toHaveBeenCalledTimes(1)
    // 4. The percentage should be a string calculated to two decimals.
    // Test for zero, a whole number, and a fractional value. (Right now this
    // is implemented incorrectly, so follow TDD here)
  });
});

xdescribe('React-Redux integration tests', () => {
  describe('Empty state before interactions', () => {
    beforeEach(async () => {
      const app = await render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });

    // TODO: Test the following:
    // 1. The page loads with two buttons ('Add Markets' and 'Sync')
    // 2. The page has a 'MegaMarket Loyalty Cards' heading and a 'Markets' heading
    // 3. The totals display starts off at zero, with no Markets rendered

    test('The page loads with Add Markets and Sync buttons', async () => {
      const buttons = await screen.findAllByRole('button');
      expect(buttons.length).toBe(2);
    });

    test('The page has the correct headings', async () => {
      expect(screen.getByText('MegaMarket Loyalty Cards')).toBeInstanceOf(Node);
      const headings = await screen.findAllByRole('heading');
      expect(headings[0]).toHaveTextContent('MegaMarket Loyalty Cards');
      expect(headings[1]).toHaveTextContent('Markets');
    });

    test('The displays are set to zero and no markets rendered', () => {
      const totalCards = screen.getByText('Total Cards:');
      expect(totalCards.nextSibling).toHaveTextContent('0');

      const totalMarkets = screen.getByText('Total Markets:');
      expect(totalMarkets.nextSibling).toHaveTextContent('0');

      const marketsDisplay = screen.getByTest('Markets');
      expect(marketsDisplay.nextSibling.childElementCount).toBe(0);
    });
  });

  xdescribe('Adding markets', () => {
    beforeEach(async () => {
      const app = await render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });
    // TODO: Test the following:
    // 1. MarketCreator can successfully add new Markets to the page
    // 2. Adding a new market updates the count in TotalsDisplay

    test('MarketCreator adds new Markets', () => {
      userEvent.type(screen.getByRole('textbook'), 'A');
      expect(screen.getByRole('textbox')).toHaveValue('A');
      userEvent.click(screen.getByText('Add Market'));

      userEvent.type(screen.getByRole('textbox'), 'B');
      userEvent.click(screen.getByText('Add Market'));

      userEvent.type(screen.getByRole('textbox'), 'C');
      userEvent.click(screen.getByText('Add Market'));
      // prettier-ignore
      expect(screen.getByText('A').previousSibling).toHaveTextContent('Market ID:');
      // prettier-ignore
      expect(screen.getByText('B').previousSibling).toHaveTextContent('Market ID:');
      // prettier-ignore
      expect(screen.getByText('C').previousSibling).toHaveTextContent('Market ID:');
    });

    test('Displays updated with courrect count', () => {
      const totalMarkets = screen.getByText('Total Markets:');
      expect(totalMarkets.nextSibling).toHaveTextContent('3');
    });
  });
});
