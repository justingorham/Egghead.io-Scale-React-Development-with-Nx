const games = [
  {
    id: 'a',
    name: 'A',
    image: 'https://picsum.photos/200/300',
    description: 'Stuff',
    price: 35,
    rating: Math.random(),
  },
];

export const getAllGames = () => games;
export const getGame = (id: string) => games.find((game) => game.id === id);
