import { CancelIcon } from '@fluentui/react-icons-mdl2';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import Button from './Button';
import Icon from './Icon';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  show: boolean;
  title: string;
}

const Modal = ({ onClose, children, show, title }: ModalProps) => {
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-md bg-white text-left align-middle shadow-lg transition-all">
                <div className="relative w-full border-b-2 p-4">
                  <Dialog.Title
                    className="text-lg text-extra-dark-gray"
                    as="h3"
                  >
                    {title}
                  </Dialog.Title>
                  <Button
                    className="absolute inset-y-0 right-0 z-50 p-4"
                    onClick={onClose}
                    as="button"
                  >
                    <Icon
                      className="text-lg leading-none text-medium-gray hover:text-extra-dark-gray focus-visible:text-extra-dark-gray"
                      screenReaderLabel="Zatvoriť modálne okno"
                      icon={CancelIcon}
                    />
                  </Button>
                </div>
                <div className="w-full p-5">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
