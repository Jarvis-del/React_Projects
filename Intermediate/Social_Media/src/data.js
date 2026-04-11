export const CURRENT_USER = {
  id: 0,
  name: 'You',
  handle: 'yourhandle',
  avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=you&backgroundColor=b6e3f4',
};

export const USERS = [
  { id: 1, name: 'Aisha Patel', handle: 'aishap', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=aisha&backgroundColor=ffd5dc', bio: 'Designer & dreamer ✦', followers: 2400 },
  { id: 2, name: 'Marcus Lee', handle: 'marcuslee', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=marcus&backgroundColor=c0f0e0', bio: 'Building things on the internet', followers: 1800 },
  { id: 3, name: 'Priya Sharma', handle: 'priyasharma', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=priya&backgroundColor=f8e4b4', bio: 'Product @ startups | Prev Google', followers: 5100 },
  { id: 4, name: 'Jordan Wu', handle: 'jordanwu', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=jordan&backgroundColor=d4c4f4', bio: 'Coffee + code ☕', followers: 930 },
  { id: 5, name: 'Lena Müller', handle: 'lenamuller', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=lena&backgroundColor=ffe4c4', bio: 'Photographer & traveler 🌍', followers: 3200 },
];

export const STORIES = [
  { id: 1, user: USERS[0], seen: false },
  { id: 2, user: USERS[1], seen: false },
  { id: 3, user: USERS[2], seen: true },
  { id: 4, user: USERS[3], seen: false },
  { id: 5, user: USERS[4], seen: true },
];

export const INITIAL_POSTS = [
  {
    id: 101,
    user: USERS[0],
    body: 'Just shipped a new design system for our team 🎉 Six months of work, hundreds of components, and countless iterations. Sometimes the hardest part isn't the design — it's getting everyone to actually use it.',
    image: null,
    likes: 142,
    comments: 18,
    reposts: 24,
    liked: false,
    bookmarked: false,
    time: '2m',
  },
  {
    id: 102,
    user: USERS[2],
    body: 'Hot take: most "senior" engineers are just junior engineers who've made the same mistake 10 times instead of once. Experience = knowing which shortcuts will bite you later.',
    image: null,
    likes: 891,
    comments: 74,
    reposts: 210,
    liked: false,
    bookmarked: false,
    time: '14m',
  },
  {
    id: 103,
    user: USERS[4],
    body: 'Golden hour somewhere in Rajasthan. No filter, no edits. Just light doing what light does.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
    likes: 3204,
    comments: 156,
    reposts: 480,
    liked: false,
    bookmarked: false,
    time: '1h',
  },
  {
    id: 104,
    user: USERS[1],
    body: 'Reminder that "done" is better than "perfect." I've been iterating on this side project for 2 years. Finally launching next week. Let's go.',
    image: null,
    likes: 567,
    comments: 42,
    reposts: 89,
    liked: false,
    bookmarked: false,
    time: '3h',
  },
  {
    id: 105,
    user: USERS[3],
    body: 'Built a tiny CLI tool this weekend to auto-format my git commits. Saved me 3 seconds per commit. At 50 commits/day that's 2.5 minutes saved per day. It took 4 hours to build. It'll pay off in... 96 days.',
    image: null,
    likes: 1102,
    comments: 97,
    reposts: 312,
    liked: false,
    bookmarked: false,
    time: '5h',
  },
];

export const TRENDING = [
  { tag: '#ReactJS', category: 'Technology', count: '42.1K posts' },
  { tag: '#DesignSystems', category: 'Design', count: '18.4K posts' },
  { tag: '#IndieHackers', category: 'Startups', count: '31.2K posts' },
  { tag: '#Photography', category: 'Art', count: '128K posts' },
  { tag: '#OpenSource', category: 'Technology', count: '55.7K posts' },
];

export const SUGGESTIONS = [USERS[0], USERS[2], USERS[4]];
