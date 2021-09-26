module.exports = {
	// publicPath: process.env.NODE_ENV === 'production' ? '/portfolio-vue/' : '/',
	publicPath: '/',
	pwa: {
		name: 'Szulcuś',
		themeColor: '#000000',
		msTileColor: '#000000',
		appleMobileWebAppCapable: 'yes',
		appleMobileWebAppStatusBarStyle: '#000000'
	},
	css: {
		loaderOptions: {
			sass: {
				prependData: `
					@import "@/Styles/Variables.scss";
					@import "@/Styles/Mixins.scss";
					@import "@/Styles/Keyframes.scss";
				`
			}
		}
	}
};
