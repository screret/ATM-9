const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV ] = GTValues.VA
ServerEvents.recipes(event => {
    function starForge(id, duration, eu, output, item, fluid) {
		event.recipes.gtceu.star_forge(id)
			.itemInputs(item)
			.inputFluids(fluid)
			.itemOutputs(output)
			.duration(duration)
			.EUt(eu)
		if(fluid = '') {
			fluid = null
		}
	} 
	//Gregstar Components
	starForge('robust_star_housing', 1000, UV, 'kubejs:star_housing', ['allthetweaks:patrick_star', '32x gtceu:tungsten_steel_double_plate', '64x gtceu:tungsten_steel_screw'], [Fluid.of('gtceu:oxygen_plasma', 2880), Fluid.of('gtceu:nitrogen_plasma', 2880), Fluid.of('gtceu:argon_plasma', 2880), Fluid.of('gtceu:helium_plasma', 2880)])
	starForge('absolute_reaction_plating', 200, ZPM, 'kubejs:absolute_reaction_plating', ['gtceu:neutronium_block', '16x gtceu:fusion_coil', '16x gtceu:fusion_casing_mk3', '16x gtceu:fusion_glass'], Fluid.of('gtceu:uranium_235', 2000))
	starForge('star_compression_module', 200, ZPM, 'kubejs:star_compression_module', ['allthetweaks:atm_star', '16x gtceu:energy_cluster', '4x gtceu:uv_transformer_16a', '4x gtceu:uv_energy_input_hatch_16a'])
	starForge('superthermal_transference_coil', 200, ZPM, 'kubejs:superthermal_transference_coil', ['16x gtceu:uv_voltage_coil', '16x gtceu:tritanium_coil_block', '4x gtceu:uv_naquadria_battery'], Fluid.of('gtceu:europium', 2000))
	starForge('cable_of_hyperconductivity', 200, ZPM, 'kubejs:cable_of_hyperconductivity', ['8x gtceu:manganese_phosphide_hex_wire', '8x gtceu:magnesium_diboride_hex_wire', '8x gtceu:mercury_barium_calcium_cuprate_hex_wire', '8x gtceu:uranium_triplatinum_hex_wire', '8x gtceu:samarium_iron_arsenic_oxide_hex_wire', '8x gtceu:indium_tin_barium_titanium_cuprate_hex_wire', '8x gtceu:uranium_rhodium_dinaquadide_hex_wire','8x gtceu:enriched_naquadah_trinium_europium_duranide_hex_wire'], [Fluid.of('gtceu:styrene_butadiene_rubber', 16000), Fluid.of('gtceu:silicone_rubber', 32000), Fluid.of('gtceu:rubber', 64000)])

	//Gregstar
	starForge('gregstar', 10000, UV, 'allthetweaks:greg_star', 
		[
			'kubejs:star_housing',
			'gtceu:nan_certificate',
			'kubejs:absolute_reaction_plating',
			'kubejs:star_compression_module',
			'kubejs:superthermal_transference_coil', 
			'kubejs:cable_of_hyperconductivity', 
			'32x mekanism:pellet_antimatter', 
			'8x industrialforegoing:black_hole_controller',
			'16x ironfurnaces:unobtainium_furnace',
			'32x computercraft:computer_advanced',
			Item.of('exchangers:end_steel_exchanger', 8, '{Energy:50000000}').weakNBT()
		], 
		[
			Fluid.of('gtceu:europium', 10000)
		])

	//Other Star Forge Recipes
	event.recipes.gtceu.star_forge('atm_star')
		.itemInputs(
			[
				'28x allthemodium:unobtainium_allthemodium_alloy_block',
				Item.of('allthemodium:unobtainium_vibranium_alloy_block', "{HideFlags:1,display:{Name:'[{\"text\":\"Awakened Unobtainium-Vibranium Alloy Block\",\"italic\":false}]'}}").enchant('minecraft:unbreaking', 1).strongNBT(),
				Item.of('allthemodium:unobtainium_vibranium_alloy_block', "{HideFlags:1,display:{Name:'[{\"text\":\"Awakened Unobtainium-Vibranium Alloy Block\",\"italic\":false}]'}}").enchant('minecraft:unbreaking', 1).strongNBT(),
				'allthetweaks:oblivion_shard',
				'allthetweaks:dragon_soul',
				'allthetweaks:withers_compass',
				'allthetweaks:pulsating_black_hole',
				'allthetweaks:nexium_emitter',
				'allthetweaks:patrick_star',
				'allthetweaks:dimensional_seed',
				'allthetweaks:philosophers_fuel',
				'allthetweaks:improbable_probability_device',
				'mysticalagradditions:creative_essence'				
			])
		.inputFluids(Fluid.of('gtceu:nether_star', 1574640))
		.itemOutputs('allthetweaks:atm_star')
		.chancedOutput(Item.of('allthetweaks:atm_star'), 20, 20)
		.duration(1000)
		.EUt(LuV)
	
	// Star Forge Controller Block Recipe
	event.recipes.gtceu.assembly_line('star_forge')
		.itemInputs(
			[
				'gtceu:uhv_machine_hull',
				'4x gtceu:wetware_processor_mainframe',
				'4x gtceu:gravi_star',
				'4x gtceu:uv_field_generator',
				'64x gtceu:uhpic_chip',
				'64x gtceu:ruthenium_trinium_americium_neutronate_single_wire'
			])
		.inputFluids(
			[
				Fluid.of('gtceu:europium', 2592),
				Fluid.of('gtceu:soldering_alloy', 1152)
			])
		.itemOutputs('gtceu:star_forge')
		.duration(2400)
		.EUt(ZPM)
	
	// Atomic Casing Recipes
	// Assembly Line Recipe
	event.recipes.gtceu.assembler('atomic_casing')
		.itemInputs(
			[
				'gtceu:naquadah_alloy_frame',
				'6x gtceu:naquadah_alloy_plate'
			])
		.itemOutputs('2x gtceu:atomic_casing')
		.circuit(6)
		.duration(50)
		.EUt(16)
	// Shaped Crafting Grid Recipe
	event.shaped('2x gtceu:atomic_casing', ['ABA', 'ACA', 'ADA'], {
		A: 'gtceu:naquadah_alloy_plate',
		B: '#forge:tools/hammers',
		C: 'gtceu:naquadah_alloy_frame',
		D: '#forge:tools/wrenches',
	  }).id('kubejs:gtceu/atomic_casing')
})