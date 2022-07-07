<script setup>
import UiListBox from '~/uilistbox/src/UiListBox.vue';
import { $options } from '~/uilistbox/src/options.js';

const uiListBoxPlaygroundCode = `<UiListBox :options="[{text: 'English', value: 'en'}]" />`;
const uiListBoxPlaygroundCode2 = `<UiListBox> 
                                      <option value="volvo">Volvo</option> 
                                      <option value="audi">Audi</option>
                                  </UiListBox>`;
</script>

# UiListBox component

## Description

UiListBox component

## Props

<Props :of="UiListBox"></Props>

## Example

<Playground
:code="uiListBoxPlaygroundCode"
:components="{ UiListBox }"> </Playground>

## Example 2

You can also add the `<option>` tag manually
<Playground 
  :code="uiListBoxPlaygroundCode2"
  :components="{ UiListBox }">
</Playground>

```html
<UiListBox :options="[{text: 'English', value: 'en'}]" />
```
