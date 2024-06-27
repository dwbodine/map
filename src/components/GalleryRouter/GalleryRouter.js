import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Gallery from '../Gallery/Gallery';

export default function GalleryRouter () {
    const { path } = useRouteMatch();

    return (
        <>
            <Switch>
                <Route path={`${path}/children`}>
                    <Gallery title="Children" name="children" />
                </Route>
                <Route path={`${path}/family`}>
                    <Gallery title="Family" name="family" />
                </Route>
                <Route path={`${path}/just-for-you`}>
                    <Gallery title="Just For You" name="justforu" />
                </Route>
                <Route path={`${path}/maternity`}>
                    <Gallery title="Maternity" name="maternity" />
                </Route>
                <Route path={`${path}/vintage_flair`}>
                    <Gallery title="Vintage Flair" name="vintage_flair" />
                </Route>
            </Switch>
        </>
    );
}
