const urlBundesligaStandings = "https://api.football-data.org/v2/competitions/2002/standings";
const urlEredivisieStandings = "https://api.football-data.org/v2/competitions/2003/standings";
const urlEPLStandings = "https://api.football-data.org/v2/competitions/2021/standings";
const urlLaLigaStandings = "https://api.football-data.org/v2/competitions/2014/standings";
const urlLigue1Standings = "https://api.football-data.org/v2/competitions/2015/standings";



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
      .then( (data) => {
        var articlesHTML = ``;
        const obj1 = data["standings"][0];
        let i = 0;
        for (let iter_1 in obj1){
          if (i == 3){            
            const name = obj1[iter_1][0]["team"]["name"];
            const points = obj1[iter_1][0]["points"];
            const playedGames = obj1[iter_1][0]["playedGames"];
            const won = obj1[iter_1][0]["won"];
            const draw = obj1[iter_1][0]["draw"];
            const lost = obj1[iter_1][0]["lost"];
            const card = document.createElement("div");
            card.className = "card blue-grey darken-1";
            card.innerHTML = `<div class="card-content white-text">
                                  <span class="card-title">${name} - ${points} Points</span>
                                  <p>Played = ${playedGames}</p>
                                  <p>Win = ${won}</p>
                                  <p>Draw = ${draw}</p>
                                  <p>Lost = ${lost}</p>
                              </div>
                              <div class="card-action">
                                <a href="#">Full Bundesliga Table</a>                        
                              </div> `;              
              document.getElementById("articles").appendChild(card);                          
          }
          i++;          
        }        
      })
      .catch(error);
  }

// Blok kode untuk melakukan request data json
const getEredivisieStandings = () => {
  fetch(urlEredivisieStandings, {
      headers: {
          'X-Auth-Token' : '0e42cd9c1953405f81134678fb75b5dd'
      }
  })
    .then(status)
    .then(json)
    .then( (data) => {
      // Objek/array JavaScript dari response.json() masuk lewat data.
      // Menyusun komponen card artikel secara dinamis
      const obj1 = data["standings"][0];
      let i = 0;
      for (let iter_1 in obj1){
        if (i == 3){            
          const name = obj1[iter_1][0]["team"]["name"];
          const points = obj1[iter_1][0]["points"];
          const playedGames = obj1[iter_1][0]["playedGames"];
          const won = obj1[iter_1][0]["won"];
          const draw = obj1[iter_1][0]["draw"];
          const lost = obj1[iter_1][0]["lost"];
        
          const card = document.createElement("div");
          card.className = "card blue-grey darken-1";
          card.innerHTML = `<div class="card-content white-text">
                              <span class="card-title">${name} - ${points} Points</span>
                              <p>Played = ${playedGames}</p>
                              <p>Win = ${won}</p>
                              <p>Draw = ${draw}</p>
                              <p>Lost = ${lost}</p>
                            </div>
                            <div class="card-action">
                              <a href="#">Full Eredivisie Table</a>                        
                            </div>`;
            
          document.getElementById("articles").appendChild(card); 
        }
        i++;
      }               
    })
    .catch(error);
}

// Blok kode untuk melakukan request data json
const getEPLStandings = () => {
  fetch(urlEPLStandings, {
      headers: {
          'X-Auth-Token' : '0e42cd9c1953405f81134678fb75b5dd'
      }
  })
    .then(status)
    .then(json)
    .then( (data) => {
      // Objek/array JavaScript dari response.json() masuk lewat data.
      // Menyusun komponen card artikel secara dinamis
      const obj1 = data["standings"][0];
      let i = 0;
      for (let iter_1 in obj1){
        if (i == 3){            
          const name = obj1[iter_1][0]["team"]["name"];
          const points = obj1[iter_1][0]["points"];
          const playedGames = obj1[iter_1][0]["playedGames"];
          const won = obj1[iter_1][0]["won"];
          const draw = obj1[iter_1][0]["draw"];
          const lost = obj1[iter_1][0]["lost"];
        
          const card = document.createElement("div");
          card.className = "card blue-grey darken-1";
          card.innerHTML = `<div class="card-content white-text">
                              <span class="card-title">${name} - ${points} Points</span>
                              <p>Played = ${playedGames}</p>
                              <p>Win = ${won}</p>
                              <p>Draw = ${draw}</p>
                              <p>Lost = ${lost}</p>
                            </div>
                            <div class="card-action">
                              <a href="#">Full EPL Table</a>                        
                            </div>`;
            
          document.getElementById("articles").appendChild(card); 
        }
        i++;
      }               
    })
    .catch(error);
}

