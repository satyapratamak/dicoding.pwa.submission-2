const dbPromised = idb.open("rumahbola", 1, (upgradeDb) => {
    const teamObjectStore = upgradeDb.createObjectStore("teams", {
        keyPath:"id"
    });

    teamObjectStore.createIndex("team_name", "name", { unique: false });
});


const saveFavoriteTeam = (team) => {

    dbPromised
        .then( (db) =>{
            const tx = db.transaction("teams", "readwrite");
            const store = tx.objectStore("teams");
            console.log(team);

            store.add(team.result);
            return tx.complete;
        })
        .then(() => {
            console.log("Teams berhasil di simpan");
        });
}