import { RouterLink, provideRouter } from '@angular/router';

import { type Meta, type StoryObj, applicationConfig, moduleMetadata } from '@storybook/angular';

import { AppLinkComponent } from './app-link.component';

const meta: Meta<AppLinkComponent> = {
    title: 'Shared/UI/AppLink',
    component: AppLinkComponent,
    tags: ['autodocs'],
    decorators: [
        applicationConfig({
            providers: [provideRouter([])],
        }),
        moduleMetadata({
            imports: [RouterLink],
        }),
    ],
};

export default meta;

type Story = StoryObj<AppLinkComponent & { routerLink: string }>;

export const Default: Story = {
    args: {
        routerLink: '/',
    },
    render: (args) => ({
        props: args,
        template: `<a app-link [routerLink]="routerLink" [variant]="variant">Ссылка</a>`,
    }),
};

export const External: Story = {
    args: {
        routerLink: 'https://google.com',
        variant: 'underline',
    },
    render: (args) => ({
        props: args,
        template: `<a app-link [href]="href" [target]="target" [variant]="variant">Внешняя ссылка</a>`,
    }),
};
