import { defineStore } from 'pinia';

export interface Car {
	created_at: number; 
	id: number;
	uploads: number;
	vehicle_name: string;
	vin: string;
	photo: {
		url: string;
	}
}

interface CarsState {
	cars: Car[];
	loading: boolean;
	perPage: number;
	page: number;
}

export const useCarsStore = defineStore<'cars', CarsState, {
	getCars: (state: CarsState) => Car[];
	getLoading: (state: CarsState) => boolean;
	getPerPage: (state: CarsState) => number;
	getPage: (state: CarsState) => number;
	getCountCars: (state: CarsState) => number;
}, {
	fetchCars(): Promise<void>;
	setPerPage(perPage: number): void;
	nextPage(): void;
	prevPage(): void;
	
	}>('cars', {
	state: (): CarsState => ({
		cars: [],
		loading: false,
		perPage: 9,
		page: 1,
	}),
	actions: {
		async fetchCars() {
		this.loading = true;
		try {
			const response = await fetch(`https://api.caiman-app.de/api/cars-test?per_page=1000`);
			const data = await response.json();
			this.cars = data.data;
		} catch (error) {
			console.error('Error fetching cars:', error);
		} finally {
			this.loading = false;
		}
		},
		setPerPage(perPage: number) {
			this.perPage = perPage;
		},
		nextPage() {
			if (this.page < this.cars.length / this.perPage) {
				this.page++;
			}
		},
		prevPage() {
			if (this.page > 1) {
				this.page--;
			}
		},
		
	},
	getters: {
		getCars: (state) => {
			return state.cars.slice(state.perPage * (state.page - 1), state.perPage * state.page);
		},
		getLoading: (state) => state.loading,
		getPerPage: (state) => state.perPage,
		getPage: (state) => state.page,
		getCountCars: (state) => state.cars.length,
	}
	});
