const countryData = require("./country-data.json")

const localeToCountry = countryData.reduce(
    (mapping, country) => {
        mapping[country.iso2.toLowerCase()] = country
        mapping[country.iso3.toLowerCase()] = country
        mapping[country.locale.toLowerCase()] = country

        return mapping
    },
    {}
)

// export default localeToCountry
module.exports = localeToCountry
