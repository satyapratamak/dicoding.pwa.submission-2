const urlBundesligaStandings = "https://api.football-data.org/v2/competitions/2002/standings";

// Blok kode yang akan di panggil jika fetch berhasil
const status = (response) => {
    if (response.status !== 200) {
      console.log("Error : " + response.status);
      // Method reject() akan membuat blok catch terpanggil
      return Promise.reject(new Error(response.statusText));
    } else {
      // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
      return Promise.resolve(response);
    }
}

// Blok kode untuk memparsing json menjadi array JavaScript
const json = (response) => {
    return response.json();
}


// Blok kode untuk meng-handle kesalahan di blok catch
const error = (error) => {
    // Parameter error berasal dari Promise.reject()
    console.log("Error : " + error);
}


// Blok kode untuk melakukan request data json
const getBundesligaStandings = () => {
    fetch(urlBundesligaStandings, {
        headers: {
            'X-Auth-Token' : '0e42cd9c1953405f81134678fb75b5dd'
        }
    })
      .then(status)
      .then(json)
      .then(function(data) {
        // Objek/array JavaScript dari response.json() masuk lewat data.
        // Menyusun komponen card artikel secara dinamis
        /*var articlesHTML = "";
        data.result.forEach(function(article) {
          articlesHTML += `
                <div class="card">
                  <a href="./article.html?id=${article.id}">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img src="${article.thumbnail}" />
                    </div>
                  </a>
                  <div class="card-content">
                    <span class="card-title truncate">${article.title}</span>
                    <p>${article.description}</p>
                  </div>
                </div>
              `;
        });
        // Sisipkan komponen card ke dalam elemen dengan id #content
        document.getElementById("articles").innerHTML = articlesHTML;*/
        
        console.log(data["standings"][0]);
      })
      .catch(error);
  }