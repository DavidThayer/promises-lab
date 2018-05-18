class SimpleHTTP {
  
  constructor() {
    this.newHTTP = new XMLHttpRequest();
    
  }

  // MAKE HTTP GET REQUEST
  get(url) {
    return new Promise((resolve, reject) => {
      let newHTTP = this.newHTTP;
      newHTTP.open('GET', url);

      newHTTP.onload = () => {
        if(newHTTP.status === 200) {
          resolve (JSON.parse(newHTTP.responseText));
        } else {
          reject (newHTTP.status);
        }
      }
      newHTTP.send();
    })
  }

  // // MAKE HTTP POST REQUEST
  post(url, data) {
    return new Promise((resolve, reject) => {
      let newHTTP = this.newHTTP;
      newHTTP.open('POST', url)
      newHTTP.setRequestHeader('Content-type', 'application/json');
      
      newHTTP.onload = () => {
        if (newHTTP.status === 201) {
          resolve (JSON.parse(newHTTP.responseText));
        } else {
          reject (newHTTP.statusText);
        }
      }
      
      newHTTP.send(JSON.stringify(data));
    })
  }

  // // MAKE HTTP PUT REQUEST
  put(url, data) {
    return new Promise((resolve, reject) => {
      let newHTTP = this.newHTTP;
      newHTTP.open('PUT', url)
      newHTTP.setRequestHeader('Content-type', 'application/json');
      
      newHTTP.onload = () => {
        if (newHTTP.status === 200) {
          resolve (JSON.parse(newHTTP.responseText));
        } else {
          reject (newHTTP.statusText);
        }
      }
      
      newHTTP.send(JSON.stringify(data));
    })
  }

  // // MAKE HTTP DELTE REQUEST
  delete(url) {
    return new Promise((resolve, reject) => {
      let newHTTP = this.newHTTP;
      newHTTP.open('DELETE', url, true);
      
      newHTTP.onload = () => {
        // console.log(newHTTP.status)
        if (newHTTP.status === 200) {
          resolve ('Success: ' + newHTTP.responseText);
        } else {
          reject (newHTTP.statusText);
        }
      }

      newHTTP.send();
    })
  }

}
