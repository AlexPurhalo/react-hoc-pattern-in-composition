import React, { createRef } from 'react'

const withRefs = (WrappedComponent) => props => (
	<WrappedComponent {...{
		...props, ref: {
			audioRef: createRef(),
			songRef: createRef(),
			progressBarRef: createRef(),
			playBtn: createRef(),
			volumeBar: createRef()
		}}} />
)

export default withRefs