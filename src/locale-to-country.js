import countryData from "./country-data.json"

const localeToCountry = countryData.reduce(
    (mapping, country) => {
        mapping[country.iso2.toLowerCase()] = country
        mapping[country.iso3.toLowerCase()] = country
        mapping[country.locale.toLowerCase()] = country

        return mapping
    },
    {}
)

const localeSupported = locale => {
    return localeToCountry[locale.toLowerCase()] !== undefined
}

export {
    localeToCountry,
    localeSupported,
}
