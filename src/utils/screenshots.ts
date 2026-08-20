const screenshotModules = import.meta.glob(
    "/src/assets/images/screenshots/**/*.{png,jpg,jpeg,webp}",
    {
        eager: true,
        query: "?url",
        import: "default",
    }
);

export function getScreenshots(project: string): string[] {
    const prefix = `/src/assets/images/screenshots/${project}/`;

    return Object.entries(screenshotModules)
        .filter(([path]) => path.startsWith(prefix))
        .map(([, image]) => image as string);
}