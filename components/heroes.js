import Ethereum from "../public/logos/ethereum"
import Supply from "../public/logos/supply"
import ExportedImage from 'next-image-export-optimizer'

const contents = [
  {
  id: 1,  
  title: 'Axo',
  pTitle: 'Genesis',
  mainText: 'In a lake full of opportunities, a lovable Axolotl smiles at you. Keen, happy, and intelligent, it hints at you to welcome him home. AxoGenesis Axolotls has a perfect aquatic friend for every trader. Mint yours today to access an exclusive Discord community, generous perks and benefits, and a lovable art piece that celebrates your early support of our platform. Holders of AxoGenesis NFTs will also receive airdropped Axotoken on the day of the Axoswap decentralized exchange (dEx).',
  howMany: 'How many SpaceBoo do you want?',
  }
]



  
  export default function hero () {
    return (
    <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      {contents.map((content) => (
      <div key={content.id} className="mx-auto lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <h1 className="mt-1 font-justanotherhand sm:text-9xl text-8xl text-rose text-center sm:text-left">
                {content.title} <span className="text-fuschia">{content.pTitle}</span>
              </h1>
              <p className="mt-3 font-justanotherhand text-4xl text-fuschia text-center sm:text-5xl sm:text-left">{content.mainText}</p>
              <p className="mt-3 pt-3 sm:mt-4 font-justanotherhand text-4xl text-center sm:text-left lg:text-left text-rose">{content.howMany}</p>
                  <div className="pt-3 sm:flex">
                  <button className="text-center mr-3 md:mb-0 sm:mb-3 mb-3 lg:mb-0 font-justanotherhand text-5xl inline-flex w-full py-3 px-4 rounded-md shadow bg-fuschia text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900 items-center"><Supply className="h-8 mr-3"/>total supply: 3333</button> 
                  <button className="text-center font-justanotherhand text-5xl inline-flex w-full py-3 px-4 rounded-md shadow bg-fuschia text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900 items-center"><Ethereum className="h-10 mr-3"/>mint price: 50 MATIC</button> 
                  </div>
              </div>
            </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <ExportedImage
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/images/main-image/preview.gif"
                priority
                width={1000}
                height={700}
                alt=""
                />
            </div>
          </div>
        </div>
        </div>
    ))}
    </div>
  )}
