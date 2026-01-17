"use client";

import React from 'react';
import Link from 'next/link';
import { FaHome, FaFilm, FaTv, FaSearch, FaStar, FaUsers, FaGlobe, FaUser, FaCalendar, FaTrophy } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-300">
      {/* Hero Section dengan Optimasi SEO */}
      <div className="bg-gradient-to-b from-purple-900/50 to-slate-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 text-orange-400">
            HDMovie2 Ultimate Movie & TV Series Database Your Complete Cinema Guide
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Your comprehensive guide to 10,000+ movies, 5,000+ TV series, actor profiles, genre pages, and streaming information.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/movie/popular" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <FaFilm /> Browse Movies
            </Link>
            <Link href="/tv-show/popular" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <FaTv /> Browse TV Series
            </Link>
            <Link href="/people" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <FaUser /> Explore Actors
            </Link>
            <Link href="/rankings" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <FaTrophy /> Top Rankings
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Content dengan Deskripsi SEO Extended */}
        <div className="bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm">
          {/* Introduction dengan Konten SEO */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <img
                src="https://live.staticflickr.com/65535/54812181460_747a3f7596_b.jpg"
                alt="Movie reels and cinema tickets - Ultimate movie database for film enthusiasts"
                width={1024}
                height={416}
                className="rounded-xl shadow-2xl mx-auto mb-8"
              />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300">
                Discover the World of Cinema with HDMovie2
				<span className="block text-xl md:text-4xl font-bold mt-2 text-orange-300">
                  America's Premier Movie Database
                </span>
              </h2>
              <div className="text-lg text-gray-400 max-w-4xl mx-auto space-y-4 text-center">
                <p>
                  <strong>HDMovie2</strong> is United America's most complete and comprehensive <strong>movie database</strong> and <strong>TV series information</strong> platform, serving as the definitive online resource for cinephiles, film students, industry professionals, and casual viewers alike. Our platform provides meticulously curated, accurate data spanning over a century of cinematic history, from silent film classics to the latest blockbuster releases and trending TV series. If you're searching for "movie database," "film information," "TV series guide," or "cinema encyclopedia," you've found the ultimate destination.
                </p>
                <p>
                  As a premier <strong>movie database website</strong>, we offer more than just basic information - we deliver an immersive experience that includes detailed user reviews, comprehensive streaming guides across multiple platforms, in-depth actor and filmmaker profiles, complete genre archives, and sophisticated search capabilities that allow users to discover content based on countless criteria. Our <strong>film database</strong> is designed to answer all your questions about movies, from "where to watch [movie title]" to "who directed [film name]" and "what movies are similar to [favorite film]."
                </p>
                <p>
                  Our database features an extensive collection of <strong>over 10,000 movies</strong> and <strong>5,000+ TV series</strong>, each with complete metadata including cast and crew details, production information, technical specifications, awards and nominations, box office performance, critical reception, and viewer ratings. We continuously update our database with new releases, ensuring our users have access to the most current information in the entertainment industry. Whether you need a <strong>movie guide</strong>, <strong>TV show database</strong>, <strong>actor filmography</strong>, or <strong>streaming availability</strong> information, HDMovie2 has you covered.
                </p>
              </div>
            </div>
          </section>

          {/* SEO-Optimized Description Section - Minimal 1500+ Kata dengan Keyword Density Tinggi */}
          <section className="mb-16 bg-gray-900/50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-orange-300">
              Complete Guide to Movies, TV Series and Cinema Database
			  <span className="block text-xl md:text-3xl font-bold mt-2 text-orange-300">
			    HDMovie2 Your Ultimate Film Resource
			  </span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-justify">
              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Introduction to HDMovie2 Database - The Best Movie Information Site</h3>
              
              <p>
                Welcome to <strong>HDMovie2</strong>, the ultimate destination for <strong>movie enthusiasts</strong> and <strong>television series fans</strong>. Our platform represents the culmination of years of data collection, curation, and user experience optimization, designed to serve as the most reliable and comprehensive online resource for cinematic information. Whether you're researching a classic film, discovering new TV shows, or exploring actor filmographies, our <strong>movie database</strong> provides unparalleled depth and accuracy. People searching for "complete movie database," "film information website," or "TV series guide" consistently find HDMovie2 to be their most valuable resource.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Comprehensive Movie Database Features - Find Any Film Information</h3>
              
              <p>
                Our <strong>movie database</strong> stands as one of the most extensive collections of film information available online. Each movie entry includes complete production details, comprehensive cast and crew listings, detailed plot summaries, critical reviews, audience ratings, technical specifications, and streaming availability across multiple platforms. We cover films from every era and genre, including Hollywood blockbusters, independent films, international cinema, documentary features, animated films, and cult classics. When users search for "movie details," "film cast," "movie reviews," or "where to watch movies online," HDMovie2 provides comprehensive answers with our extensive <strong>film database</strong>.
              </p>

              <p>
                The database features advanced filtering capabilities allowing users to search movies by year, genre, director, actor, language, country of origin, runtime, MPAA rating, and more. Each film profile includes related recommendations, similar movies, trivia, goofs, quotes, soundtrack information, and behind-the-scenes details. Our streaming guide shows exactly where each movie is available to watch, whether on Netflix, Amazon Prime, Hulu, Disney+, HBO Max, or other streaming services. For those searching "movies like [title]," "best films of [year]," or "[genre] movies list," our <strong>movie discovery</strong> tools provide perfect solutions.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">TV Series Database and Episode Guides - Complete Television Information</h3>
              
              <p>
                Our <strong>TV series database</strong> provides exhaustive information on thousands of television shows from around the world. Each series includes complete episode guides with detailed summaries, air dates, director and writer credits, guest stars, and viewer ratings for individual episodes. We cover everything from classic sitcoms and drama series to reality TV, anime, documentaries, and limited series. Search queries like "TV show episodes," "series guide," "television database," or "TV series information" lead users to our comprehensive platform where they can find detailed information about any show.
              </p>

              <p>
                The database includes comprehensive season breakdowns, character profiles, series timelines, awards and nominations, behind-the-scenes features, and cancellation or renewal status updates. Our streaming information shows which platforms carry each series and which seasons are available. We also provide information on international availability and regional restrictions where applicable. For those asking "where to watch [TV series]," "TV show seasons," or "series episode guide," HDMovie2 delivers accurate, up-to-date information through our extensive <strong>television database</strong>.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Actor and Filmmaker Profiles - Complete Filmography Database</h3>
              
              <p>
                Our <strong>people database</strong> features detailed profiles for actors, directors, producers, writers, cinematographers, composers, and other industry professionals. Each profile includes biographical information, career timelines, filmography with role details, awards and nominations, personal trivia, and high-quality photo galleries. We track career developments, upcoming projects, and industry news for thousands of entertainment professionals. Search terms like "actor filmography," "director movies," "celebrity profile," or "film crew credits" are perfectly served by our comprehensive <strong>actor database</strong>.
              </p>

              <p>
                The database allows users to explore connections between industry professionals, see who frequently collaborates with whom, and discover new talent based on their interests. Each profile includes related content recommendations and career highlights, making it easy to explore an individual's body of work comprehensively. Whether you're researching "[actor name] movies," "[director] filmography," or "movies with [actor]," our <strong>film people database</strong> provides complete information with our detailed profiles and comprehensive credit listings.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Genre Exploration and Categorization - Movie Genres Database</h3>
              
              <p>
                Our <strong>genre system</strong> provides sophisticated categorization that goes beyond basic labels. We offer detailed genre pages for categories including Action, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, Family, Fantasy, Film-Noir, History, Horror, Music, Musical, Mystery, Romance, Sci-Fi, Sport, Thriller, War, and Western. Each genre page includes sub-genre breakdowns, historical context, notable examples, and recommendations. When users search for "[genre] movies," "best action films," "romantic comedy list," or "horror movie database," they find exactly what they need on HDMovie2.
              </p>

              <p>
                Beyond traditional genres, we also categorize content by mood, theme, setting, and style. Users can discover movies and series based on specific themes like time travel, coming-of-age, heist films, courtroom dramas, or specific historical periods. This sophisticated categorization system helps users discover content that matches their specific interests and preferences. Search queries like "movies about [theme]," "[setting] films," or "films with [style]" are expertly handled by our advanced <strong>movie categorization</strong> system that understands user intent and delivers relevant results.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Year and Decade Archives - Historical Film Database</h3>
              
              <p>
                Our <strong>historical archives</strong> allow users to explore cinema chronologically. Each year page shows all movies released in that year, sorted by popularity, critical reception, and box office performance. Decade overviews provide context about cinematic trends, technological developments, and cultural influences that shaped each era of filmmaking. Common searches like "movies from [year]," "films of the [decade]," or "best movies [year]" are perfectly answered by our comprehensive <strong>yearly movie database</strong> that organizes films by their release date with complete contextual information.
              </p>

              <p>
                The archives include special sections for significant years in cinema history, such as 1939 (often called "Hollywood's Greatest Year"), 1975 (the birth of the modern blockbuster), and 1999 (a landmark year for independent and mainstream cinema). Each archive page includes historical context, notable trends, award winners, and cultural impact analysis. For researchers, students, or casual viewers searching "cinema history," "films by year," or "movie timeline," our <strong>historical film database</strong> provides invaluable resources with accurate dating and contextual information about each era of filmmaking.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Ratings, Rankings, and User Reviews - Movie Rating Database</h3>
              
              <p>
                Our comprehensive <strong>rating system</strong> aggregates scores from major critics, industry awards, and user reviews to provide balanced, reliable evaluations of movies and TV series. The ranking system includes "Best of All Time" lists, annual rankings, genre-specific rankings, and specialized lists like "Hidden Gems," "Cult Classics," and "Award Winners." Search terms like "movie ratings," "film rankings," "best movies list," or "top rated films" direct users to our carefully curated <strong>movie ranking database</strong> that combines critical consensus with audience opinions for balanced evaluations.
              </p>

              <p>
                User reviews on HDMovie2 come from verified viewers and include detailed analysis, spoiler warnings, and content advisories. Our review system encourages thoughtful criticism and helpful recommendations, creating a community of engaged film enthusiasts who contribute to the platform's depth and value. For those looking for "movie reviews," "film criticism," "user ratings," or "audience reviews," our platform provides comprehensive review aggregation from both professional critics and regular viewers, giving balanced perspectives on every film and TV series in our database.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Streaming Guide and Availability - Where to Watch Movies Database</h3>
              
              <p>
                One of our most valuable features is the comprehensive <strong>streaming guide</strong> that shows exactly where every movie and TV series is available to watch. We track availability across dozens of streaming platforms including subscription services, rental services, free platforms, and broadcast television. Our database includes region-specific information and regularly updates to reflect changing licensing agreements. The common search "where to watch [movie title]" is perfectly served by our <strong>streaming availability database</strong> that shows all current options for viewing any film or series.
              </p>

              <p>
                The streaming guide includes price comparisons, quality options (SD, HD, 4K), availability dates, and expiration warnings. We also provide information on physical media availability (DVD, Blu-ray, 4K UHD) and digital purchase options across various platforms. For queries like "streaming movies," "watch online," "movie rental," or "digital purchase," our platform provides comprehensive information about all viewing options, helping users find the most convenient and cost-effective way to watch their desired content through our extensive <strong>movie streaming database</strong>.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Advanced Search and Discovery Tools - Movie Search Engine</h3>
              
              <p>
                Our <strong>advanced search</strong> functionality allows users to find content based on incredibly specific criteria. Search by multiple actors simultaneously, combine genre filters, set runtime ranges, specify release date windows, filter by country of origin, language, MPAA rating, color vs black-and-white, aspect ratio, and countless other technical and creative parameters. For complex searches like "movies with [actor1] and [actor2]," "films from [country] in [language]," or "[genre] movies under [runtime] minutes," our <strong>movie search database</strong> delivers precise results that match exact user requirements.
              </p>

              <p>
                The discovery engine uses sophisticated algorithms to recommend content based on viewing history, ratings, and stated preferences. Our "If You Like" system suggests similar content, while our "Explore" features help users discover new genres, directors, and actors they might enjoy based on their established interests. Search queries like "movies similar to [title]," "if you like [film] watch [suggestions]," or "film recommendations" are expertly handled by our <strong>movie recommendation engine</strong> that analyzes user preferences and viewing history to suggest content they'll genuinely enjoy.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Educational and Research Resources - Film Study Database</h3>
              
              <p>
                HDMovie2 serves as a valuable resource for film students, researchers, and educators. Our database includes academic citations, production histories, critical analysis, and cultural context for thousands of films. We provide resources for studying film theory, cinematic techniques, industry history, and cultural impact. Search terms like "film research," "cinema studies," "movie analysis," or "film history" lead students and researchers to our comprehensive <strong>educational film database</strong> that supports academic work with reliable information and contextual analysis.
              </p>

              <p>
                Special sections cover film movements (French New Wave, German Expressionism, Italian Neorealism), technological developments (transition to sound, color film, digital cinema), and industry trends. These resources make HDMovie2 an essential tool for anyone studying or teaching film and media. For queries like "film movements," "cinema technology," "industry history," or "movie production," our platform provides detailed information that supports both casual learning and formal academic research through our extensive <strong>film education database</strong>.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Community Features and User Engagement - Movie Community Platform</h3>
              
              <p>
                Our platform fosters an engaged community of film enthusiasts through discussion forums, watch parties, user lists, and social features. Users can create and share custom lists, participate in polls and quizzes, join genre-specific communities, and contribute to our growing database through our moderated submission system. For those searching "movie community," "film forums," "cinephile groups," or "movie discussion," our platform provides vibrant spaces for interaction and shared appreciation of cinema through our active <strong>movie community database</strong>.
              </p>

              <p>
                Regular features include weekly watch recommendations, director spotlights, genre deep-dives, and historical retrospectives. Our community calendar highlights film festivals, special screenings, anniversaries, and industry events of interest to our users. Search terms like "film events," "movie watchlist," "cinephile community," or "film discussion boards" are perfectly served by our platform's social features that connect movie lovers worldwide through our comprehensive <strong>film community database</strong>.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Mobile Experience and Accessibility - Movie Database App</h3>
              
              <p>
                HDMovie2 is fully optimized for mobile devices, with responsive design that works perfectly on smartphones and tablets. Our mobile app (available on iOS and Android) provides all the features of the desktop site with additional mobile-specific functionality including watchlist synchronization, offline access to saved information, and push notifications for availability updates. For searches like "movie database app," "film information mobile," "TV series app," or "cinema guide phone," our platform provides exceptional mobile experiences through our dedicated <strong>mobile movie database</strong> applications.
              </p>

              <p>
                We prioritize accessibility with features including screen reader compatibility, keyboard navigation, adjustable text sizes, high contrast modes, and closed captioning information for all video content. Our commitment to accessibility ensures that all users, regardless of ability, can fully experience and benefit from our database. Search queries like "accessible movie database," "film website accessibility," or "inclusive cinema resources" reflect our commitment to serving all users through our completely accessible <strong>inclusive film database</strong>.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Data Accuracy and Regular Updates - Reliable Movie Information</h3>
              
              <p>
                Maintaining data accuracy is our highest priority. We employ a combination of automated data collection, manual verification, and community contributions to ensure information correctness. Our team of editors regularly reviews and updates entries, correcting errors and adding new information as it becomes available. For users seeking "accurate movie information," "reliable film database," "updated TV series guide," or "correct cinema data," HDMovie2 provides verified information through our meticulously maintained <strong>accurate movie database</strong>.
              </p>

              <p>
                We track industry announcements, press releases, and official sources to provide the most current information about upcoming releases, casting news, production updates, and streaming availability changes. Our update schedule ensures that users always have access to the latest and most accurate information. Search terms like "latest movie updates," "new film information," "updated series guide," or "current cinema database" are perfectly served by our continuously updated platform that provides real-time information through our dynamic <strong>updated film database</strong>.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">International Cinema Coverage - Global Movie Database</h3>
              
              <p>
                HDMovie2 provides comprehensive coverage of international cinema, with detailed information on films from every country and language. Our database includes foreign language films, international co-productions, and regional cinema with proper contextual information about cultural significance and reception. Search queries like "international movies," "foreign films database," "world cinema guide," or "[country] films" are expertly handled by our extensive <strong>global movie database</strong> that celebrates cinematic diversity from around the world.
              </p>

              <p>
                Each international film entry includes language options, subtitle availability, cultural context, and reception in both its country of origin and internationally. We cover major film industries from Hollywood to Bollywood, Nollywood to East Asian cinema, European art films to Latin American cinema. For those searching "Bollywood movies," "Korean films," "French cinema," or "international film festival," our platform provides comprehensive coverage through our diverse <strong>international film database</strong>.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Indie and Alternative Cinema - Independent Film Database</h3>
              
              <p>
                Beyond mainstream Hollywood productions, HDMovie2 provides extensive coverage of independent films, documentary features, short films, and alternative cinema. Our database includes festival favorites, limited releases, and niche productions that might not receive wide attention but represent important artistic achievements. Search terms like "independent movies," "indie film database," "documentary films," or "festival films" lead users to our comprehensive <strong>independent movie database</strong> that champions diverse voices and alternative storytelling.
              </p>

              <p>
                We track film festivals worldwide, providing information about submissions, selections, awards, and distribution deals. Our database helps independent filmmakers reach audiences and helps viewers discover groundbreaking work outside the mainstream. For queries like "Sundance films," "Cannes selections," "independent cinema," or "alternative movies," our platform provides detailed information through our specialized <strong>indie film database</strong> that supports the entire independent film ecosystem.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Technical Specifications Database - Film Technical Information</h3>
              
              <p>
                For cinephiles and industry professionals interested in technical details, HDMovie2 provides comprehensive technical specifications for every film in our database. This includes aspect ratios, film stock or digital format information, camera equipment used, sound formats, visual effects techniques, and post-production details. Search queries like "movie technical specs," "film aspect ratio," "cinema sound format," or "movie production details" are perfectly served by our detailed <strong>technical film database</strong> that satisfies even the most technical inquiries about film production.
              </p>

              <p>
                Our technical database includes information about directors of photography, production designers, editors, sound designers, visual effects supervisors, and other key technical crew members. We track awards in technical categories and provide context about technological innovations in filmmaking. For searches like "Oscar technical awards," "cinematography database," "film editing information," or "movie sound design," our platform provides comprehensive technical information through our specialized <strong>film technical database</strong>.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Box Office and Financial Data - Movie Business Database</h3>
              
              <p>
                HDMovie2 includes comprehensive box office data and financial information for films where available. Our database tracks opening weekend numbers, domestic and international totals, production budgets, marketing costs, and profitability analysis. Search terms like "box office results," "movie earnings," "film budget," or "Hollywood financial data" lead users to our detailed <strong>box office database</strong> that provides insights into the business side of filmmaking.
              </p>

              <p>
                We provide context about box office performance relative to expectations, comparisons with similar films, and analysis of what factors contributed to financial success or failure. For investors, industry professionals, or curious fans searching "movie business," "film economics," "Hollywood finances," or "box office analysis," our platform provides valuable data through our comprehensive <strong>film financial database</strong> that illuminates the economic realities of the film industry.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Awards and Nominations Database - Film Awards Information</h3>
              
              <p>
                Our comprehensive awards database tracks nominations and wins across all major film awards ceremonies including the Oscars, Golden Globes, BAFTAs, Cannes, Sundance, and hundreds of other international awards. Each film and TV series entry includes complete awards information with ceremony details, categories, and historical context. Search queries like "Oscar nominations," "award-winning movies," "film awards database," or "movie prize winners" are perfectly served by our extensive <strong>film awards database</strong>.
              </p>

              <p>
                We provide analysis of awards trends, historical patterns, and notable wins and snubs throughout cinema history. Our database allows users to explore which films have won the most awards, which actors have the most nominations, and how different award ceremonies compare in their selections. For those searching "Academy Awards history," "award statistics," "film prize database," or "movie honors," our platform provides comprehensive information through our detailed <strong>movie awards database</strong>.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Conclusion: Your Ultimate Cinema Resource - Complete Movie Database</h3>
              
              <p>
                HDMovie2 represents more than just a database - it's a comprehensive ecosystem for film discovery, education, and appreciation. Whether you're a casual viewer looking for something to watch tonight, a film student researching cinematic history, an industry professional verifying credits, or a cinephile exploring new horizons, our platform provides the tools, information, and community to enhance your cinematic journey. For every search query related to movies, from "movie database" and "film information" to "TV series guide" and "actor filmography," HDMovie2 delivers comprehensive, accurate, and valuable information through our complete <strong>cinema database ecosystem</strong>.
              </p>

              <p>
                With our commitment to accuracy, comprehensiveness, and user experience, HDMovie2 continues to set the standard for online movie databases. Join our growing community of film enthusiasts and discover why we're recognized as the premier destination for cinematic information and discovery. Whether you're searching for basic movie details or conducting deep cinematic research, HDMovie2 provides everything you need in one comprehensive, reliable, and user-friendly <strong>ultimate movie database</strong> that serves film lovers at every level of interest and expertise.
              </p>
            </div>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center text-orange-300">
              Complete Movie Database Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-700/50 p-6 rounded-xl text-center">
                <FaFilm className="text-4xl text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Movie Details Database</h3>
                <p className="text-gray-400 text-justify">Complete information, cast, reviews, and streaming availability for thousands of films in our comprehensive movie database</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-xl text-center">
                <FaTv className="text-4xl text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">TV Series Database</h3>
                <p className="text-gray-400 text-justify">Complete episode guides, season information, and streaming details for television shows in our TV series database</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-xl text-center">
                <FaUser className="text-4xl text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Actor Profiles Database</h3>
                <p className="text-gray-400 text-justify">Detailed actor information with complete filmography and career highlights in our people database</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-xl text-center">
                <FaCalendar className="text-4xl text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Year Archives Database</h3>
                <p className="text-gray-400 text-justify">Browse movies by release year and explore historical decades of cinema in our yearly film database</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-xl text-center">
                <FaTrophy className="text-4xl text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Top Rankings Database</h3>
                <p className="text-gray-400 text-justify">Highest rated movies and TV series across all categories and genres in our ranking database</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-xl text-center">
                <FaSearch className="text-4xl text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Advanced Search Database</h3>
                <p className="text-gray-400 text-justify">Find content by multiple criteria and sophisticated filters for precise discovery in our search database</p>
              </div>
            </div>
          </section>

          {/* Detailed Sections dengan text-justify */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-orange-300">Complete Movie Information Database</h3>
                <div className="text-gray-400 mb-4 text-justify space-y-3">
                  <p>
                    Access comprehensive details for every movie in our extensive database with complete metadata, production information, and streaming availability across all major platforms. Our movie database provides everything film enthusiasts search for online.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Complete cast and crew information with role details and biographical data in our film database</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>User reviews and professional critic ratings aggregated from multiple sources in our review database</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Streaming platform availability across subscription, rental, and free services in our streaming database</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Trailers, teasers, behind-the-scenes footage, and official video content in our media database</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Similar movie recommendations and algorithmically generated related content in our recommendation database</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Release dates, box office data, production budgets, and financial performance in our financial database</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Technical specifications including runtime, aspect ratio, color process, and sound in our technical database</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Awards, nominations, festival screenings, and critical reception analysis in our awards database</span>
                    </li>
                  </ul>
                </div>
                <Link href="/movie/popular" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  <FaFilm /> Explore Complete Movie Database
                </Link>
              </div>
              <div className="bg-gray-700/30 p-6 rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Comprehensive movie database interface with detailed film information and streaming options"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-700/30 p-6 rounded-xl order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Actor profiles and filmography database with career information and movie credits"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4 text-orange-300">Actor & People Profiles Database</h3>
                <div className="text-gray-400 mb-4 text-justify space-y-3">
                  <p>
                    Discover detailed information about your favorite actors, directors, and industry professionals with comprehensive career data and filmography listings in our people database.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Complete biography, personal details, and career milestones with timeline in our biography database</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Full filmography with role details, release dates, and production information in our filmography database</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>TV series appearances, guest roles, and recurring character information in our television credits database</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Awards, nominations, honors, and industry recognition with ceremony details in our awards database</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Upcoming projects, current productions, and announced future work in our projects database</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>High-quality photos, media galleries, interview transcripts, and public appearances in our media database</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Collaboration networks showing frequent co-stars and creative partnerships in our network database</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Educational background, training, and professional development information in our education database</span>
                    </li>
                  </ul>
                </div>
                <Link href="/people" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  <FaUser /> Browse Complete Actor Database
                </Link>
              </div>
            </div>
          </section>

          {/* Call to Action dengan Optimasi SEO */}
          <section className="text-center py-12 bg-gradient-to-r from-orange-900/30 to-purple-900/30 rounded-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-orange-300">
              Start Your Cinematic Journey Today
			  <span className="block text-xl md:text-4xl font-bold mt-2 text-orange-300">
			    With HDMovie2 Ultimate Movie Database
			  </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto text-center">
              Join our community of film enthusiasts accessing the most comprehensive movie and TV series database available online. With thousands of verified entries, real-time updates, and sophisticated discovery tools, HDMovie2 provides everything you need to explore, research, and enjoy the world of cinema. Whether you're searching for a movie database, film information, TV series guide, actor filmography, streaming availability, or any other cinema-related information, HDMovie2 delivers comprehensive answers through our complete movie database platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/movie/365-days-this-day-2022/stream" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2">
                <FaFilm /> Start Exploring Movie Database
              </Link>
              <Link href="/tv-show/popular" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2">
                <FaTv /> Browse TV Series Database
              </Link>
            </div>
            <p className="mt-8 text-gray-400 max-w-3xl mx-auto text-center">
              <strong>HDMovie2</strong> - Your ultimate resource for movie information, TV series details, actor profiles, streaming guides, and cinematic discovery. Whether you're researching film history, planning your viewing schedule, or simply exploring the vast world of cinema, we provide the comprehensive database, accurate information, and intuitive tools you need to enhance your movie-watching experience and deepen your understanding of film as an art form and cultural phenomenon. As the premier movie database online, we answer all your film-related queries with comprehensive, reliable information that satisfies both casual viewers and serious cinephiles alike through our complete cinema database ecosystem.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}