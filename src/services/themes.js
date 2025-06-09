import { themes_data } from './themes_data';

const themes = {
  themes_data,

  setTheme(theme) {
    let themeLink = document.getElementById('theme-style');

    if (!themeLink) {
      themeLink = document.createElement('link');
      themeLink.rel = 'stylesheet';
      themeLink.id = 'theme-style';
      document.head.appendChild(themeLink);
    }

    themeLink.href = theme.cssFile;
    localStorage.setItem('selected_theme', theme.cssFile);
  },

  loadThemes() {
    const storedTheme = localStorage.getItem('selected_theme');
    if (storedTheme) {
      let themeLink = document.getElementById('theme-style');
      if (!themeLink) {
        themeLink = document.createElement('link');
        themeLink.rel = 'stylesheet';
        themeLink.id = 'theme-style';
        document.head.appendChild(themeLink);
      }
      themeLink.href = storedTheme;
    }
  }
};

export { themes };
