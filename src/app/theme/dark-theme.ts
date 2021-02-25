import { Theme } from './symbols';

export const darkTheme: Theme = {
  name: 'dark',
  properties: {
     /* HSL */
     '--hue': ' 205',
     '--saturation': '100%',
     '--lightness': '50%',
     /* background-color */
     '--verylight': 'hsl(207, 26%, 17%)',
 
     /* Items */
     '--white': 'hsl(209, 23%, 22%)',
     '--text': 'hsl(0, 0%, 100%)',
     '--darkgray': 'hsl(0, 0%, 52%)',
 
     '--card-border-color':
       'hsla(var(--hue),calc(var(--saturation) * 0),calc(var(--lightness) * 1.8),1 )',
     '--card-shadow': 'hsla(0, 0%, 0%, 0.1)',
     '--homeitems': '14px',
 
     '--border': '4px',
  },
};
