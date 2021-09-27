import charactersData from '@data/characters.json';

const { REACT_APP_DELAY } = process.env;

const loadCharacters = (characterId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let characters = localStorage.getItem('characters');

      if (!characters) {
        localStorage.setItem('charactes', JSON.stringify(charactersData.data));
        characters = localStorage.getItem('characters');
      }

      if (characterId) {
        const character = characters.find(({ id }) => id === characterId);

        resolve(character);
      }

      resolve(characters);
    }, REACT_APP_DELAY);
  });
};

export const getCharacters = async () => {
  const characters = await loadCharacters();

  return characters;
};

export const getCharacterById = async (characterId) => {
  const character = await loadCharacters(characterId);

  return character;
};
