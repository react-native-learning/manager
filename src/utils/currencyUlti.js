export default currencyUlti = {

  //all currency
  getAllCurrency() {
    return {
      "resultCode": 200,
      "resultMsg": "",
      "currencies": [
        {
          "id": 1,
          "country": "France",
          "unit": "EUR",
          "flg": "http://megastudy.edu.vn/upload/nation/flags/us_flag.jpg"
        },
        {
          "id": 2,
          "country": "US",
          "unit": "USD",
          "flg": "http://megastudy.edu.vn/upload/nation/flags/us_flag.jpg"
        }
      ]
    }
  },

  getExchangeRate(currencyFrom, currencyTo) {
    return {
      "resultCode": 200,
      "resultMsg": "",
      "rateFrom": 37.77,
      "rateTo": 0.112
    }
  }
}