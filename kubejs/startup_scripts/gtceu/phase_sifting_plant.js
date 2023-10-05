
const $MekBlocks = Java.loadClass("mekanism.common.registries.MekanismBlocks");
const $MekGenBlocks = Java.loadClass("mekanism.generators.common.registries.GeneratorsBlocks");


GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('large_phase_shifting_plant')
        .category('atm')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 1, 1)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_phase_shifting_plant', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('gtceu:large_phase_shifting_plant')
        .appearanceBlock(() => $MekBlocks.SPS_CASING.block)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("             ", "             ", "    GGGGG    ", "    GGGGG    ", "    GGGGG    ", "    GGGGG    ", "    GGGGG    ", "    GGGGG    ", "    GGGGG    ", "             ", "             ")
            .aisle("             ", "    CCCCC    ", "   C#####C   ", "   G#####G   ", "   G#III#G   ", "   G#III#G   ", "   G#III#G   ", "   G#####G   ", "   G#####G   ", "    CCCCC    ", "             ")
            .aisle("    CCCCC    ", "   C#####C   ", "  C#######C  ", "  C#######C  ", "  C#######C  ", "  C#######C  ", "  C#######C  ", "  C#######C  ", "  C#######C  ", "   C#####C   ", "    CCCCC    ")
            .aisle("   CGGGGGC   ", "  C#######C  ", " C#########C ", " G#########G ", " G#########G ", " G#########G ", " G#########G ", " G#########G ", " C#########C ", "  C#######C  ", "   CGGGGGC   ")
            .aisle("  CGGGGGGGC  ", " C#########C ", "G###########G", "G###########G", "G###########G", "G###########G", "G###########G", "G###########G", "G###########G", " C#########C ", "  CGGGGGGGC  ")
            .aisle("  CGGGGGGGC  ", " C#########C ", "G###########G", "G###########G", "GI#########IG", "GI#########IG", "GI#########IG", "G###########G", "G###########G", " C#########C ", "  CGGGGGGGC  ")
            .aisle("  CGGGGGGGC  ", " C#########C ", "G###########G", "G###########G", "GI#########IG", "GI#########IG", "GI#########IG", "G###########G", "G###########G", " C#########C ", "  CGGGGGGGC  ")
            .aisle("  CGGGGGGGC  ", " C#########C ", "G###########G", "G###########G", "GI#########IG", "GI#########IG", "GI#########IG", "G###########G", "G###########G", " C#########C ", "  CGGGGGGGC  ")
            .aisle("  CGGGGGGGC  ", " C#########C ", "G###########G", "G###########G", "G###########G", "G###########G", "G###########G", "G###########G", "G###########G", " C#########C ", "  CGGGGGGGC  ")
            .aisle("   CGGGGGC   ", "  C#######C  ", " C#########C ", " G#########G ", " G#########G ", " G#########G ", " G#########G ", " G#########G ", " C#########C ", "  C#######C  ", "   CGGGGGC   ")
            .aisle("    CCCCC    ", "   C#####C   ", "  C#######C  ", "  C#######C  ", "  C#######C  ", "  C#######C  ", "  C#######C  ", "  C#######C  ", "  C#######C  ", "   C#####C   ", "    CCCCC    ")
            .aisle("             ", "    CCBCC    ", "   C#####C   ", "   G#####G   ", "   G#III#G   ", "   G#III#G   ", "   G#III#G   ", "   G#####G   ", "   C#####C   ", "    CCCCC    ", "             ")
            .aisle("             ", "             ", "    GGGGG    ", "    GGGGG    ", "    GGGGG    ", "    GGGGG    ", "    GGGGG    ", "    GGGGG    ", "    GGGGG    ", "             ", "             ")
            .where('B', Predicates.controller(Predicates['blocks(net.minecraft.world.level.block.Block[])'](definition.get())))
            .where('#', Predicates.air())
            .where(' ', Predicates.any())
            .where('C', Predicates['blocks(net.minecraft.world.level.block.Block[])']($MekBlocks.SPS_CASING.block).setMinGlobalLimited(16)
                            .or(Predicates.autoAbilities(definition.recipeTypes)))
            .where('G', Predicates['blocks(net.minecraft.world.level.block.Block[])']($MekGenBlocks.REACTOR_GLASS.block)
                            .or(Predicates['blocks(net.minecraft.world.level.block.Block[])']($MekBlocks.SPS_CASING.block)))
            .where('I', Predicates['blocks(net.minecraft.world.level.block.Block[])']($MekBlocks.SUPERCHARGED_COIL.block))
            .build())
        .workableCasingRenderer("mekanism:block/sps_casing",
            "gtceu:block/multiblock/assembly_line", false)
})
