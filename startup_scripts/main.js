StartupEvents.registry("block", event => {
    event.create("peter_block")
    .displayName("Peter Block")
    .mapColor("grass")
    .noSoundType()
    .unbreakable()
})