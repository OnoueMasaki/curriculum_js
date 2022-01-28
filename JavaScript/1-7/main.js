class Taiyaki {

    constructor(nakami) {
        this.nakami = nakami;
    }

    taiyaki() {
        console.log(`中身は${this.nakami}です`);
    }
}

let anko = new Taiyaki('あんこ');
let cream = new Taiyaki('クリーム');
let cheese = new Taiyaki('チーズ');

anko.taiyaki();
cream.taiyaki();
cheese.taiyaki();