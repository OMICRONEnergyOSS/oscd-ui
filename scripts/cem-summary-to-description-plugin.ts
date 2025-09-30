export function summaryToDescriptionPlugin() {
  return {
    name: 'summary-to-description',
    packageLinkPhase({
      customElementsManifest,
    }: {
      customElementsManifest: {
        modules: Array<{
          declarations?: Array<{ summary?: string; description?: string }>;
        }>;
      };
    }) {
      for (const module of customElementsManifest.modules) {
        for (const decl of module.declarations || []) {
          if (decl.summary && !decl.description) {
            decl.description = decl.summary;
          }
        }
      }
    },
  };
}
