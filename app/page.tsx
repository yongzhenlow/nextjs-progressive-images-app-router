import Image from 'next/image'
import imageOne from 'public/image-one.jpeg'
import { getPlaiceholder } from 'plaiceholder'

const fetchImages = async () => {
  const imagePaths = [
    '/image-two.jpeg',
    'https://source.unsplash.com/AF2tOJnGik0',
  ]

  return await Promise.all(
    imagePaths.map(async (uri) => await getPlaiceholder(uri))
  )
}

export default async function Home() {
  const [imageTwo, imageThree] = await fetchImages()
  return (
    <div className="my-3 px-3">
      <h1 className="text-2xl mb-6">Progressive Image Loading</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div>
          <h2 className="text-lg mb-2">Statically Imported</h2>
          <div className="relative h-[300px]">
            <Image
              src={imageOne}
              placeholder="blur"
              alt="Statically imported image file"
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg mb-2">Internal image URL</h2>
          <div className="relative h-[300px]">
            <Image
              src={imageTwo.img.src}
              placeholder="blur"
              blurDataURL={imageTwo.base64}
              alt="Internal image url"
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg mb-2">External image URL</h2>
          <div className="relative h-[300px]">
            <Image
              src={imageThree.img.src}
              placeholder="blur"
              blurDataURL={imageThree.base64}
              alt="External image url"
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
