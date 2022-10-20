import { useState } from 'react';

export const useToggle = () => {
	const [isOpen, setIsOpen] = useState(false);

	const onToggle = () => {
		return setIsOpen(!isOpen);
	};

	const onClose = () => setIsOpen(false);

	return [isOpen, onToggle, onClose];
};
