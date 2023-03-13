radio.setGroup(142)
basic.forever(function () {
    radio.sendNumber(input.temperature())
})
