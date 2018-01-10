export default currencyUlti = {

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
    };
  }

};