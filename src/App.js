import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSongs, withAudioPlayer, withTimer, withRefs, withVolume } from './containers'
import { SearchBar, SongsList, PlayerNav, ProgressBar, VolumeBar } from './components'
import { compose } from './utils'

const Wrapper = styled.section`
  color: #333;
  background: #e25f5fa1;
  display: grid;
  grid-template-areas:
          "header"
          "content"
          "footer";
  grid-template-rows: 60px 10fr 60px;
  grid-template-columns: 1fr;
  grid-gap: 2px;
  height: 100vh;
  margin: 0;
`

const Footer = styled.footer`
	background: white;
	grid-area: footer;
	display: flex;
	align-items: center;
	justify-content: center;
`

const App = (props, ref) => (
	<Wrapper>
		<SearchBar {...props}	/>
		<SongsList {...{...props, ref}} />
		<Footer>
			<PlayerNav {...{...props, ref}} />
			<ProgressBar {...{...props, ref}} />
			<VolumeBar {...{...props, ref}} />
		</Footer>
	</Wrapper>
)

export default compose(withSongs, withRefs, withAudioPlayer, withTimer, withVolume, forwardRef)(App)
