import * as React from 'react';

import '../css/index.scss';
import { Map, Scene } from './components/ArcComposites';
import { Search, BasemapGallery } from './components/widgets/WidgetComposites';
import { Polygon, Polyline, Point } from './components/geometry/GeometryComposites';
import { SimpleFillSymbol, SimpleLineSymbol, SimpleMarkerSymbol } from './components/symbols/SymbolComposites';
import Graphic from './components/graphics/Graphic';
import { FeatureLayer } from './components/layers/LayerComposites'

interface ComponentState {
    myViewProperties: __esri.SceneViewProperties;
    myMapProperties: __esri.MapProperties;
    basemapGalleryProperties: __esri.BasemapGalleryProperties;
}

export default class HomeComponent extends React.Component<null, ComponentState>{
    constructor(props) {
        super(props);
        this.state = {
            myViewProperties: {
                zoom: 0
            },
            myMapProperties: {
                basemap: 'satellite'
            },
            basemapGalleryProperties: {}
        }
    }

    render() {
        return (
            <div>
                <Scene 
                    style={{ width: '80vw', height: '80vh' }}
                    mapProperties={this.state.myMapProperties}
                >
                    <BasemapGallery position="top-right" />
                </Scene>
            </div>
        )
    }
}

