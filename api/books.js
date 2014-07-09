var Backbone = require('backbone');

var books = new Backbone.Collection([
  { id: 1, title: 'As I Lay Dying', author: 'Jonathan Swift', year: 1930, description: 'As I Lay Dying is a novel by American author William Faulkner. Faulkner said that he wrote the novel from midnight to 4:00 AM over the course of six weeks and that he did not change a word of it.[1] Faulkner wrote it while working at a power plant, published it in 1930, and described it as a "tour de force." Faulkner\'s seventh novel, it is consistently ranked among the best novels of 20th-century literature.[2][3][4][5] The title derives from Book XI of Homer\'s The Odyssey, wherein Agamemnon speaks to Odysseus: "As I lay dying, the woman with the dog\'s eyes would not close my eyes as I descended into Hades."', img: 'http://upload.wikimedia.org/wikipedia/en/0/08/AsILayDying.jpg' },
  { id: 2, title: 'Gulliver\'s Travels', author: 'William Faulkner', year: 1930, description: 'Travels into Several Remote Nations of the World. In Four Parts. By Lemuel Gulliver, First a Surgeon, and then a Captain of Several Ships, better known simply as Gulliver\'s Travels (1726, amended 1735), is a novel by Irish writer and clergyman Jonathan Swift, that is both a satire on human nature and a parody of the "travellers\' tales" literary sub-genre. It is Swift\'s best known full-length work, and a classic of English literature.', img: 'http://upload.wikimedia.org/wikipedia/commons/4/43/Gullivers_travels.jpg' },
  { id: 3, title: 'Lord of the Flies', author: 'William Golding', year: 1954, description: 'Lord of the Flies is a 1954 dystopian novel by Nobel Prize-winning English author William Golding about a group of British boys stuck on an uninhabited island who try to govern themselves with disastrous results. Its stances on the already controversial subjects of human nature and individual welfare versus the common good earned it position 68 on the American Library Association’s list of the 100 most frequently challenged books of 1990–1999.[2] The novel is a reaction to the youth novel The Coral Island by R. M. Ballantyne.', img: 'http://upload.wikimedia.org/wikipedia/en/9/9b/LordOfTheFliesBookCover.jpg' },
  { id: 4, title: 'I Am Legend', author: 'Richard Matheson', year: 1954, description: 'I Am Legend is a 1954 horror fiction novel by American writer Richard Matheson. It was influential in the development of the zombie genre and in popularizing the concept of a worldwide apocalypse due to disease. The novel was a success and was adapted to film as The Last Man on Earth in 1964, as The Omega Man in 1971, and as I Am Legend in 2007, along with a direct-to-video 2007 production capitalizing on that film, I Am Omega. The novel was also the inspiration behind the 1968 film Night of the Living Dead.', img: 'http://upload.wikimedia.org/wikipedia/en/c/c1/IAmLegend25028.jpg' },
  { id: 5, title: 'Atonement', author: 'Ian McEwan', year: 2001, description: 'Atonement is a British family saga novel written by author Ian McEwan and published in 2001. It is about understanding and responding to the need for atonement. Set in three time periods of pre/present/post-World War II England/France, it covers a young upper-class girl\'s half-innocent mistake that ruins lives, and her adulthood in its shadow, which leads her into a reflection on the nature of writing.', img: 'http://upload.wikimedia.org/wikipedia/en/6/6d/Atonement_%28novel%29.jpg' },
  { id: 6, title: 'Emma', author: 'Jane Austen', year: 1815, description: 'Emma, by Jane Austen, is a novel about youthful hubris and the perils of misconstrued romance. The novel was first published in December 1815. As in her other novels, Austen explores the concerns and difficulties of genteel women living in Georgian-Regency England; she also creates a lively comedy of manners among her characters.', img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/EmmaTitlePage.jpg/1200px-EmmaTitlePage.jpg' },
  { id: 7, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', year: 1000, description: 'The Count of Monte Cristo (French: Le Comte de Monte-Cristo) is an adventure novel by French author Alexandre Dumas (père) completed in 1844. It is one of the author\'s most popular works, along with The Three Musketeers. Like many of his novels, it is expanded from plot outlines suggested by his collaborating ghostwriter Auguste Maquet.[1]', img: 'http://upload.wikimedia.org/wikipedia/commons/d/d6/Louis_Fran%C3%A7ais-Dant%C3%A8s_sur_son_rocher.jpg' }
]);

module.exports = function(api) {
  api.route('/api/v1/books')
    .get(function(req, res) {
      res.json(books.toJSON());
    });

  api.route('/api/v1/books/:id')
    .get(function(req, res) {
      var book = books.get(req.params.id);
      res.json(book.toJSON());
    });
};
