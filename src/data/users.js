export let users = [
	{ name: "tigro", score: 0 },
	{ name: "perrito", score: 0 },
	{ name: "gatico", score: 0 },
	{ name: "grrr", score: 0 },
	{ name: "guagua", score: 0 },
];

export const incrementScore = (index) => {
	users[index].score += 10;
};

export const decrementScore = (index) => {
	users[index].score -= 10;
};

export const resetScore = (index) => {
	users[index].score = 0;
};

export const deleteUser = (index) => {
	users.splice(index, 1);
};
