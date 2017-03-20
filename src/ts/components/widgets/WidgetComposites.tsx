import * as React from 'react';
import Widget from './WidgetBase';

import {
  AttributionProps, 
  BasemapGalleryProps, 
  BasemapToggleProps,
  ColorSliderProps,
  CompassProps,
  ExpandProps,
  HomeProps,
  LayerListProps,
  LegendProps,
  LocateProps,
  NavigationToggleProps,
  PopupProps,
  PrintProps,
  ScaleBarProps,
  SearchProps,
  SizeSliderProps,
  TrackProps,
  UnivariateColorSizeSliderProps,
  ZoomProps
} from './WidgetInterfaces';

export const Attribution = (props: AttributionProps) => (
  <Widget 
    {...props} 
    scriptUri='esri/widgets/Attribution'
    widgetWatchables={[
      'view',
      'viewModel'
    ]}
    onWidgetPropertyChange = {( props.onWidgetPropertyChange ? props.onWidgetPropertyChange : () => {} )}
  />
);

export const BasemapGallery = (props: BasemapGalleryProps) => (
  <Widget 
    {...props} 
    scriptUri='esri/widgets/BasemapGallery'
    widgetWatchables={[
      'activeBasemap',
      'source',
      'view',
      'viewModel'
    ]}
    onWidgetPropertyChange = {( props.onWidgetPropertyChange ? props.onWidgetPropertyChange : () => {} )}
  />
);

export const BasemapToggle = (props: BasemapToggleProps) => (
  <Widget
    {...props} scriptUri='esri/widgets/BasemapToggle'
    widgetWatchables={[
      'activeBasemap',
      'nextBasemap',
      'titleVisible',
      'view',
      'viewModel'
    ]}
    onWidgetPropertyChange = {( props.onWidgetPropertyChange ? props.onWidgetPropertyChange : () => {} )}
  />
);

export const ColorSlider = (props: ColorSliderProps) => (
  <Widget 
    {...props}
    scriptUri='esri/widgets/ColorSlider'
    widgetWatchables={[
      'handlesVisible',
      'histogram',
      'histogramVisible',
      'histogramWidth',
      'labelsVisible',
      'maxValue',
      'minValue',
      'numHandles',
      'statistics',
      'statisticsVisible',
      'syncedHandles',
      'ticksVisible',
      'values',
      'visualVariable'
    ]}
    onWidgetPropertyChange = {( props.onWidgetPropertyChange ? props.onWidgetPropertyChange : () => {} )}
  />
);

export const Compass = (props: CompassProps) => (
  <Widget 
    {...props}
    scriptUri='esri/widgets/Compass'
    widgetWatchables={[
      'view',
      'viewModel'
    ]}
    onWidgetPropertyChange = {( props.onWidgetPropertyChange ? props.onWidgetPropertyChange : () => {} )}
  />
);

export const Expand = (props: ExpandProps) => (
  <Widget 
    {...props} 
    scriptUri='esri/widgets/Expand'
    widgetWatchables={[
      'collapseTooltip',
      'content',
      'expanded',
      'expandIconClass',
      'expandTooltip',
      'iconNumber',
      'view',
      'viewModel'
    ]}
    onWidgetPropertyChange = {( props.onWidgetPropertyChange ? props.onWidgetPropertyChange : () => {} )}
  />
);

export const Home = (props: HomeProps) => (
  <Widget
    {...props}
    scriptUri='esri/widgets/Home'
    widgetWatchables={[
      'view',
      'viewModel',
      'viewpoint'
    ]}
    onWidgetPropertyChange = {( props.onWidgetPropertyChange ? props.onWidgetPropertyChange : () => {} )}
  />
);

export const LayerList = (props: LayerListProps) => (
  <Widget
    {...props}
    scriptUri='esri/widgets/LayerList'
    widgetWatchables={[
      'createActionsFunction',
      'operationalItems',
      'view',
      'viewModel'
    ]}
    onWidgetPropertyChange = {( props.onWidgetPropertyChange ? props.onWidgetPropertyChange : () => {} )}
  />
);

export const Legend = (props: LegendProps) => (
  <Widget
    {...props}
    scriptUri='esri/widgets/Legend'
    widgetWatchables={[
      'layerInfos',
      'view'
    ]}
    onWidgetPropertyChange = {( props.onWidgetPropertyChange ? props.onWidgetPropertyChange : () => {} )}
  />
);

export const Locate = (props: LocateProps) => (
  <Widget
    {...props}
    scriptUri='esri/widgets/Locate'
    widgetWatchables={[
      'geoLocationEnabled',
      'goToLocationEnables',
      'graphic',
      'view',
      'viewModel'
    ]}
    onWidgetPropertyChange = {( props.onWidgetPropertyChange ? props.onWidgetPropertyChange : () => {} )}
  />
);

