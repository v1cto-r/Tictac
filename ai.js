const ai = {
    medturn: 2,
    corners: ["sqr7","sqr1","sqr3","sqr9","sqr7","sqr1"],
    fakegrid: {
        sqr1: null, sqr2: null, sqr3: null,
        sqr4: null, sqr5: null, sqr6: null,
        sqr7: null, sqr8: null, sqr9: null
    },
    startingcorner: null,
    fakeleftmoves() {
        availablePlays = []
        for (let m=0; m<game.gridnames.length;m++) {
            gridname = game.gridnames[m];
            if (ai.fakegrid[gridname] == null) {
                availablePlays.push(game.gridnames[m]);
            }
        }
        return availablePlays;
    },
    fakecheckwinner() {
        for(let l=0;l<game.combinations.length;l++) {
            let comb = game.combinations[l];
            let s1 = ai.fakegrid[comb[0]];
            let s2 = ai.fakegrid[comb[1]];
            let s3 = ai.fakegrid[comb[2]];
            if ((s1 === s2 && s1 === s3)&&(s1!=null&&s2!=null&&s3!=null)) {
                if(s1==1) {
                    return 10;
                } else if(s1==2){
                    return -10;
                }
            }
        }
    },
    makeplay() {
        if (gamevalues.winner===true||gamevalues.tie===true) {
            return
        }
        if (gamevalues.diff===3) {
            square = this.findBestMove();
            aiclicksquare(square);
        } else if (gamevalues.diff===2) {
            if (this.medturn==1) {
                this.randommove();
                this.medturn=2;
            } else {
                square = this.findBestMove();
                aiclicksquare(square);
                this.medturn=1
            }
        } else if (gamevalues.diff===1) {
            this.randommove();
        }
        
    },
    randommove() {
        leftsquares = this.fakeleftmoves();
        left = leftsquares.length;
        let random = Math.floor(Math.random() * left);
        square = leftsquares[random];
        aiclicksquare(square);
    },
    resetai() {
        this.startingcorner = null;
    },
    minimax(depth, isMax) {
        let score = this.fakecheckwinner();
        let availablePlays = this.fakeleftmoves();
        let left = availablePlays.length;
        if (score===10) {
            return 10;
        } else if (score===-10) {
            return -10;
        } else if (left==0) {
            return 0;
        }
        if(isMax) {
            let bestScore = -Infinity;
            for(let b=0;b<availablePlays.length;b++) {
                this.fakegrid[availablePlays[b]] = 1;
                let score = this.minimax(depth+1, false);
                this.fakegrid[availablePlays[b]] = null;
                bestScore = Math.max(score, bestScore);
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for(let c=0;c<availablePlays.length;c++) {
                this.fakegrid[availablePlays[c]] = 2;
                let score = this.minimax(depth+1, true);
                this.fakegrid[availablePlays[c]] = null;
                bestScore = Math.min(score, bestScore);
            }
            return bestScore;
        }
    },
    findBestMove() {
        let bestScore = -Infinity;
        let bestMove;
        let availablePlays = this.fakeleftmoves();
        for(let a=0;a<availablePlays.length;a++) { 
            this.fakegrid[availablePlays[a]] = 1;
            let score = this.minimax(0, false);
            this.fakegrid[availablePlays[a]] = null;
            if (score>bestScore) {
                bestMove=availablePlays[a];
                bestScore=score;
            }
        }
        return bestMove
    }
}