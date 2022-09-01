const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = document.getElementById('source');

class logo {
    constructor(x, y, w, h, dx, dy) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.dx = dx;
    this.dy = dy;
    }
}

let logo1 = new logo(200, 200, 100, 100, 3.5, 3.5);

function drawPlayer() {
    ctx.drawImage(image, logo1.x, logo1.y, logo1.w, logo1.h);
}

function update() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.offsetHeight);

    drawPlayer();

    logo1.x += logo1.dx
    logo1.y += logo1.dy
    

    if (logo1.x + logo1.w > canvas.width || logo1.x - logo1.w < -100) {
        logo1.dx *= -1;
    }
    if (logo1.y + 500 > canvas.width || logo1.y - logo1.w < -100) {
        logo1.dy *= -1;
    }

    requestAnimationFrame(update);
}





update();
