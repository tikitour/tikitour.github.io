import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>TikiTour — Adventure Tours</title>
        <meta name="description" content="TikiTour offers curated adventure tours with local guides, small groups and sustainable travel." />
        <meta name="keywords" content="adventure tours, travel company, small group tours, local guides, sustainable travel" />
        <meta name="theme-color" content="#047857" />
        <link rel="canonical" href="https://kh-tikitour.com/" />

        {/* Open Graph */}
        <meta property="og:site_name" content="TikiTour" />
        <meta property="og:title" content="TikiTour — Adventure Tours" />
        <meta property="og:description" content="Small-group trips, local guides, unforgettable experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kh-tikitour.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TikiTour — Adventure Tours" />
        <meta name="twitter:description" content="Small-group trips, local guides, unforgettable experiences." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "TikiTour",
              url: "https://kh-tikitour.com",
              logo: "https://kh-tikitour.com/logo.png",
              description: "Curated adventure tours with local guides, small groups and sustainable travel.",
              sameAs: [
                "https://www.facebook.com/kh-tikitour",
                "https://www.instagram.com/kh-tikitour"
              ],
+              hasOfferCatalog: {
+                "@type": "OfferCatalog",
+                name: "Adventure Tour Packages",
+                itemListElement: [
+                  {
+                    "@type": "OfferCatalog",
+                    name: "Featured Tours",
+                    itemListElement: [
+                      {
+                        "@type": "Offer",
+                        itemOffered: {
+                          "@type": "TouristTrip",
+                          name: "Bali Explorer",
+                          description: "A 7-day small-group exploration of Bali's beaches, culture, and rice terraces.",
+                          itinerary: "Temples, surf towns, rice terraces, waterfalls",
+                          tourOperator: { "@type": "TravelAgency", name: "TikiTour" }
+                        },
+                        price: "1299.00",
+                        priceCurrency: "USD"
+                      },
+                      {
+                        "@type": "Offer",
+                        itemOffered: {
+                          "@type": "TouristTrip",
+                          name: "Patagonian Trek",
+                          description: "A 10-day guided trekking adventure through Patagonia's dramatic landscapes.",
+                          itinerary: "Glaciers, mountain valleys, coastal viewpoints",
+                          tourOperator: { "@type": "TravelAgency", name: "TikiTour" }
+                        },
+                        price: "2499.00",
+                        priceCurrency: "USD"
+                      },
+                      {
+                        "@type": "Offer",
+                        itemOffered: {
+                          "@type": "TouristTrip",
+                          name: "Alpine Escape",
+                          description: "A 5-day alpine getaway in the mountains with guided hikes and cozy stays.",
+                          itinerary: "Mountain huts, alpine lakes, scenic trails",
+                          tourOperator: { "@type": "TravelAgency", name: "TikiTour" }
+                        },
+                        price: "999.00",
+                        priceCurrency: "USD"
+                      }
+                    ]
+                  }
+                ]
+              }
            }),
          }}
        />
      </Head>

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <header className="bg-white shadow">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-emerald-600">TikiTour</div>
            <nav className="space-x-6 hidden md:block">
              <a href="#tours" className="text-slate-700 hover:text-emerald-600">Tours</a>
              <a href="#about" className="text-slate-700 hover:text-emerald-600">About</a>
              <a href="#contact" className="text-slate-700 hover:text-emerald-600">Contact</a>
            </nav>
            <div className="hidden md:block">
              <a href="#book" className="px-4 py-2 bg-emerald-600 text-white rounded-lg">Book Now</a>
            </div>
          </div>
        </header>

        <section className="pt-16">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Explore the world with curated adventure tours</h1>
              <p className="mt-4 text-slate-600">Small-group trips, local guides, unforgettable experiences — handpicked for explorers who want more than a postcard.</p>
              <div className="mt-6 flex gap-4">
                <a href="#tours" className="px-5 py-3 bg-emerald-600 text-white rounded-lg shadow">View Tours</a>
                <a href="#about" className="px-5 py-3 border border-emerald-600 text-emerald-600 rounded-lg">Learn More</a>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm text-slate-600">
                <div>
                  <div className="text-2xl font-semibold text-emerald-600">120+</div>
                  <div>Trips</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-emerald-600">50+</div>
                  <div>Destinations</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-emerald-600">4.9</div>
                  <div>Rating</div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop" alt="Tropical beach" className="w-full h-72 object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="tours" className="mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Featured Tours</h2>
            <p className="mt-2 text-slate-600">Handcrafted itineraries with local experts.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Bali Explorer', days: 7, price: '$1,299', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' },
                { title: 'Patagonian Trek', days: 10, price: '$2,499', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470' },
                { title: 'Alpine Escape', days: 5, price: '$999', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470' }
              ].map((t) => (
                <article key={t.title} className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
                  <img src={`${t.img}?w=800&q=60&auto=format&fit=crop`} alt={t.title} className="w-full h-44 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{t.title}</h3>
                    <div className="mt-2 text-sm text-slate-600">{t.days} days • From {t.price}</div>
                    <div className="mt-4 flex justify-between items-center">
                      <a href="#book" className="text-emerald-600 font-medium">Book</a>
                      <span className="text-sm text-slate-500">Spots left: 6</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mt-20 bg-white py-12">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">Why travel with TikiTour?</h3>
              <p className="mt-4 text-slate-600">Local guides, sustainable itineraries, and small groups mean you get the real story behind every place.</p>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• Expert local guides</li>
                <li>• Small groups (max 12)</li>
                <li>• Carbon-offset trips</li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop" alt="Guide" className="rounded-xl w-full h-64 object-cover shadow" />
            </div>
          </div>
        </section>

        <section id="contact" className="mt-20 py-12">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h4 className="text-2xl font-bold">Ready for your next adventure?</h4>
            <p className="mt-2 text-slate-600">Get in touch and we'll craft a trip just for you.</p>
            <div className="mt-6 flex justify-center">
              <a id="book" href="#" className="px-6 py-3 bg-emerald-600 text-white rounded-lg">Start Booking</a>
            </div>
          </div>
        </section>

        <footer className="mt-20 bg-slate-900 text-slate-200 py-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-emerald-400 font-bold">TikiTour</div>
            <div className="text-sm mt-4 md:mt-0">© {new Date().getFullYear()} TikiTour — All rights reserved</div>
          </div>
        </footer>
      </main>
    </>
  )
}
