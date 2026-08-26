declare module '@conarti/eslint-plugin-feature-sliced' {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const plugin: any;
    export default plugin;
}

declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}
