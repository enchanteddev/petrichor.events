import type { workshop } from '$lib/types';
import type { PageLoad } from './$types';


export const load: PageLoad = (): {[key: string]: workshop[]} => {
	return {
		workshops: [
            {
                name: 'Computational Fluid Dynamics',
                about: 'Computational Fluid Dynamics (CFD) is the emerging field of fluid mechanics in which fluid flow problems are solved and analyzed using computational methods and numerical algorithms. Register in this workshop to start your path towards understanding what CFD is and its applications in designing/ simulating aerospace components.',
                prereq: ['Simulations', 'Fluid Dynamics'],
                fees: 1280,
                date: '4 & 5 Feb',
                regdate: '29 Jan',
                image: 'https://petrichor.events/static/media/fluid.840dcea7.jpg',
                location: 'Nila Campus',
                topics: ['Mechanics', 'Aerodynamics'],
                speakers: ['Dr. Krishna Sesha Giri', 'Dr. Ganesh Natrajan'],
            },
            {
                name: 'Computational Fluid Dynamics',
                about: 'Computational Fluid Dynamics (CFD) is the emerging field of fluid mechanics in which fluid flow problems are solved and analyzed using computational methods and numerical algorithms. Register in this workshop to start your path towards understanding what CFD is and its applications in designing/ simulating aerospace components.',
                prereq: ['Simulations', 'Fluid Dynamics'],
                fees: 1280,
                date: '4 & 5 Feb',
                regdate: '29 Jan',
                image: 'https://petrichor.events/static/media/fluid.840dcea7.jpg',
                location: 'Nila Campus',
                topics: ['Mechanics', 'Aerodynamics'],
                speakers: ['Dr. Krishna Sesha Giri', 'Dr. Ganesh Natrajan'],
            },
        ]
	};
};