export const NavigationToggle = (props: NavigationToggleProps) => (
  <Widget
    {...props}
    scriptUri='esri/widgets/NavigationToggle'
    widgetWatchables={[
      'layout',
      'view',
      'viewModel'
    ]}
    onWidgetPropertyChange = {( props.onWidgetPropertyChange ? props.onWidgetPropertyChange : () => {} )}
  />
);

export const Popup = (props: PopupProps) => (
  <Widget
    {...props}
    scriptUri='esri/widgets/Popup'
    widgetWatchables={[
      'actions',
      'content',
      'currentDockPosition',
      'dockEnabled',
      'dockOptions',
      'featureCount',
      'features',
      'location',
      'promises',
      'rendered',
      'selectedFeature',
      'selectedFeatureIndex',
      'title',
      'view',
      'viewModel'
    ]}
    onWidgetPropertyChange = {( props.onWidgetPropertyChange ? props.onWidgetPropertyChange : () => {} )}
  />
);

export const Print = (props: PrintProps) => (
  <Widget
    {...props}
    scriptUri='esri/widgets/Print'
    widgetWatchables={[
      'printServiceUrl',
      'view',
      'viewModel'
    ]}
    onWidgetPropertyChange = {( props.onWidgetPropertyChange ? props.onWidgetPropertyChange : () => {} )}
  />
);

export const ScaleBar = (props: ScaleBarProps) => (
  <Widget
    {...props}
    scriptUri='esri/widgets/ScaleBar'
    widgetWatchables={[
      'style',
      'unit',
      'view',
      'viewModel'
    ]}
    onWidgetPropertyChange = {( props.onWidgetPropertyChange ? props.onWidgetPropertyChange : () => {} )}
  />
);

export const Search = (props: SearchProps) => (
  <Widget
    {...props}
    scriptUri='esri/widgets/Search'
    widgetWatchables={[
      'activeSource',
      'activeSourceIndex',
      'allPlaceholder',
      'autoSelect',
      'defaultSource',
      'maxResults',
      'maxSuggestions',
      'minSuggestCharacters',
      'popupEnabled',
      'popupOpenOnSelect',
      'popupTemplate',
      'resultGraphic',
      'resultGraphicEnabled',
      'results',
      'searchAllEnabled',
      'searching',
      'searchTerm',
      'selectedResult',
      'sources',
      'suggestions',
      'suggestionsEnabled',
      'view',
      'viewModel'
    ]}
    onWidgetPropertyChange = {( props.onWidgetPropertyChange ? props.onWidgetPropertyChange : () => {} )}
  />
);

export const SizeSlider = (props: SizeSliderProps) => (
  <Widget
    {...props}
    scriptUri='esri/widgets/SizeSlider'
    widgetWatchables={[
      'handlesVisible',
      'histogram',
      'histogramVisible',
      'histogramWidth',
      'labelsVisible',
      'maxSize',
      'maxValue',
      'minSize',
      'minValue',
      'statistics',
      'statisticsVisible',
      'ticksVisible',
      'values',
      'visualVariable'
    ]}
    onWidgetPropertyChange = {( props.onWidgetPropertyChange ? props.onWidgetPropertyChange : () => {} )}
  />
);

export const Track = (props: TrackProps) => (
  <Widget
    {...props}
    scriptUri='esri/widgets/Track'
    widgetWatchables={[
      'geolocationOptions',
      'goToLocationEnabled',
      'graphic',
      'tracking',
      'view',
      'viewModel'
    ]}
    onWidgetPropertyChange = {( props.onWidgetPropertyChange ? props.onWidgetPropertyChange : () => {} )}
  />
);

export const UnivariateColorSizeSlider = (props: UnivariateColorSizeSliderProps) => (
  <Widget
    {...props}
    scriptUri='esri/widgets/UnivariateColorSizeSlider'
    widgetWatchables={[
      'handlesVisible',
      'histogram',
      'histogramVisible',
      'histogramWidth',
      'labelsVisible',
      'maxSize',
      'maxValue',
      'minSize',
      'minValue',
      'statistics',
      'statisticsVisible',
      'ticksVisible',
      'values',
      'visualVariables'
    ]}
    onWidgetPropertyChange = {( props.onWidgetPropertyChange ? props.onWidgetPropertyChange : () => {} )}
  />
);

export const Zoom = (props: ZoomProps) => (
  <Widget
    {...props}
    scriptUri='esri/widgets/Zoom'
    widgetWatchables={[
      'view',
      'viewModel'
    ]}
    onWidgetPropertyChange = {( props.onWidgetPropertyChange ? props.onWidgetPropertyChange : () => {} )}
  />
);