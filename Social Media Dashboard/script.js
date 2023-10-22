// Simulated data (for demonstration purposes)
const facebookData = {
    likes: 5000,
    followers: 15000
};

const twitterData = {
    tweets: 10000,
    followers: 12000
};

function updateMetrics() {
    document.getElementById('facebookLikes').textContent = facebookData.likes;
    document.getElementById('facebookFollowers').textContent = facebookData.followers;
    document.getElementById('twitterTweets').textContent = twitterData.tweets;
    document.getElementById('twitterFollowers').textContent = twitterData.followers;
}

document.addEventListener('DOMContentLoaded', () => {
    updateMetrics();
});
