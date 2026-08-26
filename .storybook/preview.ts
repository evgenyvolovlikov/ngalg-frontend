import { provideRouter } from '@angular/router';

import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { type Preview, applicationConfig } from '@storybook/angular';

import '../src/styles.scss';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        applicationConfig({
            providers: [provideRouter([])],
        }),
        withThemeByDataAttribute({
            themes: {
                light: 'light',
                dark: 'dark',
            },
            defaultTheme: 'light',
            attributeName: 'data-theme',
        }),
    ],
};

export default preview;
