import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

const fetchImages = async () => {
  // Fetch images
  const raw = await fetch('https://shibe.online/api/shibes?count=10')
  const data: string[] = await raw.json()

  // Process images
  return await Promise.all(data.map(async (src) => await getPlaiceholder(src)))
}

export default async function Gallery() {
  const plaiceholders = await fetchImages()

  return (
    <div className="my-3 px-3">
      <h1 className="text-2xl mb-6">Loading from a gallery</h1>
      <main className="grid grid-cols-3 gap-3">
        {plaiceholders.map((plaiceholder) => (
          <div className="relative h-[300px]" key={plaiceholder.img.src}>
            <Image
              src={plaiceholder.img.src}
              placeholder="blur"
              blurDataURL={plaiceholder.base64}
              alt={plaiceholder.img.src}
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </main>
    </div>
  )
}
