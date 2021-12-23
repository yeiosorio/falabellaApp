
export interface IpokemonsResponse {
	abilities: Array<{
		ability: {
			name: string
		}
	}>,
	base_experience: number,
	name: string,
	sprites: {
		other: {
			home: {
				front_default: string
			}
		}
	},
	weight: number
}

export interface Payload {
    pokemonsList(): void;
}