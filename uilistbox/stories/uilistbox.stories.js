import UiListBox from '~/uilistbox/src/UiListBox.vue';
import { $options } from '~/uilistbox/src/options.js';

export const select_manual = () => ({
  components: { UiListBox },
  template: `<UiListBox>
                <option value="en">English</option> 
                <option value="es">Spanish</option> 
            </UiListBox>`,
});

const Template = (args) => ({
  components: { UiListBox },
  setup() {
    return { args };
  },
  template: '<UiListBox v-bind="args" />',
});
//👇 Each story then reuses that template
export const SelectBox = Template.bind({});
SelectBox.args = { options: $options, selectedOption: 'es' };
