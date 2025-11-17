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

StartupEvents.registry("mob_effect", event => {
    event.create("crack").modifyAttribute("generic.movement_speed",
        "d867190e-3726-4df0-a2f3-431b354c93a1",
        5, "add_multiplied_base")
        .color(Color.WHITE)
})