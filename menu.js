const { app, Menu, shell } = require('electron');

const template = [
  {
    role: 'help',
    submenu: [
      {
        label: 'About Study Buddy',
        click() {
          shell.openExternal('https://ryd3v.rocks/');
        },
      },
    ],
  },
];

if (process.env.DEBUG) {
  template.push({
    label: 'Debugging',
    submenu: [
      {
        label: 'Dev Tools',
        role: 'toggleDevTools',
      },

      { type: 'separator' },
      {
        role: 'reload',
        accelerator: 'Alt+R',
      },
    ],
  });
}

if (process.platform === 'darwin') {
  template.unshift({
    label: app.name,
    submenu: [{ role: 'about' }, { type: 'separator' }, { role: 'quit' }],
  });
}

const menu = Menu.buildFromTemplate(template);

module.exports = menu;
