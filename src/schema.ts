import {
  Infer,
  object,
  number,
  string,
  array,
  boolean,
  union,
  any,
  literal,
} from "pertype";

export const EnergySourceTypeSchema = union(
  literal("burner"),
  literal("electric")
);
export type EnergySourceType = Infer<typeof EnergySourceTypeSchema>;

export const AllowedEffectSchema = union(
  literal("consumption"),
  literal("efficiency"),
  literal("pollution"),
  literal("productivity"),
  literal("quality"),
  literal("speed")
);
export type AllowedEffect = Infer<typeof AllowedEffectSchema>;

export const PropertySchema = union(
  literal("gravity"),
  literal("magnetic-field"),
  literal("pressure")
);
export type Property = Infer<typeof PropertySchema>;

export const GroupSchema = union(
  literal("combat"),
  literal("fluids"),
  literal("intermediate-products"),
  literal("logistics"),
  literal("other"),
  literal("production"),
  literal("space")
);
export type Group = Infer<typeof GroupSchema>;

export const ItemTypeSchema = union(
  literal("ammo"),
  literal("armor"),
  literal("blueprint"),
  literal("blueprint-book"),
  literal("capsule"),
  literal("deconstruction-item"),
  literal("fluid"),
  literal("gun"),
  literal("item"),
  literal("item-with-entity-data"),
  literal("module"),
  literal("rail-planner"),
  literal("repair-tool"),
  literal("tool")
);
export type ItemType = Infer<typeof ItemTypeSchema>;

export const ToItemSchema = union(
  literal("copper-ore"),
  literal("iron-ore"),
  literal("spoilage")
);
export type ToItem = Infer<typeof ToItemSchema>;

export const PurpleEmissionsPerMinuteSchema = object({
  spores: number(),
});
export type PurpleEmissionsPerMinute = Infer<
  typeof PurpleEmissionsPerMinuteSchema
>;

export const LocalizedNameSchema = object({
  en: string(),
});
export type LocalizedName = Infer<typeof LocalizedNameSchema>;

export const BeaconSchema = object({
  allowed_effects: array(AllowedEffectSchema),
  distribution_effectivity: number(),
  energy_usage: number(),
  profile: array(number()),
});
export type Beacon = Infer<typeof BeaconSchema>;

export const BeltSchema = object({
  icon_col: number(),
  icon_row: number(),
  key: string(),
  localized_name: LocalizedNameSchema,
  speed: number().optional(),
  pumping_speed: number().optional(),
});
export type Belt = Infer<typeof BeltSchema>;

export const EmissionsPerMinuteEmissionsPerMinuteSchema = object({
  pollution: number(),
});
export type EmissionsPerMinuteEmissionsPerMinute = Infer<
  typeof EmissionsPerMinuteEmissionsPerMinuteSchema
>;

export const CraftingMachineEnergySourceSchema = object({
  emissions_per_minute: EmissionsPerMinuteEmissionsPerMinuteSchema,
  type: EnergySourceTypeSchema,
  fuel_category: string().optional(),
});
export type CraftingMachineEnergySource = Infer<
  typeof CraftingMachineEnergySourceSchema
>;

export const SurfaceConditionSchema = object({
  max: number().optional(),
  min: number().optional(),
  property: PropertySchema,
});
export type SurfaceCondition = Infer<typeof SurfaceConditionSchema>;

export const FluidSchema = object({
  default_temperature: number(),
  heat_capacity: number().optional(),
  item_key: string(),
  max_temperature: number().optional(),
  fuel_value: string().optional(),
});
export type Fluid = Infer<typeof FluidSchema>;

export const FuelSchema = object({
  category: string(),
  item_key: string(),
  value: number(),
});
export type Fuel = Infer<typeof FuelSchema>;

export const CombatSubgroupsSchema = object({
  ammo: string(),
  "ammo-category": string(),
  armor: string(),
  capsule: string(),
  "defensive-structure": string(),
  equipment: string(),
  gun: string(),
  "military-equipment": string(),
  turret: string(),
  "utility-equipment": string(),
});
export type CombatSubgroups = Infer<typeof CombatSubgroupsSchema>;

