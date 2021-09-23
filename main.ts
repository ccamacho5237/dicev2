input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(1, 6))
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    if (randint(1, 6) == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
    } else if (randint(1, 6) == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            `)
        basic.clearScreen()
    } else if (randint(1, 6) == 3) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
        basic.clearScreen()
    } else if (randint(1, 6) == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
        basic.clearScreen()
    } else if (randint(1, 6) == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.clearScreen()
    } else if (randint(1, 6) == 6) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
        basic.clearScreen()
    }
})
