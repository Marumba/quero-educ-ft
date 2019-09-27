/* eslint-disable jsx-a11y/control-has-associated-label */
/** @jsx jsx */
import { useRef, useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { compose } from 'redux';
import { jsx } from '@emotion/core';
import { uid } from 'react-uid';

import { modalTypes } from '@ducks/modal';
import Button from '@layout/button/button';

import * as Style from './withModal.style';

const withModal = ModalPropsProxyComponent => (props) => {
	const overlay = useRef();
	const dispatch = useDispatch();
	const [scrollTop, setScrollTop] = useState(0);
	const [modal, setModal] = useState({ show: false, rendered: false });

	const toggleModal = () => {
		const action = props.modal.show ? { type: modalTypes.hide } : { type: modalTypes.show };
		dispatch(action);
	};

	const handleBodyState = (fixed, height) => {
		if (fixed) {
			document.body.style.overflow = 'hidden';
			document.body.style.position = 'fixed';
			document.body.style.top = -height + 'px';
		} else {
			document.body.style.overflow = 'visible';
			document.body.style.position = 'static';
			document.body.style.top = 'unset';
			window.scroll({ top: scrollTop, behavior: 'smooth' });
			document.documentElement.scrollTop = scrollTop;
			document.body.scrollTop = scrollTop;
		}
	};

	const handleDisplay = () => setModal(state => ({ ...state, rendered: false }));

	const reduceModal = () => {
		if (!props.modal.show) {
			setModal(state => ({ ...state, show: false }));
			handleBodyState();
			if (overlay.current) return overlay.current.addEventListener('transitionend', handleDisplay);
			return null;
		}

		setModal({ show: false, rendered: true });
		setScrollTop(document.documentElement.scrollTop || document.body.scrollTop);
		handleBodyState(true, document.documentElement.scrollTop || document.body.scrollTop);
		return setTimeout(() => {
			setModal({ show: true, rendered: true });
		}, 50);
	};

	useEffect(() => {
		reduceModal();
	}, [props.modal.show]);

	if (modal.rendered) {
		return (
			<div css={Style.ModalHolder}>
				<div ref={overlay} onClick={toggleModal} css={[Style.ModalOverlay(modal.show)]} />
				<div css={Style.ModalOutsideBox(modal.show)}>
					<button type="button" css={Style.ModalInsideBoxCloseBtn} onClick={toggleModal} />
					<div css={Style.ModalInsideBox}>
						<ModalPropsProxyComponent {...props} closeModal={toggleModal} />
					</div>
				</div>
			</div>
		);
	}
	return null;
}

export default compose(
	connect(state => ({ modal: state.modal })),
	withModal
);