export const EffectsSubgroupsSchema = object({
  "agriculture-explosions": string(),
  "belt-explosions": string(),
  "campaign-explosions": string(),
  "capsule-explosions": string(),
  "circuit-network-explosions": string(),
  "decorative-explosions": string(),
  "defensive-structure-explosions": string(),
  "enemy-death-explosions": string(),
  "energy-explosions": string(),
  "energy-pipe-distribution-explosions": string(),
  "environmental-protection-explosions": string(),
  explosions: string(),
  "extraction-machine-explosions": string(),
  "fluid-explosions": string(),
  "ground-explosions": string(),
  "gun-explosions": string(),
  "hit-effects": string(),
  "inserter-explosions": string(),
  "logistic-network-explosions": string(),
  "module-explosions": string(),
  particles: string(),
  "production-machine-explosions": string(),
  "rock-explosions": string(),
  "smelting-machine-explosions": string(),
  "space-platform-explosions": string(),
  "storage-explosions": string(),
  "train-transport-explosions": string(),
  "transport-explosions": string(),
  "tree-explosions": string(),
});
export type EffectsSubgroups = Infer<typeof EffectsSubgroupsSchema>;

export const EnemiesSubgroupsSchema = object({
  enemies: string(),
});
export type EnemiesSubgroups = Infer<typeof EnemiesSubgroupsSchema>;

export const EnvironmentSubgroupsSchema = object({
  "agriculture-remnants": string(),
  "belt-remnants": string(),
  "circuit-network-remnants": string(),
  cliffs: string(),
  corpses: string(),
  creatures: string(),
  "defensive-structure-remnants": string(),
  "energy-pipe-distribution-remnants": string(),
  "energy-remnants": string(),
  "environmental-protection-remnants": string(),
  "extraction-machine-remnants": string(),
  "generic-remnants": string(),
  grass: string(),
  "inserter-remnants": string(),
  "logistic-network-remnants": string(),
  "mineable-fluids": string(),
  obstacles: string(),
  "production-machine-remnants": string(),
  remnants: string(),
  scorchmarks: string(),
  "smelting-machine-remnants": string(),
  "space-platform-remnants": string(),
  "storage-remnants": string(),
  "train-transport-remnants": string(),
  "transport-remnants": string(),
  trees: string(),
  wrecks: string(),
});
export type EnvironmentSubgroups = Infer<typeof EnvironmentSubgroupsSchema>;

export const FluidsSubgroupsSchema = object({
  fluid: string(),
});
export type FluidsSubgroups = Infer<typeof FluidsSubgroupsSchema>;

export const IntermediateProductsSubgroupsSchema = object({
  "agriculture-processes": string(),
  "agriculture-products": string(),
  "aquilo-processes": string(),
  barrel: string(),
  "empty-barrel": string(),
  "fill-barrel": string(),
  "fluid-recipes": string(),
  "fulgora-processes": string(),
  "intermediate-product": string(),
  "intermediate-recipe": string(),
  "internal-process": string(),
  "nauvis-agriculture": string(),
  "raw-material": string(),
  "raw-resource": string(),
  "science-pack": string(),
  "uranium-processing": string(),
  "vulcanus-processes": string(),
});
export type IntermediateProductsSubgroups = Infer<
  typeof IntermediateProductsSubgroupsSchema
>;

export const LogisticsSubgroupsSchema = object({
  belt: string(),
  "circuit-network": string(),
  "energy-pipe-distribution": string(),
  inserter: string(),
  "logistic-network": string(),
  storage: string(),
  terrain: string(),
  "train-transport": string(),
  transport: string(),
});
export type LogisticsSubgroups = Infer<typeof LogisticsSubgroupsSchema>;

export const OtherSubgroupsSchema = object({
  other: string(),
  parameters: string(),
  qualities: string(),
  spawnables: string(),
});
export type OtherSubgroups = Infer<typeof OtherSubgroupsSchema>;

