
const $PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty')
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys')
const $ATMBlocks = Java.loadClass('com.thevortex.allthemodium.registry.ModRegistry')

GTCEuStartupEvents.registry('tag_prefix', event => {
    event.create('other', 'ore')
        .stateSupplier(() => $ATMBlocks.ANCIENT_STONE)
        .isNether(true)
        .color($MapColor.TERRACOTTA_GREEN);
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('fluorite')
        .gem().ore()
        .color(0x0c9949).iconSet('diamond')
        .components('1x calcium', '1x fluorine')

    event.create('dolomite')
        .dust().ore()
        .color(0xf2e4bd).iconSet('rough')
        .components('1x calcium', '1x magnesium', '1x carbon', '3x oxygen')

    event.create('antimatter')
        .gas()
        .element('antimatter')
        .color(0xac1aeb).iconSet('gas')

    GTMaterials.Polonium.setProperty($PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Polonium.getProperty($PropertyKey.FLUID).storage.enqueueRegistration($FluidStorageKeys.GAS, new GTFluidBuilder().state('gas'))
})

StartupEvents.postInit(event => {
    GTMaterials.get('dolomite').setFormula('CaMg(CO3)2', true)
})