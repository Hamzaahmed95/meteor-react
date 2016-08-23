
import { App } from './App.jsx';

Meteor.startup( () => {
    render(
        <Router history={ browserHistory }>
            <Route path="/" component={ App } />
        </Router>,
        document.getElementById( 'render-target' )
    );
});