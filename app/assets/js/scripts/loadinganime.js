let timeline = anime.timeline({
        targets: '.st0',
        direction: 'normal',
        loop: false
    })
    timeline.add({
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        fill: ['transparent', 'transparent'],
        duration: 300,
        delay: function (el, i) { return i * 150 }
    })
    timeline.add({
        easing: 'easeInOutSine',
        fill: ['transparent', '#000000'],
        duration: 500
    },'-=200');