var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/* -------------------------------------------------------------- */
var width = 500;
var heigth = 500;


canvas.addEventListener('click', on_canvas_click, false);

/* -------------------------------------------------------------- */
class VTile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sz = 50;
        this.links = [false, true, false, true]; // E, N, W, S
        this.currentAngle = 0;
        this.targetAngle = 0;
        this.rotate = false;

        this.bkg_color = "#DDDDDD";
        this.frg_color = "#808080";
    }

    draw() {
        ctx.save()
        this.turn();
        ctx.beginPath();
        ctx.fillStyle = this.bkg_color;
        ctx.fillRect(this.x, this.y, this.sz, this.sz);
        ctx.fillStyle = this.frg_color;
        ctx.fillRect(this.x + 20, this.y, 10, this.sz);
        ctx.closePath();
        ctx.restore()
    }

    update(x, y) {
        var hT = x > this.x && x < this.x + this.sz
        var vT = y > this.y && y < this.y + this.sz
        if(hT && vT) {
            this.targetAngle += (Math.PI / 180) * 90;
            this.rotate = true;
        }
    }

    turn() {
        ctx.translate(this.x + this.sz/2, this.y + this.sz/2);
        ctx.rotate(this.currentAngle);
        ctx.translate(-this.x - this.sz/2, -this.y - this.sz/2);
        if(this.rotate) {
            this.currentAngle += (Math.PI / 180) * 1;
            if(this.currentAngle >= this.targetAngle) {
                this.rotate = false,
                this.currentAngle = this.targetAngle;
                switch(this.currentAngle) {
                    case 0:
                        this.links = [false, true, false, true]; // E, N, W, S
                        break;
                    case (Math.PI / 180) * 90:
                        this.links = [true, false, true, false];
                        break;
                    case (Math.PI / 180) * 180:
                        this.links = [false, true, false, true];
                        break;
                    case (Math.PI / 180) * 270:
                        this.links = [true, false, true, false];
                        break;
                }
            }
        }
    }
}

class CTile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sz = 50;
        this.links = [true, true, false, true]; // E, N, W, S
        this.currentAngle = 0;
        this.targetAngle = 0;
        this.rotate = false;

        this.bkg_color = "#DDDDDD";
        this.frg_color = "#808080";
    }

    draw() {
        ctx.save();
        this.turn();
        ctx.beginPath();
        ctx.fillStyle = this.bkg_color;
        ctx.fillRect(this.x, this.y, this.sz, this.sz);
        ctx.fillStyle = this.frg_color;
        ctx.fillRect(this.x + 20, this.y, 10, this.sz);
        ctx.fillRect(this.x + 20, this.y + this.sz / 2 - 5, this.sz / 2 + 5, 10);
        ctx.closePath();
        ctx.restore();
    }

    update(x, y) {
        var hT = x > this.x && x < this.x + this.sz
        var vT = y > this.y && y < this.y + this.sz
        if(hT && vT) {
            this.targetAngle += (Math.PI / 180) * 90;
            this.rotate = true;
        }
    }

    turn() {
        ctx.translate(this.x + this.sz/2, this.y + this.sz/2);
        ctx.rotate(this.currentAngle);
        ctx.translate(-this.x - this.sz/2, -this.y - this.sz/2);
        if(this.rotate) {
            this.currentAngle += (Math.PI / 180) * 1;
            if(this.currentAngle >= this.targetAngle) {
                this.rotate = false,
                this.currentAngle = this.targetAngle;
                switch(this.currentAngle) {
                    case 0:
                        this.links = [true, true, false, true]; // E, N, W, S
                        break;
                    case (Math.PI / 180) * 90:
                        this.links = [true, true, true, false];
                        break;
                    case (Math.PI / 180) * 180:
                        this.links = [true, true, false, true];
                        break;
                    case (Math.PI / 180) * 270:
                        this.links = [true, false, true, true];
                        break;
                }
            }
        }
    }
}

