// priority: 10

let chemlibRemove = [
    "aluminum",
    "chromium",
    "europium",
    "iridium",
    "neodymium",
    "niobium",
    "osmium",
    "palladium",
    "rhodium",
    "ruthenium",
    "samarium",
    "silicon",
    "titanium",
    "tungsten",
    "vanadium",
    "yttrium",
]

ServerEvents.tags("item", event => {
    chemlibRemove.forEach(material => {
        event.remove(`forge:ingots/${material}`, `chemlib:${material}_ingot`)
        event.remove(`forge:plates/${material}`, `chemlib:${material}_plate`)
        event.remove(`forge:storage_blocks/${material}`, `chemlib:${material}_block`)
        event.remove(`forge:nuggets/${material}`, `chemlib:${material}_nugget`)
    })
})

ServerEvents.recipes(event => {
    chemlibRemove.forEach(material => {
        event.remove({id:`chemlib:${material}_ingot_from_smelting_${material}_dust`})
        event.remove({id:`chemlib:${material}_ingot_from_blasting_${material}_dust`})
        event.remove({id:`chemlib:${material}_block_to_ingot`})
        event.remove({id:`chemlib:${material}_ingot_to_block`})
        event.remove({id:`chemlib:${material}_ingot_to_nugget`})
        event.remove({id:`chemlib:${material}_nugget_to_ingot`})
        event.remove({id:`alchemistry:compactor/${material}_dust`})
    })
})