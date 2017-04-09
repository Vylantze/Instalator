const Database = {
  'Cinderella Girls Theater 811': { 
    name: 'Cinderella Girls Theater 811', 
    lang: 'Japanese', // original language
    link: {
      'Japanese': '/public/file/example_manga.jpg', 
      'English': '/public/file/example_manga_english.png', 
    },
    img: true, // is it an image, if it is, img details
    imgHeight: '2103px', 
    imgWidth: '480px', 
    overlayLocations: [
      [ 83, 1.5, 13, 10, ],
      [ 7, 15, 13, 8, ],
      [ 86, 26.5, 13, 13, ],
      [ 1, 26.5, 16, 10, ],
      [ 78, 46, 16, 10, ],
      [ 21, 47, 16, 10, ],
      [ 85, 64.2, 14, 12, ],
      [ 1, 64.2, 20, 12, ],
      [ 85, 83.05, 14, 16, ],
      [ 1, 83.05, 19, 12, ],
    ],
    translatedLines: {
      English: [
        "This is truly a refined place, isn't it?",
        'Producer',
        'Both the atmos-phere and the food here are top class.',
        'I might have drunk too much because of that...',
        'But for tonight at the very least...',
        'Let us enjoy this time to the fullest',
        'Oh? Am I not going to say any puns today, you ask?',
        'I am not so uncivilised that I would ruin such an evening with one',
        'So for this Christmas with just the two of us, let us enjoy...',
        'This Holy Night, with all our migh-',
      ],
    },
  },
  'Cinderella Girls Photoshoot': { 
    name: 'Cinderella Girls Photoshoot', 
    lang: 'Japanese', // original language
    link: {
      'Japanese': '/public/file/example_manga_2.png', 
      'English': '/public/file/example_manga_2_English.png', 
    },
    img: true, // is it an image, if it is, img details
    imgHeight: '1680px', 
    imgWidth: '560px', 
    overlayLocations: [
      [ 33, 41.5, 33, 6, ],
      [ 1, 41, 17, 7, ],
      [ 1, 50, 17, 11, ],
      [ 75, 61.5, 25, 6.5, ],
      [ 23, 61.3, 23, 5.5, ],
      [ 1.5, 64, 10, 5, ],
      [ 1, 79, 20, 15, 50, ],
    ],
    translatedLines: {
      English: [
        'This word has been censored due to containing a forbidden word',
        'No, no',
        "Isn't this just plain weird!!??",
        "Even if you say that, it is the decision of the top brass...",
        "Looks like we have no choice but to change the name, nya",
        "So cool...",
        "Stop it nya!",
      ],
    },
  },
  '9Gag': { 
    name: '9Gag', 
    lang: 'English', // original language
    link: {
      'English': '/public/file/example_3.jpg',
      'Japanese': '/public/file/example_3_Japanese.png',
      'Chinese': '/public/file/example_3_Chinese.png',
    },
    img: true, // is it an image, if it is, img details
    imgHeight: '640px', 
    imgWidth: '640px', 
    overlayLocations: [
      [ 3, 4, 15, 11, 30 ],
      [ 82, 4, 15, 11, 30 ],
      [ 7, 63, 90, 35, 40 ],
    ],
    translatedLines: {
      'Japanese': [
        '六',
        '九',
        '君は正しでも、私は間違っていない。君はただ私の人生を見たことがなかった',
      ],
      'Chinese': [
        '六',
        '九',
        '只是因为你是对的并不意味着我错了。你刚刚没有看从我的生活',
      ],
    },
  },
};

export default Database;