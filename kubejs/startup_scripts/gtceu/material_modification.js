const $PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty')
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys')

GTCEuStartupEvents.registry('gtceu:material', event => {
    GTMaterials.NetherStar.setProperty($PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.NetherStar.getProperty($PropertyKey.FLUID).storage.enqueueRegistration($FluidStorageKeys.GAS, new GTFluidBuilder())

    GTMaterials.Polonium.setProperty($PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.Polonium.getProperty($PropertyKey.FLUID).storage.enqueueRegistration($FluidStorageKeys.GAS, new GTFluidBuilder().state('gas'))
})