StartupEvents.registry("block", event => {
    event.create("wallpaper")
    .displayName("Liminal Wallpaper")
    .unbreakable()

    event.create("roof")
    .displayName("Liminal Ceiling")
    .unbreakable()

    event.create("carpet")
    .displayName("Liminal Carpet")
    .unbreakable()

    event.create("lamp")
    .displayName("Liminal Lamp")
    .unbreakable()
    .lightLevel(1)
})