export const ProductionSubgroupsSchema = object({
  agriculture: string(),
  energy: string(),
  "environmental-protection": string(),
  "extraction-machine": string(),
  module: string(),
  "production-machine": string(),
  "smelting-machine": string(),
  tool: string(),
});
export type ProductionSubgroups = Infer<typeof ProductionSubgroupsSchema>;

export const SignalsSubgroupsSchema = object({
  arrows: string(),
  "arrows-misc": string(),
  bullets: string(),
  pictographs: string(),
  shapes: string(),
  "virtual-signal": string(),
  "virtual-signal-color": string(),
  "virtual-signal-letter": string(),
  "virtual-signal-math": string(),
  "virtual-signal-number": string(),
  "virtual-signal-punctuation": string(),
  "virtual-signal-special": string(),
});
export type SignalsSubgroups = Infer<typeof SignalsSubgroupsSchema>;

export const SpaceSubgroupsSchema = object({
  "planet-connections": string(),
  planets: string(),
  "space-crushing": string(),
  "space-environment": string(),
  "space-interactors": string(),
  "space-material": string(),
  "space-platform": string(),
  "space-processing": string(),
  "space-related": string(),
  "space-rocket": string(),
});
export type SpaceSubgroups = Infer<typeof SpaceSubgroupsSchema>;

export const TilesSubgroupsSchema = object({
  "aquilo-tiles": string(),
  "artificial-tiles": string(),
  "fulgora-tiles": string(),
  "gleba-tiles": string(),
  "gleba-water-tiles": string(),
  "nauvis-tiles": string(),
  "special-tiles": string(),
  "vulcanus-tiles": string(),
});
export type TilesSubgroups = Infer<typeof TilesSubgroupsSchema>;

export const ItemSchema = object({
  group: GroupSchema,
  icon_col: number(),
  icon_row: number(),
  key: string(),
  localized_name: LocalizedNameSchema,
  order: string(),
  subgroup: string(),
  type: ItemTypeSchema,
  stack_size: number().optional(),
});
export type Item = Infer<typeof ItemSchema>;

export const MiningDrillSchema = object({
  energy_source: CraftingMachineEnergySourceSchema,
  energy_usage: number(),
  icon_col: number(),
  icon_row: number(),
  key: string(),
  localized_name: LocalizedNameSchema,
  mining_speed: number(),
  module_slots: number(),
  resource_categories: array(string()),
  takes_fluid: boolean(),
  allowed_effects: array(AllowedEffectSchema).optional(),
});
export type MiningDrill = Infer<typeof MiningDrillSchema>;

export const EffectSchema = object({
  consumption: number().optional(),
  pollution: number().optional(),
  productivity: number().optional(),
  speed: number().optional(),
});
export type Effect = Infer<typeof EffectSchema>;

export const ResourcesSchema = object({
  offshore: array(string()),
  plants: array(string()),
  resource: array(string()),
});
export type Resources = Infer<typeof ResourcesSchema>;

export const SurfacePropertiesSchema = object({
  "day-night-cycle": number(),
  gravity: number().optional(),
  "magnetic-field": number().optional(),
  pressure: number().optional(),
  "solar-power": number().optional(),
});
export type SurfaceProperties = Infer<typeof SurfacePropertiesSchema>;

export const IngredientElementSchema = object({
  amount: number(),
  name: string(),
});
export type IngredientElement = Infer<typeof IngredientElementSchema>;

export const RecipeResultSchema = object({
  amount: number(),
  name: string(),
  probability: number().optional(),
});
export type PurpleResult = Infer<typeof RecipeResultSchema>;

export const ResourceResultSchema = object({
  amount: number().optional(),
  name: string(),
  amount_max: number().optional(),
  amount_min: number().optional(),
  probability: number().optional(),
});
export type ResourceResult = Infer<typeof ResourceResultSchema>;

