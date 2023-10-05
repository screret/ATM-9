
const $MekBlocks = Java.loadClass("mekanism.common.registries.MekanismBlocks");
const $MekGenBlocks = Java.loadClass("mekanism.generators.common.registries.GeneratorsBlocks");
const $Registry = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries");

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('breeder_reactor')
        .category('atm')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 2)
        //.setMax('in', 'gas', 1) // TODO enable when MekJS updates.
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('breeder_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('gtceu:breeder_reactor')
        .appearanceBlock(() => $Registry.BLOCK.get('kubejs:breeder_reactor_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('XXXXX','XXXXX', 'XXXXX', 'XXXXX', 'XXXXX')
            .aisle('XXXXX','XFFFX', 'XFFFX', 'XFFFX', 'XXXXX')
            .aisle('XXXXX','XFFFX', 'XFFFX', 'XFFFX', 'XXXXX')
            .aisle('XXXXX','XFFFX', 'XFFFX', 'XFFFX', 'XXXXX')
            .aisle('XXCXX','XXXXX', 'XXXXX', 'XXXXX', 'XXXXX')
            .where('C', Predicates.controller(Predicates['blocks(net.minecraft.world.level.block.Block[])'](definition.get())))
            .where('X', Predicates['blocks(net.minecraft.world.level.block.Block[])']($Registry.BLOCK.get('kubejs:breeder_reactor_casing'))
                            .or(Predicates.autoAbilities(definition.recipeTypes)))
            .where('F', Predicates['blocks(net.minecraft.world.level.block.Block[])']($MekGenBlocks.FISSION_FUEL_ASSEMBLY.block))
            .build())
        .workableCasingRenderer("kubejs:block/breeder_reactor_casing", 
            "gtceu:block/multiblock/assembly_line", false)
})

StartupEvents.registry('block', event => {
    event.create('breeder_reactor_casing', 'gtceu:renderer')
        .displayName('Breeder Reactor Casing')
        .textureOverrideRenderer('minecraft:block/cube_all', {'all': new ResourceLocation('kubejs:block/breeder_reactor_casing')})
})