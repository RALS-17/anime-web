import { useState, useMemo } from 'react'
import { ChevronDown } from 'lucide-react'
import AnimeCard from './AnimeCard'

const ANIME_DATA = [
  {
    id: '1',
    title: 'Attack on Titan: Final Season',
    image: 'https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
    genre: 'Action',
    studioName: 'MAPPA',
    studioLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Mappa_Logo.svg/1200px-Mappa_Logo.svg.png',
    year: '2023',
    description: 'Eren and his allies face their greatest challenge yet as they fight to defend humanity from the advancing Titans and uncover the secrets of their world...',
    likes: 10300,
    comments: 842,
    url: 'https://www.imdb.com/title/tt2560140/',
  },
  {
    id: '2',
    title: 'One Piece',
    image: 'https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
    genre: 'Adventure',
    studioName: 'Toei Animation',
    studioLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Toei_Animation_logo.svg/2560px-Toei_Animation_logo.svg.png',
    year: '1999-Present',
    description: 'Monkey D. Luffy and his pirate crew explore the Grand Line in search of the world\'s ultimate treasure known as "One Piece" to become the next Pirate King...',
    likes: 15700,
    comments: 1200,
    url: 'https://www.imdb.com/title/tt0388629/',
  },
  {
    id: '3',
    title: 'Spirited Away',
    image: 'https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_.jpg',
    genre: 'Fantasy',
    studioName: 'Studio Ghibli',
    studioLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png',
    year: '2001',
    description: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts...',
    likes: 9400,
    comments: 763,
    url: 'https://www.imdb.com/title/tt0245429/',
  },
  {
    id: '4',
    title: 'Demon Slayer',
    image: 'https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y0YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg',
    genre: 'Action',
    studioName: 'ufotable',
    studioLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Ufotable_logo.svg/1200px-Ufotable_logo.svg.png',
    year: '2019-Present',
    description: 'A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to find a cure...',
    likes: 12800,
    comments: 952,
    url: 'https://www.imdb.com/title/tt9335498/',
  },
  {
    id: '5',
    title: 'Jujutsu Kaisen',
    image: 'https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg',
    genre: 'Supernatural',
    studioName: 'MAPPA',
    studioLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Mappa_Logo.svg/1200px-Mappa_Logo.svg.png',
    year: '2020-Present',
    description: 'A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman school to be able to locate the demon\'s other body parts...',
    likes: 11500,
    comments: 879,
    url: 'https://www.imdb.com/title/tt12343534/',
  },
  {
    id: '6',
    title: 'My Hero Academia',
    image: 'https://m.media-amazon.com/images/M/MV5BMTMwMDM4N2EtOTJiYy00OTQ0LThlZDYtYWUwOWFlY2IxZGVjXkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg',
    genre: 'Superhero',
    studioName: 'Bones',
    studioLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bones_logo.svg/1200px-Bones_logo.svg.png',
    year: '2016-Present',
    description: 'In a world where people with superpowers (known as "Quirks") are the norm, Izuku Midoriya has dreams of being a hero despite being bullied for not having a Quirk...',
    likes: 10200,
    comments: 824,
    url: 'https://www.imdb.com/title/tt5626028/',
  },
]

const LATEST_ANIME = [
  {
    id: '7',
    title: 'Chainsaw Man',
    image: 'https://m.media-amazon.com/images/M/MV5BZmUzOWFiNDAtNGRmZi00NTIxLWJiMTUtYzhkZGRlNzg1ZjFmXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg',
    genre: 'Action',
    studioName: 'MAPPA',
    studioLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Mappa_Logo.svg/1200px-Mappa_Logo.svg.png',
    year: '2022',
    description: 'Following a betrayal, a young man left for dead is reborn as a powerful devil-human hybrid after merging with his pet devil and is soon enlisted into an organization...',
    likes: 9800,
    comments: 732,
    url: 'https://www.imdb.com/title/tt13616990/',
  },
  {
    id: '8',
    title: 'Cyberpunk: Edgerunners',
    image: 'https://m.media-amazon.com/images/M/MV5BYzM1ZTI0ZDMtNjM5My00MmUyLWIwZjYtOTRiYTUxMGY2ODU2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg',
    genre: 'Sci-Fi',
    studioName: 'Studio Trigger',
    studioLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Studio_Trigger_logo.svg/1200px-Studio_Trigger_logo.svg.png',
    year: '2022',
    description: 'In a dystopia overrun by corruption, crime, and cybernetic implants, an impulsive but talented street kid named David dreams of a better life and decides to become an edgerunner...',
    likes: 8700,
    comments: 645,
    url: 'https://www.imdb.com/title/tt12590266/',
  },
  {
    id: '9',
    title: 'Death Note',
    image: 'https://m.media-amazon.com/images/M/MV5BMjA0MDczNzM5N15BMl5BanBnXkFtZTgwMTAyMzA1OTE@._V1_.jpg',
    genre: 'Thriller',
    studioName: 'Madhouse',
    studioLogo: 'https://upload.wikimedia.org/wikipedia/en/7/75/Madhouse_Logo.svg',
    year: '2006–2007',
    description: 'A high school student discovers a supernatural notebook that allows him to kill anyone by writing their name. As he attempts to cleanse the world, a genius detective aims to stop him...',
    likes: 13100,
    comments: 1100,
    url: 'https://www.imdb.com/title/tt0877057/',
  },
]

