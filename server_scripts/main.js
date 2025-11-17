// recipes
ServerEvents.recipes(event => {
    event.shapeless("kubejs:peter_block", [
        "kubejs:brian_item",
        "minecraft:grass_block"
    ])
    event.shaped("kubejs:brian_item", [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: "minecraft:stone",
        B: "minecraft:diamond_pickaxe"
    }).damageIngredient("minecraft:diamond_pickaxe", "50")
})