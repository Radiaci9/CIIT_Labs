import App from '../src/App'

describe('renders()', () => {
      test('renders without crashing', () => {
          expect(
            JSON.stringify(
              Object.assign({}, App, { _reactInternalInstance: 'censored' }),
            ),
          ).toMatchSnapshot()
      })
})