export const SpoilageSchema = object({
  from_item: string(),
  time: number(),
  to_item: ToItemSchema,
});
export type Spoilage = Infer<typeof SpoilageSchema>;

export const ClockSchema = object({
  icon_col: number(),
  icon_row: number(),
  name: string(),
});
export type Clock = Infer<typeof ClockSchema>;

export const SurfacePropertySchema = object({
  default_value: number(),
  name: string(),
});
export type SurfaceProperty = Infer<typeof SurfacePropertySchema>;

export const AgriculturalTowerEnergySourceSchema = object({
  emissions_per_minute: PurpleEmissionsPerMinuteSchema,
  type: EnergySourceTypeSchema,
});
export type AgriculturalTowerEnergySource = Infer<
  typeof AgriculturalTowerEnergySourceSchema
>;

export const BoilerEnergySourceSchema = object({
  emissions_per_minute: union(
    array(any()),
    EmissionsPerMinuteEmissionsPerMinuteSchema
  ),
  fuel_category: string().optional(),
  type: string(),
});
export type BoilerEnergySource = Infer<typeof BoilerEnergySourceSchema>;

export const CraftingMachineSchema = object({
  allowed_effects: array(AllowedEffectSchema),
  crafting_categories: array(string()),
  crafting_speed: number(),
  energy_source: CraftingMachineEnergySourceSchema.optional(),
  energy_usage: number(),
  icon_col: number(),
  icon_row: number(),
  key: string(),
  localized_name: LocalizedNameSchema,
  module_slots: number(),
  prod_bonus: number().optional(),
  surface_conditions: array(SurfaceConditionSchema).optional(),
});
export type CraftingMachine = Infer<typeof CraftingMachineSchema>;

export const CombatSchema = object({
  order: string(),
  subgroups: CombatSubgroupsSchema,
});
export type Combat = Infer<typeof CombatSchema>;

export const EffectsSchema = object({
  order: string(),
  subgroups: EffectsSubgroupsSchema,
});
export type Effects = Infer<typeof EffectsSchema>;

export const EnemiesSchema = object({
  order: string(),
  subgroups: EnemiesSubgroupsSchema,
});
export type Enemies = Infer<typeof EnemiesSchema>;

export const EnvironmentSchema = object({
  order: string(),
  subgroups: EnvironmentSubgroupsSchema,
});
export type Environment = Infer<typeof EnvironmentSchema>;

export const FluidsSchema = object({
  order: string(),
  subgroups: FluidsSubgroupsSchema,
});
export type Fluids = Infer<typeof FluidsSchema>;

export const IntermediateProductsSchema = object({
  order: string(),
  subgroups: IntermediateProductsSubgroupsSchema,
});
export type IntermediateProducts = Infer<typeof IntermediateProductsSchema>;

export const LogisticsSchema = object({
  order: string(),
  subgroups: LogisticsSubgroupsSchema,
});
export type Logistics = Infer<typeof LogisticsSchema>;

export const OtherSchema = object({
  order: string(),
  subgroups: OtherSubgroupsSchema,
});
export type Other = Infer<typeof OtherSchema>;

export const ProductionSchema = object({
  order: string(),
  subgroups: ProductionSubgroupsSchema,
});
export type Production = Infer<typeof ProductionSchema>;

export const SignalsSchema = object({
  order: string(),
  subgroups: SignalsSubgroupsSchema,
});
export type Signals = Infer<typeof SignalsSchema>;

export const SpaceSchema = object({
  order: string(),
  subgroups: SpaceSubgroupsSchema,
});
export type Space = Infer<typeof SpaceSchema>;

export const TilesSchema = object({
  order: string(),
  subgroups: TilesSubgroupsSchema,
});
export type Tiles = Infer<typeof TilesSchema>;

export const ModuleSchema = object({
  category: AllowedEffectSchema,
  effect: EffectSchema,
  item_key: string(),
});
export type Module = Infer<typeof ModuleSchema>;

