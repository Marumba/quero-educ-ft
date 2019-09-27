import React, { createContext, useContext, useEffect, useState } from 'react';

const MediaQueryContext = createContext({ size: undefined });

function MediaQueryProvider({ children }) {
	const clientSide = typeof window !== 'undefined' && window.document;
	let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || undefined;
	const handleMedia = width => {
		if (width >= 992) return 'desktop';
		return 'mobile';
	};
	const [size, setSize] = useState(handleMedia(windowWidth));

	const onResize = () => {
		windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || undefined;
		return setSize(handleMedia(windowWidth));
	};

	useEffect(() => {
		if (!clientSide) return false;
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);

	return (
		<MediaQueryContext.Provider value={size}>
			{children}
		</MediaQueryContext.Provider>
	);
}
export const useMediaQuery = () => useContext(MediaQueryContext);
export const isMobile = () => useMediaQuery() === 'mobile';
export default MediaQueryProvider;
