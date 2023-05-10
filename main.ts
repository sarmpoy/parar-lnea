basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.stopcar()
    } else {
        cuteBot.motors(60, 60)
    }
})
