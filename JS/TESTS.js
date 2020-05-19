var topFour = { 
    3001: {
        album: "Paper Castles", 
        artist: "Alice Phoebe Lou", 
        tracks: ["Little Spark", "Nostalgia", "Galaxies"]
    }, 
    
    3002: { 
        album: "American Utopia",
        artist: "David Bryne", 
        tracks: ["Lazy", "Everbody is Coming to My House", "Here"]
    },

    3003: { 
        artist: "Angel Olsen",
        tracks: []

    },

    3004: { 
        album: "PREfection",

    }

};

var topFourCopy = JSON.parse(JSON.stringify(topFour)); 

function updateTopFour(id, prop, value) { // This function will ADD or UPDATE topFour
    if (value === "") {
        delete topFour[id][prop];
    } else if (prop === "tracks") { 
        topFour [id][prop] = topFour[id][prop] || [];
        topFour [id][prop].push(value);
    } else { 
        topFour[id][prop] = value;
    }

    return topFour;

}

// artist property(value: Cass Mcombs) has been added to ID 3004
updateTopFour(3004, "artist", "Cass Mcombs"); 
updateTopFour(3004,"tracks", "Cuckoo") /// 3 track props have been added to ID 3004
updateTopFour(3004,"tracks", "Bury Mary")
updateTopFour(3004,"tracks", "She's Still Suffering")
//Below we are adding 3 TRACK properties  (with values) to ID 3003
updateTopFour(3003, "tracks", "Spring")
updateTopFour(3003, "tracks", "Intern")
updateTopFour(3003, "tracks", "California")


///TESTER 

//updateTopFour(3003, "artist", "AO") 