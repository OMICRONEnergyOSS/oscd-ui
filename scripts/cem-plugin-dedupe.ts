/* eslint-disable @typescript-eslint/no-explicit-any */
export function dedupeAndFilterPlugin() {
  return {
    name: 'dedupe-and-filter',
    transformCustomElementsManifest(manifest: { modules: any[] }) {
      const seenTags = new Set();

      manifest.modules.forEach((_module: { declarations: any }) => {
        console.log(' dedupeModule: ', _module);
        _module.declarations = (_module.declarations || []).filter(
          (decl: { tagName: unknown }) => {
            if (!decl.tagName) {
              return false;
            }
            if (seenTags.has(decl.tagName)) {
              return false;
            }
            seenTags.add(decl.tagName);
            return true;
          },
        );
      });

      return manifest;
    },
  };
}
