class Vector {
    constructor(x = 0, y = 0) { this.x = x; this.y = y; }
    copy(v)   { 
        return new Vector(this.x, this.y); 
    }
    assign(v) { 
        this.x = v.x; this.y = v.y; 
    }
    plus(v) { 
        return new Vector(this.x + v.x, this.y + v.y); 
    }
    minus(v) { 
        return new Vector(this.x - v.x, this.y - v.y); 
    }
    add(v, s = 1) { 
        this.x += v.x * s; this.y += v.y * s; 
    }
    scale(s) {
        this.x *= s; this.y *= s; 
    }
    dot(v) { 
        return this.x * v.x + this.y * v.y; 
    }
    normalize() {
        var d = Math.sqrt(this.x * this.x + this.y * this.y);		
        if (d > 0) { this.x /= d; this.y /= d; } else this.x = 1;
        return d;
    }
    lenSquared() { 
        return this.x * this.x + this.y * this.y; 
    }
    distSquared(v) { 
        return (this.x - v.x) * (this.x - v.x) + (this.y - v.y) * (this.y - v.y);
    }
}
export {Vector};