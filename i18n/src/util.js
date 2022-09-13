export function isLocaleInLocalesFolder(localesInLocalesFolder, _locale) {
  return localesInLocalesFolder.includes(_locale);
}

// the locale is supported if it is contained in the supported Locales
// in the config file
export function isLocaleSupported(supportedLocales, locale) {
  console.log(
    'is',
    locale,
    'supported?',
    ': ',
    supportedLocales.includes(locale)
  );
  return supportedLocales.includes(locale);
}

export function getSupportedLocales(locales, localeGroup) {
  let localeGroupNew = {};
  locales.forEach((element) => {
    for (const locale in localeGroup) {
      if (locale == element) localeGroupNew[locale] = localeGroup[locale];
    }
  });

  let annotatedLocales = [];
  for (const code of Object.keys(localeGroupNew)) {
    annotatedLocales.push({
      code,
      name: localeGroupNew[code],
    });
  }
  console.log('the getPreferredLocales is: ', annotatedLocales);
  return annotatedLocales;
}
