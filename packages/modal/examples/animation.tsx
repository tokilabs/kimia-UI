import { FC } from 'react';
import Button from '@/packages/button';
import useDisclosure from '@/website/hooks/useDisclosure';
import { Modal, ModalBody, ModalHeader, ModalFooter } from '../index';

const ModalAnimation: FC = () => {
  const { toggle, isOpen } = useDisclosure();
  return (
    <div className="mb-8">
      <h2 className="mb-3 mt-12 text-gray-600 text-lg font-bold md:text-2xl">
        With animation
      </h2>
      <Button onClick={toggle} color="primary">
        Click to open me
      </Button>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        animate={true}
        closeOnClickOutside={true}
      >
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggle} color="danger" className="mr-1">
            Close
          </Button>
          <Button onClick={toggle} color="primary">
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalAnimation;
