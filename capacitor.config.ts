import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'Aniket.wheelhunt',
  appName: 'WheelHunt',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      launchFadeOutDuration: 3000,
      backgroundColor: "#FFFFFFFF",
      splashFullScreen: true,
      splashImmersive: true
    }
  }
};

export default config;
