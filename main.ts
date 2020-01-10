function hero () {
    heroawsome = sprites.create(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
7 8 7 8 7 8 7 8 7 8 7 8 7 8 7 8 
7 8 7 8 7 8 7 8 7 8 7 8 7 8 7 8 
7 8 7 8 7 8 7 8 7 8 7 8 7 8 7 8 
7 8 7 8 7 8 7 8 7 8 7 8 7 8 7 8 
7 8 7 8 7 8 7 8 7 8 7 8 7 8 7 8 
7 8 7 8 7 8 7 8 7 8 7 8 7 8 7 8 
7 8 7 8 7 8 7 8 7 8 7 8 7 8 7 8 
7 8 7 8 7 8 7 8 7 8 7 8 7 8 7 8 
7 8 7 8 7 8 7 8 7 8 7 8 7 8 7 8 
7 8 7 8 7 8 7 8 7 8 7 8 7 8 7 8 
`, SpriteKind.Player)
    heroawsome.setPosition(77, 80)
    controller.moveSprite(heroawsome, 65, 0)
}
function score () {
    info.changeScoreBy(1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    overlap()
})
function overlap () {
    game.over(false)
}
function projectile () {
    packers = sprites.createProjectileFromSide(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 5 7 5 7 5 7 5 7 5 7 5 7 5 7 5 
7 5 7 5 7 5 7 5 7 5 7 5 7 5 7 5 
7 5 7 5 7 5 7 5 7 5 7 5 7 5 7 5 
7 5 7 5 7 5 7 5 7 5 7 5 7 5 7 5 
7 5 7 5 7 5 7 5 7 5 7 5 7 5 7 5 
7 5 7 5 7 5 7 5 7 5 7 5 7 5 7 5 
7 5 7 5 7 5 7 5 7 5 7 5 7 5 7 5 
7 5 7 5 7 5 7 5 7 5 7 5 7 5 7 5 
7 5 7 5 7 5 7 5 7 5 7 5 7 5 7 5 
`, 0, 0)
}
let packers: Sprite = null
let heroawsome: Sprite = null
hero()
game.onUpdateInterval(200, function () {
    projectile()
    score()
})
