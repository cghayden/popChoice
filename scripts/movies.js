// Movies info
const movies = [
  {
    title: 'Avatar: The Way of the Water',
    releaseYear: '2022',
    content:
      "Avatar: The Way of Water (3 hr 10 min): Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home. Action, Adventure, Fantasy film released in 2022. Directed by James Cameron Written by James Cameron, Rick Jaffa and Amanda Silver. Starring Sam Worthington, Zoe Saldana and Sigourney Weaver. Rated 7.6 on IMDB",
  },
  {
    title: 'The Fabelmans',
    releaseYear: '2022',
    content:
      'The Fabelmans (2 hr 31 min): Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth. Drama film released in 2022. Directed by Steven Spielberg. Written by Steven Spielberg and Tony Kushner. Starring Michelle Williams, Gabriel LaBelle & Paul Dano. Rated 7.5 on IMDB',
  },
  {
    title: 'Troll',
    releaseYear: '2022',
    content:
      'Troll (1 hr 41 min): Deep in the Dovre mountain, something gigantic wakes up after a thousand years in captivity. The creature destroys everything in its path and quickly approaches Oslo. Norwegian action, adventure, drama film released in 2022. Directed by Roar Uthaug. Written by Espen Aukan and Roar Uthaug. Starring Ine Marie Wilmann, Kim Falck and Mads Sjøgård Pettersen. Rated 5.8 on IMDB',
  },
  {
    title: 'Everything Everywhere All at Once',
    releaseYear: '2022',
    content:
      'Everything Everywhere All at Once (2 hr 19 min): A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led. Action, Adventure, Comedy film released in 2022. Directed by Daniel Kwan and Daniel Scheinert. Written by Daniel Kwan and Daniel Scheinert. Starring: Michelle Yeoh, Stephanie Hsu and Jamie Lee Curtis. Rated 7.8 on IMDB',
  },
  {
    title: 'Oppenheimer',
    releaseYear: '2023',
    content:
      'Oppenheimer (3 hr): The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb. Biography, Drama, History film released in 2023. Directed by Christopher Nolan. Written by Christopher Nolan, Kai Bird and Martin Sherwin. Starring Cillian Murphy, Emily Blunt and Matt Damon. Rated 8.5 on IMDB',
  },
  {
    title: 'Barbie',
    releaseYear: '2023',
    content:
      'Barbie (1 hr 54 min): Barbie suffers a crisis that leads her to question her world and her existence. Adventure, Comedy, Fantasy film released in 2023. Directed by Greta Gerwig. Written by Greta Gerwig and Noah Baumbach. Starring Margot Robbie, Ryan Gosling and Issa Rae. Rated 7.0 on IMDB',
  },
  {
    title: 'Spider-Man: Across the Spider-Verse',
    releaseYear: '2023',
    content:
      'Spider-Man: Across the Spider-Verse (2 hr 20 min): Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero. Animation, Action, Adventure film released in 2023. Directed by Joaquim Dos Santos, Kemp Powers an Justin K. Thompson. Written by Phil Lord, Christopher Miller and Dave Callaham. Starring: Shameik Moore, Hailee Steinfeld and Brian Tyree Henry. Rated 8.7 on IMDB',
  },
  {
    title: 'Pathaan',
    releaseYear: '2023',
    content:
      'Pathaan (2 hr 26 min): An Indian agent races against a doomsday clock as a ruthless mercenary, with a bitter vendetta, mounts an apocalyptic attack against the country. Bollywood action, adventure, triller film released in 2023. Directed by Siddharth Anand. Written by Shridhar Raghavan, Abbas Tyrewala and Siddharth Anand. Starring Shah Rukh Khan, Deepika Padukone and John Abraham. Rated 5.9 on IMDB',
  },
  {
    title: 'RRR',
    releaseYear: '2022',
    content:
      'RRR (3 hr 7 min): A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s. South Indian action, drama film released in 2022. Directed by S. S. Rajamouli. Written by Vijayendra Prasad, S. S. Rajamouli and Sai Madhav Burra. Starring N. T. Rama Rao Jr., Ram Charan and Ajay Devgn. Rated 7.8 on IMDB',
  },
  {
    title: 'Top Gun: Maverick',
    releaseYear: '2022',
    content: `Top Gun: Maverick (2 hr 10 min): After more than thirty years of service as one of the Navy's top aviators, Pete "Maverick" Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him. Action, Drama film released in 2022. Directed by Joseph Kosinski. Written by Peter Craig, Justin Marks, and Eric Warren Singer. Starring Tom Cruise, Jennifer Connelly, and Miles Teller. Rated 8.4 on IMDB`,
  },
  {
    title: 'The Batman',
    releaseYear: '2022',
    content: `The Batman (2 hr 56 min): When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement. Action, Crime, Drama film released in 2022. Directed by Matt Reeves. Written by Matt Reeves and Peter Craig. Starring Robert Pattinson, Zoë Kravitz, and Jeffrey Wright. Rated 7.9 on IMDB`,
  },
  {
    title: 'Doctor Strange in the Multiverse of Madness',
    releaseYear: '2022',
    content:
      'Doctor Strange in the Multiverse of Madness (2 hr 6 min): Dr. Stephen Strange casts a forbidden spell that opens a portal to the multiverse, and the threat that emerges is too great for his team to handle. Action, Adventure, Fantasy film released in 2022. Directed by Sam Raimi. Written by Michael Waldron. Starring Benedict Cumberbatch, Elizabeth Olsen, and Chiwetel Ejiofor. Rated 7.1 on IMDB',
  },
  {
    title: 'Jurassic World: Dominion',
    releaseYear: '2022',
    content:
      'Jurassic World: Dominion (2 hr 27 min): Four years after the destruction of Isla Nublar, dinosaurs now live—and hunt—alongside humans all over the world. Action, Adventure, Sci-Fi film released in 2022. Directed by Colin Trevorrow. Written by Emily Carmichael and Colin Trevorrow. Starring Chris Pratt, Bryce Dallas Howard, and Laura Dern. Rated 5.7 on IMDB',
  },
  {
    title: 'Lightyear',
    releaseYear: '2022',
    content:
      'Lightyear (1 hr 40 min): Legendary space ranger Buzz Lightyear embarks on an intergalactic adventure alongside a group of ambitious recruits and his robot companion. Animation, Action, Adventure film released in 2022. Directed by Angus MacLane. Written by Angus MacLane and Jason Headley. Starring Chris Evans, Keke Palmer, and Peter Sohn. Rated 5.6 on IMDB',
  },
  {
    title: 'Black Panther: Wakanda Forever',
    releaseYear: '2022',
    content:
      " Black Panther: Wakanda Forever (2 hr 41 min): The nation of Wakanda fights to protect its homeland from intervening world powers in the wake of King Challa's death. Action, Adventure, Drama film released in 2022. Directed by Ryan Coogler. Written by Ryan Coogler and Joe Robert Cole. Starring Letitia Wright, Lupita Nyong'o, and Danai Gurira. Rated 7.3 on IMDB",
  },
  {
    title: 'Glass Onion: A Knives Out Mystery',
    releaseYear: '2022',
    content:
      'Glass Onion: A Knives Out Mystery (2 hr 19 min): Famed Southern detective Benoit Blanc travels to Greece for his latest case. Comedy, Crime, Drama film released in 2022. Directed by Rian Johnson. Written by Rian Johnson. Starring Daniel Craig, Edward Norton, and Janelle Monáe. Rated 7.1 on IMDB',
  },
  {
    title: 'Back to the Future',
    releaseYear: '1985',
    content:
      'Back to the Future (1 hr 56 min): Marty McFly, a teenager, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, eccentric scientist Doc Brown. Adventure, Comedy, Sci-Fi film released in 1985. Directed by Robert Zemeckis. Written by Robert Zemeckis and Bob Gale. Starring Michael J. Fox, Christopher Lloyd, and Lea Thompson. Rated 8.5 on IMDB',
  },
  {
    title: 'The Empire Strikes Back',
    releaseYear: '1980',
    content:
      'The Empire Strikes Back (2 hr 4 min): After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader. Action, Adventure, Fantasy film released in 1980. Directed by Irvin Kershner. Written by Leigh Brackett and Lawrence Kasdan. Starring Mark Hamill, Harrison Ford, and Carrie Fisher. Rated 8.7 on IMDB',
  },
  {
    title: 'E.T. the Extra-Terrestrial',
    releaseYear: '1982',
    content:
      'E.T. the Extra-Terrestrial (1 hr 55 min): A troubled child summons the courage to help a friendly alien escape Earth and return to his home world. Family, Sci-Fi film released in 1982. Directed by Steven Spielberg. Written by Melissa Mathison. Starring Henry Thomas, Drew Barrymore, and Peter Coyote. Rated 7.9 on IMDB',
  },
  {
    title: 'The Shining',
    releaseYear: '1980',
    content:
      'The Shining (2 hr 26 min): A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future. Drama, Horror film released in 1980. Directed by Stanley Kubrick. Written by Stephen King (novel) and Stanley Kubrick. Starring Jack Nicholson, Shelley Duvall, and Danny Lloyd. Rated 8.4 on IMDB',
  },
  {
    title: 'Blade Runner',
    releaseYear: '1982',
    content:
      'Blade Runner (1 hr 57 min): A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator. Action, Drama, Sci-Fi film released in 1982. Directed by Ridley Scott. Written by Hampton Fancher and David Peoples. Starring Harrison Ford, Rutger Hauer, and Sean Young. Rated 8.1 on IMDB',
  },
  {
    title: 'Raiders of the Lost Ark',
    releaseYear: '1981',
    content: `Raiders of the Lost Ark (1 hr 55 min): In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers. Action, Adventure film released in 1981. Directed by Steven Spielberg. Written by Lawrence Kasdan. Starring Harrison Ford, Karen Allen, and Paul Freeman. Rated 8.4 on IMDB`,
  },
  {
    title: 'Ghostbusters',
    releaseYear: '1984',
    content:
      'Ghostbusters (1 hr 45 min): Three former parapsychology professors set up shop as a unique ghost removal service. Action, Comedy, Fantasy film released in 1984. Directed by Ivan Reitman. Written by Dan Aykroyd and Harold Ramis. Starring Bill Murray, Dan Aykroyd, and Sigourney Weaver. Rated 7.8 on IMDB',
  },
  {
    title: 'The Breakfast Club',
    releaseYear: '1985',
    content:
      'The Breakfast Club (1 hr 37 min): Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought. Comedy, Drama film released in 1985. Directed by John Hughes. Written by John Hughes. Starring Emilio Estevez, Judd Nelson, and Molly Ringwald. Rated 7.8 on IMDB',
  },
  {
    title: 'Die Hard',
    releaseYear: '1988',
    content:
      'Die Hard (2 hr 12 min): An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles. Action, Thriller film released in 1988. Directed by John McTiernan. Written by Roderick Thorp (novel) and Jeb Stuart. Starring Bruce Willis, Alan Rickman, and Bonnie Bedelia. Rated 8.2 on IMDB',
  },
  {
    title: "Ferris Bueller's Day Off",
    releaseYear: '1986',
    content: `Ferris Bueller's Day Off (1 hr 43 min): A high school wise guy is determined to have a day off from school, despite what the principal thinks of that. Comedy film released in 1986. Directed by John Hughes. Written by John Hughes. Starring Matthew Broderick, Alan Ruck, and Mia Sara. Rated 7.8 on IMDB`,
  },
]

module.exports = { movies }
