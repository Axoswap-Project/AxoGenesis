import ExportedImage from 'next-image-export-optimizer'

const people = [
  {
    name: 'Evanyx',
    role: 'AxoSwap Founder',
    imageSrc:'/images/team/team-profile4.png',
  },
  {
    name: 'E.D',
    role: 'Content Writer',
    imageSrc: '/images/team/team-profile2.png',
  },
    {
      name: 'Homasaki',
      role: 'Graphic designer',
      imageSrc: '/images/team/team-profile1.png',
    },
    {
      name: 'Cres',
      role: 'Frontend Developer',
      imageSrc: '/images/team/team-profile3.png',
    },
  // More people...
]
  
  export default function Team() {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="font-PhantomRush text-6xl text-purple">Meet our team</h2>
              <p className="mt-10 text-gray-500 font-PhantomRush text-5xl text-rose text-center ">
              A band of overworked, coffee-fuelled DeFi believer
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto space-y-16 sm:grid sm:gap-4 sm:space-y-0 lg:grid-cols-4"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4 gap-4">
                    <ExportedImage
                    className="mx-auto h-70 w-70 rounded-lg"
                    src={person.imageSrc}
                    alt=""
                    width={500}
                    height={500}
                    />
                    <div className="space-y-3">
                      <div className="font-PhantomRush text-5xl">
                        <h3 className="text-rose">{person.name}</h3>
                        <p className="text-5xl text-purple">{person.role}</p>
                      </div>
                      <ul role="list" className="flex justify-center space-x-5">
                        <li>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
    )
  }
  
