import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import Hello from './entry'


const AppShell = () => (<div>
  <Hello />
</div>)

const HotReloadableApp = hot(module)(AppShell)

ReactDOM.render(<HotReloadableApp/>, document.getElementById('app'))
