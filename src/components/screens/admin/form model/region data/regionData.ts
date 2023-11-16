type TRegion =
	| 'Andijon viloyati'
	| 'Buxoro viloyati'
	| 'Jizzax viloyati'
	| 'Qashqadaryo viloyati'
	| 'Namangan viloyati'
	| 'Navoiy viloyati'
	| 'Samarqand viloyati'
	| 'Surxondaryo viloyati'
	| 'Sirdaryo viloyati'
	| 'Toshkent viloyati'
	| "Farg'ona viloyati"
	| 'Xorazm viloyati'
	| "Qoraqalpog'iston Respublikasi"

type TRegionObject = {
	id: number
	region: TRegion
}

export const Regions: TRegionObject[] = [
	{
		id: 1,
		region: 'Andijon viloyati'
	},
	{
		id: 2,
		region: 'Buxoro viloyati'
	},
	{
		id: 3,
		region: 'Jizzax viloyati'
	},
	{
		id: 4,
		region: 'Qashqadaryo viloyati'
	},
	{
		id: 5,
		region: 'Namangan viloyati'
	},
	{
		id: 6,
		region: 'Navoiy viloyati'
	},
	{
		id: 7,
		region: 'Samarqand viloyati'
	},
	{
		id: 8,
		region: 'Sirdaryo viloyati'
	},
	{
		id: 9,
		region: 'Toshkent viloyati'
	},
	{
		id: 10,
		region: "Farg'ona viloyati"
	},
	{
		id: 11,
		region: 'Xorazm viloyati'
	},
	{
		id: 12,
		region: "Qoraqalpog'iston Respublikasi"
	}
]
