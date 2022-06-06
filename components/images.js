import ExportedImage from 'next-image-export-optimizer'

const contents = [
    {
    id: 0,  

    welcomeTitle: 'Welcome to AxoGenesis Collection',
    welcomeSubtitle: 'AxoGenesis',
    }
  ]
  
  const nfts = [
    {
      id: 1,
      name: 'Axo #219',
      imageSrc: '/images/nfts/nft-1.png',
      imageAlt: 'AxG#219',
    },
    {
      id: 2,
      name: 'Axo #220',
      imageSrc: '/images/nfts/nft-2.png',
      imageAlt: 'AxG#220',
    },
    {
      id: 3,
      name: 'Axo #2947',
      imageSrc: '/images/nfts/nft-3.png',
      imageAlt: 'AxG#2947',
    },
    {
      id: 4,
      name: 'Axo #3208',
      imageSrc: '/images/nfts/nft-4.png',
      imageAlt: 'AxG#3208',
    },
  ]
  
  export default function Images() {
    return (
      <div>
        {contents.map((content) => (
        <div key={content.id} className="max-w-2xl mx-auto py-24 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="max-w-12xl lg:mt-0 sm:mt-[14rem] md:mt-[14rem]">
            <p className="mt-2 font-PhantomRush text-6xl text-rose text-center">{content.welcomeTitle}</p>
            <p className="mt-4 font-PhantomRush text-5xl text-rose text-center">{content.welcomeSubtitle}</p>
          </div>
  
          <div className="mt-11 grid items-start grid-cols-1 gap-y-16 gap-x-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
            {nfts.map((nft) => (
              <div key={nft.id} className="flex flex-col-reverse bg-rose rounded-lg">
                <div className="mt-4 mb-3">
                  <h3 className="font-PhantomRush text-5xl text-black text-center">{nft.name}</h3>
                  </div>
                <div className="aspect-w-1 aspect-h-1 rounded-tl-lg rounded-tr-lg bg-gray-100 overflow-hidden">
                  <ExportedImage
                  src={nft.imageSrc}
                  alt={nft.imageAlt}
                  className="object-center object-cover"
                  layout="fill"/>
                </div>
              </div>
            ))}
          </div>
        </div>
        ))}
      </div>
    )
  }
  
