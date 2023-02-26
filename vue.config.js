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
    },
    manifestOptions: {
      icons: [
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677427165/APP/ICON_Mesa_de_trabajo_1_tnkmtc-_4__oorfez.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677427165/APP/ICON_Mesa_de_trabajo_1_tnkmtc-_4__oorfez.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677427165/APP/ICON_Mesa_de_trabajo_1_tnkmtc-_4__oorfez.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677427165/APP/ICON_Mesa_de_trabajo_1_tnkmtc-_4__oorfez.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677427165/APP/ICON_Mesa_de_trabajo_1_tnkmtc-_4__oorfez.png",
          sizes: "60x60",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677427165/APP/ICON_Mesa_de_trabajo_1_tnkmtc-_4__oorfez.png",
          sizes: "76x76",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677427165/APP/ICON_Mesa_de_trabajo_1_tnkmtc-_4__oorfez.png",
          sizes: "120x120",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677427165/APP/ICON_Mesa_de_trabajo_1_tnkmtc-_4__oorfez.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677427165/APP/ICON_Mesa_de_trabajo_1_tnkmtc-_4__oorfez.png",
          sizes: "180x180",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677427165/APP/ICON_Mesa_de_trabajo_1_tnkmtc-_4__oorfez.png",
          sizes: "180x180",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677427165/APP/ICON_Mesa_de_trabajo_1_tnkmtc-_4__oorfez.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677427165/APP/ICON_Mesa_de_trabajo_1_tnkmtc-_4__oorfez.png",
        }]
      }
    }
})
