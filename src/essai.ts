class Point {
    constructor(public x: number, public y: number) {
    }
    add (point: Point)  {
        return new Point(this.x + point.x, this.y+point.y)
    }
}

const p1 = new Point(0,10)
const ps = new Point(12,30)

const pr = p1.add(ps)
console.log(pr)