class RTile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sz = 50;
        this.links = [false, true, true, false]; // E, N, W, S
        this.currentAngle = 0;
        this.targetAngle = 0;
        this.rotate = false;

        this.bkg_color = "#DDDDDD";
        this.frg_color = "#808080";
    }

    draw() {
        ctx.save();
        this.turn();
        ctx.beginPath();
        ctx.fillStyle = this.bkg_color;
        ctx.fillRect(this.x, this.y, this.sz, this.sz);
        ctx.fillStyle = this.frg_color;
        ctx.fillRect(this.x + 20, this.y, 10, this.sz / 2);
        ctx.fillRect(this.x + 20, this.y + this.sz / 2 - 5, this.sz / 2 + 5, 10);
        ctx.closePath();
        ctx.restore();
    }

    update(x, y) {
        var hT = x > this.x && x < this.x + this.sz
        var vT = y > this.y && y < this.y + this.sz
        if(hT && vT) {
            this.targetAngle += (Math.PI / 180) * 90;
            this.rotate = true;
        }
    }

    turn() {
        ctx.translate(this.x + this.sz/2, this.y + this.sz/2);
        ctx.rotate(this.currentAngle);
        ctx.translate(-this.x - this.sz/2, -this.y - this.sz/2);
        if(this.rotate) {
            this.currentAngle += (Math.PI / 180) * 1;
            if(this.currentAngle >= this.targetAngle) {
                this.rotate = false,
                this.currentAngle = this.targetAngle;
                switch(this.currentAngle) {
                    case 0:
                        this.links = [false, true, true, false]; // E, N, W, S
                        break;
                    case (Math.PI / 180) * 90:
                        this.links = [true, false, false, true];
                        break;
                    case (Math.PI / 180) * 180:
                        this.links = [true, false, true, true];
                        break;
                    case (Math.PI / 180) * 270:
                        this.links = [true, true, false, false];
                        break;
                }
            }
        }
    }
}

