import React from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const Modal = ({keys, data})=> {
  const [open, setOpen] = useState(true)
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-cente sm:mx-0 sm:h-10 sm:w-10">
                      <img src={data[keys].flags.png} alt="" className='h-9 w-9' aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        {data[keys].name.official}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{data[keys].altSpellings}</p>
                        <div className='flex flex-row'>
                          <p className="text-sm text-gray-500">{data[keys].cca2} | </p>
                          <p className="mx-1 text-sm text-gray-500">{data[keys].cca3}</p>
                        </div>
                        <p className="text-sm text-gray-500">{data[keys].name.nativeName? data[keys].name.nativeName.ara&&data[keys].name.nativeName.ara.common : data[keys].name.nativeName}</p>
                        <p className="text-sm text-gray-500">{data[keys].name.nativeName? data[keys].name.nativeName.cha&& data[keys].name.nativeName.cha.common : data[keys].name.nativeName}</p>
                        <p className="text-sm text-gray-500">{data[keys].name.nativeName? ((data[keys].name.nativeName.ara&& data[keys].name.nativeName.ara.common)
                            ?(data[keys].name.nativeName.cal&& data[keys].name.nativeName.cal.common): data[keys].name.nativeName
                            ?(data[keys].name.nativeName.eng&& data[keys].name.nativeName.eng.common): data[keys].name.nativeName 
                            ?(data[keys].name.nativeName.srp&& data[keys].name.nativeName.srp.common): data[keys].name.nativeName
                            ?(data[keys].name.nativeName.cat&& data[keys].name.nativeName.cat.common): data[keys].name.nativeName
                            ) : data[keys].name.nativeName 
                          }
                        </p>
                        <p className="text-sm text-gray-500">{data[keys].idd.root}{data[keys].idd.suffixes}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal
