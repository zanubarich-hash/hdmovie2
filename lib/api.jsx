// lib/api.jsx

const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_TMDB_API_URL || 'https://api.themoviedb.org/3';

// Debug API configuration
console.log('TMDB API Configuration:', {
  hasApiKey: !!apiKey,
  apiKeyLength: apiKey ? apiKey.length : 0,
  apiUrl: apiUrl
});

// Fungsi helper untuk fetch data yang lebih robust
const fetchApi = async (path, options = {}) => {
  if (!apiKey) {
    console.error('API Key Error: NEXT_PUBLIC_TMDB_API_KEY is not configured');
    throw new Error('API keys are not configured. Please check your .env.local file.');
  }

  // Handle query parameters yang sudah ada di path
  const separator = path.includes('?') ? '&' : '?';
  const url = `${apiUrl}${path}${separator}api_key=${apiKey}&language=en-US`;
  
  // Log URL tanpa API key untuk keamanan
  console.log('Fetching from:', url.replace(apiKey, '[REDACTED]'));

  try {
    const res = await fetch(url, {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    // Cek content type
    const contentType = res.headers.get('content-type');
    const isJson = contentType && contentType.includes('application/json');

    if (!res.ok) {
      // Jika response JSON, parse sebagai JSON
      if (isJson) {
        try {
          const errorData = await res.json();
          throw new Error(`API Error ${res.status}: ${errorData.status_message || res.statusText}`);
        } catch (jsonError) {
          throw new Error(`API Error ${res.status}: ${res.statusText}`);
        }
      } else {
        // Jika bukan JSON, ambil sebagai text
        const errorText = await res.text();
        console.error('Non-JSON Error Response (first 300 chars):', errorText.substring(0, 300));
        throw new Error(`API Error ${res.status}: ${res.statusText} - Received HTML response`);
      }
    }

    // Pastikan response adalah JSON
    if (!isJson) {
      const textResponse = await res.text();
      console.error('Expected JSON but got:', contentType);
      console.error('Response sample:', textResponse.substring(0, 300));
      throw new Error('API returned non-JSON response');
    }

    return await res.json();
  } catch (error) {
    console.error('Fetch API Error:', error.message);
    // Re-throw error dengan context lebih jelas
    if (error.message.includes('API returned non-JSON') || 
        error.message.includes('Received HTML response')) {
      throw new Error(`TMDB API configuration issue. Check your API key and network. Original: ${error.message}`);
    }
    throw error;
  }
};

// Fungsi untuk mendapatkan film berdasarkan ID
export async function getMovieById(movieId) {
  try {
    const data = await fetchApi(`/movie/${movieId}`);
    return data;
  } catch (error) {
    console.error(`Error fetching movie details for ID ${movieId}:`, error.message);
    return null;
  }
}

// Fungsi untuk mendapatkan serial TV berdasarkan ID
export async function getTvSeriesById(tvId) {
  try {
    const data = await fetchApi(`/tv/${tvId}`);
    return data;
  } catch (error) {
    console.error(`Error fetching TV series details for ID ${tvId}:`, error.message);
    return null;
  }
}

// Fungsi untuk mendapatkan video (trailer) film
export async function getMovieVideos(movieId) {
  try {
    const data = await fetchApi(`/movie/${movieId}/videos`);
    return data.results || [];
  } catch (error) {
    console.error(`Error fetching movie videos for ID ${movieId}:`, error.message);
    return [];
  }
}

// Fungsi untuk mendapatkan video (trailer) serial TV
export async function getTvSeriesVideos(tvId) {
  try {
    const data = await fetchApi(`/tv/${tvId}/videos`);
    return data.results || [];
  } catch (error) {
    console.error(`Error fetching TV series videos for ID ${tvId}:`, error.message);
    return [];
  }
}

// Fungsi untuk mendapatkan kredit (aktor dan kru) film
export async function getMovieCredits(movieId) {
  try {
    const data = await fetchApi(`/movie/${movieId}/credits`);
    return data;
  } catch (error) {
    console.error(`Error fetching movie credits for ID ${movieId}:`, error.message);
    return null;
  }
}

// Fungsi untuk mendapatkan ulasan film
export async function getMovieReviews(movieId) {
  try {
    const data = await fetchApi(`/movie/${movieId}/reviews`);
    return data.results || [];
  } catch (error) {
    console.error(`Error fetching movie reviews for ID ${movieId}:`, error.message);
    return [];
  }
}

// Fungsi untuk mendapatkan kredit (aktor dan kru) serial TV
export async function getTvSeriesCredits(tvId) {
  try {
    const data = await fetchApi(`/tv/${tvId}/credits`);
    return data;
  } catch (error) {
    console.error(`Error fetching TV series credits for ID ${tvId}:`, error.message);
    return null;
  }
}

// Fungsi untuk mendapatkan ulasan serial TV
export async function getTvSeriesReviews(tvId) {
  try {
    const data = await fetchApi(`/tv/${tvId}/reviews`);
    return data.results || [];
  } catch (error) {
    console.error(`Error fetching TV series reviews for ID ${tvId}:`, error.message);
    return [];
  }
}

// Fungsi untuk mencari film atau serial TV berdasarkan query
export async function searchMoviesAndTv(query, page = 1) {
  if (!query || query.trim() === '') {
    return [];
  }
  
  try {
    const data = await fetchApi(`/search/multi?query=${encodeURIComponent(query.trim())}&page=${page}`);
    return data.results || [];
  } catch (error) {
    console.error(`Error fetching search results for query '${query}':`, error.message);
    return [];
  }
}

// Fungsi untuk mendapatkan film berdasarkan kategori
export async function getMoviesByCategory(category, page = 1) {
  try {
    const data = await fetchApi(`/movie/${category}?page=${page}`);
    return data.results || [];
  } catch (error) {
    console.error(`Error fetching ${category} movies:`, error.message);
    return [];
  }
}

// Fungsi untuk mendapatkan serial TV berdasarkan kategori
export async function getTvSeriesByCategory(category, page = 1) {
  try {
    const data = await fetchApi(`/tv/${category}?page=${page}`);
    return data.results || [];
  } catch (error) {
    console.error(`Error fetching ${category} TV series:`, error.message);
    return [];
  }
}

// Fungsi untuk mendapatkan film serupa
export async function getSimilarMovies(movieId) {
  try {
    const data = await fetchApi(`/movie/${movieId}/similar`);
    return data.results || [];
  } catch (error) {
    console.error(`Error fetching similar movies for ID ${movieId}:`, error.message);
    return [];
  }
}

// Fungsi untuk mendapatkan serial TV serupa
export async function getSimilarTvSeries(tvId) {
  try {
    const data = await fetchApi(`/tv/${tvId}/similar`);
    return data.results || [];
  } catch (error) {
    console.error(`Error fetching similar TV series for ID ${tvId}:`, error.message);
    return [];
  }
}

// Fungsi untuk mencari film berdasarkan judul
export const getMovieByTitle = async (title) => {
  if (!title || title.trim() === '') {
    return null;
  }
  
  try {
    const data = await fetchApi(`/search/movie?query=${encodeURIComponent(title.trim())}`);
    return data.results && data.results.length > 0 ? data.results : null;
  } catch (error) {
    console.error(`Error fetching movie by title: ${title}`, error.message);
    return null;
  }
};

// Fungsi untuk mencari serial TV berdasarkan judul
export const getTvSeriesByTitle = async (title) => {
  if (!title || title.trim() === '') {
    return null;
  }
  
  try {
    const data = await fetchApi(`/search/tv?query=${encodeURIComponent(title.trim())}`);
    return data.results && data.results.length > 0 ? data.results : null;
  } catch (error) {
    console.error(`Error fetching TV series by title: ${title}`, error.message);
    return null;
  }
};

// Fungsi untuk mendapatkan daftar genre film
export async function getMovieGenres() {
  try {
    const data = await fetchApi('/genre/movie/list');
    return data.genres || [];
  } catch (error) {
    console.error('Error fetching movie genres:', error.message);
    return [];
  }
}

// Fungsi untuk mendapatkan daftar genre serial TV
export async function getTvSeriesGenres() {
  try {
    const data = await fetchApi('/genre/tv/list');
    return data.genres || [];
  } catch (error) {
    console.error('Error fetching TV series genres:', error.message);
    return [];
  }
}

// Fungsi untuk mendapatkan film berdasarkan genre
export async function getMoviesByGenre(genreId, page = 1) {
  try {
    const data = await fetchApi(`/discover/movie?with_genres=${genreId}&page=${page}`);
    return data.results || [];
  } catch (error) {
    console.error(`Error fetching movies by genre ID ${genreId}:`, error.message);
    return [];
  }
}

// Fungsi untuk mendapatkan serial TV berdasarkan genre
export async function getTvSeriesByGenre(genreId, page = 1) {
  try {
    const data = await fetchApi(`/discover/tv?with_genres=${genreId}&page=${page}`);
    return data.results || [];
  } catch (error) {
    console.error(`Error fetching TV series by genre ID ${genreId}:`, error.message);
    return [];
  }
}

// Fungsi untuk mendapatkan film trending harian
export async function getTrendingMoviesDaily(page = 1) {
  try {
    const data = await fetchApi(`/trending/movie/day?page=${page}`);
    console.log(`Fetched ${data.results?.length || 0} trending movies`);
    return data.results || [];
  } catch (error) {
    console.error('Error fetching daily trending movies:', error.message);
    return [];
  }
}

// Fungsi untuk mendapatkan serial TV trending harian
export async function getTrendingTvSeriesDaily(page = 1) {
  try {
    const data = await fetchApi(`/trending/tv/day?page=${page}`);
    console.log(`Fetched ${data.results?.length || 0} trending TV series`);
    return data.results || [];
  } catch (error) {
    console.error('Error fetching daily trending TV series:', error.message);
    return [];
  }
}

// Fungsi untuk mendapatkan film berdasarkan keyword ID (erotic)
export async function getMoviesByKeyword(keywordId = 256466, page = 1) {
  try {
    console.log(`Fetching movies by keyword: ${keywordId}, page: ${page}`);
    const data = await fetchApi(`/discover/movie?with_keywords=${keywordId}&page=${page}`);
    console.log(`Movies by keyword result:`, data.results?.length || 0);
    return data.results || [];
  } catch (error) {
    console.error(`Error fetching movies by keyword ID ${keywordId}:`, error.message);
    return [];
  }
}

// Fungsi untuk mendapatkan film dari list ID (adult)
export async function getMoviesByList(listId = "143347", page = 1) {
  try {
    console.log(`Fetching movies from list: ${listId}, page: ${page}`);
    const data = await fetchApi(`/list/${listId}?page=${page}`);
    console.log(`Movies from list result:`, data.items?.length || 0);
    return data.items || [];
  } catch (error) {
    console.error(`Error fetching movies from list ID ${listId}:`, error.message);
    return [];
  }
}

// Fungsi untuk membuat slug dari judul
export const createSlug = (title) => {
  if (!title) return '';
  
  return title
    .toString()
    .toLowerCase()
    .normalize('NFD') // Memisahkan diakritik
    .replace(/[\u0300-\u036f]/g, '') // Hapus diakritik
    .replace(/[^a-z0-9\s-]/g, '') // Hapus karakter tidak valid
    .replace(/\s+/g, '-') // Ganti spasi dengan dash
    .replace(/-+/g, '-') // Gabungkan multiple dash
    .trim();
};

// Helper function untuk mendapatkan URL gambar yang aman
export const getImageUrl = (path, size = 'w500') => {
  if (!path) return '/images/placeholder.jpg';
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

// Fungsi untuk test koneksi API
export const testApiConnection = async () => {
  try {
    console.log('Testing TMDB API connection...');
    const testUrl = `https://api.themoviedb.org/3/configuration?api_key=${apiKey}`;
    
    const response = await fetch(testUrl);
    const contentType = response.headers.get('content-type');
    
    if (response.ok && contentType && contentType.includes('application/json')) {
      const data = await response.json();
      console.log('✅ TMDB API connection successful');
      return { success: true, data };
    } else {
      const text = await response.text();
      console.error('❌ TMDB API connection failed:', {
        status: response.status,
        statusText: response.statusText,
        contentType: contentType,
        preview: text.substring(0, 200)
      });
      return { success: false, error: `Status: ${response.status}` };
    }
  } catch (error) {
    console.error('❌ TMDB API connection error:', error.message);
    return { success: false, error: error.message };
  }
};