class S1Tile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sz = 50;
        this.rd = 1;
        this.wd = 1;
        this.draw_exit = false;
        this.links = [true, false, false, false]; // E, N, W, S
        this.currentAngle = 0;
        this.targetAngle = 0;
        this.rotate = false;

        this.bkg_color = "#DDDDDD";
        this.frg_color = "#808080";
        this.act_color = "#1055DD";
        this.alt_color = "#10AADD";
    }

    draw() {
        ctx.save();
        this.turn();
        ctx.beginPath();
        ctx.fillStyle = this.bkg_color;
        ctx.fillRect(this.x, this.y, this.sz, this.sz);
        ctx.closePath();

        if(this.draw_exit) {
            ctx.beginPath();
            ctx.fillStyle = this.act_color;
            ctx.fillRect(this.x, this.y + this.sz / 2 - 5, this.sz / 2 + 5, 10);
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = this.alt_color;
            ctx.fillRect(this.x + this.sz / 2 - this.wd, this.y + this.sz / 2 - 5, this.wd, 10);
            ctx.closePath();
            this.wd += 1;
            if(this.wd >= this.sz / 2) {
                this.wd = 1;
                this.draw_exit = false;
            }
        } else {
            ctx.beginPath();
            ctx.fillStyle = this.alt_color;
            ctx.fillRect(this.x, this.y + this.sz / 2 - 5, this.sz / 2 + 5, 10);
            ctx.closePath();
        }

        ctx.beginPath();
        ctx.fillStyle = this.alt_color;
        ctx.arc(this.x + this.sz/2, this.y + this.sz/2, this.sz / 4, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = this.act_color;
        ctx.arc(this.x + this.sz/2, this.y + this.sz/2, this.rd, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();

        this.rd = this.rd + 0.1;
        if(this.rd > this.sz / 4 ) {
            var tmp = this.act_color;
            this.act_color = this.alt_color;
            this.alt_color = tmp;
            this.draw_exit = true;
            this.rd = 1;
        }
        ctx.restore();
    }

    update(x, y) {
        var hT = x > this.x && x < this.x + this.sz
        var vT = y > this.y && y < this.y + this.sz
        if(hT && vT) {
            this.targetAngle += (Math.PI / 180) * 90;
            this.rotate = true;
        }
    }

    turn() {
        ctx.translate(this.x + this.sz/2, this.y + this.sz/2);
        ctx.rotate(this.currentAngle);
        ctx.translate(-this.x - this.sz/2, -this.y - this.sz/2);
        if(this.rotate) {
            this.currentAngle += (Math.PI / 180) * 1;
            if(this.currentAngle >= this.targetAngle) {
                this.rotate = false,
                this.currentAngle = this.targetAngle;
                switch(this.currentAngle) {
                    case 0:
                        this.links = [true, false, false, false]; // E, N, W, S
                        break;
                    case (Math.PI / 180) * 90:
                        this.links = [false, true, false, false];
                        break;
                    case (Math.PI / 180) * 180:
                        this.links = [false, false, true, false];
                        break;
                    case (Math.PI / 180) * 270:
                        this.links = [false, false, false, true];
                        break;
                }
            }
        }
    }
}

class TTile {
    constructor(x, y) {

    }

    draw() {

    }

    update(x, y) {
        
    }
}

class Map {
    constructor(text, ncol, padX, padY) {
        this.ncol = ncol;
        this.stringContent = text.split("");
        this.objectContent = null;
        this.padX = padX;
        this.padY = padY;
        console.log("Map [ padX: ", this.padX, " padY: ", this.padY, " ncol: ", this.ncol, "]");
        this.create();
    }

    create() {
        var cntCol = 0;
        var accumX = this.padX;
        var accumY = this.padY;
        var ncol = this.ncol;
        var padX = this.padX;
        var objectContent = new Array();
        this.stringContent.forEach(function(elm) {
            switch(elm) {
                case "C":
                    objectContent.push(new CTile(accumX, accumY));
                    break;
                case "R":
                    objectContent.push(new RTile(accumX, accumY));
                    break;
                case "V":
                    objectContent.push(new VTile(accumX, accumY));
                    break;
                case "S":
                    objectContent.push(new S1Tile(accumX, accumY));
                    break;
                case "T":
                    objectContent.push(new TTile(accumX, accumY));
                    break;
                default:
                    break
            }

            cntCol += 1;
            accumX += 50;
            if(cntCol >= ncol) {
                cntCol = 0;
                accumX = padX;
                accumY += 50.
            }
        });
        this.objectContent = objectContent;
    }

    draw() {
        this.objectContent.forEach(function(elm) {
            elm.draw();
        });
    }

    setClick(x, y) {
        this.objectContent.forEach(function(elm) {
            elm.update(x, y);
        });
    }

    testConnection() {
        var ncol = this.ncol;
        var nrow = this.objectContent.length / this.ncol;
        this.objectContent.forEach(function(elm, idx) {
            var col = idx % ncol;
            var row = Math.floor(idx/ncol);
            var neighbours = new Array();
            if(col > 0) { // Add left neigbour

            }
            if(col < ncol) { // Add right neigbour

            }
            if(row > 0) { // Add upper neigboud

            }
            if(row < nrow) { // Add lower neighbour

            }
        });
    }
}

function on_canvas_click(ev) {
    var x = ev.clientX - canvas.offsetLeft;
    var y = ev.clientY - canvas.offsetTop;
    map.setClick(x, y);
}

var map = new Map("RTRRVCRSR", 3, 10, 10);

function game() {
    ctx.beginPath();
    ctx.fillStyle = "#EEEEEE";
    ctx.fillRect(0, 0, width, heigth);
    ctx.closePath();
    map.draw();
}

setInterval(game, 15);