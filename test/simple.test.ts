import { mount } from '@vue/test-utils';
import Counter from '../src/components/Counter'

const wrapper = mount(Counter);

describe('Counter', () => {
    it('obeys arithmetic', () => {
        expect(2 + 2).toBe(4);
    });

    it('has a button', () => {
        expect(wrapper.contains('button')).toBe(true);
    });

    it('begins initialized to zero', () => {
        // we can look inside the component using the .vm property
        expect(wrapper.vm.count).toBe(0);
    });

    it('increments the counter when the user clicks the button', () => {
        const theButton = wrapper.find('button');

        // theButton is now a wrapper -- we can trigger events on it

        theButton.trigger('click');
        expect(wrapper.vm.count).toBe(1);
    });
});
