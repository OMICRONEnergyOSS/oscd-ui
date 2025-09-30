/* eslint-disable @typescript-eslint/no-explicit-any */
export function dedupeAndFilterPlugin() {
    return {
        name: 'dedupe-and-filter',
        transformCustomElementsManifest(manifest) {
            const seenTags = new Set();
            manifest.modules.forEach((_module) => {
                console.log(' dedupeModule: ', _module);
                _module.declarations = (_module.declarations || []).filter((decl) => {
                    if (!decl.tagName) {
                        return false;
                    }
                    if (seenTags.has(decl.tagName)) {
                        return false;
                    }
                    seenTags.add(decl.tagName);
                    return true;
                });
            });
            return manifest;
        },
    };
}
//# sourceMappingURL=cem-plugin-dedupe.js.map