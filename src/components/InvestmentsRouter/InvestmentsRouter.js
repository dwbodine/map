import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Sessions from '../Sessions/Sessions';
import FineArt from '../FineArt/FineArt';
import SelectingPhotos from '../SelectingPhotos/SelectingPhotos';

export default function InvestmentsRouter () {
    const { path } = useRouteMatch();

    return (
        <>
            <Switch>
                <Route path={`${path}/selecting-photos`}>
                    <SelectingPhotos />
                </Route>
                <Route path={`${path}/fine-art`}>
                    <FineArt />
                </Route>
                <Route path={`${path}/`}>
                    <Sessions />
                </Route>
            </Switch>
        </>
    );
}
