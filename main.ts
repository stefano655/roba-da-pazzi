input.onGesture(Gesture.LogoUp, function () {
    basic.showString("So impegnat vattin!")
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # # .
        # . . # .
        # # # . .
        `)
    basic.showLeds(`
        # # # # .
        # . . . #
        # # # # #
        # . # . .
        # . . # .
        `)
    basic.showLeds(`
        . # # . .
        # . . # .
        # . . # .
        # . . # .
        . # # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Non disturbare")
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
})
