const { Post } = require('../models');

const postdata = [
  {
    title: 'Mr. Brightside - The Killers',
    post_url: 'This song is the best! I listed to it all the time and I never get bored of it!',
    user_id: 10
  },
  {
    title: 'What Ive Done - Linkin Park',
    post_url: 'This song is so amazing and fun to listen to in the gym!',
    user_id: 8
  },
  {
    title: 'Watch Your Mouth - The Backseat Lovers',
    post_url: 'Absolutely love this song. I just saw them in concert and they performed better than I could have imagined.',
    user_id: 1
  },
  {
    title: 'Baby - Justin Bieber',
    post_url: 'I am not a fan of this song. It is sour to my ears and I wish I never heard it again. ',
    user_id: 4
  },
  {
    title: 'Dont Stop Believing',
    post_url: 'An all-time classic! I always love listening to this song!',
    user_id: 7
  },
  {
    title: 'Get Low - Lil Jon',
    post_url: 'AWWWWW YEAH! This is what Im talkin about! This song slaps and goes so so hard!!!',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
