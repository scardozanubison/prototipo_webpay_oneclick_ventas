function _phoneGapSettings() { 
 return {
    "appId": "com.nubisonprototipos.webpay",
    "preferences": {
        "permissions": "",
        "orientation": "default",
        "target-device": "universal",
        "fullscreen": "false",
        "webviewbounce": "true",
        "prerendered-icon": "true",
        "stay-in-webview": "false",
        "ios-statusbarstyle": "black-opaque",
        "detect-data-types": "true",
        "exit-on-suspend": "false",
        "show-splash-screen-spinner": "true",
        "auto-hide-splash-screen": "true",
        "disable-cursor": "false",
        "android-minSdkVersion": "14",
        "android-installLocation": "internalOnly",
        "phonegap-version": "cli-7.0.1",
        "FadeSplashScreen": "true",
        "FadeSplashScreenDuration": "2",
        "EnableViewportScale": "true",
        "MediaPlaybackRequiresUserAction": "true",
        "AllowInlineMediaPlayback": "false",
        "TopActivityIndicator": "gray",
        "BackupWebStorage": "none",
        "iosPersistentFileLocation": "Library",
        "KeyboardDisplayRequiresUserAction": "true",
        "SurpressesIncrementalRendering": "true",
        "android-maxSdkVersion": "",
        "android-targetSdkVersion": "",
        "KeepRunning": "true",
        "splash-screen-duration": "5000",
        "ErrorUrl": "error.html",
        "LoadingDialog": "Please wait, the app is loading.",
        "LoadingPageDialog": "Please wait, the data is loading.",
        "LoadUrlTimeoutValue": "20000",
        "AndroidPersistentFileLocation": "Internal",
        "android-build-tool": "gradle",
        "pgb-builder-version": "1"
    },
    "plugins": {
        "cordova-plugin-network-information": "npm",
        "cordova-plugin-splashscreen": "npm",
        "cordova-plugin-whitelist": "npm"
    }
};
}