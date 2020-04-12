const handleByNewestFilter = (data) => {
    return data.sort((a, b) => new Date(b.posttime) - new Date(a.posttime));
};

const handleByOldestFilter = (data) => {
    return data.sort((a, b) => new Date(a.posttime) - new Date(b.posttime));
};

const handleByRatingFilter = (data) => {
    return data.sort((a, b) => {
        const rating_1 = b.rating !== undefined ? b.rating : 0;
        const rating_2 = a.rating !== undefined ? a.rating : 0;
        return rating_1 - rating_2;
    });
};

export { handleByNewestFilter, handleByOldestFilter, handleByRatingFilter }