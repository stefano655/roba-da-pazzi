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