interface FilterState {
  genres: Set<string>
  season: string
}

interface AnimeFeedProps {
  searchQuery: string
  likedAnime: string[]
  onToggleLike: (animeId: string) => void
  onShowToast: (message: string, type: 'success' | 'error' | 'info') => void
}

export default function AnimeFeed({ searchQuery, likedAnime, onToggleLike }: AnimeFeedProps) {
  const [activeTab, setActiveTab] = useState<'trending' | 'latest' | 'watchlist'>('trending')
  const [filterOpen, setFilterOpen] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    genres: new Set(),
    season: 'all',
  })

  const genres = ['Action', 'Adventure', 'Fantasy', 'Comedy', 'Supernatural', 'Superhero', 'Sci-Fi', 'Thriller']

  const filteredData = useMemo(() => {
    let data = activeTab === 'trending' ? ANIME_DATA : activeTab === 'latest' ? LATEST_ANIME : likedAnime.length > 0 ? [...ANIME_DATA, ...LATEST_ANIME].filter(anime => likedAnime.includes(anime.id)) : []
    
    // Filter by genre
    if (filters.genres.size > 0) {
      data = data.filter(anime => filters.genres.has(anime.genre))
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      data = data.filter(anime => 
        anime.title.toLowerCase().includes(query) ||
        anime.description.toLowerCase().includes(query) ||
        anime.genre.toLowerCase().includes(query) ||
        anime.studioName.toLowerCase().includes(query)
      )
    }
    
    return data
  }, [activeTab, filters.genres, searchQuery, likedAnime])

  const handleGenreToggle = (genre: string) => {
    const newGenres = new Set(filters.genres)
    if (newGenres.has(genre)) {
      newGenres.delete(genre)
    } else {
      newGenres.add(genre)
    }
    setFilters({ ...filters, genres: newGenres })
  }

  const handleClearFilters = () => {
    setFilters({
      genres: new Set(),
      season: 'all',
    })
    setFilterOpen(false)
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Filter Container */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Tabs */}
          <div className="flex gap-3 overflow-x-auto pb-2 sm:pb-0">
            <button
              onClick={() => setActiveTab('trending')}
              className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                activeTab === 'trending'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              🔥 Popular Now
            </button>
            <button
              onClick={() => setActiveTab('latest')}
              className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                activeTab === 'latest'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              ✨ New Releases
            </button>
            <button
              onClick={() => setActiveTab('watchlist')}
              className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                activeTab === 'watchlist'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              📚 My Watchlist
            </button>
          </div>

          {/* Filter Button */}
          <div className="relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary transition-colors"
            >
              🔍 Filter
              <ChevronDown size={18} className={`transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Filter Menu */}
            {filterOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-700 rounded-xl shadow-2xl p-6 z-20">
                <div className="space-y-4">
                  {/* Genres */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Genres</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {genres.map(genre => (
                        <label key={genre} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={filters.genres.has(genre)}
                            onChange={() => handleGenreToggle(genre)}
                            className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                          />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{genre}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-gray-600">
                    <button
                      onClick={() => setFilterOpen(false)}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all font-medium"
                    >
                      Apply
                    </button>
                    <button
                      onClick={handleClearFilters}
                      className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors font-medium"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content Area */}
        {activeTab === 'watchlist' ? (
          <div className="text-center py-16 bg-white dark:bg-gray-700 rounded-2xl">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Build Your Anime Collection!</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Anime you add to your watchlist will appear here.</p>
            <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:shadow-lg transition-all font-medium">
              Discover Anime
            </button>
          </div>
        ) : (
          <>
            {/* Anime Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredData.length > 0 ? (
                filteredData.map((anime, index) => (
                  <AnimeCard
                    key={anime.id}
                    {...anime}
                    index={index}
                    isLiked={likedAnime.includes(anime.id)}
                    onLikeClick={() => onToggleLike(anime.id)}
                    onCardClick={() => {}}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No anime found</h3>
                  <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filters</p>
                </div>
              )}
            </div>

            {/* Load More Button */}
            <div className="flex justify-center">
              <button className="px-8 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-full border-2 border-gray-200 dark:border-gray-600 hover:border-primary dark:hover:border-primary transition-colors font-medium hover:shadow-lg">
                Load More Anime
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
