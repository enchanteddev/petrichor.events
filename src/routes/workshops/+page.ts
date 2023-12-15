import type { workshop } from '$lib/types';
import type { PageLoad } from './$types';


export const load: PageLoad = (): {[key: string]: workshop[]} => {
	return {
		workshops: [
            {
                name: 'AI Workshop',
                about: 'Machine Learning is an essential skill for any aspiring data analyst and data scientist, and also for those who wish to transform a massive amount of raw data into trends and predictions. Machine learning is actively being used today, perhaps in many more places than one would expect. Join this workshop and discuss on some recent problem statements using ML',
                prereq: ['Simulations', 'Fluid Dynamics'],
                fees: 1280,
                date: '27 & 28 Jan',
                regdate: '29 Jan',
                image: 'https://petrichor.events/static/media/fluid.840dcea7.jpg',
                location: 'Nila Campus',
                topics: ['Mechanics', 'Aerodynamics'],
                speakers: ['Dr. Krishna Sesha Giri', 'Dr. Ganesh Natrajan'],
            },
            {
                name: 'Robotics',
                about: 'This is about modelling Self-balancing robots and involves concepts from control systems and hardware aspects to make one',
                prereq: ['Simulations', 'Fluid Dynamics'],
                fees: 1280,
                date: '27 & 28 Jan',
                regdate: '29 Jan',
                image: 'https://petrichor.events/static/media/fluid.840dcea7.jpg',
                location: 'Nila Campus',
                topics: ['Mechanics', 'Aerodynamics'],
                speakers: ['Dr. Vijay Muralidharan'],
            },
            {
                name: 'Product Management',
                about: 'This is about modelling Self-balancing robots and involves concepts from control systems and hardware aspects to make one',
                prereq: ['Simulations', 'Fluid Dynamics'],
                fees: 1280,
                date: '27 & 28 Jan',
                regdate: '29 Jan',
                image: 'https://petrichor.events/static/media/fluid.840dcea7.jpg',
                location: 'Nila Campus',
                topics: ['Mechanics', 'Aerodynamics'],
                speakers: ['Keerthy Reddy'],
            },
        ]
	};
};