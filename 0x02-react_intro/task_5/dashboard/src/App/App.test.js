import { shallow } from 'enzyme';
import App from './App';


describe('Testing <App /> component', () => {
    describe('App renders without crashing', () => {
        it ('should render App withour crashing', () => {
            const wrapper = shallow(<App />);
            expect(wrapper.exists()).toEqual(true);
        });
    });
    describe('App renders a header div', () => {
        it ('should render a div with class App-header', () => {
            const wrapper = shallow(<App />);
            wrapper.update();
            expect(wrapper.find('div.App-header')).toHaveLength(1);
        });
    });
    describe('App renders a bodyy div', () => {
        it ('should render a div with class App-body', () => {
            const wrapper = shallow(<App />);
            wrapper.update();
            expect(wrapper.find('div.App-body')).toHaveLength(1);
        });
    });
    describe('App renders a footer div', () => {
        it ('should render a div with class App-footer', () => {
            const wrapper = shallow(<App />);
            wrapper.update();
            expect(wrapper.find('div.App-footer')).toHaveLength(1);
        });
    });
})