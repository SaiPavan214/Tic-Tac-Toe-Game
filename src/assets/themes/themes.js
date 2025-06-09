export const themes = {
    getStyle(element, property) {
        return window.getComputedStyle(element).getPropertyValue("--" + property);
    }
};