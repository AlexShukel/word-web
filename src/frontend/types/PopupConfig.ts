import { ModalProps } from "@chakra-ui/react";

import { PopupButton } from "./PopupButton";

export type PopupConfig = {
    title: string;
    buttons?: PopupButton[];
    BodyWrapper?: React.ComponentType<React.PropsWithChildren<{}>>;
} & Omit<ModalProps, "onClose" | "isOpen">;
