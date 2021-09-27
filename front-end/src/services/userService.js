import uniqid from 'uniqid';

const { REACT_APP_DELAY } = process.env;

const loadUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let userId = localStorage.getItem('userId');

      if (!userId) {
        localStorage.setItem('userId', uniqid());
        userId = localStorage.getItem('userId');
      }

      resolve(userId);
    }, REACT_APP_DELAY);
  });
};

export const getUserId = async () => {
  const userId = await loadUser();

  return userId;
};
