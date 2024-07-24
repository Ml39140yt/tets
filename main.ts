player.onChat("run", function (num1) {
    player.say(":)")
    mobs.spawn(CHICKEN, pos(0, 0, 0))
    blocks.place(GRASS, pos(0, 0, 0))
})
shapes.line(
GRASS,
pos(0, 0, 0),
pos(0, 0, 0)
)
builder.place(GRASS)
