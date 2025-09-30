export function summaryToDescriptionPlugin() {
    return {
        name: 'summary-to-description',
        packageLinkPhase({ customElementsManifest, }) {
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
//# sourceMappingURL=cem-summary-to-description-plugin.js.map