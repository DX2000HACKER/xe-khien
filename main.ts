makerbit.onIrButton(IrButton.Number_0, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 1023)
    pins.analogWritePin(AnalogPin.P13, 1023)
    pins.analogWritePin(AnalogPin.P14, 0)
})
makerbit.onIrButton(IrButton.Number_5, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 1023)
})
makerbit.onIrButton(IrButton.Any, IrButtonAction.Released, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
})
makerbit.onIrButton(IrButton.Number_7, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    pins.analogWritePin(AnalogPin.P1, 600)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P13, 600)
    pins.analogWritePin(AnalogPin.P14, 0)
})
makerbit.onIrButton(IrButton.Number_9, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 600)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 600)
})
makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.NEC)
