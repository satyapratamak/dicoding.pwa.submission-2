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


/*// Blok kode untuk melakukan request data json
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
                                <a href="./full_table.html?id=2002">Full Bundesliga Table</a>                        
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
                            <a href="./full_table.html?id=2003">Full Eredivisie Table</a>                        
                            </div>`;
            
          document.getElementById("articles").appendChild(card); 
        }
        i++;
      }               
    })
    .catch(error);
}
*/
// Blok kode untuk melakukan request data json
const getTopEPLStandings = () => {

  if ('caches' in window) {
    caches.match(urlEPLStandings).then( (response) => {

      if (response) {
        response.json().then( (data) => {
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
                                <a href="./full_table.html?id=2021">Full EPL Table</a>                        
                                </div>`;
                
              document.getElementById("articles").appendChild(card); 
            }
            i++;
          }  
        })
      }
    })
  }

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
                            <a href="./full_table.html?id=2021">Full EPL Table</a>                        
                            </div>`;
            
          document.getElementById("articles").appendChild(card); 
        }
        i++;
      }               
    })
    .catch(error);
}

// Blok kode untuk melakukan request data json
const getTopLaLigaStandings = () => {

  if ('caches' in window) {
    caches.match(urlLaLigaStandings).then( (response) => {

      if (response) {
        response.json().then( (data) => {
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
                                <a href="./full_table.html?id=2014">Full LaLiga Table</a>                        
                                </div>`;
                
              document.getElementById("articles").appendChild(card); 
            }
            i++;
          }  
        })
      }
    })
  } 

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
                            <a href="./full_table.html?id=2014">Full LaLiga Table</a>                        
                            </div>`;
            
          document.getElementById("articles").appendChild(card); 
        }
        i++;
      }               
    })
    .catch(error);
  }


  

/*
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
                            <a href="./full_table.html?id=2015">Full League1 Table</a>                        
                            </div>`;
            
          document.getElementById("articles").appendChild(card); 
        }
        i++;
      }               
    })
    .catch(error);
}
*/

const getAllTopLeaguesStandings = () => {
  
  //getBundesligaStandings();
  //getEredivisieStandings();
  getTopEPLStandings();
  getTopLaLigaStandings();
  //getLigue1Standings();


}

const getEPLStandings = () => {

  return new Promise((resolve, reject) => {
    if ('caches' in window) {
      caches.match(urlEPLStandings).then( (response) => {
  
        if (response) {
          response.json().then( (data) => {
            // Objek/array JavaScript dari response.json() masuk lewat data.
            // Menyusun komponen card artikel secara dinamis
            const obj1 = data["standings"][0];    
            let i = 0;
            var full_table_HTML = `<h3>EPL Table </h3>
                                    <br>
                                    <table class="responsive-table centered">
                                      <thead>
                                        <tr>
                                          <th>Position</th>
                                          <th>Club Name</th>
                                          <th>Played Games</th>
                                          <th>Win</th>
                                          <th>Draw</th>
                                          <th>Lost</th>
                                          <th>Point/s</th>
                                          <th>Favorite Team</th>
                                        </tr>
                                      </thead>
                                      <tbody>`;
  
            for (let iter_1 in obj1){
              if ( i == 3){      
                for(var j = 0; j < obj1[iter_1].length ; j++){      
                  const name = obj1[iter_1][j]["team"]["name"];
                  const id = obj1[iter_1][j]["team"]["id"];
                  const points = obj1[iter_1][j]["points"];
                  const playedGames = obj1[iter_1][j]["playedGames"];
                  const won = obj1[iter_1][j]["won"];
                  const draw = obj1[iter_1][j]["draw"];
                  const lost = obj1[iter_1][j]["lost"];
        
                  full_table_HTML += `<tr>
                                        <td>${j+1}</td>
                                        <td>${name}</td>
                                        <td>${playedGames}</td>
                                        <td>${won}</td>
                                        <td>${draw}</td>
                                        <td>${lost}</td>
                                        <td>${points}</td>
                                        <td> <a class="waves-effect waves-light btn" onclick="saveFavoTeam(${obj1[iter_1]})"> SAVE<a></td>
                                      </tr>`;
                }                
              }              
              i++;
            }            
            full_table_HTML += `</tbody>    
                              </table>`;
        
            document.getElementById("body-content").innerHTML = full_table_HTML; 
            resolve(data);
          })
        }
      })
    }

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
      var full_table_HTML = `<h3>EPL Table </h3>
                              <br>
                              <table class="responsive-table centered">
                                <thead>
                                  <tr>
                                    <th>Position</th>
                                    <th>Club Name</th>
                                    <th>Played Games</th>
                                    <th>Win</th>
                                    <th>Draw</th>
                                    <th>Lost</th>
                                    <th>Point/s</th>
                                    <th>Favorite Team</th>
                                  </tr>
                                </thead>
                                <tbody>`;
      for (let iter_1 in obj1){
        if ( i == 3){
          for(var j = 0; j < obj1[iter_1].length ; j++){
            const name = obj1[iter_1][j]["team"]["name"];
            const id = obj1[iter_1][j]["team"]["id"];
            const points = obj1[iter_1][j]["points"];
            const playedGames = obj1[iter_1][j]["playedGames"];
            const won = obj1[iter_1][j]["won"];
            const draw = obj1[iter_1][j]["draw"];
            const lost = obj1[iter_1][j]["lost"];
            full_table_HTML += `<tr>
                                  <td>${j+1}</td>
                                  <td>${name}</td>
                                  <td>${playedGames}</td>
                                  <td>${won}</td>
                                  <td>${draw}</td>
                                  <td>${lost}</td>
                                  <td>${points}</td>
                                  <td> <a class="waves-effect waves-light btn" onclick="saveFavoTeam(${obj1[iter_1]})"> SAVE<a></td>
                                </tr>`;
          }        
        }      
        i++;
      }
      
      full_table_HTML += `</tbody>    
                        </table>`;
  
      document.getElementById("body-content").innerHTML = full_table_HTML; 
      resolve(data);
    })
    .catch(error);

  });  
}


const getLaLigaStandings = () => {

  return new Promise((resolve, reject) => {
    if ('caches' in window) {
      caches.match(urlLaLigaStandings).then( (response) => {
  
        if (response) {
          response.json().then( (data) => {
            // Objek/array JavaScript dari response.json() masuk lewat data.
            // Menyusun komponen card artikel secara dinamis
            const obj1 = data["standings"][0];    
            let i = 0;
            var full_table_HTML = `<h3>LaLiga Table </h3>
                                    <br>
                                    <table class="responsive-table centered">
                                      <thead>
                                        <tr>
                                          <th>Position</th>
                                          <th>Club Name</th>
                                          <th>Played Games</th>
                                          <th>Win</th>
                                          <th>Draw</th>
                                          <th>Lost</th>
                                          <th>Point/s</th>
                                          <th>Favorite Team</th>
                                        </tr>
                                      </thead>
                                      <tbody>`;
            for (let iter_1 in obj1){
              if ( i == 3){
        
                for(var j = 0; j < obj1[iter_1].length ; j++){
        
                  const name = obj1[iter_1][j]["team"]["name"];
                  const points = obj1[iter_1][j]["points"];
                  const playedGames = obj1[iter_1][j]["playedGames"];
                  const id = obj1[iter_1][j]["team"]["id"];
                  const won = obj1[iter_1][j]["won"];
                  const draw = obj1[iter_1][j]["draw"];
                  const lost = obj1[iter_1][j]["lost"];
        
                  full_table_HTML += `<tr>
                                        <td>${j+1}</td>
                                        <td>${name}</td>
                                        <td>${playedGames}</td>
                                        <td>${won}</td>
                                        <td>${draw}</td>
                                        <td>${lost}</td>
                                        <td>${points}</td>
                                        <td> <a class="waves-effect waves-light btn" onclick="saveFavoTeam(${obj1[iter_1]})"> SAVE<a></td>
                                                                        
                                      </tr>`;
                }
                
              }
              
              i++;
            }
            
            full_table_HTML += `</tbody>    
                              </table>`;
        
            document.getElementById("body-content").innerHTML = full_table_HTML; 
            resolve(data);
          })
        }
      })
    }

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
      var full_table_HTML = `<h3>LaLiga Table </h3>
                              <br>
                              <table class="responsive-table centered">
                                <thead>
                                  <tr>
                                    <th>Position</th>
                                    <th>Club Name</th>
                                    <th>Played Games</th>
                                    <th>Win</th>
                                    <th>Draw</th>
                                    <th>Lost</th>
                                    <th>Point/s</th>
                                    <th>Favorite Team</th>
                                  </tr>
                                </thead>
                                <tbody>`;
      for (let iter_1 in obj1){
        if ( i == 3){
  
          for(var j = 0; j < obj1[iter_1].length ; j++){
  
            const name = obj1[iter_1][j]["team"]["name"];
            const points = obj1[iter_1][j]["points"];
            const playedGames = obj1[iter_1][j]["playedGames"];
            const won = obj1[iter_1][j]["won"];
            const draw = obj1[iter_1][j]["draw"];
            const lost = obj1[iter_1][j]["lost"];
            const id = obj1[iter_1][j]["team"]["id"];
  
            full_table_HTML += `<tr>
                                  <td>${j+1}</td>
                                  <td>${name}</td>
                                  <td>${playedGames}</td>
                                  <td>${won}</td>
                                  <td>${draw}</td>
                                  <td>${lost}</td>
                                  <td>${points}</td>
                                  <td> <a class="waves-effect waves-light btn" onclick="saveFavoTeam(${obj1[iter_1]})">SAVE</a> </td>
                                                               
                                </tr>`;
          }
          
        }
        
        i++;
      }
      
      full_table_HTML += `</tbody>    
                        </table>`;
  
      document.getElementById("body-content").innerHTML = full_table_HTML; 
      resolve(data);
    })
    .catch(error);

  });

  

  

}

const saveFavoTeam = (data) => {

  //console.log(id);
  const toastHTML = `<span>Tim berhasil disimpan </span><button class="btn-flat toast-action">Undo</button>`;
  //console.log(data);
  M.toast({html: toastHTML});

}



const getLeagueStandingsById = () => {

  var urlParams = new URLSearchParams(window.location.search);
  var idParam = urlParams.get("id");
  console.log("Parameter id : "+ idParam);

   if (idParam  == "2021"){
    getEPLStandings(); 

   }else if (idParam  == "2014") {

    getLaLigaStandings();

   }

}