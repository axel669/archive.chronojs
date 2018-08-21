var Chrono = (function () {
  'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  var country = [{
    "week": 1,
    "name": "Aruba",
    "iso2": "AW",
    "iso3": "ABW",
    "isoNumber": "533",
    "locale": "nl-AW",
    "longDateFormat": "DD-MM-YYYY",
    "shortDateFormat": "DD-MM"
  }, {
    "week": 0,
    "name": "Afghanistan",
    "iso2": "AF",
    "iso3": "AFG",
    "isoNumber": "004",
    "locale": "fa-AF",
    "longDateFormat": "YYYY/MM/DD",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 1,
    "name": "Angola",
    "iso2": "AO",
    "iso3": "AGO",
    "isoNumber": "024",
    "locale": "pt-AO",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Anguilla",
    "iso2": "AI",
    "iso3": "AIA",
    "isoNumber": "660",
    "locale": "en-AI",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Aland Islands",
    "iso2": "AX",
    "iso3": "ALA",
    "isoNumber": "248",
    "locale": "sv-AX",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 6,
    "name": "Albania",
    "iso2": "AL",
    "iso3": "ALB",
    "isoNumber": "008",
    "locale": "sq-AL",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "Andorra",
    "iso2": "AD",
    "iso3": "AND",
    "isoNumber": "020",
    "locale": "ca-AD",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Netherlands Antilles",
    "iso2": "AN",
    "iso3": "ANT",
    "isoNumber": "530",
    "locale": "nl-AN",
    "longDateFormat": "DD-MM-YYYY",
    "shortDateFormat": "DD-MM"
  }, {
    "week": 6,
    "name": "United Arab Emirates",
    "iso2": "AE",
    "iso3": "ARE",
    "isoNumber": "784",
    "locale": "ar-AE",
    "longDateFormat": "DD‏/MM‏/YYYY",
    "shortDateFormat": "DD‏/MM"
  }, {
    "week": 1,
    "name": "Argentina",
    "iso2": "AR",
    "iso3": "ARG",
    "isoNumber": "032",
    "locale": "es-AR",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Armenia",
    "iso2": "AM",
    "iso3": "ARM",
    "isoNumber": "051",
    "locale": "hy-AM",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "American Samoa",
    "iso2": "AS",
    "iso3": "ASM",
    "isoNumber": "016",
    "locale": "en-AS",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Antarctica",
    "iso2": "AQ",
    "iso3": "ATA",
    "isoNumber": "010",
    "locale": "en-US",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "French Southern Territories",
    "iso2": "TF",
    "iso3": "ATF",
    "isoNumber": "260",
    "locale": "fr-TF",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Antigua and Barbuda",
    "iso2": "AG",
    "iso3": "ATG",
    "isoNumber": "028",
    "locale": "en-AG",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Australia",
    "iso2": "AU",
    "iso3": "AUS",
    "isoNumber": "036",
    "locale": "en-AU",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Austria",
    "iso2": "AT",
    "iso3": "AUT",
    "isoNumber": "040",
    "locale": "de-AT",
    "longDateFormat": "DD.MM.YYYY",
    "shortDateFormat": "DD.MM"
  }, {
    "week": 0,
    "name": "Azerbaijan",
    "iso2": "AZ",
    "iso3": "AZE",
    "isoNumber": "031",
    "locale": "az-AZ",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "Burundi",
    "iso2": "BI",
    "iso3": "BDI",
    "isoNumber": "108",
    "locale": "fr-BI",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Belgium",
    "iso2": "BE",
    "iso3": "BEL",
    "isoNumber": "056",
    "locale": "nl-BE",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Benin",
    "iso2": "BJ",
    "iso3": "BEN",
    "isoNumber": "204",
    "locale": "fr-BJ",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Bonaire, Saint Eustatius and Saba ",
    "iso2": "BQ",
    "iso3": "BES",
    "isoNumber": "535",
    "locale": "nl-BQ",
    "longDateFormat": "DD-MM-YYYY",
    "shortDateFormat": "DD-MM"
  }, {
    "week": 0,
    "name": "Burkina Faso",
    "iso2": "BF",
    "iso3": "BFA",
    "isoNumber": "854",
    "locale": "fr-BF",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Bangladesh",
    "iso2": "BD",
    "iso3": "BGD",
    "isoNumber": "050",
    "locale": "bn-BD",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Bulgaria",
    "iso2": "BG",
    "iso3": "BGR",
    "isoNumber": "100",
    "locale": "bg-BG",
    "longDateFormat": "DD.MM.YYYY",
    "shortDateFormat": "DD.MM"
  }, {
    "week": 6,
    "name": "Bahrain",
    "iso2": "BH",
    "iso3": "BHR",
    "isoNumber": "048",
    "locale": "ar-BH",
    "longDateFormat": "DD‏/MM‏/YYYY",
    "shortDateFormat": "DD‏/MM"
  }, {
    "week": 0,
    "name": "Bahamas",
    "iso2": "BS",
    "iso3": "BHS",
    "isoNumber": "044",
    "locale": "en-BS",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Bosnia and Herzegovina",
    "iso2": "BA",
    "iso3": "BIH",
    "isoNumber": "070",
    "locale": "bs-BA",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "Saint Barthelemy",
    "iso2": "BL",
    "iso3": "BLM",
    "isoNumber": "652",
    "locale": "fr-BL",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Belarus",
    "iso2": "BY",
    "iso3": "BLR",
    "isoNumber": "112",
    "locale": "be-BY",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "Belize",
    "iso2": "BZ",
    "iso3": "BLZ",
    "isoNumber": "084",
    "locale": "en-BZ",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Bermuda",
    "iso2": "BM",
    "iso3": "BMU",
    "isoNumber": "060",
    "locale": "en-BM",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Bolivia",
    "iso2": "BO",
    "iso3": "BOL",
    "isoNumber": "068",
    "locale": "es-BO",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Brazil",
    "iso2": "BR",
    "iso3": "BRA",
    "isoNumber": "076",
    "locale": "pt-BR",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Barbados",
    "iso2": "BB",
    "iso3": "BRB",
    "isoNumber": "052",
    "locale": "en-BB",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Brunei",
    "iso2": "BN",
    "iso3": "BRN",
    "isoNumber": "096",
    "locale": "ms-BN",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Bhutan",
    "iso2": "BT",
    "iso3": "BTN",
    "isoNumber": "064",
    "locale": "dz-BT",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Bouvet Island",
    "iso2": "BV",
    "iso3": "BVT",
    "isoNumber": "074",
    "locale": "en-US",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Botswana",
    "iso2": "BW",
    "iso3": "BWA",
    "isoNumber": "072",
    "locale": "en-BW",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Central African Republic",
    "iso2": "CF",
    "iso3": "CAF",
    "isoNumber": "140",
    "locale": "fr-CF",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Canada",
    "iso2": "CA",
    "iso3": "CAN",
    "isoNumber": "124",
    "locale": "en-CA",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "Cocos Islands",
    "iso2": "CC",
    "iso3": "CCK",
    "isoNumber": "166",
    "locale": "ms-CC",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Switzerland",
    "iso2": "CH",
    "iso3": "CHE",
    "isoNumber": "756",
    "locale": "de-CH",
    "longDateFormat": "DD.MM.YYYY",
    "shortDateFormat": "DD.MM"
  }, {
    "week": 1,
    "name": "Chile",
    "iso2": "CL",
    "iso3": "CHL",
    "isoNumber": "152",
    "locale": "es-CL",
    "longDateFormat": "DD-MM-YYYY",
    "shortDateFormat": "DD-MM"
  }, {
    "week": 0,
    "name": "China",
    "iso2": "CN",
    "iso3": "CHN",
    "isoNumber": "156",
    "locale": "zh-CN",
    "longDateFormat": "YYYY/MM/DD",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Ivory Coast",
    "iso2": "CI",
    "iso3": "CIV",
    "isoNumber": "384",
    "locale": "fr-CI",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Cameroon",
    "iso2": "CM",
    "iso3": "CMR",
    "isoNumber": "120",
    "locale": "en-CM",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Democratic Republic of the Congo",
    "iso2": "CD",
    "iso3": "COD",
    "isoNumber": "180",
    "locale": "fr-CD",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Republic of the Congo",
    "iso2": "CG",
    "iso3": "COG",
    "isoNumber": "178",
    "locale": "fr-CG",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Cook Islands",
    "iso2": "CK",
    "iso3": "COK",
    "isoNumber": "184",
    "locale": "en-CK",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Colombia",
    "iso2": "CO",
    "iso3": "COL",
    "isoNumber": "170",
    "locale": "es-CO",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Comoros",
    "iso2": "KM",
    "iso3": "COM",
    "isoNumber": "174",
    "locale": "ar-KM",
    "longDateFormat": "DD‏/MM‏/YYYY",
    "shortDateFormat": "DD‏/MM"
  }, {
    "week": 1,
    "name": "Cape Verde",
    "iso2": "CV",
    "iso3": "CPV",
    "isoNumber": "132",
    "locale": "pt-CV",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Costa Rica",
    "iso2": "CR",
    "iso3": "CRI",
    "isoNumber": "188",
    "locale": "es-CR",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Cuba",
    "iso2": "CU",
    "iso3": "CUB",
    "isoNumber": "192",
    "locale": "es-CU",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Curacao",
    "iso2": "CW",
    "iso3": "CUW",
    "isoNumber": "531",
    "locale": "nl-CW",
    "longDateFormat": "DD-MM-YYYY",
    "shortDateFormat": "DD-MM"
  }, {
    "week": 0,
    "name": "Christmas Island",
    "iso2": "CX",
    "iso3": "CXR",
    "isoNumber": "162",
    "locale": "en-CX",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Cayman Islands",
    "iso2": "KY",
    "iso3": "CYM",
    "isoNumber": "136",
    "locale": "en-KY",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Cyprus",
    "iso2": "CY",
    "iso3": "CYP",
    "isoNumber": "196",
    "locale": "el-CY",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Czechia",
    "iso2": "CZ",
    "iso3": "CZE",
    "isoNumber": "203",
    "locale": "cs-CZ",
    "longDateFormat": "DD. MM. YYYY",
    "shortDateFormat": "DD. MM"
  }, {
    "week": 1,
    "name": "Germany",
    "iso2": "DE",
    "iso3": "DEU",
    "isoNumber": "276",
    "locale": "de-DE",
    "longDateFormat": "DD.MM.YYYY",
    "shortDateFormat": "DD.MM"
  }, {
    "week": 0,
    "name": "Djibouti",
    "iso2": "DJ",
    "iso3": "DJI",
    "isoNumber": "262",
    "locale": "fr-DJ",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Dominica",
    "iso2": "DM",
    "iso3": "DMA",
    "isoNumber": "212",
    "locale": "en-DM",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Denmark",
    "iso2": "DK",
    "iso3": "DNK",
    "isoNumber": "208",
    "locale": "da-DK",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Dominican Republic",
    "iso2": "DO",
    "iso3": "DOM",
    "isoNumber": "214",
    "locale": "es-DO",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 6,
    "name": "Algeria",
    "iso2": "DZ",
    "iso3": "DZA",
    "isoNumber": "012",
    "locale": "ar-DZ",
    "longDateFormat": "DD‏/MM‏/YYYY",
    "shortDateFormat": "DD‏/MM"
  }, {
    "week": 1,
    "name": "Ecuador",
    "iso2": "EC",
    "iso3": "ECU",
    "isoNumber": "218",
    "locale": "es-EC",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Egypt",
    "iso2": "EG",
    "iso3": "EGY",
    "isoNumber": "818",
    "locale": "ar-EG",
    "longDateFormat": "DD‏/MM‏/YYYY",
    "shortDateFormat": "DD‏/MM"
  }, {
    "week": 0,
    "name": "Eritrea",
    "iso2": "ER",
    "iso3": "ERI",
    "isoNumber": "232",
    "locale": "aa-ER",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Western Sahara",
    "iso2": "EH",
    "iso3": "ESH",
    "isoNumber": "732",
    "locale": "ar-EH",
    "longDateFormat": "DD‏/MM‏/YYYY",
    "shortDateFormat": "DD‏/MM"
  }, {
    "week": 0,
    "name": "Spain",
    "iso2": "ES",
    "iso3": "ESP",
    "isoNumber": "724",
    "locale": "es-ES",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Estonia",
    "iso2": "EE",
    "iso3": "EST",
    "isoNumber": "233",
    "locale": "et-EE",
    "longDateFormat": "DD.MM.YYYY",
    "shortDateFormat": "DD.MM"
  }, {
    "week": 0,
    "name": "Ethiopia",
    "iso2": "ET",
    "iso3": "ETH",
    "isoNumber": "231",
    "locale": "am-ET",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Finland",
    "iso2": "FI",
    "iso3": "FIN",
    "isoNumber": "246",
    "locale": "fi-FI",
    "longDateFormat": "DD.MM.YYYY",
    "shortDateFormat": "DD.MM"
  }, {
    "week": 0,
    "name": "Fiji",
    "iso2": "FJ",
    "iso3": "FJI",
    "isoNumber": "242",
    "locale": "en-FJ",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Falkland Islands",
    "iso2": "FK",
    "iso3": "FLK",
    "isoNumber": "238",
    "locale": "en-FK",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "France",
    "iso2": "FR",
    "iso3": "FRA",
    "isoNumber": "250",
    "locale": "fr-FR",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Faroe Islands",
    "iso2": "FO",
    "iso3": "FRO",
    "isoNumber": "234",
    "locale": "fo-FO",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "Micronesia",
    "iso2": "FM",
    "iso3": "FSM",
    "isoNumber": "583",
    "locale": "en-FM",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Gabon",
    "iso2": "GA",
    "iso3": "GAB",
    "isoNumber": "266",
    "locale": "fr-GA",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "United Kingdom",
    "iso2": "GB",
    "iso3": "GBR",
    "isoNumber": "826",
    "locale": "en-GB",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Georgia",
    "iso2": "GE",
    "iso3": "GEO",
    "isoNumber": "268",
    "locale": "ka-GE",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "Guernsey",
    "iso2": "GG",
    "iso3": "GGY",
    "isoNumber": "831",
    "locale": "en-GG",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Ghana",
    "iso2": "GH",
    "iso3": "GHA",
    "isoNumber": "288",
    "locale": "en-GH",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Gibraltar",
    "iso2": "GI",
    "iso3": "GIB",
    "isoNumber": "292",
    "locale": "en-GI",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Guinea",
    "iso2": "GN",
    "iso3": "GIN",
    "isoNumber": "324",
    "locale": "fr-GN",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Guadeloupe",
    "iso2": "GP",
    "iso3": "GLP",
    "isoNumber": "312",
    "locale": "fr-GP",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Gambia",
    "iso2": "GM",
    "iso3": "GMB",
    "isoNumber": "270",
    "locale": "en-GM",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Guinea-Bissau",
    "iso2": "GW",
    "iso3": "GNB",
    "isoNumber": "624",
    "locale": "pt-GW",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Equatorial Guinea",
    "iso2": "GQ",
    "iso3": "GNQ",
    "isoNumber": "226",
    "locale": "es-GQ",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Greece",
    "iso2": "GR",
    "iso3": "GRC",
    "isoNumber": "300",
    "locale": "el-GR",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Grenada",
    "iso2": "GD",
    "iso3": "GRD",
    "isoNumber": "308",
    "locale": "en-GD",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Greenland",
    "iso2": "GL",
    "iso3": "GRL",
    "isoNumber": "304",
    "locale": "kl-GL",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 1,
    "name": "Guatemala",
    "iso2": "GT",
    "iso3": "GTM",
    "isoNumber": "320",
    "locale": "es-GT",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "French Guiana",
    "iso2": "GF",
    "iso3": "GUF",
    "isoNumber": "254",
    "locale": "fr-GF",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Guam",
    "iso2": "GU",
    "iso3": "GUM",
    "isoNumber": "316",
    "locale": "en-GU",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Guyana",
    "iso2": "GY",
    "iso3": "GUY",
    "isoNumber": "328",
    "locale": "en-GY",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Hong Kong",
    "iso2": "HK",
    "iso3": "HKG",
    "isoNumber": "344",
    "locale": "zh-HK",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Heard Island and McDonald Islands",
    "iso2": "HM",
    "iso3": "HMD",
    "isoNumber": "334",
    "locale": "en-US",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 1,
    "name": "Honduras",
    "iso2": "HN",
    "iso3": "HND",
    "isoNumber": "340",
    "locale": "es-HN",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Croatia",
    "iso2": "HR",
    "iso3": "HRV",
    "isoNumber": "191",
    "locale": "hr-HR",
    "longDateFormat": "DD. MM. YYYY",
    "shortDateFormat": "DD. MM"
  }, {
    "week": 1,
    "name": "Haiti",
    "iso2": "HT",
    "iso3": "HTI",
    "isoNumber": "332",
    "locale": "ht-HT",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 1,
    "name": "Hungary",
    "iso2": "HU",
    "iso3": "HUN",
    "isoNumber": "348",
    "locale": "hu-HU",
    "longDateFormat": "YYYY. MM. DD",
    "shortDateFormat": "MM. DD"
  }, {
    "week": 0,
    "name": "Indonesia",
    "iso2": "ID",
    "iso3": "IDN",
    "isoNumber": "360",
    "locale": "id-ID",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Isle of Man",
    "iso2": "IM",
    "iso3": "IMN",
    "isoNumber": "833",
    "locale": "en-IM",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "India",
    "iso2": "IN",
    "iso3": "IND",
    "isoNumber": "356",
    "locale": "en-IN",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "British Indian Ocean Territory",
    "iso2": "IO",
    "iso3": "IOT",
    "isoNumber": "086",
    "locale": "en-IO",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Ireland",
    "iso2": "IE",
    "iso3": "IRL",
    "isoNumber": "372",
    "locale": "en-IE",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Iran",
    "iso2": "IR",
    "iso3": "IRN",
    "isoNumber": "364",
    "locale": "fa-IR",
    "longDateFormat": "YYYY/MM/DD",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Iraq",
    "iso2": "IQ",
    "iso3": "IRQ",
    "isoNumber": "368",
    "locale": "ar-IQ",
    "longDateFormat": "DD‏/MM‏/YYYY",
    "shortDateFormat": "DD‏/MM"
  }, {
    "week": 1,
    "name": "Iceland",
    "iso2": "IS",
    "iso3": "ISL",
    "isoNumber": "352",
    "locale": "is-IS",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "Israel",
    "iso2": "IL",
    "iso3": "ISR",
    "isoNumber": "376",
    "locale": "he-IL",
    "longDateFormat": "DD.MM.YYYY",
    "shortDateFormat": "DD.MM"
  }, {
    "week": 1,
    "name": "Italy",
    "iso2": "IT",
    "iso3": "ITA",
    "isoNumber": "380",
    "locale": "it-IT",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Jamaica",
    "iso2": "JM",
    "iso3": "JAM",
    "isoNumber": "388",
    "locale": "en-JM",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Jersey",
    "iso2": "JE",
    "iso3": "JEY",
    "isoNumber": "832",
    "locale": "en-JE",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 6,
    "name": "Jordan",
    "iso2": "JO",
    "iso3": "JOR",
    "isoNumber": "400",
    "locale": "ar-JO",
    "longDateFormat": "DD‏/MM‏/YYYY",
    "shortDateFormat": "DD‏/MM"
  }, {
    "week": 0,
    "name": "Japan",
    "iso2": "JP",
    "iso3": "JPN",
    "isoNumber": "392",
    "locale": "ja-JP",
    "longDateFormat": "YYYY/MM/DD",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Kazakhstan",
    "iso2": "KZ",
    "iso3": "KAZ",
    "isoNumber": "398",
    "locale": "kk-KZ",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "Kenya",
    "iso2": "KE",
    "iso3": "KEN",
    "isoNumber": "404",
    "locale": "en-KE",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Kyrgyzstan",
    "iso2": "KG",
    "iso3": "KGZ",
    "isoNumber": "417",
    "locale": "ky-KG",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "Cambodia",
    "iso2": "KH",
    "iso3": "KHM",
    "isoNumber": "116",
    "locale": "km-KH",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "Kiribati",
    "iso2": "KI",
    "iso3": "KIR",
    "isoNumber": "296",
    "locale": "en-KI",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Saint Kitts and Nevis",
    "iso2": "KN",
    "iso3": "KNA",
    "isoNumber": "659",
    "locale": "en-KN",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "South Korea",
    "iso2": "KR",
    "iso3": "KOR",
    "isoNumber": "410",
    "locale": "ko-KR",
    "longDateFormat": "YYYY. MM. DD",
    "shortDateFormat": "MM. DD"
  }, {
    "week": 6,
    "name": "Kuwait",
    "iso2": "KW",
    "iso3": "KWT",
    "isoNumber": "414",
    "locale": "ar-KW",
    "longDateFormat": "DD‏/MM‏/YYYY",
    "shortDateFormat": "DD‏/MM"
  }, {
    "week": 0,
    "name": "Laos",
    "iso2": "LA",
    "iso3": "LAO",
    "isoNumber": "418",
    "locale": "lo-LA",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 6,
    "name": "Lebanon",
    "iso2": "LB",
    "iso3": "LBN",
    "isoNumber": "422",
    "locale": "ar-LB",
    "longDateFormat": "DD‏/MM‏/YYYY",
    "shortDateFormat": "DD‏/MM"
  }, {
    "week": 0,
    "name": "Liberia",
    "iso2": "LR",
    "iso3": "LBR",
    "isoNumber": "430",
    "locale": "en-LR",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 6,
    "name": "Libya",
    "iso2": "LY",
    "iso3": "LBY",
    "isoNumber": "434",
    "locale": "ar-LY",
    "longDateFormat": "DD‏/MM‏/YYYY",
    "shortDateFormat": "DD‏/MM"
  }, {
    "week": 0,
    "name": "Saint Lucia",
    "iso2": "LC",
    "iso3": "LCA",
    "isoNumber": "662",
    "locale": "en-LC",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Liechtenstein",
    "iso2": "LI",
    "iso3": "LIE",
    "isoNumber": "438",
    "locale": "de-LI",
    "longDateFormat": "DD.MM.YYYY",
    "shortDateFormat": "DD.MM"
  }, {
    "week": 0,
    "name": "Sri Lanka",
    "iso2": "LK",
    "iso3": "LKA",
    "isoNumber": "144",
    "locale": "si-LK",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "Lesotho",
    "iso2": "LS",
    "iso3": "LSO",
    "isoNumber": "426",
    "locale": "en-LS",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Lithuania",
    "iso2": "LT",
    "iso3": "LTU",
    "isoNumber": "440",
    "locale": "lt-LT",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 1,
    "name": "Luxembourg",
    "iso2": "LU",
    "iso3": "LUX",
    "isoNumber": "442",
    "locale": "lb-LU",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Latvia",
    "iso2": "LV",
    "iso3": "LVA",
    "isoNumber": "428",
    "locale": "lv-LV",
    "longDateFormat": "YYYY.MM.DD",
    "shortDateFormat": "MM.DD"
  }, {
    "week": 0,
    "name": "Macao",
    "iso2": "MO",
    "iso3": "MAC",
    "isoNumber": "446",
    "locale": "zh-MO",
    "longDateFormat": "YYYY/MM/DD",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Saint Martin",
    "iso2": "MF",
    "iso3": "MAF",
    "isoNumber": "663",
    "locale": "fr-MF",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 6,
    "name": "Morocco",
    "iso2": "MA",
    "iso3": "MAR",
    "isoNumber": "504",
    "locale": "ar-MA",
    "longDateFormat": "DD‏/MM‏/YYYY",
    "shortDateFormat": "DD‏/MM"
  }, {
    "week": 1,
    "name": "Monaco",
    "iso2": "MC",
    "iso3": "MCO",
    "isoNumber": "492",
    "locale": "fr-MC",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Moldova",
    "iso2": "MD",
    "iso3": "MDA",
    "isoNumber": "498",
    "locale": "ro-MD",
    "longDateFormat": "DD.MM.YYYY",
    "shortDateFormat": "DD.MM"
  }, {
    "week": 0,
    "name": "Madagascar",
    "iso2": "MG",
    "iso3": "MDG",
    "isoNumber": "450",
    "locale": "fr-MG",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Maldives",
    "iso2": "MV",
    "iso3": "MDV",
    "isoNumber": "462",
    "locale": "dv-MV",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 1,
    "name": "Mexico",
    "iso2": "MX",
    "iso3": "MEX",
    "isoNumber": "484",
    "locale": "es-MX",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Marshall Islands",
    "iso2": "MH",
    "iso3": "MHL",
    "isoNumber": "584",
    "locale": "mh-MH",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Macedonia",
    "iso2": "MK",
    "iso3": "MKD",
    "isoNumber": "807",
    "locale": "mk-MK",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "Mali",
    "iso2": "ML",
    "iso3": "MLI",
    "isoNumber": "466",
    "locale": "fr-ML",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Malta",
    "iso2": "MT",
    "iso3": "MLT",
    "isoNumber": "470",
    "locale": "mt-MT",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "Myanmar",
    "iso2": "MM",
    "iso3": "MMR",
    "isoNumber": "104",
    "locale": "my-MM",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 1,
    "name": "Montenegro",
    "iso2": "ME",
    "iso3": "MNE",
    "isoNumber": "499",
    "locale": "sr-ME",
    "longDateFormat": "DD.MM.YYYY",
    "shortDateFormat": "DD.MM"
  }, {
    "week": 0,
    "name": "Mongolia",
    "iso2": "MN",
    "iso3": "MNG",
    "isoNumber": "496",
    "locale": "mn-MN",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "Northern Mariana Islands",
    "iso2": "MP",
    "iso3": "MNP",
    "isoNumber": "580",
    "locale": "fil-MP",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 1,
    "name": "Mozambique",
    "iso2": "MZ",
    "iso3": "MOZ",
    "isoNumber": "508",
    "locale": "pt-MZ",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Mauritania",
    "iso2": "MR",
    "iso3": "MRT",
    "isoNumber": "478",
    "locale": "ar-MR",
    "longDateFormat": "DD‏/MM‏/YYYY",
    "shortDateFormat": "DD‏/MM"
  }, {
    "week": 0,
    "name": "Montserrat",
    "iso2": "MS",
    "iso3": "MSR",
    "isoNumber": "500",
    "locale": "en-MS",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Martinique",
    "iso2": "MQ",
    "iso3": "MTQ",
    "isoNumber": "474",
    "locale": "fr-MQ",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Mauritius",
    "iso2": "MU",
    "iso3": "MUS",
    "isoNumber": "480",
    "locale": "en-MU",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Malawi",
    "iso2": "MW",
    "iso3": "MWI",
    "isoNumber": "454",
    "locale": "ny-MW",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Malaysia",
    "iso2": "MY",
    "iso3": "MYS",
    "isoNumber": "458",
    "locale": "ms-MY",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Mayotte",
    "iso2": "YT",
    "iso3": "MYT",
    "isoNumber": "175",
    "locale": "fr-YT",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Namibia",
    "iso2": "NA",
    "iso3": "NAM",
    "isoNumber": "516",
    "locale": "en-NA",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "New Caledonia",
    "iso2": "NC",
    "iso3": "NCL",
    "isoNumber": "540",
    "locale": "fr-NC",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Niger",
    "iso2": "NE",
    "iso3": "NER",
    "isoNumber": "562",
    "locale": "fr-NE",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Norfolk Island",
    "iso2": "NF",
    "iso3": "NFK",
    "isoNumber": "574",
    "locale": "en-NF",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Nigeria",
    "iso2": "NG",
    "iso3": "NGA",
    "isoNumber": "566",
    "locale": "en-NG",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Nicaragua",
    "iso2": "NI",
    "iso3": "NIC",
    "isoNumber": "558",
    "locale": "es-NI",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Niue",
    "iso2": "NU",
    "iso3": "NIU",
    "isoNumber": "570",
    "locale": "niu-NU",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 1,
    "name": "Netherlands",
    "iso2": "NL",
    "iso3": "NLD",
    "isoNumber": "528",
    "locale": "nl-NL",
    "longDateFormat": "DD-MM-YYYY",
    "shortDateFormat": "DD-MM"
  }, {
    "week": 1,
    "name": "Norway",
    "iso2": "NO",
    "iso3": "NOR",
    "isoNumber": "578",
    "locale": "no-NO",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Nepal",
    "iso2": "NP",
    "iso3": "NPL",
    "isoNumber": "524",
    "locale": "ne-NP",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "Nauru",
    "iso2": "NR",
    "iso3": "NRU",
    "isoNumber": "520",
    "locale": "na-NR",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "New Zealand",
    "iso2": "NZ",
    "iso3": "NZL",
    "isoNumber": "554",
    "locale": "en-NZ",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 6,
    "name": "Oman",
    "iso2": "OM",
    "iso3": "OMN",
    "isoNumber": "512",
    "locale": "ar-OM",
    "longDateFormat": "DD‏/MM‏/YYYY",
    "shortDateFormat": "DD‏/MM"
  }, {
    "week": 0,
    "name": "Pakistan",
    "iso2": "PK",
    "iso3": "PAK",
    "isoNumber": "586",
    "locale": "ur-PK",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 1,
    "name": "Panama",
    "iso2": "PA",
    "iso3": "PAN",
    "isoNumber": "591",
    "locale": "es-PA",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Pitcairn",
    "iso2": "PN",
    "iso3": "PCN",
    "isoNumber": "612",
    "locale": "en-PN",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Peru",
    "iso2": "PE",
    "iso3": "PER",
    "isoNumber": "604",
    "locale": "es-PE",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Philippines",
    "iso2": "PH",
    "iso3": "PHL",
    "isoNumber": "608",
    "locale": "tl-PH",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Palau",
    "iso2": "PW",
    "iso3": "PLW",
    "isoNumber": "585",
    "locale": "pau-PW",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Papua New Guinea",
    "iso2": "PG",
    "iso3": "PNG",
    "isoNumber": "598",
    "locale": "en-PG",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Poland",
    "iso2": "PL",
    "iso3": "POL",
    "isoNumber": "616",
    "locale": "pl-PL",
    "longDateFormat": "DD.MM.YYYY",
    "shortDateFormat": "DD.MM"
  }, {
    "week": 1,
    "name": "Puerto Rico",
    "iso2": "PR",
    "iso3": "PRI",
    "isoNumber": "630",
    "locale": "en-PR",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "North Korea",
    "iso2": "KP",
    "iso3": "PRK",
    "isoNumber": "408",
    "locale": "ko-KP",
    "longDateFormat": "YYYY. MM. DD",
    "shortDateFormat": "MM. DD"
  }, {
    "week": 1,
    "name": "Portugal",
    "iso2": "PT",
    "iso3": "PRT",
    "isoNumber": "620",
    "locale": "pt-PT",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Paraguay",
    "iso2": "PY",
    "iso3": "PRY",
    "isoNumber": "600",
    "locale": "es-PY",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Palestinian Territory",
    "iso2": "PS",
    "iso3": "PSE",
    "isoNumber": "275",
    "locale": "ar-PS",
    "longDateFormat": "DD‏/MM‏/YYYY",
    "shortDateFormat": "DD‏/MM"
  }, {
    "week": 0,
    "name": "French Polynesia",
    "iso2": "PF",
    "iso3": "PYF",
    "isoNumber": "258",
    "locale": "fr-PF",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 6,
    "name": "Qatar",
    "iso2": "QA",
    "iso3": "QAT",
    "isoNumber": "634",
    "locale": "ar-QA",
    "longDateFormat": "DD‏/MM‏/YYYY",
    "shortDateFormat": "DD‏/MM"
  }, {
    "week": 0,
    "name": "Reunion",
    "iso2": "RE",
    "iso3": "REU",
    "isoNumber": "638",
    "locale": "fr-RE",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Romania",
    "iso2": "RO",
    "iso3": "ROU",
    "isoNumber": "642",
    "locale": "ro-RO",
    "longDateFormat": "DD.MM.YYYY",
    "shortDateFormat": "DD.MM"
  }, {
    "week": 1,
    "name": "Russia",
    "iso2": "RU",
    "iso3": "RUS",
    "isoNumber": "643",
    "locale": "ru-RU",
    "longDateFormat": "DD.MM.YYYY",
    "shortDateFormat": "DD.MM"
  }, {
    "week": 0,
    "name": "Rwanda",
    "iso2": "RW",
    "iso3": "RWA",
    "isoNumber": "646",
    "locale": "rw-RW",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 6,
    "name": "Saudi Arabia",
    "iso2": "SA",
    "iso3": "SAU",
    "isoNumber": "682",
    "locale": "ar-SA",
    "longDateFormat": "DD‏/MM‏/YYYY",
    "shortDateFormat": "DD‏/MM"
  }, {
    "week": 1,
    "name": "Serbia and Montenegro",
    "iso2": "CS",
    "iso3": "SCG",
    "isoNumber": "891",
    "locale": "cu-CS",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 6,
    "name": "Sudan",
    "iso2": "SD",
    "iso3": "SDN",
    "isoNumber": "729",
    "locale": "ar-SD",
    "longDateFormat": "DD‏/MM‏/YYYY",
    "shortDateFormat": "DD‏/MM"
  }, {
    "week": 0,
    "name": "Senegal",
    "iso2": "SN",
    "iso3": "SEN",
    "isoNumber": "686",
    "locale": "fr-SN",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Singapore",
    "iso2": "SG",
    "iso3": "SGP",
    "isoNumber": "702",
    "locale": "cmn-SG",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "South Georgia and the South Sandwich Islands",
    "iso2": "GS",
    "iso3": "SGS",
    "isoNumber": "239",
    "locale": "en-GS",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Saint Helena",
    "iso2": "SH",
    "iso3": "SHN",
    "isoNumber": "654",
    "locale": "en-SH",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Svalbard and Jan Mayen",
    "iso2": "SJ",
    "iso3": "SJM",
    "isoNumber": "744",
    "locale": "no-SJ",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Solomon Islands",
    "iso2": "SB",
    "iso3": "SLB",
    "isoNumber": "090",
    "locale": "en-SB",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Sierra Leone",
    "iso2": "SL",
    "iso3": "SLE",
    "isoNumber": "694",
    "locale": "en-SL",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "El Salvador",
    "iso2": "SV",
    "iso3": "SLV",
    "isoNumber": "222",
    "locale": "es-SV",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "San Marino",
    "iso2": "SM",
    "iso3": "SMR",
    "isoNumber": "674",
    "locale": "it-SM",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Somalia",
    "iso2": "SO",
    "iso3": "SOM",
    "isoNumber": "706",
    "locale": "so-SO",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "Saint Pierre and Miquelon",
    "iso2": "PM",
    "iso3": "SPM",
    "isoNumber": "666",
    "locale": "fr-PM",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Serbia",
    "iso2": "RS",
    "iso3": "SRB",
    "isoNumber": "688",
    "locale": "sr-RS",
    "longDateFormat": "DD.MM.YYYY",
    "shortDateFormat": "DD.MM"
  }, {
    "week": 0,
    "name": "South Sudan",
    "iso2": "SS",
    "iso3": "SSD",
    "isoNumber": "728",
    "locale": "en-SS",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Sao Tome and Principe",
    "iso2": "ST",
    "iso3": "STP",
    "isoNumber": "678",
    "locale": "pt-ST",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Suriname",
    "iso2": "SR",
    "iso3": "SUR",
    "isoNumber": "740",
    "locale": "nl-SR",
    "longDateFormat": "DD-MM-YYYY",
    "shortDateFormat": "DD-MM"
  }, {
    "week": 1,
    "name": "Slovakia",
    "iso2": "SK",
    "iso3": "SVK",
    "isoNumber": "703",
    "locale": "sk-SK",
    "longDateFormat": "DD. MM. YYYY",
    "shortDateFormat": "DD. MM"
  }, {
    "week": 1,
    "name": "Slovenia",
    "iso2": "SI",
    "iso3": "SVN",
    "isoNumber": "705",
    "locale": "sl-SI",
    "longDateFormat": "DD. MM. YYYY",
    "shortDateFormat": "DD. MM"
  }, {
    "week": 1,
    "name": "Sweden",
    "iso2": "SE",
    "iso3": "SWE",
    "isoNumber": "752",
    "locale": "sv-SE",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "Swaziland",
    "iso2": "SZ",
    "iso3": "SWZ",
    "isoNumber": "748",
    "locale": "en-SZ",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Sint Maarten",
    "iso2": "SX",
    "iso3": "SXM",
    "isoNumber": "534",
    "locale": "nl-SX",
    "longDateFormat": "DD-MM-YYYY",
    "shortDateFormat": "DD-MM"
  }, {
    "week": 0,
    "name": "Seychelles",
    "iso2": "SC",
    "iso3": "SYC",
    "isoNumber": "690",
    "locale": "en-SC",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 6,
    "name": "Syria",
    "iso2": "SY",
    "iso3": "SYR",
    "isoNumber": "760",
    "locale": "ar-SY",
    "longDateFormat": "DD‏/MM‏/YYYY",
    "shortDateFormat": "DD‏/MM"
  }, {
    "week": 0,
    "name": "Turks and Caicos Islands",
    "iso2": "TC",
    "iso3": "TCA",
    "isoNumber": "796",
    "locale": "en-TC",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Chad",
    "iso2": "TD",
    "iso3": "TCD",
    "isoNumber": "148",
    "locale": "fr-TD",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Togo",
    "iso2": "TG",
    "iso3": "TGO",
    "isoNumber": "768",
    "locale": "fr-TG",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Thailand",
    "iso2": "TH",
    "iso3": "THA",
    "isoNumber": "764",
    "locale": "th-TH",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Tajikistan",
    "iso2": "TJ",
    "iso3": "TJK",
    "isoNumber": "762",
    "locale": "tg-TJ",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "Tokelau",
    "iso2": "TK",
    "iso3": "TKL",
    "isoNumber": "772",
    "locale": "tkl-TK",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Turkmenistan",
    "iso2": "TM",
    "iso3": "TKM",
    "isoNumber": "795",
    "locale": "tk-TM",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Timor Leste",
    "iso2": "TL",
    "iso3": "TLS",
    "isoNumber": "626",
    "locale": "tet-TL",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Tonga",
    "iso2": "TO",
    "iso3": "TON",
    "isoNumber": "776",
    "locale": "to-TO",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "Trinidad and Tobago",
    "iso2": "TT",
    "iso3": "TTO",
    "isoNumber": "780",
    "locale": "en-TT",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 6,
    "name": "Tunisia",
    "iso2": "TN",
    "iso3": "TUN",
    "isoNumber": "788",
    "locale": "ar-TN",
    "longDateFormat": "DD‏/MM‏/YYYY",
    "shortDateFormat": "DD‏/MM"
  }, {
    "week": 1,
    "name": "Turkey",
    "iso2": "TR",
    "iso3": "TUR",
    "isoNumber": "792",
    "locale": "tr-TR",
    "longDateFormat": "DD.MM.YYYY",
    "shortDateFormat": "DD.MM"
  }, {
    "week": 0,
    "name": "Tuvalu",
    "iso2": "TV",
    "iso3": "TUV",
    "isoNumber": "798",
    "locale": "tvl-TV",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Taiwan",
    "iso2": "TW",
    "iso3": "TWN",
    "isoNumber": "158",
    "locale": "zh-TW",
    "longDateFormat": "YYYY/MM/DD",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Tanzania",
    "iso2": "TZ",
    "iso3": "TZA",
    "isoNumber": "834",
    "locale": "sw-TZ",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Uganda",
    "iso2": "UG",
    "iso3": "UGA",
    "isoNumber": "800",
    "locale": "en-UG",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Ukraine",
    "iso2": "UA",
    "iso3": "UKR",
    "isoNumber": "804",
    "locale": "uk-UA",
    "longDateFormat": "DD.MM.YYYY",
    "shortDateFormat": "DD.MM"
  }, {
    "week": 0,
    "name": "United States Minor Outlying Islands",
    "iso2": "UM",
    "iso3": "UMI",
    "isoNumber": "581",
    "locale": "en-UM",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 1,
    "name": "Uruguay",
    "iso2": "UY",
    "iso3": "URY",
    "isoNumber": "858",
    "locale": "es-UY",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "United States",
    "iso2": "US",
    "iso3": "USA",
    "isoNumber": "840",
    "locale": "en-US",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Uzbekistan",
    "iso2": "UZ",
    "iso3": "UZB",
    "isoNumber": "860",
    "locale": "uz-UZ",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "Vatican",
    "iso2": "VA",
    "iso3": "VAT",
    "isoNumber": "336",
    "locale": "la-VA",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Saint Vincent and the Grenadines",
    "iso2": "VC",
    "iso3": "VCT",
    "isoNumber": "670",
    "locale": "en-VC",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 1,
    "name": "Venezuela",
    "iso2": "VE",
    "iso3": "VEN",
    "isoNumber": "862",
    "locale": "es-VE",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "British Virgin Islands",
    "iso2": "VG",
    "iso3": "VGB",
    "isoNumber": "092",
    "locale": "en-VG",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "U.S. Virgin Islands",
    "iso2": "VI",
    "iso3": "VIR",
    "isoNumber": "850",
    "locale": "en-VI",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Vietnam",
    "iso2": "VN",
    "iso3": "VNM",
    "isoNumber": "704",
    "locale": "vi-VN",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Vanuatu",
    "iso2": "VU",
    "iso3": "VUT",
    "isoNumber": "548",
    "locale": "bi-VU",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 1,
    "name": "Wallis and Futuna",
    "iso2": "WF",
    "iso3": "WLF",
    "isoNumber": "876",
    "locale": "wls-WF",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Samoa",
    "iso2": "WS",
    "iso3": "WSM",
    "isoNumber": "882",
    "locale": "sm-WS",
    "longDateFormat": "MM/DD/YYYY",
    "shortDateFormat": "MM/DD"
  }, {
    "week": 0,
    "name": "Kosovo",
    "iso2": "XK",
    "iso3": "XKX",
    "isoNumber": "0",
    "locale": "sq-XK",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 6,
    "name": "Yemen",
    "iso2": "YE",
    "iso3": "YEM",
    "isoNumber": "887",
    "locale": "ar-YE",
    "longDateFormat": "DD‏/MM‏/YYYY",
    "shortDateFormat": "DD‏/MM"
  }, {
    "week": 0,
    "name": "South Africa",
    "iso2": "ZA",
    "iso3": "ZAF",
    "isoNumber": "710",
    "locale": "zu-ZA",
    "longDateFormat": "YYYY-MM-DD",
    "shortDateFormat": "MM-DD"
  }, {
    "week": 0,
    "name": "Zambia",
    "iso2": "ZM",
    "iso3": "ZMB",
    "isoNumber": "894",
    "locale": "en-ZM",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }, {
    "week": 0,
    "name": "Zimbabwe",
    "iso2": "ZW",
    "iso3": "ZWE",
    "isoNumber": "716",
    "locale": "en-ZW",
    "longDateFormat": "DD/MM/YYYY",
    "shortDateFormat": "DD/MM"
  }];

  var count, baseDate, days, months;
  var functionMap = [['ms', 'milliseconds', 'millisecond'], ['s', 'seconds', 'second'], ['min', 'minutes', 'minute'], ['hr', 'hours', 'hour'], ['day', 'days'], ['wk', 'week', 'weeks'], ['mon', 'month', 'months'], ['qtr', 'quarter', 'quarters'], ['yr', 'year', 'years'], ['decade', 'decades']].reduce(function (mapped, names) {
    var target = names[0];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var name = _step.value;
        mapped[name] = target;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return mapped;
  }, {});
  var localeArgMap = country.reduce(function (map, country$$1) {
    map[country$$1.iso2.toLowerCase()] = country$$1;
    map[country$$1.iso3.toLowerCase()] = country$$1;
    map[country$$1.locale.toLowerCase()] = country$$1;
    return map;
  }, {});
  var loadedLocales = {};
  var genLocaleData = (count = function count(n) {
    return new Array(n).fill(0).map(function (a, b) {
      return b;
    });
  }, baseDate = new Date(1971, 2, 14), days = count(7).map(function (day) {
    return new Date(new Date(baseDate).setDate(14 + day));
  }), months = count(12).map(function (month) {
    return new Date(new Date(baseDate).setMonth(month));
  }), function (locale) {
    return {
      dayLong: days.map(function (d) {
        return d.toLocaleString(locale, {
          weekday: 'long'
        });
      }),
      dayShort: days.map(function (d) {
        return d.toLocaleString(locale, {
          weekday: 'short'
        });
      }),
      dayNarrow: days.map(function (d) {
        return d.toLocaleString(locale, {
          weekday: 'narrow'
        });
      }),
      monthLong: months.map(function (m) {
        return m.toLocaleString(locale, {
          month: 'long'
        });
      }),
      monthShort: months.map(function (m) {
        return m.toLocaleString(locale, {
          month: 'short'
        });
      }),
      monthNarrow: months.map(function (m) {
        return m.toLocaleString(locale, {
          month: 'narrow'
        });
      })
    };
  });

  var loadLoc = function loadLoc(loc) {
    // if (loadedLocales[loc] === undefined) {
    if (loadedLocales.hasOwnProperty(loc) === false) {
      var base = localeArgMap[loc] !== undefined ? localeArgMap[loc] : {
        longDateFormat: "DD/MM/YYYY",
        shortDateFormat: "DD/MM",
        locale: loc,
        week: 0
      };
      loadedLocales[loc] = _objectSpread({}, base, genLocaleData(base.locale));
    }

    return loadedLocales[loc];
  };

  var ms_in = {
    second: 1000,
    minute: 1000 * 60,
    hour: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24,
    week: 1000 * 60 * 60 * 24 * 7
  };

  var _shift = function () {
    var ms = function ms(date, amount) {
      return date.setTime(date.time + amount);
    };

    var s = function s(date, amount) {
      return ms(date, amount * ms_in.second);
    };

    var min = function min(date, amount) {
      return ms(date, amount * ms_in.minute);
    };

    var hr = function hr(date, amount) {
      return ms(date, amount * ms_in.hour);
    };

    var day = function day(date, amount) {
      return date.setDate(date.date + amount);
    };

    var wk = function wk(date, amonut) {
      return day(date, amount * 7);
    };

    var mon = function mon(date, amount) {
      var expected = (date.month + amount) % 12;
      date.setMonth(date.getMonth() + amount);

      if (date.month !== expected) {
        date.setDate(0);
      }
    };

    var qtr = function qtr(date, amount) {
      return mon(date, amount * 3);
    };

    var yr = function yr(date, amount) {
      return mon(date, amount * 12);
    };

    var decade = function decade(date, amount) {
      return mon(date, amount * 120);
    };

    return {
      ms: ms,
      s: s,
      min: min,
      hr: hr,
      day: day,
      wk: wk,
      mon: mon,
      qtr: qtr,
      yr: yr,
      decade: decade
    };
  }();

  var start = function () {
    var s = function s(date) {
      return date.setMilliseconds(0);
    };

    var min = function min(date) {
      return date.setSeconds(0, 0);
    };

    var hr = function hr(date) {
      return date.setMinutes(0, 0, 0);
    };

    var day = function day(date) {
      return date.setHours(0, 0, 0, 0);
    };

    var wk = function wk(date) {
      var _w = date.localeData.week;
      var _n = date.dayOfWeek;
      var offset = _w - _n;

      if (offset > 0) {
        offset -= 7;
      }

      date.setDate(date.date + offset);
      day(date);
    };

    var mon = function mon(date) {
      day(date);
      date.setDate(1);
    };

    var qtr = function qtr(date) {
      var m = date.month;
      mon(date);
      date.setMonth(m - m % 3);
    };

    var yr = function yr(date) {
      day(date);
      date.setMonth(0, 1);
    };

    return {
      s: s,
      min: min,
      hr: hr,
      day: day,
      wk: wk,
      mon: mon,
      qtr: qtr,
      yr: yr
    };
  }();

  var end = function () {
    var s = function s(date) {
      return date.setMilliseconds(999);
    };

    var min = function min(date) {
      return date.setSecond(59, 999);
    };

    var hr = function hr(date) {
      return date.setMinutes(59, 59, 999);
    };

    var day = function day(date) {
      return date.setHours(23, 59, 59, 999);
    };

    var wk = function wk(date) {
      var _w = date.localeData.week;
      var _n = date.dayOfWeek;
      var offset = 6 + -_n + _w;

      if (offset >= 7) {
        offset -= 7;
      }

      date.setDate(date.date + offset);
      day(date);
    };

    var mon = function mon(date) {
      day(date);
      date.setDate(1);
      date.setMonth(date.month + 1);
      date.setDate(0);
    };

    var qtr = function qtr(date) {
      var m = date.month;
      date.setDate(1);
      date.setMonth(m + (2 - m % 3));
      mon(date);
    };

    var yr = function yr(date) {
      day(date);
      date.setMonth(11, 31);
    };

    return {
      s: s,
      min: min,
      hr: hr,
      day: day,
      wk: wk,
      mon: mon,
      qtr: qtr,
      yr: yr
    };
  }();

  var formatPattern = /\[.*?\]|(\w)\1{0,3}/g;
  var formatMethods = {
    d: function d(date) {
      return date.dayOfWeek;
    },
    dd: function dd(date) {
      return date.localeData.dayNarrow[date.dayOfWeek];
    },
    ddd: function ddd(date) {
      return date.localeData.dayShort[date.dayOfWeek];
    },
    dddd: function dddd(date) {
      return date.localeData.dayLong[date.dayOfWeek];
    },
    D: function D(date) {
      return date.date;
    },
    DD: function DD(date) {
      return "0".concat(date.date).slice(-2);
    },
    DDD: function DDD(date) {
      return '';
    },
    DDDD: function DDDD(date) {
      return '';
    },
    E: function E(date) {
      return date.dayOfWeek + 1;
    },
    h: function h(date) {
      return date.hours % 12 || 12;
    },
    hh: function hh(date) {
      return "0".concat(date.hours % 12 || 12).slice(-2);
    },
    H: function H(date) {
      return date.hours;
    },
    HH: function HH(date) {
      return "0".concat(date.hours).slice(-2);
    },
    m: function m(date) {
      return date.minutes;
    },
    mm: function mm(date) {
      return "0".concat(date.minutes).slice(-2);
    },
    mmm: function mmm(date) {
      return "00".concat(date.milliseconds).slice(-3);
    },
    M: function M(date) {
      return date.month + 1;
    },
    MM: function MM(date) {
      return "0".concat(date.month + 1).slice(-2);
    },
    MMM: function MMM(date) {
      return date.localeData.monthShort[date.month];
    },
    MMMM: function MMMM(date) {
      return date.localeData.monthLong[date.month];
    },
    MMMMM: function MMMMM(date) {
      return date.localeData.monthNarrow[date.month];
    },
    s: function s(date) {
      return date.seconds;
    },
    ss: function ss(date) {
      return "0".concat(date.seconds).slice(-2);
    },
    t: function t(date) {
      return date.hours < 12 ? "A" : "P";
    },
    tt: function tt(date) {
      return date.hours < 12 ? "AM" : "PM";
    },
    TT: function TT(date) {
      return date.year < 0 ? "BC" : "AD";
    },
    yy: function yy(date) {
      return "0".concat(date.year).slice(-2);
    },
    yyyy: function yyyy(date) {
      return date.year;
    },
    YY: function YY(date) {
      return "0".concat(date.year).slice(-2);
    },
    YYYY: function YYYY(date) {
      return date.year;
    },
    L: function L(date) {
      return date.format(date.localeData.shortDateFormat);
    },
    LL: function LL(date) {
      return date.format(date.localeData.longDateFormat);
    }
  };
  var ChronoProto = {
    get milliseconds() {
      return this.getMilliseconds();
    },

    get seconds() {
      return this.getSeconds();
    },

    get minutes() {
      return this.getMinutes();
    },

    get hours() {
      return this.getHours();
    },

    get date() {
      return this.getDate();
    },

    get date0() {
      return this.getDate() - 1;
    },

    get dayOfWeek() {
      return this.getDay();
    },

    get month() {
      return this.getMonth();
    },

    get year() {
      return this.getFullYear();
    },

    get utcMilliseconds() {
      return this.getUTCMilliseconds();
    },

    get utcSeconds() {
      return this.getUTCSeconds();
    },

    get utcMinutes() {
      return this.getUTCMinutes();
    },

    get utcHours() {
      return this.getUTCHours();
    },

    get utcDate() {
      return this.getUTCDate();
    },

    get utcDate0() {
      return this.getUTCDate() - 1;
    },

    get utcDayOfWeek() {
      return this.getUTCDay();
    },

    get utcMonth() {
      return this.getUTCMonth();
    },

    get utcYear() {
      return this.getUTCFullYear();
    },

    get time() {
      return this.getTime();
    },

    shift: function shift(amount, unit) {
      var newChrono = new Chrono(this);
      var func = functionMap[unit];

      _shift[func](newChrono, amount);

      return newChrono;
    },
    startOf: function startOf(unit) {
      var newChrono = new Chrono(this);
      var func = functionMap[unit];
      start[func](newChrono);
      return newChrono;
    },
    endOf: function endOf(unit) {
      var newChrono = new Chrono(this);
      var func = functionMap[unit];
      end[func](newChrono);
      return newChrono;
    },
    dif: function dif(other) {
      var difMS = Math.abs(this.time - other.time);
      var dif = Chrono(difMS);
      return {
        milliseconds: dif.utcMilliseconds,
        seconds: dif.utcSeconds,
        minutes: dif.utcMinutes,
        hours: dif.utcHours,
        days: dif.utcDate - 1,
        month: dif.utcMonth,
        years: dif.utcYear - 1970,
        time: dif.time
      };
    },
    format: function format() {
      var _this = this;

      var formatString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (formatString === null) {
        return this.toLocaleString(this.locale);
      }

      return formatString.replace(formatPattern, function (match) {
        if (match.charAt(0) === "[") {
          return match.slice(1, -1);
        }

        if (formatMethods.hasOwnProperty(match) === false) {
          throw new Error("\"".concat(match, "\" is not a valid date formatter"));
        }

        return formatMethods[match](_this);
      });
    },
    changeLoc: function changeLoc(loc) {
      return new Chrono(this, loc);
    }
  };
  Object.setPrototypeOf(ChronoProto, Date.prototype);

  var Chrono = function Chrono() {
    var _args$2;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var thing = function () {
      if (args.length === 0) {
        return new Date();
      }

      if (args[0] instanceof Date) {
        return new Date(args[0]);
      }

      if (_typeof(args[0]) === 'object') {
        var _args$;

        var src = new Date();

        var _ref = (_args$ = args[0]) !== null && _args$ !== void 0 ? _args$ : {},
            _ref$year = _ref.year,
            year = _ref$year === void 0 ? src.getFullYear() : _ref$year,
            _ref$month = _ref.month,
            month = _ref$month === void 0 ? src.getMonth() : _ref$month,
            _ref$day = _ref.day,
            day = _ref$day === void 0 ? src.getDate() - 1 : _ref$day,
            _ref$hour = _ref.hour,
            hour = _ref$hour === void 0 ? 0 : _ref$hour,
            _ref$minute = _ref.minute,
            minute = _ref$minute === void 0 ? 0 : _ref$minute,
            _ref$second = _ref.second,
            second = _ref$second === void 0 ? 0 : _ref$second,
            _ref$millisecond = _ref.millisecond,
            millisecond = _ref$millisecond === void 0 ? 0 : _ref$millisecond;

        return new Date(year, month, day + 1, hour, minute, second, millisecond);
      }

      return _construct(Date, args);
    }();

    Object.setPrototypeOf(thing, ChronoProto);
    thing.__isChrono = true;
    var localeData = _typeof(args[0]) === 'object' && args.length > 1 ? loadLoc(args[1].toLowerCase()) : ((_args$2 = args[0]) === null || _args$2 === void 0 ? void 0 : _args$2.__isChrono) === true ? args[0].localeData : loadLoc(lowercaseDefaultLocale);
    thing.localeData = localeData;
    thing.locale = localeData.locale;
    return thing;
  };

  var defaultLocale = "en-US";
  var lowercaseDefaultLocale = "en-us";
  Object.defineProperty(Chrono, 'defaultLocale', {
    enumerable: true,
    configurable: false,
    get: function get() {
      return defaultLocale;
    },
    set: function set(locale) {
      var _locale;

      locale = (_locale = locale) !== null && _locale !== void 0 ? _locale : "en-US";
      defaultLocale = locale;
      lowercaseDefaultLocale = locale.toLowerCase();
    }
  });
  Chrono.defaultLocale = navigator.language;
  Chrono.min = new Chrono(-8640000000000000);
  Chrono.max = new Chrono(8640000000000000);

  Chrono.locData = function (loc) {
    return loadLoc(loc);
  };

  Chrono.trigger = function (time, func) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    return setTimeout(function () {
      return func.apply(void 0, args);
    }, time);
  };

  Chrono.interval = function (time, func) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      args[_key3 - 2] = arguments[_key3];
    }

    var intervalID = null;

    var cancel = function cancel() {
      if (intervalID !== null) {
        clearInterval(intervalID);
        intervalID = null;
      }
    };

    intervalID = setInterval(function () {
      return func.apply(void 0, args);
    }, time);
    return {
      cancel: cancel
    };
  };

  Chrono.sortAsc = function (first, second) {
    if (first < second) {
      return -1;
    }

    if (first > second) {
      return 1;
    }

    return 0;
  };

  Chrono.sortDesc = function (first, second) {
    return -Chrono.sortAsc(first, second);
  };

  var isNum = function isNum(i) {
    return i >= 0x30 && i <= 0x39 ? 1 : -1;
  };

  var isNumO = function isNumO(i) {
    return i >= 0x30 && i <= 0x39 ? 1 : 0;
  };

  var letter = function letter(l) {
    return function (i) {
      return l === i ? 1 : -1;
    };
  };

  var letterChoice = function letterChoice() {
    for (var _len4 = arguments.length, choices = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      choices[_key4] = arguments[_key4];
    }

    choices = choices.map(function (l) {
      return l.charCodeAt(0);
    });
    return function (i) {
      return choices.indexOf(i) !== -1 ? 1 : -1;
    };
  };


  var consumeTokens = function consumeTokens(toks, str, index) {
    var i = 0;
    var t = 0;

    while (i < toks.length) {
      var tok = toks[i];
      var res = tok(str.charCodeAt(index + t)); // const res = tok(str, index + t);

      if (res === -1) {
        return null;
      }

      t += res;
      i += 1;
    }

    return t;
  };

  var parseMethods = {
    D: {
      match: [isNum, isNumO],
      value: function value(match) {
        return parseInt(match) - 1;
      },
      check: function check(value) {
        return value >= 0 && value <= 31;
      },
      process: function process(d, value) {
        return d.day = value;
      }
    },
    DD: {
      match: [isNum, isNum],
      value: function value(match) {
        return parseInt(match) - 1;
      },
      check: function check(value) {
        return value >= 0 && value <= 31;
      },
      process: function process(d, value) {
        return d.day = value;
      }
    },
    h: {
      match: [isNum, isNumO],
      value: function value(match) {
        return parseInt(match);
      },
      check: function check(value) {
        return value >= 0 && value <= 24;
      },
      process: function process(d, value) {
        return d.hour = value;
      }
    },
    hh: {
      match: [isNum, isNum],
      value: function value(match) {
        return parseInt(match);
      },
      check: function check(value) {
        return value >= 0 && value <= 24;
      },
      process: function process(d, value) {
        return d.hour = value;
      }
    },
    m: {
      match: [isNum, isNumO],
      value: function value(match) {
        return parseInt(match);
      },
      check: function check(value) {
        return value >= 0 && value <= 59;
      },
      process: function process(d, value) {
        return d.minute = value;
      }
    },
    mm: {
      match: [isNum, isNum],
      value: function value(match) {
        return parseInt(match);
      },
      check: function check(value) {
        return value >= 0 && value <= 59;
      },
      process: function process(d, value) {
        return d.minute = value;
      }
    },
    mmm: {
      match: [isNum, isNum, isNum],
      value: function value(match) {
        return parseInt(match);
      },
      check: function check(value) {
        return value >= 0 && value <= 999;
      },
      process: function process(d, value) {
        return d.millisecond = value;
      }
    },
    M: {
      match: [isNum, isNumO],
      value: function value(match) {
        return parseInt(match) - 1;
      },
      check: function check(value) {
        return value >= 0 && value <= 11;
      },
      process: function process(d, value) {
        return d.month = value;
      }
    },
    MM: {
      match: [isNum, isNum],
      value: function value(match) {
        return parseInt(match) - 1;
      },
      check: function check(value) {
        return value >= 0 && value <= 11;
      },
      process: function process(d, value) {
        return d.month = value;
      }
    },
    s: {
      match: [isNum, isNumO],
      value: function value(match) {
        return parseInt(match);
      },
      check: function check(value) {
        return value >= 0 && value <= 59;
      },
      process: function process(d, value) {
        return d.second = value;
      }
    },
    ss: {
      match: [isNum, isNum],
      value: function value(match) {
        return parseInt(match);
      },
      check: function check(value) {
        return value >= 0 && value <= 59;
      },
      process: function process(d, value) {
        return d.second = value;
      }
    },
    t: {
      match: [letterChoice("A", "P", "a", "p")],
      value: function value(i) {
        return i;
      },
      check: function check() {
        return true;
      },
      process: function process(d, value) {
        if (value.toLowerCase() === "p") {
          d.hour += 12;
        }
      }
    },
    tt: {
      match: [letterChoice("A", "P", "a", "p"), letterChoice("M", "m")],
      value: function value(i) {
        return i;
      },
      check: function check() {
        return true;
      },
      process: function process(d, value) {
        if (value.toLowerCase() === "pm") {
          d.hour += 12;
        }
      }
    },
    yy: {
      match: [isNum, isNum],
      value: function value(match) {
        return 1900 + parseInt(match);
      },
      check: function check() {
        return true;
      },
      process: function process(d, value) {
        return d.year = value;
      }
    },
    yyyy: {
      match: [isNum, isNum, isNum, isNum],
      value: function value(match) {
        return parseInt(match);
      },
      check: function check() {
        return true;
      },
      process: function process(d, value) {
        return d.year = value;
      }
    }
  };
  parseMethods.H = parseMethods.h;
  parseMethods.HH = parseMethods.hh;
  parseMethods.YY = parseMethods.yy;
  parseMethods.YYYY = parseMethods.yyyy;

  var defaultParseMethod = function defaultParseMethod(ch) {
    return {
      match: [letter(ch.charCodeAt(0))],
      process: function process() {},
      check: function check() {
        return true;
      },
      value: function value(i) {
        return i;
      }
    };
  }; // const defaultParseMethod = {
  //     match: [any],
  //     process: () => {}
  // };


  var parseMethodRegex = new RegExp("(".concat(Object.keys(parseMethods).sort(function (a, b) {
    return b.length - a.length;
  }).join("|"), "|.)"), 'g');

  Chrono.parse = function (dateString) {
    var _locale3;

    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (format === null) {
      return Chrono(Date.parse(dateString));
    }

    var parseLocale = locale;

    if (parseLocale === null) {
      parseLocale = Chrono.defaultLocale;
    }

    parseLocale = parseLocale.toLowerCase();

    if (format === null) {
      return Chrono(Date.parse(dateString));
    }

    var _loadLoc = loadLoc(parseLocale),
        longDateFormat = _loadLoc.longDateFormat,
        shortDateFormat = _loadLoc.shortDateFormat;

    format = format.replace(/LL/g, longDateFormat);
    format = format.replace(/L/g, shortDateFormat);
    var tokens = format.match(parseMethodRegex);
    var parseResult = {};
    var i = 0;
    var j = 0;

    while (i < tokens.length) {
      var _parseMethods$token;

      var token = tokens[i];
      var method = (_parseMethods$token = parseMethods[token]) !== null && _parseMethods$token !== void 0 ? _parseMethods$token : defaultParseMethod(token);
      var t = consumeTokens(method.match, dateString, j);
      var match = dateString.slice(j, j + t);
      var value = method.value(match);

      if (t === null || method.check(value) === false) {
        var _locale2;

        return Chrono(new Date(NaN), (_locale2 = locale) !== null && _locale2 !== void 0 ? _locale2 : lowercaseDefaultLocale);
      }

      method.process(parseResult, value);
      j += match.length;
      i += 1;
    }

    return Chrono(parseResult, (_locale3 = locale) !== null && _locale3 !== void 0 ? _locale3 : lowercaseDefaultLocale);
  };

  return Chrono;

}());
