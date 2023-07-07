import axios from "axios";
export class Common {
  static post(data, url, headers = {}, callback) {
    axios({
      method: "post",
      data: data,
      url: url,
      headers: headers,
    })
      .then((res) => callback(null, res))
      .catch((err) => callback(err, null));
  }
  static get(url, headers = {}, callback) {
    axios({
      method: "get",
      url: url,
      headers: headers,
    })
      .then((res) => callback(null, res))
      .catch((err) => callback(err, null));
  }
}
