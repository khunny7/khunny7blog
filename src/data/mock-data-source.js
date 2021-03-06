import Promise from 'bluebird';

const postings = {
    '123456' : {
        title: 'Snow Whites',
        date: '2015-05-01T22:12:03.284Z',
        content: 'Once upon a time, there was a beautiful princess named Snow White. She was kind and gentle and a friend to all animals.',
        id: '123456',
    },
    '123457' : {
        title: 'Snow Whites2',
        date: '2015-05-01T22:12:03.284Z',
        content: 'One day, Snow White met a charming prince. As they sang a song of love together, Snow White\'s evil stepmother, the Queen, watched them.',
        id: '123457',
    },
    '123458' : {
        title: 'Snow Whites3',
        date: '2015-05-01T22:12:03.284Z',
        content: 'Heeya did a good job and snow white did not do a good job',
        id: '123458',
    },
};

const getPostings = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(postings);
        }, 1000);
    });
}

const getPosting = (postingId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(postings[postingId]);
        }, 1000);
    });
}

export {
    getPosting,
    getPostings,
};
