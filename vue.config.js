const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'HELPRIME ',
    themeColor: '#fff',
    msTileColor: '#fff',
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      skipWaiting: true,
    },
    iconPaths: {
      faviconSVG: 'https://res.cloudinary.com/vital-seguros/image/upload/v1656450064/APP/ICON_Mesa_de_trabajo_1_tnkmtc.svg',
      favicon32: 'https://res.cloudinary.com/vital-seguros/image/upload/v1656450064/APP/ICON_Mesa_de_trabajo_1_tnkmtc.svg',
      favicon16: 'https://res.cloudinary.com/vital-seguros/image/upload/v1656450064/APP/ICON_Mesa_de_trabajo_1_tnkmtc.svg',
      appleTouchIcon: 'https://res.cloudinary.com/vital-seguros/image/upload/v1656450064/APP/ICON_Mesa_de_trabajo_1_tnkmtc.svg',
      maskIcon: 'https://res.cloudinary.com/vital-seguros/image/upload/v1656450064/APP/ICON_Mesa_de_trabajo_1_tnkmtc.svg',
      msTileImage: 'https://res.cloudinary.com/vital-seguros/image/upload/v1656450064/APP/ICON_Mesa_de_trabajo_1_tnkmtc.svg',
      msTileImage: 'https://res.cloudinary.com/vital-seguros/image/upload/v1656450064/APP/ICON_Mesa_de_trabajo_1_tnkmtc.svg'
    }
  },
})