export const PlanetSchema = object({
  icon_col: number(),
  icon_row: number(),
  key: string(),
  localized_name: LocalizedNameSchema,
  order: string(),
  resources: ResourcesSchema,
  surface_properties: SurfacePropertiesSchema,
});
export type Planet = Infer<typeof PlanetSchema>;

export const PlantSchema = object({
  growth_ticks: number(),
  icon_col: number(),
  icon_row: number(),
  key: string(),
  localized_name: LocalizedNameSchema,
  order: string(),
  results: array(IngredientElementSchema),
  seed: string(),
  surface_conditions: array(SurfaceConditionSchema).optional(),
});
export type Plant = Infer<typeof PlantSchema>;

export const RecipeSchema = object({
  allow_productivity: boolean(),
  category: string(),
  energy_required: number(),
  icon_col: number(),
  icon_row: number(),
  ingredients: array(IngredientElementSchema),
  key: string(),
  localized_name: LocalizedNameSchema,
  order: string().optional(),
  results: array(RecipeResultSchema),
  subgroup: string(),
  surface_conditions: array(SurfaceConditionSchema).optional(),
});
export type Recipe = Infer<typeof RecipeSchema>;

export const ResourceSchema = object({
  icon_col: number(),
  icon_row: number(),
  key: string(),
  localized_name: LocalizedNameSchema,
  mining_time: number(),
  results: array(ResourceResultSchema),
  category: string().optional(),
  fluid_amount: number().optional(),
  required_fluid: string().optional(),
});
export type Resource = Infer<typeof ResourceSchema>;

export const ExtraSchema = object({
  clock: ClockSchema,
  slot_icon_module: ClockSchema,
});
export type Extra = Infer<typeof ExtraSchema>;

export const AgriculturalTowerSchema = object({
  energy_source: AgriculturalTowerEnergySourceSchema,
  energy_usage: number(),
  icon_col: number(),
  icon_row: number(),
  key: string(),
  localized_name: LocalizedNameSchema,
});
export type AgriculturalTower = Infer<typeof AgriculturalTowerSchema>;

export const BoilerSchema = object({
  energy_consumption: number(),
  energy_source: BoilerEnergySourceSchema,
  icon_col: number(),
  icon_row: number(),
  key: string(),
  localized_name: LocalizedNameSchema,
  target_temperature: number(),
});
export type Boiler = Infer<typeof BoilerSchema>;

export const GroupsSchema = object({
  combat: CombatSchema,
  effects: EffectsSchema,
  enemies: EnemiesSchema,
  environment: EnvironmentSchema,
  fluids: FluidsSchema,
  "intermediate-products": IntermediateProductsSchema,
  logistics: LogisticsSchema,
  other: OtherSchema,
  production: ProductionSchema,
  signals: SignalsSchema,
  space: SpaceSchema,
  tiles: TilesSchema,
});
export type Groups = Infer<typeof GroupsSchema>;

export const SpritesSchema = object({
  extra: ExtraSchema,
  hash: string(),
  height: number(),
  width: number(),
});
export type Sprites = Infer<typeof SpritesSchema>;

export const FactorioData = object({
  agricultural_tower: array(AgriculturalTowerSchema),
  beacon: BeaconSchema,
  belts: array(BeltSchema),
  boilers: array(BoilerSchema),
  crafting_machines: array(CraftingMachineSchema),
  fluids: array(FluidSchema),
  fuel: array(FuelSchema),
  groups: GroupsSchema,
  items: array(ItemSchema),
  mining_drills: array(MiningDrillSchema),
  modules: array(ModuleSchema),
  offshore_pumps: array(BeltSchema),
  planets: array(PlanetSchema),
  plants: array(PlantSchema),
  recipes: array(RecipeSchema),
  resources: array(ResourceSchema),
  rocket_silo: array(CraftingMachineSchema),
  spoilage: array(SpoilageSchema),
  sprites: SpritesSchema,
  surface_properties: array(SurfacePropertySchema),
});
export type FactorioData = Infer<typeof FactorioData>;
