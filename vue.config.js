const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'HELPRIME ',
    themeColor: '#fff',
    msTileColor: '#fff',
    appleMobileWebAppCapable: 'yes',
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      skipWaiting: true,
    },
    iconPaths: {
      faviconSVG: 'https://res.cloudinary.com/vital-seguros/image/upload/v1677430504/APP/ICON_Mesa_de_trabajo_1_tnkmtc_4_ar3izh_vdbanx.png',
      favicon32: 'https://res.cloudinary.com/vital-seguros/image/upload/v1677430504/APP/ICON_Mesa_de_trabajo_1_tnkmtc_4_ar3izh_vdbanx.png',
      favicon16: 'https://res.cloudinary.com/vital-seguros/image/upload/v1677430504/APP/ICON_Mesa_de_trabajo_1_tnkmtc_4_ar3izh_vdbanx.png',
      appleTouchIcon: 'https://res.cloudinary.com/vital-seguros/image/upload/v1677430504/APP/ICON_Mesa_de_trabajo_1_tnkmtc_4_ar3izh_vdbanx.png',
      maskIcon: 'https://res.cloudinary.com/vital-seguros/image/upload/v1677430504/APP/ICON_Mesa_de_trabajo_1_tnkmtc_4_ar3izh_vdbanx.png',
      msTileImage: 'https://res.cloudinary.com/vital-seguros/image/upload/v1677430504/APP/ICON_Mesa_de_trabajo_1_tnkmtc_4_ar3izh_vdbanx.png',
      msTileImage: 'https://res.cloudinary.com/vital-seguros/image/upload/v1677430504/APP/ICON_Mesa_de_trabajo_1_tnkmtc_4_ar3izh_vdbanx.png'
    },
    manifestOptions: {
      icons: [
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677431272/APP/ICON_Mesa_de_trabajo_1_tnkmtc_4_1_s8nyqx.svg",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677431313/APP/ICON_Mesa_de_trabajo_1_tnkmtc_4_2_hwth6x.svg",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677431272/APP/ICON_Mesa_de_trabajo_1_tnkmtc_4_1_s8nyqx.svg",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677431313/APP/ICON_Mesa_de_trabajo_1_tnkmtc_4_2_hwth6x.svg",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677431373/APP/ICON_Mesa_de_trabajo_1_tnkmtc_4_3_f8nlcw.svg",
          sizes: "60x60",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677431403/APP/ICON_Mesa_de_trabajo_1_tnkmtc_4_4_wjble4.svg",
          sizes: "76x76",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677431437/APP/ICON_Mesa_de_trabajo_1_tnkmtc_4_5_vzcsth.svg",
          sizes: "120x120",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677431483/APP/ICON_Mesa_de_trabajo_1_tnkmtc_4_6_oejqfi.svg",
          sizes: "152x152",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677431512/APP/ICON_Mesa_de_trabajo_1_tnkmtc_4_7_ft7iu8.svg",
          sizes: "180x180",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677431558/APP/ICON_Mesa_de_trabajo_1_tnkmtc_4_8_ckeozc.svg",
          sizes: "16x16",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677431593/APP/ICON_Mesa_de_trabajo_1_tnkmtc_4_9_ey3lhl.svg",
          sizes: "32x32",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677431632/APP/ICON_Mesa_de_trabajo_1_tnkmtc_4_10_ma4ou8.svg",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "https://res.cloudinary.com/vital-seguros/image/upload/v1677431663/APP/ICON_Mesa_de_trabajo_1_tnkmtc_4_11_qve5he.svg",
          sizes: "150x150",
          type: "image/png",
        },
      ],
      theme_color: '#fff',
      background_color: '#fff',
      }
    }
})