// Blok kode untuk melakukan request data json
const getLaLigaStandings = () => {
  fetch(urlLaLigaStandings, {
      headers: {
          'X-Auth-Token' : '0e42cd9c1953405f81134678fb75b5dd'
      }
  })
    .then(status)
    .then(json)
    .then( (data) => {
      // Objek/array JavaScript dari response.json() masuk lewat data.
      // Menyusun komponen card artikel secara dinamis
      const obj1 = data["standings"][0];
      let i = 0;
      for (let iter_1 in obj1){
        if (i == 3){            
          const name = obj1[iter_1][0]["team"]["name"];
          const points = obj1[iter_1][0]["points"];
          const playedGames = obj1[iter_1][0]["playedGames"];
          const won = obj1[iter_1][0]["won"];
          const draw = obj1[iter_1][0]["draw"];
          const lost = obj1[iter_1][0]["lost"];
        
          const card = document.createElement("div");
          card.className = "card blue-grey darken-1";
          card.innerHTML = `<div class="card-content white-text">
                              <span class="card-title">${name} - ${points} Points</span>
                              <p>Played = ${playedGames}</p>
                              <p>Win = ${won}</p>
                              <p>Draw = ${draw}</p>
                              <p>Lost = ${lost}</p>
                            </div>
                            <div class="card-action">
                              <a href="#">Full LaLiga Table</a>                        
                            </div>`;
            
          document.getElementById("articles").appendChild(card); 
        }
        i++;
      }               
    })
    .catch(error);
}

// Blok kode untuk melakukan request data json
const getLigue1Standings = () => {
  fetch(urlLigue1Standings, {
      headers: {
          'X-Auth-Token' : '0e42cd9c1953405f81134678fb75b5dd'
      }
  })
    .then(status)
    .then(json)
    .then( (data) => {
      // Objek/array JavaScript dari response.json() masuk lewat data.
      // Menyusun komponen card artikel secara dinamis
      const obj1 = data["standings"][0];
      let i = 0;
      for (let iter_1 in obj1){
        if (i == 3){            
          const name = obj1[iter_1][0]["team"]["name"];
          const points = obj1[iter_1][0]["points"];
          const playedGames = obj1[iter_1][0]["playedGames"];
          const won = obj1[iter_1][0]["won"];
          const draw = obj1[iter_1][0]["draw"];
          const lost = obj1[iter_1][0]["lost"];
        
          const card = document.createElement("div");
          card.className = "card blue-grey darken-1";
          card.innerHTML = `<div class="card-content white-text">
                              <span class="card-title">${name} - ${points} Points</span>
                              <p>Played = ${playedGames}</p>
                              <p>Win = ${won}</p>
                              <p>Draw = ${draw}</p>
                              <p>Lost = ${lost}</p>
                            </div>
                            <div class="card-action">
                              <a href="#">Full LaLiga Table</a>                        
                            </div>`;
            
          document.getElementById("articles").appendChild(card); 
        }
        i++;
      }               
    })
    .catch(error);
}


const getAllLeaguesStandings = async () => {
  
  getBundesligaStandings();
  getEredivisieStandings();
  getEPLStandings();
  getLaLigaStandings();
  getLigue1Standings();


} 