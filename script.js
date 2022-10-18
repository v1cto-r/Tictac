const gamevalues = {
    turn: 1,
    winner: false,
    player1: 0,
    player2: 0,
    oscore: document.getElementById("Oscore"),
    xscore: document.getElementById("Xscore")
}

const game = {
    turnoelement: document.getElementById("turno"),
    headerelement: document.getElementById("description"),
    winnerelement: document.getElementById("winner"),
    gridnames: [
        "sqr1","sqr2","sqr3","sqr4","sqr5","sqr6","sqr7","sqr8","sqr9"
    ],
    grid: {
        sqr1: null, sqr2: null, sqr3: null,
        sqr4: null, sqr5: null, sqr6: null,
        sqr7: null, sqr8: null, sqr9: null
    },
    combinations: [
        ["sqr1","sqr2","sqr3"],["sqr4","sqr5","sqr6"],["sqr7","sqr8","sqr9"],
        ["sqr1","sqr4","sqr7"],["sqr2","sqr5","sqr8"],["sqr3","sqr6","sqr9"],
        ["sqr1","sqr5","sqr9"],["sqr3","sqr5","sqr7"]
    ],
    restart() {
        this.restartgrid();
        this.restartimg();
        gamevalues.turn=1;
        gamevalues.winner=false;
        this.winnerelement.style.display="none";
        this.randomstart();
    },
    checkforwinner() {
        for(let i=0;i<game.combinations.length;i++) {
            let comb = game.combinations[i];
            let s1 = game.grid[comb[0]];
            let s2 = game.grid[comb[1]];
            let s3 = game.grid[comb[2]];
            if ((s1 === s2 && s1 === s3)&&(s1!=null&&s2!=null&&s3!=null)) {
                gamevalues.winner=true;
                if(s1===1) {var ganador = "O";gamevalues.player1+=1;} else {var ganador = "X";gamevalues.player2+=1;}
                this.winnerelement.innerHTML=`<h2>GANADOR: "${ganador}"</h2>`;
                this.winnerelement.style.display="flex";
            }
        }
    }, 
    updatescore() {
        gamevalues.oscore.innerHTML=gamevalues.player1;
        gamevalues.xscore.innerHTML=gamevalues.player2;
    },
    restartgrid() {
        for(let i=0;i<game.gridnames.length;i++) {
            let gridnames = game.gridnames;
            game.grid[gridnames[i]] = null;
        }
    },
    restartimg() {
        for(let i=0;i<game.gridnames.length;i++) {
            let id = game.gridnames[i];
            let editsqr = document.getElementById(id);
            editsqr.firstElementChild.src = "blank.png";
        }
    },
    changeturn() {
        if(gamevalues.turn===1) {
            gamevalues.turn=2;
            this.turnoelement.innerHTML="\"X\"";
        } else {
            gamevalues.turn=1;
            this.turnoelement.innerHTML="\"O\"";
        }
    },
    randomstart() {
        let starter = Math.floor(Math.random() * 2)+1;
        gamevalues.turn = starter;
        this.changeturn();
    },
    checktie() {
        if (gamevalues.winner==false) {
            let sum = 0;
            for(let i=0;i<this.gridnames.length;i++) {
                let sqr = this.gridnames[i];
                console.log(sqr);
                if(this.grid[sqr]!=null) {
                    sum = sum+1;
                }
            }
            if(sum==9) {
                console.log("tie")
                this.winnerelement.innerHTML="<h2>Empate</h2>"
                this.winnerelement.style.display="flex";
            }
        }
    }
}

function clicksquare(sqrnum) {
    if (gamevalues.winner!==true) {
        if (game.grid[sqrnum]==null) {
            let editsqr = document.getElementById(sqrnum);
            if (gamevalues.turn==1) {
                editsqr.firstElementChild.src="circle.svg";
                game.grid[sqrnum]=1;
                game.changeturn();
            } else if (gamevalues.turn==2) {
                editsqr.firstElementChild.src="cross.svg";
                game.grid[sqrnum]=2;
                game.changeturn();
            }
        game.checkforwinner();
        game.checktie();
        game.updatescore();
        } else {
            return;
        }
    }
}