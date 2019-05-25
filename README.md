# lovelace-xiaomi-fan-card
## This works for:
- `speed` - set speed (1, 2, 3, 4)
- `mode` - set mode (Standard and Natural)
- `swing angle` - set swing angle (30, 60, 90, 120)
- `toggle oscillate` - set oscillates the fan

![xiaomi-vacuum-card](https://github.com/hungtq01418/lovelace-xiaomi-fan-card/blob/master/show.PNG)

## Setup
1. Add [xiaomi-fan-card.js](https://github.com/hungtq01418/lovelace-xiaomi-fan-card/blob/master/custom-fan-card.js) to your `<config>/www/custom_ui` folder. If a folder does not exist, create it.
2. Configure Lovelace to load the card:
![xiaomi-vacuum-card](https://github.com/hungtq01418/lovelace-xiaomi-fan-card/blob/master/step1.PNG)
![xiaomi-vacuum-card](https://github.com/hungtq01418/lovelace-xiaomi-fan-card/blob/master/step2.PNG)
![xiaomi-vacuum-card](https://github.com/hungtq01418/lovelace-xiaomi-fan-card/blob/master/step3.PNG)
![xiaomi-vacuum-card](https://github.com/hungtq01418/lovelace-xiaomi-fan-card/blob/master/step4.PNG)
![xiaomi-vacuum-card](https://github.com/hungtq01418/lovelace-xiaomi-fan-card/blob/master/step5.PNG)
```yaml
resources:
  - url: /local/custom_ui/custom-fan-card.js
    type: module
```
3. Restart Home Assistant.
4. Refresh the front end.
5. Add this in your Lovelace configuration.
```yaml
  title: Switch
  entity: fan.xiaomi_smart_fan
  type: 'custom:custom-fan-card'
  name: Xiaomi Smart Fan
```
