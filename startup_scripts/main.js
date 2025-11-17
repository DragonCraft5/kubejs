StartupEvents.registry("block", event => {
    event.create("peter_block")
    .displayName("Peter Block")
    .mapColor("grass")
    .noSoundType()
    .unbreakable()
})

StartupEvents.registry("item", event => {
    event.create("brian_item")
    .displayName("§7Brian Item")
})