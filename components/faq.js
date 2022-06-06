/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "What is an AxoGenesis NFT?",
    answer:
      "An NFT is a non-fungible token that thrives on a blockchain, a distributed ledger that records the transactions of assets both inbound and externally. An AxoGenesis NFT represents its unique, non-interchangeable status through a combination of visual traits and accessories to identify its holders in a recognizable and fun way.",
  },
  {
    question: "What is the total supply?",
    answer:
      "AxoGenesis has a total supply of 3333 ERC721 tokens.",
  },
  {
    question: "How can I gain access to mint an AxoGenesis NFT?",
    answer:
      "We will allocate special allow list spots over Twitter, Discord, and other platforms to ensure that our top supporters will receive early access to mint our AxoGenesis collection. Enjoy a secured mint opportunity through actively engaging within our community and supporting our project!",
  },
  {
    question: "What utilities does holding an AxoGenesis NFT offer to its holders?",
    answer:
      "As a holder, you’ll gain access to exclusive communities, discounted swap rates at Axoswap.io, an exclusive airdrop of Axotokens on AxoSwap’s launch day, and a plethora of other special perks revealed down the line.",
  },
 {
   question:"What differentiates AxoGenesis from other NFT projects?",
   answer:"AxoGenesis offers an elusive benefit of airdropping dEx tokens to its holders while simultaneously supporting the development of an optimized decentralized exchange. As an NFT holder, you’ll gain exclusive swapping rates and priority access to AxoSwap, a practical and resourceful piece of utility that most projects lack today."
 }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Faq() {
  return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-2 sm:px-6 lg:px-8">
        <div className="max-w-1xl mx-auto divide-y-2 divide-rose divide-dashed">
          <h2 className="text-center font-PhantomRush text-6xl text-purple">Frequently asked questions</h2>
          <dl className="mt-6 space-y-6 divide-y-2 divide-rose divide-dashed">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start">
                        <span className="font-PhantomRush text-5xl text-purple">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-10 w-10 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="font-PhantomRush text-5xl text-rose">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
  )
}
