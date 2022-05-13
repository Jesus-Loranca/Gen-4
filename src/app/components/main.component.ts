import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { mons } from '../data/mons';
import { Mon } from '../data/types/mon';

@Component({
	selector: 'main',
	templateUrl: '../views/main.html',
})

export class AppComponent {
	lvl = 100;
	isLastForm = false;
	isSubmited = false;
	orderedMons: Array<Array<string>> = [];

	/**
	 * Calculates the Mon BP based on the lvl received.
	 * @param mon Mon
	 */
	calculateStatsByLvl(mon: Mon) {
		mon.bp = 0;

		Object.entries(mon.stats).forEach(
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			([stat, values]) => {
				mon.bp += ((values[0]) + (values[1] * this.lvl)) / 6;
			}
		);
	}

	/**
	 * Displays the ordered mons in the view.
	 * @param form NgForm
	 */
	displayOrderedMons(form: NgForm) {
		this.orderedMons = [];
		this.lvl = Number(form.value.lvl) || this.lvl;
		this.isLastForm = Boolean(form.value.isLastForm);
		this.orderMonsByBP();

		mons.forEach((mon) => {
			if ((this.isLastForm && mon.isLastForm) || !this.isLastForm) {
				this.orderedMons.push([mon.name, mon.bp.toFixed(2), mon.image]);
			}
		});
	}

	/**
	 * Order the received array of Mons by BP.
	 */
	orderMonsByBP() {
		mons.forEach((mon: Mon) => {
			this.calculateStatsByLvl(mon);
		});

		mons.sort((a, b) => a.bp > b.bp ? -1 : a.bp < b.bp ? 1 : 0);
	}
}
