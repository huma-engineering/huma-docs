import * as React from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
import { ModalContainer, ModalInner, ModalOverlay, ModalClose, ModalTitle, ModelContent } from "./styled.elements";

interface componentInterface {
  show: boolean;
  onClose?: () => void;
  title: string;
}

const Modal: FunctionComponent<componentInterface> = (props) => {

  const { show, onClose, children, title } = props
  const [delayedShow, setDelayedShow] = useState(show)

  useEffect(() => {
    setDelayedShow(show)
  }, [show])

  const onModalClose = () => {
    if (onClose) onClose()
    setDelayedShow(false)
  }

  return <ModalContainer className={`${delayedShow ? "active" : ""}`}>
    <ModalOverlay className={`${delayedShow ? "active" : ""}`} onClick={onModalClose} />
    <ModalInner>
      <ModalClose onClick={onModalClose} />
      <ModalTitle>{title}</ModalTitle>
      <ModelContent>{children}</ModelContent>
    </ModalInner>
  </ModalContainer>
}


export default Modal