import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import Link from "next/link";
import React, { FC } from "react";

export interface ContactDialogData {
  isOpen: boolean;
  onClose?: VoidFunction;
  textareaDescription?: string;
}

const ContactDialog: FC<ContactDialogData> = ({
  isOpen,
  onClose,
  textareaDescription,
}) => {
  const modalContent = (
    <div className="flex flex-col w-full">
      <div className="flex flex-wrap gap-4 items-center mb-2">
        <h4 className="text-white">Нам можно написать в direct</h4>

        <Button
          as={Link}
          className="text-md font-normal text-white bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"
          href={siteConfig.links.insta}
          variant="flat"
        >
          Instagram
        </Button>
      </div>

      <h4 className="text-white mb-10">
        Или оставить данные и мы с вами свяжемся
      </h4>

      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <Input label="Имя" />
          <Input label="Телефон" />
        </div>

        <Textarea label={textareaDescription ?? "Тема обращения"} minRows={8} />
      </div>
    </div>
  );

  return (
    <Modal
      size={"3xl"}
      isOpen={isOpen}
      onClose={onClose}
      classNames={{
        closeButton: "text-white hover:bg-accentYellow-500",
      }}
      closeButton
      shouldCloseOnInteractOutside={() => true}
      className="bg-[url(/assets/bg-6.svg)] bg-no-repeat bg-cover"
    >
      <ModalContent className="p-5">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <h3 className="text-white font-semibold">Свяжитесь с нами</h3>
            </ModalHeader>
            <ModalBody className="py-8">{modalContent}</ModalBody>
            <ModalFooter className="justify-center">
              <Button
                className="border-accentPurple-500 border-solid border-2 text-accentPurple-500 bg-white rounded-full px-8 py-6 font-semibold text-lg"
                onPress={onClose}
              >
                Отправить
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ContactDialog;
